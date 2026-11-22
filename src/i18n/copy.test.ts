import { describe, expect, it } from "vitest";
import { getCopy } from "@/i18n/copy";
import type { Locale } from "@/i18n/locale";
import { localizeMessage } from "@/i18n/messages";

const banned = ["lorem", "testimonial", "instant quote", "iso 9001", "cutting-edge", "world-class", "seamless", "certified"];

function published(locale: Locale): string {
  const copy = getCopy(locale);
  return JSON.stringify({
    description: copy.description,
    home: copy.home,
    faq: copy.faq,
    industries: copy.industries,
    about: copy.about,
    sheet: copy.sheet,
    enclosures: copy.enclosures,
    cnc: copy.cnc,
    privacy: copy.privacy,
    terms: copy.terms,
    form: copy.form,
  }).toLowerCase();
}

describe("locale copy", () => {
  it("keeps Turkish, German, and English the same length", () => {
    const en = getCopy("en");
    const tr = getCopy("tr");
    const de = getCopy("de");
    for (const copy of [tr, de]) {
      expect(copy.faq.items).toHaveLength(en.faq.items.length);
      expect(copy.industries.items).toHaveLength(en.industries.items.length);
      expect(copy.steps).toHaveLength(en.steps.length);
      expect(copy.claims).toHaveLength(en.claims.length);
    }
    expect(tr.home.h1).toContain("Türkiye");
    expect(de.home.h1).toContain("Türkiye");
    expect(de.home.h1).toContain("2 Werktagen");
    expect(published("tr")).not.toContain("turkey");
    expect(published("de")).not.toContain("turkey");
    expect(tr.form.annualUnknown).toBe("Henüz bilmiyorum");
    expect(de.form.annualUnknown).toBe("Weiß ich noch nicht");
    expect(tr.form.countries.Germany).toBe("Almanya");
    expect(de.form.countries.Germany).toBe("Deutschland");
    expect(tr.form.materials.DC01).toContain("sac");
    expect(de.form.materials.DC01).toContain("Stahlblech");
  });

  it("does not publish banned claims", () => {
    const text = `${published("en")}\n${published("de")}\n${published("tr")}`.replaceAll("certified-aerospace", "");
    for (const word of banned) {
      expect(text).not.toContain(word);
    }
  });

  it("quotes in 2 business days and leaves capability values blank", () => {
    const en = getCopy("en");
    const tr = getCopy("tr");
    const de = getCopy("de");
    const outside = "If a part is outside our partner workshops' capability, we tell you within the quote window.";
    const scope = "Complex multi-axis, certified-aerospace, or very tight-tolerance parts are quoted case by case or declined.";
    expect(en.home.h1).toContain("2 business days");
    expect(tr.home.h1).toContain("2 iş günü");
    expect(JSON.stringify(en)).not.toContain("48 hours");
    expect(JSON.stringify(tr)).not.toContain("48 saat");
    expect(JSON.stringify(de)).not.toContain("48 hours");
    expect(de.cnc.scope[0]).toContain("Partnerwerkstätten");
    expect(de.faq.items.some((item) => item.answer.includes("Partnerwerkstätten"))).toBe(true);
    expect(en.cnc.scope[0]).toBe(outside);
    expect(en.cnc.scope[1]).toContain(scope);
    expect(en.faq.items.some((item) => item.answer.includes(outside) && item.answer.includes(scope))).toBe(true);
    expect(tr.cnc.scope[0]).toContain("partner atölyelerimizin");
    expect(tr.faq.items.some((item) => item.answer.includes("partner atölyelerimizin"))).toBe(true);
    for (const table of [
      en.tables.sheetCapabilities,
      en.tables.enclosureCapabilities,
      tr.tables.sheetCapabilities,
      tr.tables.enclosureCapabilities,
      de.tables.sheetCapabilities,
      de.tables.enclosureCapabilities,
    ]) {
      expect(table.rows).toHaveLength(3);
      expect(table.rows.map((row) => row[1])).toEqual(["", "", ""]);
    }
  });

  it("translates validation text at display time", () => {
    expect(localizeMessage("tr", "Enter your name.")).toBe("Adınızı yazın.");
    expect(localizeMessage("en", "Enter your name.")).toBe("Enter your name.");
    expect(localizeMessage("tr", "bracket.dxf is already attached.")).toBe("bracket.dxf zaten eklendi.");
    expect(localizeMessage("de", "Enter your name.")).toBe("Geben Sie Ihren Namen ein.");
    expect(localizeMessage("de", "bracket.dxf is already attached.")).toBe("bracket.dxf ist bereits angehängt.");
  });
});
