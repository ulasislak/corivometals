import "server-only";

import { adminClient } from "@/lib/supabase/admin";
import { BUCKET } from "@/lib/rfq/files";
import { readInboxRows, type InboxRow } from "@/lib/rfq/inbox";

const INBOX_LIMIT = 50;
const DOWNLOAD_SECONDS = 60 * 30;

const COLUMNS = [
  "id",
  "status",
  "created_at",
  "name",
  "company",
  "email",
  "country",
  "material",
  "thickness",
  "quantity",
  "estimated_annual_quantity",
  "required_delivery_date",
  "delivery_flexible",
  "notes",
  "files",
  "page",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "referrer",
  "email_sent_at",
].join(", ");

export type InboxFile = { name: string; size: number; url: string | null };
export type InboxItem = Omit<InboxRow, "files"> & { files: InboxFile[] };

export async function loadInbox(): Promise<{ ok: true; items: InboxItem[] } | { ok: false; message: string }> {
  const supabase = adminClient();
  if (!supabase) {
    return { ok: false, message: "Supabase ayarı eksik. Teklif kutusu açılamadı." };
  }

  const selected = await supabase
    .from("rfqs")
    .select(COLUMNS)
    .order("created_at", { ascending: false })
    .limit(INBOX_LIMIT);

  if (selected.error || !selected.data) {
    console.error("quote inbox read", selected.error?.message);
    return { ok: false, message: "Supabase teklif tablosu okunamadı." };
  }

  const rows = readInboxRows(selected.data);
  const items: InboxItem[] = [];
  for (const row of rows) {
    const files: InboxFile[] = [];
    for (const file of row.files) {
      const signed = await supabase.storage.from(BUCKET).createSignedUrl(file.path, DOWNLOAD_SECONDS);
      files.push({
        name: file.name,
        size: file.size,
        url: signed.error || !signed.data?.signedUrl ? null : signed.data.signedUrl,
      });
      if (signed.error) console.error("quote inbox file link", signed.error.message);
    }
    items.push({ ...row, files });
  }

  return { ok: true, items };
}
