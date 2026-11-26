import type { Locale } from "@/i18n/locale";
import type { SeoKind, SeoLocaleBundle, SeoPage } from "@/content/seo/types";

import { sheetMetalFabricationEn } from "@/content/seo/pages/sheet-metal-fabrication.en";
import { sheetMetalFabricationTr } from "@/content/seo/pages/sheet-metal-fabrication.tr";
import { laserCuttingEn } from "@/content/seo/pages/laser-cutting.en";
import { laserCuttingTr } from "@/content/seo/pages/laser-cutting.tr";
import { sheetMetalBendingEn } from "@/content/seo/pages/sheet-metal-bending.en";
import { sheetMetalBendingTr } from "@/content/seo/pages/sheet-metal-bending.tr";
import { cncMachiningEn } from "@/content/seo/pages/cnc-machining.en";
import { cncMachiningTr } from "@/content/seo/pages/cnc-machining.tr";
import { sheetMetalWeightCalculatorEn } from "@/content/seo/pages/sheet-metal-weight-calculator.en";
import { sheetMetalWeightCalculatorTr } from "@/content/seo/pages/sheet-metal-weight-calculator.tr";
import { cncTurningEn } from "@/content/seo/pages/cnc-turning.en";
import { cncTurningTr } from "@/content/seo/pages/cnc-turning.tr";
import { cncMillingEn } from "@/content/seo/pages/cnc-milling.en";
import { cncMillingTr } from "@/content/seo/pages/cnc-milling.tr";
import { weldingAssembliesEn } from "@/content/seo/pages/welding-assemblies.en";
import { weldingAssembliesTr } from "@/content/seo/pages/welding-assemblies.tr";
import { surfaceFinishingEn } from "@/content/seo/pages/surface-finishing.en";
import { surfaceFinishingTr } from "@/content/seo/pages/surface-finishing.tr";
import { stainlessSteelSheetEn } from "@/content/seo/pages/stainless-steel-sheet.en";
import { stainlessSteelSheetTr } from "@/content/seo/pages/stainless-steel-sheet.tr";
import { aluminumSheetEn } from "@/content/seo/pages/aluminum-sheet.en";
import { aluminumSheetTr } from "@/content/seo/pages/aluminum-sheet.tr";
import { carbonSteelSheetEn } from "@/content/seo/pages/carbon-steel-sheet.en";
import { carbonSteelSheetTr } from "@/content/seo/pages/carbon-steel-sheet.tr";
import { copperBrassEn } from "@/content/seo/pages/copper-brass.en";
import { copperBrassTr } from "@/content/seo/pages/copper-brass.tr";
import { bendAllowanceCalculatorEn } from "@/content/seo/pages/bend-allowance-calculator.en";
import { bendAllowanceCalculatorTr } from "@/content/seo/pages/bend-allowance-calculator.tr";
import { iso2768ToleranceTableEn } from "@/content/seo/pages/iso-2768-tolerance-table.en";
import { iso2768ToleranceTableTr } from "@/content/seo/pages/iso-2768-tolerance-table.tr";
import { materialDensityTableEn } from "@/content/seo/pages/material-density-table.en";
import { materialDensityTableTr } from "@/content/seo/pages/material-density-table.tr";
import { sheetMetalFromTurkeyEn } from "@/content/seo/pages/sheet-metal-from-turkey.en";
import { sheetMetalFromTurkeyTr } from "@/content/seo/pages/sheet-metal-from-turkey.tr";
import { turkeyVsChinaVsEasternEuropeSourcingEn } from "@/content/seo/pages/turkey-vs-china-vs-eastern-europe-sourcing.en";
import { turkeyVsChinaVsEasternEuropeSourcingTr } from "@/content/seo/pages/turkey-vs-china-vs-eastern-europe-sourcing.tr";
import { howToGetASheetMetalQuoteEn } from "@/content/seo/pages/how-to-get-a-sheet-metal-quote.en";
import { howToGetASheetMetalQuoteTr } from "@/content/seo/pages/how-to-get-a-sheet-metal-quote.tr";
import { sheetMetalDfmGuidelinesEn } from "@/content/seo/pages/sheet-metal-dfm-guidelines.en";
import { sheetMetalDfmGuidelinesTr } from "@/content/seo/pages/sheet-metal-dfm-guidelines.tr";
import { laserCuttingCostDriversEn } from "@/content/seo/pages/laser-cutting-cost-drivers.en";
import { laserCuttingCostDriversTr } from "@/content/seo/pages/laser-cutting-cost-drivers.tr";
import { glossaryEn } from "@/content/seo/pages/glossary.en";
import { glossaryTr } from "@/content/seo/pages/glossary.tr";
import { glossaryLaserKerfEn } from "@/content/seo/pages/glossary-laser-kerf.en";
import { glossaryLaserKerfTr } from "@/content/seo/pages/glossary-laser-kerf.tr";
import { glossaryKFactorEn } from "@/content/seo/pages/glossary-k-factor.en";
import { glossaryKFactorTr } from "@/content/seo/pages/glossary-k-factor.tr";
import { glossaryBendAllowanceEn } from "@/content/seo/pages/glossary-bend-allowance.en";
import { glossaryBendAllowanceTr } from "@/content/seo/pages/glossary-bend-allowance.tr";
import { glossaryIso2768En } from "@/content/seo/pages/glossary-iso-2768.en";
import { glossaryIso2768Tr } from "@/content/seo/pages/glossary-iso-2768.tr";
import { glossaryNestingEn } from "@/content/seo/pages/glossary-nesting.en";
import { glossaryNestingTr } from "@/content/seo/pages/glossary-nesting.tr";
import { glossaryDfmEn } from "@/content/seo/pages/glossary-dfm.en";
import { glossaryDfmTr } from "@/content/seo/pages/glossary-dfm.tr";

const bundles: Record<string, SeoLocaleBundle> = {
  "sheet-metal-fabrication": { en: sheetMetalFabricationEn, tr: sheetMetalFabricationTr },
  "laser-cutting": { en: laserCuttingEn, tr: laserCuttingTr },
  "sheet-metal-bending": { en: sheetMetalBendingEn, tr: sheetMetalBendingTr },
  "cnc-machining": { en: cncMachiningEn, tr: cncMachiningTr },
  "sheet-metal-weight-calculator": { en: sheetMetalWeightCalculatorEn, tr: sheetMetalWeightCalculatorTr },
  "cnc-turning": { en: cncTurningEn, tr: cncTurningTr },
  "cnc-milling": { en: cncMillingEn, tr: cncMillingTr },
  "welding-assemblies": { en: weldingAssembliesEn, tr: weldingAssembliesTr },
  "surface-finishing": { en: surfaceFinishingEn, tr: surfaceFinishingTr },
  "stainless-steel-sheet": { en: stainlessSteelSheetEn, tr: stainlessSteelSheetTr },
  "aluminum-sheet": { en: aluminumSheetEn, tr: aluminumSheetTr },
  "carbon-steel-sheet": { en: carbonSteelSheetEn, tr: carbonSteelSheetTr },
  "copper-brass": { en: copperBrassEn, tr: copperBrassTr },
  "bend-allowance-calculator": { en: bendAllowanceCalculatorEn, tr: bendAllowanceCalculatorTr },
  "iso-2768-tolerance-table": { en: iso2768ToleranceTableEn, tr: iso2768ToleranceTableTr },
  "material-density-table": { en: materialDensityTableEn, tr: materialDensityTableTr },
  "sheet-metal-from-turkey": { en: sheetMetalFromTurkeyEn, tr: sheetMetalFromTurkeyTr },
  "turkey-vs-china-vs-eastern-europe-sourcing": {
    en: turkeyVsChinaVsEasternEuropeSourcingEn,
    tr: turkeyVsChinaVsEasternEuropeSourcingTr,
  },
  "how-to-get-a-sheet-metal-quote": { en: howToGetASheetMetalQuoteEn, tr: howToGetASheetMetalQuoteTr },
  "sheet-metal-dfm-guidelines": { en: sheetMetalDfmGuidelinesEn, tr: sheetMetalDfmGuidelinesTr },
  "laser-cutting-cost-drivers": { en: laserCuttingCostDriversEn, tr: laserCuttingCostDriversTr },
  glossary: { en: glossaryEn, tr: glossaryTr },
  "glossary-laser-kerf": { en: glossaryLaserKerfEn, tr: glossaryLaserKerfTr },
  "glossary-k-factor": { en: glossaryKFactorEn, tr: glossaryKFactorTr },
  "glossary-bend-allowance": { en: glossaryBendAllowanceEn, tr: glossaryBendAllowanceTr },
  "glossary-iso-2768": { en: glossaryIso2768En, tr: glossaryIso2768Tr },
  "glossary-nesting": { en: glossaryNestingEn, tr: glossaryNestingTr },
  "glossary-dfm": { en: glossaryDfmEn, tr: glossaryDfmTr },
};

const staticHubs: Record<string, Record<Locale, { title: string; description: string }>> = {
  "/sheet-metal": {
    en: { title: "Sheet metal", description: "Laser-cut and bent parts overview." },
    de: { title: "Blech", description: "Laserschneiden und Kanten im Überblick." },
    tr: { title: "Sac", description: "Lazer kesim ve büküm genel bakış." },
  },
  "/cnc-parts": {
    en: { title: "CNC parts", description: "Milling and turning overview." },
    de: { title: "CNC-Teile", description: "Fräsen und Drehen im Überblick." },
    tr: { title: "CNC parçalar", description: "Freze ve torna genel bakış." },
  },
  "/enclosures": {
    en: { title: "Enclosures", description: "Welded boxes and powder coat." },
    de: { title: "Gehäuse", description: "Schweißkästen und Pulverbeschichtung." },
    tr: { title: "Muhafazalar", description: "Kaynaklı kutu ve toz boya." },
  },
  "/request-a-quote": {
    en: { title: "Request a quote", description: "Send drawings for a 2-business-day reply." },
    de: { title: "Angebot anfragen", description: "Zeichnung senden — Antwort in 2 Werktagen." },
    tr: { title: "Teklif iste", description: "Çizim gönderin — 2 iş günü içinde yanıt." },
  },
  "/faq": {
    en: { title: "FAQ", description: "Buyer questions on quoting and shipping." },
    de: { title: "FAQ", description: "Fragen zu Angebot und Versand." },
    tr: { title: "SSS", description: "Teklif ve gönderim soruları." },
  },
};

export function listSeoSlugs(): string[] {
  return Object.keys(bundles);
}

export function isSeoSlug(slug: string): boolean {
  return slug in bundles;
}

export function getSeoPage(slug: string, locale: Locale): SeoPage | null {
  const bundle = bundles[slug];
  if (!bundle) return null;
  if (locale === "tr") return bundle.tr;
  if (locale === "de") return bundle.de ?? bundle.en;
  return bundle.en;
}

export function getSeoKind(slug: string): SeoKind | null {
  return bundles[slug]?.en.kind ?? null;
}

export function resolveRelated(
  locale: Locale,
  page: SeoPage,
): {
  related: { href: string; title: string; description?: string }[];
  hub?: { href: string; title: string; description?: string };
} {
  const related = page.related.flatMap((ref) => {
    if (ref.startsWith("/")) {
      const hubMeta = staticHubs[ref]?.[locale] ?? staticHubs[ref]?.en;
      if (!hubMeta) return [];
      return [{ href: ref, title: hubMeta.title, description: hubMeta.description }];
    }
    const target = getSeoPage(ref, locale);
    if (!target) return [];
    return [{ href: `/${target.slug}`, title: target.h1, description: target.meta.description }];
  });

  let hub: { href: string; title: string; description?: string } | undefined;
  if (page.hub) {
    const staticHub = page.hub.startsWith("/") ? staticHubs[page.hub] : undefined;
    if (staticHub) {
      const meta = staticHub[locale] ?? staticHub.en;
      hub = { href: page.hub, title: meta.title, description: meta.description };
    } else {
      const slug = page.hub.replace(/^\//, "");
      const target = getSeoPage(slug, locale);
      if (target) {
        hub = { href: `/${target.slug}`, title: target.h1, description: target.meta.description };
      }
    }
  }

  return { related: related.slice(0, 5), hub };
}

export const seoSitemapPaths = listSeoSlugs().map((slug) => ({
  path: `/${slug}`,
  changeFrequency: "monthly" as const,
  priority: 0.8,
}));
