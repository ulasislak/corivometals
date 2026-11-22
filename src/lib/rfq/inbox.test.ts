import { describe, expect, it } from "vitest";
import { inboxKeyAccepts, readInboxRows } from "@/lib/rfq/inbox";

const row = {
  id: "6f1c3c2e-3d4b-4e5f-8a90-1b2c3d4e5f60",
  status: "received",
  created_at: "2026-11-22T11:00:00.000Z",
  name: "Ada",
  company: "North Mill",
  email: "ada@northmill.example",
  country: "Germany",
  material: "DC01",
  thickness: "2.0",
  quantity: "10",
  estimated_annual_quantity: "unknown",
  required_delivery_date: null,
  delivery_flexible: true,
  notes: "Bracket",
  files: [],
  page: "/en",
  utm_source: "newsletter",
  utm_medium: "email",
  utm_campaign: "november",
  utm_term: null,
  utm_content: null,
  referrer: null,
  email_sent_at: null,
};

describe("quote inbox access", () => {
  it("accepts only the configured key", () => {
    expect(inboxKeyAccepts("abc123", "abc123")).toBe(true);
    expect(inboxKeyAccepts("abc123", "abc124")).toBe(false);
    expect(inboxKeyAccepts("abc123", "")).toBe(false);
    expect(inboxKeyAccepts("short", "much-longer-key")).toBe(false);
  });

  it("reads saved quote rows and skips a broken one", () => {
    const rows = readInboxRows([row, { status: "received" }]);
    expect(rows).toHaveLength(1);
    expect(rows[0]?.company).toBe("North Mill");
    expect(rows[0]?.createdAt).toBe("2026-11-22T11:00:00.000Z");
    expect(rows[0]?.utmSource).toBe("newsletter");
  });
});
