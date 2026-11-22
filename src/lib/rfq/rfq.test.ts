import { describe, expect, it } from "vitest";
import { loadAttribution, type KeyValueStore } from "@/lib/rfq/attribution";
import { isAllowedRequestOrigin } from "@/lib/rfq/origin";
import { isOverRateLimit } from "@/lib/rfq/rate-limit";
import { hashIp } from "@/lib/rfq/ip";
import { parseRfqPayload } from "@/lib/rfq/schema";
import { toRfqInsert } from "@/lib/rfq/record";
import { buildNotifyEmail, buildReceiptEmail, enquiryFromPayload } from "@/lib/rfq/emails";

function memoryStore(seed?: Record<string, string>): KeyValueStore & { dump: Record<string, string> } {
  const dump: Record<string, string> = { ...seed };
  return {
    dump,
    getItem(key) {
      return dump[key] ?? null;
    },
    setItem(key, value) {
      dump[key] = value;
    },
  };
}

function futureDate(days: number): string {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function payload(overrides: Record<string, unknown> = {}) {
  return {
    name: "Ada Keller",
    company: "Keller Maschinenbau",
    email: "ada@keller.example",
    country: "Germany",
    material: "DC01",
    thickness: "2.0",
    quantity: "50",
    estimatedAnnualQuantity: "400",
    requiredDeliveryDate: futureDate(30),
    notes: "Deburr the outer profile.",
    files: [{ name: "bracket.dxf", size: 2048 }],
    utmSource: "linkedin",
    utmMedium: "social",
    utmCampaign: "q4",
    utmTerm: "",
    utmContent: "",
    referrer: "https://www.linkedin.com/feed",
    page: "/",
    corivoHp: "",
    startedAt: 1_000,
    ...overrides,
  };
}

describe("RFQ payload", () => {
  it("accepts a complete enquiry and keeps the annual quantity", () => {
    const result = parseRfqPayload(payload(), 5_000);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.estimatedAnnualQuantity).toBe("400");
    expect(result.data.email).toBe("ada@keller.example");
    expect(result.data.utmSource).toBe("linkedin");
    const row = toRfqInsert("6d9b0b2e-3e3e-4f4a-9c1a-0c2d4e6f8a10", result.data, "a".repeat(64));
    expect(row.estimated_annual_quantity).toBe("400");
    expect(row).not.toHaveProperty("corivoHp");
    expect(row.files[0]?.path).toContain("bracket.dxf");
  });

  it("rejects a honeypot, a rushed submit, and a bad drawing", () => {
    expect(parseRfqPayload(payload({ corivoHp: "https://spam.example" }), 5_000).ok).toBe(false);
    expect(parseRfqPayload(payload(), 1_200).ok).toBe(false);
    const badFile = parseRfqPayload(payload({ files: [{ name: "notes.txt", size: 100 }] }), 5_000);
    expect(badFile.ok).toBe(false);
    if (badFile.ok) return;
    expect(badFile.fields?.files).toMatch(/DXF/);
  });

  it("requires the commercial fields", () => {
    const result = parseRfqPayload(
      payload({ estimatedAnnualQuantity: "", country: "", material: "titanium" }),
      5_000,
    );
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.fields?.estimatedAnnualQuantity).toBeTruthy();
    expect(result.fields?.country).toBeUndefined();
    expect(result.fields?.material).toBeTruthy();
  });

  it("accepts a description without a drawing, an unknown annual quantity, and a flexible date", () => {
    const result = parseRfqPayload(
      payload({
        files: [],
        notes: "Folded cover, about 300 by 200 mm.",
        estimatedAnnualQuantity: "unknown",
        requiredDeliveryDate: "not-a-date",
        deliveryFlexible: true,
        thickness: "",
        country: "",
      }),
      5_000,
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.data.files).toEqual([]);
    expect(result.data.estimatedAnnualQuantity).toBe("unknown");
    expect(result.data.deliveryFlexible).toBe(true);
    expect(result.data.requiredDeliveryDate).toBeNull();
    expect(result.data.thickness).toBeNull();
    expect(result.data.country).toBeNull();
    const row = toRfqInsert("6d9b0b2e-3e3e-4f4a-9c1a-0c2d4e6f8a10", result.data, null);
    expect(row.delivery_flexible).toBe(true);
    expect(row.estimated_annual_quantity).toBe("unknown");
    expect(row.files).toEqual([]);
  });

  it("reports a missing drawing alongside other empty fields", () => {
    const result = parseRfqPayload(payload({ name: "", files: [], notes: "" }), 5_000);
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.fields?.name).toBeTruthy();
    expect(result.fields?.files).toBeTruthy();
    expect(result.fields?.notes).toBeTruthy();
  });

  it("rejects a request with neither a drawing nor a description", () => {
    const result = parseRfqPayload(payload({ files: [], notes: "soon" }), 5_000);
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.fields?.files).toBeTruthy();
    expect(result.fields?.notes).toBeTruthy();
  });
});

describe("attribution, origin, and rate limit", () => {
  it("stores the landing UTM and ignores a later internal referrer", () => {
    const store = memoryStore();
    const first = loadAttribution({
      search: "?utm_source=google&utm_medium=cpc",
      referrer: "https://www.google.com/search?q=sheet+metal",
      origin: "https://getcorivo.com",
      storage: store,
    });
    expect(first.utm.utmSource).toBe("google");
    expect(first.referrer).toMatch(/google/);

    const second = loadAttribution({
      search: "",
      referrer: "https://getcorivo.com/sheet-metal",
      origin: "https://getcorivo.com",
      storage: store,
    });
    expect(second.utm.utmSource).toBe("google");
    expect(second.referrer).toMatch(/google/);
  });

  it("blocks a cross-site browser post and limits repeat sends", () => {
    expect(isAllowedRequestOrigin("https://evil.example", "getcorivo.com")).toBe(false);
    expect(isAllowedRequestOrigin("https://getcorivo.com", "getcorivo.com")).toBe(true);
    expect(isAllowedRequestOrigin(null, "getcorivo.com")).toBe(true);
    expect(isOverRateLimit(5)).toBe(true);
    expect(isOverRateLimit(4)).toBe(false);
    expect(hashIp("203.0.113.5", "salt")).toHaveLength(64);
  });
});

describe("emails", () => {
  it("includes the annual quantity and does not promise an instant price", () => {
    const parsed = parseRfqPayload(payload(), 5_000);
    if (!parsed.ok) throw new Error("expected a valid payload");
    const enquiry = enquiryFromPayload("ref-1", parsed.data);
    const notify = buildNotifyEmail(enquiry, [{ name: "bracket.dxf", url: "https://example.com/file" }]);
    const receipt = buildReceiptEmail(enquiry);
    expect(notify).toContain("Estimated annual quantity: 400");
    expect(notify).toContain("Delivery date:");
    expect(receipt).toContain("Reference: ref-1");
    expect(receipt.toLowerCase()).not.toContain("instant");
    expect(receipt).toContain("2 business days");
    expect(receipt).toContain("manufacturability note");

    const flexible = parseRfqPayload(
      payload({
        files: [],
        notes: "Folded cover, about 300 by 200 mm.",
        estimatedAnnualQuantity: "unknown",
        deliveryFlexible: true,
        requiredDeliveryDate: "",
        thickness: "",
      }),
      5_000,
    );
    if (!flexible.ok) throw new Error("expected a valid payload");
    const flexibleEnquiry = enquiryFromPayload("ref-2", flexible.data);
    const flexibleNotify = buildNotifyEmail(flexibleEnquiry, []);
    expect(flexibleNotify).toContain("Estimated annual quantity: Not known yet");
    expect(flexibleNotify).toContain("Delivery date: Flexible");
    expect(flexibleNotify).toContain("Thickness (mm): -");
  });
});
