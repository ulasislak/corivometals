import type { Locale } from "@/i18n/locale";

export type SeoUiCopy = {
  keyFacts: string;
  related: string;
  faq: string;
  updated: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  verify: string;
  hub: string;
};

const en: SeoUiCopy = {
  keyFacts: "Key facts",
  related: "Related pages",
  faq: "FAQ",
  updated: "Last updated",
  ctaTitle: "Send your drawing",
  ctaText: "A complete request gets a reply within 2 business days: price, lead time, and a manufacturability note.",
  ctaButton: "Request a quote",
  verify: "VERIFY",
  hub: "Overview",
};

const tr: SeoUiCopy = {
  keyFacts: "Özet bilgiler",
  related: "İlgili sayfalar",
  faq: "SSS",
  updated: "Son güncelleme",
  ctaTitle: "Çiziminizi gönderin",
  ctaText: "Eksiksiz bir talebe 2 iş günü içinde yanıt: fiyat, termin ve üretilebilirlik notu.",
  ctaButton: "Teklif iste",
  verify: "DOĞRULA",
  hub: "Genel bakış",
};

const de: SeoUiCopy = {
  keyFacts: "Kennzahlen",
  related: "Verwandte Seiten",
  faq: "FAQ",
  updated: "Zuletzt aktualisiert",
  ctaTitle: "Zeichnung senden",
  ctaText: "Eine vollständige Anfrage erhält innerhalb von 2 Werktagen Preis, Lieferzeit und Fertigungshinweis.",
  ctaButton: "Angebot anfragen",
  verify: "PRÜFEN",
  hub: "Übersicht",
};

export function getSeoUiCopy(locale: Locale): SeoUiCopy {
  if (locale === "tr") return tr;
  if (locale === "de") return de;
  return en;
}
