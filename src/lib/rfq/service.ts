import "server-only";

import { contactEmail } from "@/lib/site";
import { adminClient } from "@/lib/supabase/admin";
import {
  BUCKET,
  RATE_LIMIT_WINDOW_MS,
  SIGNED_DOWNLOAD_SECONDS,
  verifyUploadedFiles,
  type ListedUpload,
} from "@/lib/rfq/files";
import { clientIp, hashIp } from "@/lib/rfq/ip";
import { isAllowedRequestOrigin, requestHost } from "@/lib/rfq/origin";
import { isOverRateLimit } from "@/lib/rfq/rate-limit";
import { parseEnquiryRow, toRfqInsert } from "@/lib/rfq/record";
import { parseRfqPayload } from "@/lib/rfq/schema";
import { deliverRfqEmails } from "@/lib/rfq/send";
import type { SupabaseClient } from "@supabase/supabase-js";

const UPLOAD_MAX_AGE_MS = 60 * 60 * 1000;
const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function json(body: unknown, status = 200): Response {
  return Response.json(body, {
    status,
    headers: { "cache-control": "no-store" },
  });
}

function unavailable(): string {
  if (contactEmail) {
    return `The quote inbox is not configured yet. Email ${contactEmail} with your drawing.`;
  }
  return "The quote inbox is not configured yet. Try again later.";
}

function rejectCrossSite(request: Request): Response | null {
  const origin = request.headers.get("origin");
  const host = requestHost(request.headers);
  if (!isAllowedRequestOrigin(origin, host)) {
    return json({ ok: false, error: "The form could not be sent from this page." }, 403);
  }
  const length = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(length) && length > 100_000) {
    return json({ ok: false, error: "The form is too large to send." }, 413);
  }
  return null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readSize(file: { metadata: Record<string, unknown> | null }): number | null {
  const raw = file.metadata?.size;
  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  if (typeof raw === "string" && /^\d+$/.test(raw)) return Number(raw);
  return null;
}

async function countRecent(
  supabase: SupabaseClient,
  column: "email" | "ip_hash",
  value: string,
  since: string,
): Promise<{ ok: true; count: number } | { ok: false; message: string }> {
  const { count, error } = await supabase
    .from("rfqs")
    .select("id", { count: "exact", head: true })
    .eq(column, value)
    .gte("created_at", since);

  if (error) return { ok: false, message: error.message };
  return { ok: true, count: count ?? 0 };
}

export async function prepareRfq(request: Request): Promise<Response> {
  const blocked = rejectCrossSite(request);
  if (blocked) return blocked;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Send the form as JSON." }, 400);
  }

  const parsed = parseRfqPayload(body);
  if (!parsed.ok) {
    return json({ ok: false, error: parsed.error, fields: parsed.fields ?? {} }, parsed.status);
  }

  const supabase = adminClient();
  if (!supabase) return json({ ok: false, error: unavailable() }, 503);

  const ip = clientIp(request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip"));
  const salt = process.env.RATE_LIMIT_SALT?.trim() ?? "";
  const ipHash = ip && salt ? hashIp(ip, salt) : null;
  const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();

  const byEmail = await countRecent(supabase, "email", parsed.data.email, since);
  if (!byEmail.ok) {
    console.error("quote database rate limit", byEmail.message);
    return json(
      { ok: false, error: "The quote database could not check the request limit. Try again shortly." },
      503,
    );
  }
  if (isOverRateLimit(byEmail.count)) {
    return json(
      { ok: false, error: "Too many requests for this email. Wait an hour and try again, or email us." },
      429,
    );
  }

  if (ipHash) {
    const byIp = await countRecent(supabase, "ip_hash", ipHash, since);
    if (!byIp.ok) {
      console.error("quote database rate limit", byIp.message);
      return json(
        { ok: false, error: "The quote database could not check the request limit. Try again shortly." },
        503,
      );
    }
    if (isOverRateLimit(byIp.count)) {
      return json(
        { ok: false, error: "Too many requests from this network. Wait an hour and try again, or email us." },
        429,
      );
    }
  }

  const id = crypto.randomUUID();
  const row = toRfqInsert(id, parsed.data, ipHash);
  const inserted = await supabase.from("rfqs").insert(row).select("id").single();
  if (inserted.error) {
    console.error("quote database insert", inserted.error.message);
    return json({ ok: false, error: "The quote database did not save the request." }, 500);
  }

  const uploads: Array<{ path: string; token: string }> = [];
  for (const file of row.files) {
    const signed = await supabase.storage.from(BUCKET).createSignedUploadUrl(file.path, { upsert: true });
    if (signed.error || !signed.data?.token || !signed.data.path) {
      console.error("file store upload link", signed.error?.message);
      return json({ ok: false, error: "The file store did not issue an upload link. Try again." }, 502);
    }
    uploads.push({ path: signed.data.path, token: signed.data.token });
  }

  return json({ ok: true, id, uploads });
}

async function listUploads(supabase: SupabaseClient, id: string): Promise<ListedUpload[] | null> {
  const listed = await supabase.storage.from(BUCKET).list(id, { limit: 100 });
  if (listed.error || !listed.data) {
    console.error("file store list", listed.error?.message);
    return null;
  }
  return listed.data.map((file) => ({ name: file.name, size: readSize(file) }));
}

async function loadRow(supabase: SupabaseClient, id: string) {
  const selected = await supabase
    .from("rfqs")
    .select(
      "id, status, created_at, name, company, email, country, material, thickness, quantity, estimated_annual_quantity, required_delivery_date, delivery_flexible, notes, files, page, utm_source, utm_medium, utm_campaign, utm_term, utm_content, referrer, email_sent_at",
    )
    .eq("id", id)
    .maybeSingle();

  if (selected.error) {
    console.error("quote database read", selected.error.message);
    return { ok: false as const, status: 500, error: "The quote database could not be read." };
  }
  if (!selected.data) {
    return { ok: false as const, status: 404, error: "This quote request was not found." };
  }
  const row = parseEnquiryRow(selected.data);
  if (!row || !isRecord(selected.data)) {
    return { ok: false as const, status: 500, error: "The quote database returned an unreadable row." };
  }
  const createdAt = typeof selected.data.created_at === "string" ? Date.parse(selected.data.created_at) : NaN;
  return { ok: true as const, row, createdAt };
}

export async function completeRfq(request: Request): Promise<Response> {
  const blocked = rejectCrossSite(request);
  if (blocked) return blocked;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Send the form as JSON." }, 400);
  }
  if (!isRecord(body) || typeof body.id !== "string" || !UUID.test(body.id)) {
    return json({ ok: false, error: "The quote reference is not valid." }, 400);
  }

  const supabase = adminClient();
  if (!supabase) return json({ ok: false, error: unavailable() }, 503);

  const loaded = await loadRow(supabase, body.id);
  if (!loaded.ok) return json({ ok: false, error: loaded.error }, loaded.status);
  let { row } = loaded;

  if (row.status === "pending_upload") {
    if (!Number.isFinite(loaded.createdAt) || Date.now() - loaded.createdAt > UPLOAD_MAX_AGE_MS) {
      return json({ ok: false, error: "This upload expired. Submit the form again.", reset: true }, 400);
    }

    if (row.files.length > 0) {
      let check = verifyUploadedFiles(row.files, []);
      for (let attempt = 0; attempt < 3; attempt += 1) {
        const listed = await listUploads(supabase, row.id);
        if (!listed) {
          return json({ ok: false, error: "The file store could not be read. Try again." }, 502);
        }
        check = verifyUploadedFiles(row.files, listed);
        if (check.ok || check.reason !== "missing") break;
        await new Promise((resolve) => setTimeout(resolve, 400));
      }

      if (!check.ok) {
        if (check.reason === "size") {
          await supabase.storage.from(BUCKET).remove(row.files.map((file) => file.path));
          return json({ ok: false, error: check.message, reset: true }, 400);
        }
        return json({ ok: false, error: check.message }, 400);
      }
    }

    const updated = await supabase
      .from("rfqs")
      .update({ status: "received" })
      .eq("id", row.id)
      .eq("status", "pending_upload")
      .select("id");

    if (updated.error) {
      console.error("quote database update", updated.error.message);
      return json({ ok: false, error: "The quote database did not confirm the request." }, 500);
    }

    const refreshed = await loadRow(supabase, row.id);
    if (!refreshed.ok) return json({ ok: false, error: refreshed.error }, refreshed.status);
    row = refreshed.row;
    if (row.status !== "received") {
      return json({ ok: false, error: "The quote database did not confirm the request." }, 500);
    }
  }

  if (row.emailSentAt) return json({ ok: true, id: row.id });

  const files = [];
  for (const file of row.files) {
    const signed = await supabase.storage.from(BUCKET).createSignedUrl(file.path, SIGNED_DOWNLOAD_SECONDS);
    files.push({ name: file.name, url: signed.data?.signedUrl ?? null });
  }

  const emailError = await deliverRfqEmails(row, files);
  const stamp = await supabase
    .from("rfqs")
    .update(
      emailError
        ? { email_error: emailError }
        : { email_sent_at: new Date().toISOString(), email_error: null },
    )
    .eq("id", row.id);

  if (stamp.error) console.error("quote database email stamp", stamp.error.message);
  if (emailError) console.error("quote email", emailError);

  return json({ ok: true, id: row.id });
}
