import type { StoredEnquiry } from "@/lib/rfq/emails";
import type { RfqPayload } from "@/lib/rfq/schema";
import { safeFileName, type ExpectedUpload } from "@/lib/rfq/files";

export type EnquiryRow = StoredEnquiry & {
  status: "pending_upload" | "received";
  files: ExpectedUpload[];
  emailSentAt: string | null;
};

export function buildStoredFiles(id: string, data: RfqPayload): ExpectedUpload[] {
  return data.files.map((file, index) => ({
    path: `${id}/${index}-${safeFileName(file.name)}`,
    name: file.name.split(/[/\\]/).pop() || file.name,
    size: file.size,
  }));
}

export function toRfqInsert(id: string, data: RfqPayload, ipHash: string | null) {
  return {
    id,
    status: "pending_upload" as const,
    name: data.name,
    company: data.company,
    email: data.email,
    country: data.country,
    material: data.material,
    thickness: data.thickness,
    quantity: data.quantity,
    estimated_annual_quantity: data.estimatedAnnualQuantity,
    required_delivery_date: data.requiredDeliveryDate,
    delivery_flexible: data.deliveryFlexible,
    notes: data.notes,
    files: buildStoredFiles(id, data),
    page: data.page,
    utm_source: data.utmSource,
    utm_medium: data.utmMedium,
    utm_campaign: data.utmCampaign,
    utm_term: data.utmTerm,
    utm_content: data.utmContent,
    referrer: data.referrer,
    ip_hash: ipHash,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function parseExpectedFiles(value: unknown): ExpectedUpload[] | null {
  if (!Array.isArray(value)) return null;
  const files: ExpectedUpload[] = [];
  for (const item of value) {
    if (!isRecord(item)) return null;
    const { path, name, size } = item;
    if (typeof path !== "string" || typeof name !== "string" || typeof size !== "number") return null;
    const folder = path.split("/")[0];
    if (!folder || !path.startsWith(`${folder}/`) || path.includes("..") || path.includes("\\")) return null;
    files.push({ path, name, size });
  }
  return files;
}

function requiredString(record: Record<string, unknown>, key: string): string | null {
  const value = record[key];
  return typeof value === "string" && value.trim() ? value : null;
}

function optionalString(value: unknown): string | null {
  if (value === null || value === undefined) return null;
  return typeof value === "string" ? value : null;
}

export function parseEnquiryRow(value: unknown): EnquiryRow | null {
  if (!isRecord(value)) return null;
  if (value.status !== "pending_upload" && value.status !== "received") return null;
  const files = parseExpectedFiles(value.files);
  if (!files) return null;

  const id = requiredString(value, "id");
  const name = requiredString(value, "name");
  const company = requiredString(value, "company");
  const email = requiredString(value, "email");
  const material = requiredString(value, "material");
  const quantity = requiredString(value, "quantity");
  const estimatedAnnualQuantity = requiredString(value, "estimated_annual_quantity");
  if (!id || !name || !company || !email || !material || !quantity || !estimatedAnnualQuantity) {
    return null;
  }

  const country = optionalString(value.country);
  const thickness = optionalString(value.thickness);
  const requiredDeliveryDate = optionalString(value.required_delivery_date);
  if (value.country != null && country === null) return null;
  if (value.thickness != null && thickness === null) return null;
  if (value.required_delivery_date != null && requiredDeliveryDate === null) return null;

  const notes = optionalString(value.notes);
  if (value.notes !== null && value.notes !== undefined && notes === null) return null;

  return {
    status: value.status,
    id,
    name,
    company,
    email,
    country,
    material,
    thickness,
    quantity,
    estimatedAnnualQuantity,
    requiredDeliveryDate: requiredDeliveryDate ? requiredDeliveryDate.slice(0, 10) : null,
    deliveryFlexible: value.delivery_flexible === true,
    notes,
    page: optionalString(value.page),
    utmSource: optionalString(value.utm_source),
    utmMedium: optionalString(value.utm_medium),
    utmCampaign: optionalString(value.utm_campaign),
    utmTerm: optionalString(value.utm_term),
    utmContent: optionalString(value.utm_content),
    referrer: optionalString(value.referrer),
    files,
    emailSentAt: optionalString(value.email_sent_at),
  };
}
