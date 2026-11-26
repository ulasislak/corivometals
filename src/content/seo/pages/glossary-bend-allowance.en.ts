import type { SeoPage } from "@/content/seo/types";

export const glossaryBendAllowanceEn: SeoPage = {
  slug: "glossary-bend-allowance",
  kind: "glossary",
  term: "Bend allowance",
  hub: "/sheet-metal",
  related: ["glossary", "bend-allowance-calculator", "sheet-metal-bending", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "Bend allowance: definition and formula",
    description:
      "Bend allowance is the length of the neutral axis through a bend, the flat material a bend consumes. Definition, formula, and bend deduction.",
  },
  crumb: "Bend allowance",
  kicker: "GLOSSARY",
  h1: "Bend allowance",
  directAnswer:
    "Bend allowance is the arc length of the neutral axis through a bend, which equals the flat material consumed by that bend. Adding flange lengths and bend allowances gives the blank length to cut. It is calculated from bend angle, inside radius, thickness, and K-factor, and is related to bend deduction.",
  keyFacts: [
    { label: "Definition", value: "Neutral axis length through the bend" },
    { label: "Formula", value: "BA = angle (rad) × (inside radius + K × thickness)" },
    { label: "Related term", value: "Bend deduction, subtracted from outside dimensions" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "What bend allowance is",
      paragraphs: [
        "A bend turns a straight piece of sheet into a curved corner. The material along the neutral axis keeps its length, so the length of that arc is the bend allowance. It is the flat length that disappears into the bend, and it is what you add to the straight flange lengths to find the full flat pattern length.",
        "The formula uses the bend angle in radians, the inside radius, the thickness, and the K-factor. Because the K-factor depends on material and tooling, bend allowance is an estimate until the workshop confirms it against its own process sheet.",
      ],
    },
    {
      heading: "Bend allowance versus bend deduction",
      paragraphs: [
        "Bend deduction expresses the same effect from the outside. Instead of adding allowance to inside lengths, you subtract a deduction from the sum of outside dimensions. Drawings dimensioned to outside corners often use deduction, and mixing the two conventions is a common source of wrong blank lengths.",
        "State on the RFQ which convention your flat pattern uses. The bend allowance calculator on this site shows both values, and the sheet metal bending page explains what to send for a quote.",
      ],
    },
  ],
  faq: [
    {
      question: "What is the bend allowance formula?",
      answer: "BA equals bend angle in radians times the sum of inside radius and K-factor times thickness.",
    },
    {
      question: "Is bend allowance the same as bend deduction?",
      answer: "No, but they are related. Allowance is added to inside lengths; deduction is subtracted from outside dimensions.",
    },
    {
      question: "Does bend allowance depend on material?",
      answer: "Yes, through the K-factor, which varies with material, thickness, radius, and tooling.",
    },
    {
      question: "How long until I get a bending quote?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
