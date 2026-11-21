import { z } from "zod";
import { COUNTRIES, MATERIALS, type MaterialValue } from "@/content/options";
import { cleanPage, cleanReferrer, cleanUtm } from "@/lib/rfq/attribution";
import {
  fileRuleError,
  MAX_FILE_BYTES,
  MAX_FILES,
  MAX_FORM_AGE_MS,
  MIN_SUBMIT_MS,
  type FileMeta,
} from "@/lib/rfq/files";

const materialTuple = tupleOf(MATERIALS.map((item) => item.value));

function tupleOf<T extends string>(values: readonly T[]): [T, ...T[]] {
  const [first, ...rest] = values;
  if (!first) throw new Error("Expected a non-empty list.");
  return [first, ...rest];
}

export const ANNUAL_UNKNOWN = "unknown";
const MIN_PART_NOTE = 12;

export type RfqPayload = {
  name: string;
  company: string;
  email: string;
  country: (typeof COUNTRIES)[number] | null;
  material: MaterialValue;
  thickness: string | null;
  quantity: string;
  estimatedAnnualQuantity: string;
  requiredDeliveryDate: string | null;
  deliveryFlexible: boolean;
  notes: string | null;
  files: FileMeta[];
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  referrer: string | null;
  page: string | null;
};

export type ParseResult =
  | { ok: true; data: RfqPayload }
  | { ok: false; status: number; error: string; fields?: Record<string, string> };

const fileSchema = z.object({
  name: z.string().trim().min(1).max(200),
  size: z.number().int().positive().max(MAX_FILE_BYTES, "Each file must be 20 MB or smaller."),
});

const rfqSchema = z.object({
  name: z
    .string({ required_error: "Enter your name.", invalid_type_error: "Enter your name." })
    .trim()
    .min(1, "Enter your name.")
    .max(120, "Name is too long."),
  company: z
    .string({ required_error: "Enter your company.", invalid_type_error: "Enter your company." })
    .trim()
    .min(1, "Enter your company.")
    .max(160, "Company is too long."),
  email: z
    .string({ required_error: "Enter a valid email.", invalid_type_error: "Enter a valid email." })
    .trim()
    .email("Enter a valid email.")
    .max(160, "Email is too long."),
  country: z
    .string({ invalid_type_error: "Select a country." })
    .trim()
    .max(80, "Select a country.")
    .optional()
    .default("")
    .refine(
      (value) => value === "" || (COUNTRIES as readonly string[]).includes(value),
      "Select a country.",
    ),
  material: z.enum(materialTuple, { errorMap: () => ({ message: "Select a material." }) }),
  thickness: z
    .string({ invalid_type_error: "Enter a thickness in millimetres." })
    .trim()
    .max(20)
    .optional()
    .default("")
    .refine(
      (value) => value === "" || isThickness(value),
      "Enter a thickness in millimetres, for example 2.0.",
    ),
  quantity: z
    .string({
      required_error: "Enter the quantity as a whole number of pieces.",
      invalid_type_error: "Enter the quantity as a whole number of pieces.",
    })
    .trim()
    .regex(/^\d{1,7}$/, "Enter the quantity as a whole number of pieces.")
    .refine((value) => Number(value) > 0, "Enter a quantity greater than zero."),
  estimatedAnnualQuantity: z
    .string({
      required_error: "Enter the estimated annual quantity, or choose I don't know yet.",
      invalid_type_error: "Enter the estimated annual quantity, or choose I don't know yet.",
    })
    .trim()
    .refine(
      (value) => value === ANNUAL_UNKNOWN || (/^\d{1,8}$/.test(value) && Number(value) > 0),
      "Enter the estimated annual quantity, or choose I don't know yet.",
    ),
  requiredDeliveryDate: z
    .string({ invalid_type_error: "Enter a delivery date, or choose Flexible." })
    .trim()
    .max(10)
    .optional()
    .default(""),
  deliveryFlexible: z.boolean().optional().default(false),
  notes: z
    .string({ invalid_type_error: "Notes must be text." })
    .trim()
    .max(4000, "Notes are limited to 4000 characters.")
    .optional()
    .default(""),
  files: z.array(fileSchema).max(MAX_FILES).optional().default([]),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  utmContent: z.string().optional(),
  referrer: z.string().optional(),
  page: z.string().optional(),
  corivoHp: z.string().optional(),
  startedAt: z.number(),
});

export function isThickness(value: string): boolean {
  const match = /^(\d{1,3})([.,](\d{1,2}))?(\s?mm)?$/i.exec(value.trim());
  if (!match?.[1]) return false;
  const amount = Number(`${match[1]}.${match[3] ?? "0"}`);
  return amount > 0 && amount < 1000;
}

export function isPlausibleDeliveryDate(iso: string, now = new Date()): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return false;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return false;
  }
  const min = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1);
  const max = Date.UTC(now.getUTCFullYear() + 3, now.getUTCMonth(), now.getUTCDate());
  return date.getTime() >= min && date.getTime() <= max;
}

export function assessTiming(
  startedAt: number,
  now: number,
): "ok" | "fast" | "stale" {
  if (!Number.isFinite(startedAt)) return "stale";
  const elapsed = now - startedAt;
  if (elapsed < -5 * 60 * 1000 || elapsed > MAX_FORM_AGE_MS) return "stale";
  if (elapsed >= 0 && elapsed < MIN_SUBMIT_MS) return "fast";
  return "ok";
}

function addPartFieldErrors(input: unknown, fields: Record<string, string>) {
  if (!input || typeof input !== "object") return;
  const record = input as Record<string, unknown>;
  const files = Array.isArray(record.files) ? record.files : [];
  const notes = typeof record.notes === "string" ? record.notes.trim() : "";
  if (files.length === 0 && notes.length < MIN_PART_NOTE) {
    fields.files ??= "Add a DXF, DWG, STEP, or PDF, or describe the part in the notes.";
    fields.notes ??= "Describe the part here, or attach a drawing above.";
  }
}

function honeypotTripped(input: unknown): boolean {
  if (!input || typeof input !== "object" || !("corivoHp" in input)) return false;
  const value = (input as { corivoHp?: unknown }).corivoHp;
  return typeof value === "string" && value.trim().length > 0;
}

export function parseRfqPayload(input: unknown, now = Date.now()): ParseResult {
  if (honeypotTripped(input)) {
    return {
      ok: false,
      status: 400,
      error: "The form could not be sent. Email us if you reached this by mistake.",
    };
  }

  const parsed = rfqSchema.safeParse(input);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && key !== "startedAt" && !fields[key]) {
        fields[key] = issue.message;
      }
    }
    addPartFieldErrors(input, fields);
    return {
      ok: false,
      status: 400,
      error:
        Object.keys(fields).length > 0
          ? "Check the highlighted fields."
          : "Refresh the page and submit the form again.",
      fields,
    };
  }

  const timing = assessTiming(parsed.data.startedAt, now);
  if (timing === "stale") {
    return { ok: false, status: 400, error: "Refresh the page and submit the form again." };
  }
  if (timing === "fast") {
    return {
      ok: false,
      status: 400,
      error: "The form could not be sent. Email us if you reached this by mistake.",
    };
  }

  const data = parsed.data;
  if (data.files.length === 0 && data.notes.trim().length < MIN_PART_NOTE) {
    return {
      ok: false,
      status: 400,
      error: "Add a drawing, or describe the part in the notes.",
      fields: {
        files: "Add a DXF, DWG, STEP, or PDF, or describe the part in the notes.",
        notes: "Describe the part here, or attach a drawing above.",
      },
    };
  }

  if (data.files.length > 0) {
    const fileError = fileRuleError(data.files);
    if (fileError) {
      return { ok: false, status: 400, error: fileError, fields: { files: fileError } };
    }
  }

  if (!data.deliveryFlexible && data.requiredDeliveryDate && !isPlausibleDeliveryDate(data.requiredDeliveryDate)) {
    return {
      ok: false,
      status: 400,
      error: "Check the highlighted fields.",
      fields: { requiredDeliveryDate: "Enter a delivery date, or choose Flexible." },
    };
  }

  const thickness = data.thickness.replace(",", ".").replace(/\s?mm$/i, "").trim();
  const country = (COUNTRIES as readonly string[]).includes(data.country)
    ? (data.country as (typeof COUNTRIES)[number])
    : null;

  return {
    ok: true,
    data: {
      name: oneLine(data.name),
      company: oneLine(data.company),
      email: data.email.toLowerCase(),
      country,
      material: data.material,
      thickness: thickness || null,
      quantity: String(Number(data.quantity)),
      estimatedAnnualQuantity:
        data.estimatedAnnualQuantity === ANNUAL_UNKNOWN
          ? ANNUAL_UNKNOWN
          : String(Number(data.estimatedAnnualQuantity)),
      requiredDeliveryDate: data.deliveryFlexible || !data.requiredDeliveryDate ? null : data.requiredDeliveryDate,
      deliveryFlexible: data.deliveryFlexible,
      notes: data.notes ? data.notes : null,
      files: data.files,
      utmSource: cleanUtm(data.utmSource),
      utmMedium: cleanUtm(data.utmMedium),
      utmCampaign: cleanUtm(data.utmCampaign),
      utmTerm: cleanUtm(data.utmTerm),
      utmContent: cleanUtm(data.utmContent),
      referrer: cleanReferrer(data.referrer),
      page: cleanPage(data.page),
    },
  };
}

export function oneLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}
