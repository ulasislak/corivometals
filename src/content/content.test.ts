import { describe, expect, it } from "vitest";
import { faqItems } from "@/content/faq";
import { siteDescription } from "@/lib/site";
import { claims, quoteContents, reasons, steps } from "@/content/process";
import { industries } from "@/content/industries";
import { cncScopeTable, finishTable, materialTable, toleranceTable } from "@/content/specs";

const published = [
  ...faqItems.flatMap((item) => [item.question, item.answer]),
  ...claims.flatMap((item) => [item.label, item.value]),
  ...reasons.flatMap((item) => [item.title, item.text]),
  ...steps.flatMap((item) => [item.title, item.text]),
  ...quoteContents,
  ...industries.flatMap((item) => [item.title, item.lede, item.send, ...item.parts]),
  ...[materialTable, toleranceTable, finishTable, cncScopeTable].flatMap((table) => [
    table.caption,
    ...table.columns,
    ...table.rows.flat(),
  ]),
].join("\n");

describe("published copy", () => {
  it("covers the quote questions buyers ask", () => {
    const text = published.toLowerCase();
    for (const topic of [
      "dxf",
      "dwg",
      "step",
      "pdf",
      "minimum",
      "2 business days",
      "exw",
      "fca",
      "dap",
      "advance",
      "nda",
      "dimensional report",
      "material certificate",
      "remake",
      "estimated annual quantity",
    ]) {
      expect(text).toContain(topic);
    }
  });

  it("uses one audience description and explains cabinet buyers in plain language", () => {
    expect(siteDescription).toContain("manufacturers in Europe");
    expect(siteDescription).toContain("Türkiye");
    expect(siteDescription.toLowerCase()).not.toContain("panel builder");
    const cabinets = industries.find((item) => item.id === "panel-builders");
    expect(cabinets?.title).toBe("Cabinets and housings");
    expect(cabinets?.lede.toLowerCase()).toContain("metal enclosure");
  });

  it("does not invent proof, prices, or certifications", () => {
    const banned = [
      /lorem ipsum/i,
      /testimonial/i,
      /trusted by/i,
      /instant quote/i,
      /iso\s*9001/i,
      /cutting-edge/i,
      /world-class/i,
      /\bseamless\b/i,
      /\bcertified\b/i,
    ];
    const scanned = published.replace(/certified-aerospace/gi, "");
    for (const pattern of banned) {
      expect(scanned).not.toMatch(pattern);
    }
  });
});
