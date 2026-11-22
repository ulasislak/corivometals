import { timingSafeEqual } from "node:crypto";
import { parseEnquiryRow, type EnquiryRow } from "@/lib/rfq/record";

export type InboxRow = EnquiryRow & { createdAt: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function inboxKeyAccepts(given: string, expected: string | undefined): boolean {
  const configured = expected?.trim() ?? "";
  if (!configured || !given || given.length > 128 || configured.length > 128) return false;
  const provided = Buffer.from(given);
  const stored = Buffer.from(configured);
  if (provided.length !== stored.length) return false;
  return timingSafeEqual(provided, stored);
}

export function readInboxRows(values: unknown[]): InboxRow[] {
  const rows: InboxRow[] = [];
  for (const value of values) {
    if (!isRecord(value) || typeof value.created_at !== "string") continue;
    const parsed = parseEnquiryRow(value);
    if (!parsed) continue;
    rows.push({ ...parsed, createdAt: value.created_at });
  }
  return rows;
}
