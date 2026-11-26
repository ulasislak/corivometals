export type SeoKind = "service" | "material" | "guide" | "tool" | "glossary" | "aeo";

export type SeoFact = {
  label: string;
  value: string;
  /** When true, the template renders a VERIFY marker for editorial review. */
  verify?: boolean;
};

export type SeoSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoPage = {
  slug: string;
  kind: SeoKind;
  /** Hub path (English slug), e.g. /sheet-metal-fabrication */
  hub?: string;
  related: readonly string[];
  meta: {
    title: string;
    description: string;
  };
  crumb: string;
  kicker: string;
  h1: string;
  /** 40–60 word direct answer for AEO quotation. */
  directAnswer: string;
  keyFacts: readonly SeoFact[];
  sections: readonly SeoSection[];
  faq: readonly SeoFaq[];
  /** Display date, e.g. 26 November 2026 */
  updated: string;
  /** Client calculator id when kind is tool */
  toolId?: "weight" | "bend-allowance";
  /** Glossary term when kind is glossary */
  term?: string;
};

export type SeoLocaleBundle = {
  en: SeoPage;
  tr: SeoPage;
  /** Optional German; falls back to EN when missing. */
  de?: SeoPage;
};
