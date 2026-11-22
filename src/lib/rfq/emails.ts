import { materialLabel } from "@/content/options";
import type { RfqPayload } from "@/lib/rfq/schema";

export type EmailFile = {
  name: string;
  url: string | null;
};

export type StoredEnquiry = {
  id: string;
  name: string;
  company: string;
  email: string;
  country: string | null;
  material: string;
  thickness: string | null;
  quantity: string;
  estimatedAnnualQuantity: string;
  requiredDeliveryDate: string | null;
  deliveryFlexible: boolean;
  notes: string | null;
  page: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  referrer: string | null;
};

export function enquiryFromPayload(id: string, data: RfqPayload): StoredEnquiry {
  return {
    id,
    name: data.name,
    company: data.company,
    email: data.email,
    country: data.country,
    material: data.material,
    thickness: data.thickness,
    quantity: data.quantity,
    estimatedAnnualQuantity: data.estimatedAnnualQuantity,
    requiredDeliveryDate: data.requiredDeliveryDate,
    deliveryFlexible: data.deliveryFlexible,
    notes: data.notes,
    page: data.page,
    utmSource: data.utmSource,
    utmMedium: data.utmMedium,
    utmCampaign: data.utmCampaign,
    utmTerm: data.utmTerm,
    utmContent: data.utmContent,
    referrer: data.referrer,
  };
}

function shown(value: string | null): string {
  return value && value.trim() ? value : "-";
}

function annualText(value: string): string {
  return value === "unknown" ? "Not known yet" : value;
}

function deliveryText(enquiry: StoredEnquiry): string {
  if (enquiry.deliveryFlexible) return "Flexible";
  return shown(enquiry.requiredDeliveryDate);
}

export function notifySubject(enquiry: StoredEnquiry): string {
  const subject = `RFQ ${enquiry.company} — ${materialLabel(enquiry.material)} x ${enquiry.quantity}`;
  return subject.replace(/[\r\n]+/g, " ").slice(0, 140);
}

export function buildNotifyEmail(enquiry: StoredEnquiry, files: EmailFile[]): string {
  const fileLines =
    files.length === 0
      ? "None"
      : files
          .map((file) => `- ${file.name}${file.url ? `\n  ${file.url}` : ""}`)
          .join("\n");

  return [
    `New RFQ ${enquiry.id}`,
    "",
    `Name: ${enquiry.name}`,
    `Company: ${enquiry.company}`,
    `Email: ${enquiry.email}`,
    `Country: ${shown(enquiry.country)}`,
    `Material: ${materialLabel(enquiry.material)}`,
    `Thickness (mm): ${shown(enquiry.thickness)}`,
    `Quantity: ${enquiry.quantity}`,
    `Estimated annual quantity: ${annualText(enquiry.estimatedAnnualQuantity)}`,
    `Delivery date: ${deliveryText(enquiry)}`,
    `Page: ${enquiry.page ?? "-"}`,
    "",
    "Notes:",
    enquiry.notes ?? "-",
    "",
    "Files:",
    fileLines,
    "",
    `UTM source: ${enquiry.utmSource ?? "-"}`,
    `UTM medium: ${enquiry.utmMedium ?? "-"}`,
    `UTM campaign: ${enquiry.utmCampaign ?? "-"}`,
    `UTM term: ${enquiry.utmTerm ?? "-"}`,
    `UTM content: ${enquiry.utmContent ?? "-"}`,
    `Referrer: ${enquiry.referrer ?? "-"}`,
    "",
    "Customer-supplied files. Open them in a viewer you trust.",
    "Download links, when present, expire after 7 days. The originals stay in the private rfq-drawings bucket.",
  ].join("\n");
}

export function receiptSubject(): string {
  return "Corivo quote request received";
}

export function buildReceiptEmail(enquiry: StoredEnquiry): string {
  return [
    "We received your quote request.",
    "",
    `Reference: ${enquiry.id}`,
    `Company: ${enquiry.company}`,
    `Material: ${materialLabel(enquiry.material)}`,
    `Thickness (mm): ${shown(enquiry.thickness)}`,
    `Quantity: ${enquiry.quantity}`,
    `Estimated annual quantity: ${annualText(enquiry.estimatedAnnualQuantity)}`,
    `Delivery date: ${deliveryText(enquiry)}`,
    "",
    "You will hear from us within 2 business days with a price, a lead time, and a manufacturability note.",
    "If we cannot read a drawing, we will reply to this email and ask for another file. The 2 business days start when the drawing can be read.",
    "",
    "Corivo",
  ].join("\n");
}
