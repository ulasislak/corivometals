import type { SeoPage } from "@/content/seo/types";

export const iso2768ToleranceTableEn: SeoPage = {
  slug: "iso-2768-tolerance-table",
  kind: "tool",
  hub: "/cnc-parts",
  related: ["cnc-machining", "cnc-milling", "cnc-turning", "glossary", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "ISO 2768 tolerance table (f, m, c, v)",
    description:
      "ISO 2768-1 general tolerance classes f, m, c, v for linear dimensions, with notes on how to call them out on drawings. Quote in 2 business days.",
  },
  crumb: "ISO 2768 table",
  kicker: "TABLE",
  h1: "ISO 2768 general tolerance table",
  directAnswer:
    "ISO 2768-1 defines general tolerances for linear and angular dimensions without individual limits, in four classes: fine (f), medium (m), coarse (c), and very coarse (v). A drawing note such as “ISO 2768-m” applies the medium class to every untoleranced dimension. Corivo reads that note when quoting machined and sheet metal parts.",
  keyFacts: [
    { label: "Classes", value: "f (fine), m (medium), c (coarse), v (very coarse)" },
    { label: "Medium, 6–30 mm", value: "±0.2 mm", verify: true },
    { label: "Medium, >30–120 mm", value: "±0.3 mm", verify: true },
    { label: "Medium, >120–400 mm", value: "±0.5 mm", verify: true },
    { label: "Fine, 6–30 mm", value: "±0.1 mm", verify: true },
    { label: "Coarse, 6–30 mm", value: "±0.5 mm", verify: true },
    { label: "Geometric classes", value: "ISO 2768-2 uses H, K, L for straightness, flatness, and similar features", verify: true },
  ],
  sections: [
    {
      heading: "What ISO 2768 covers",
      paragraphs: [
        "ISO 2768 is a general tolerance standard. Its first part gives permitted deviations for linear dimensions and angles that have no tolerance written next to them. Its second part gives general tolerances for geometric characteristics such as straightness, flatness, perpendicularity, and runout. Using it means a drawing does not need to tolerance every dimension individually.",
        "The standard is meant for parts made by metal removal or sheet metal forming at normal workshop accuracy. It does not replace specific tolerances on functional features. Critical fits, bores for bearings, and mating surfaces should carry their own limits, with ISO 2768 handling the remainder.",
      ],
    },
    {
      heading: "The four classes and typical linear values",
      paragraphs: [
        "The class letter sets how tight the general tolerance is. The common values below are for linear dimensions in millimetres, and the allowed deviation widens as the dimension grows. They are shown here as a quick reference and should be checked against the current edition of the standard before being used for a contract.",
        "Fine (f): about ±0.05 mm up to 6 mm, ±0.1 mm from 6 to 30 mm, ±0.15 mm from 30 to 120 mm. Medium (m): about ±0.1 mm up to 6 mm, ±0.2 mm from 6 to 30, ±0.3 mm from 30 to 120, ±0.5 mm from 120 to 400. Coarse (c): about ±0.2 to ±0.3 mm up to 6 mm, ±0.5 mm from 6 to 30, ±0.8 mm from 30 to 120, ±1.2 mm from 120 to 400. Very coarse (v): ±0.5 mm from 3 to 6 mm, ±1 mm from 6 to 30, ±1.5 mm from 30 to 120.",
      ],
      bullets: [
        "Machined parts commonly reference medium or fine.",
        "Laser-cut and bent sheet parts commonly reference medium or coarse.",
        "Always check the class against bend and weld distortion, not only cutting accuracy.",
      ],
    },
    {
      heading: "How to call it out on a drawing",
      paragraphs: [
        "Add the standard and class to the title block, for example “General tolerances ISO 2768-m,” and optionally the geometric class, such as “ISO 2768-mK.” Without a general tolerance note, a workshop may apply its own standard, which can differ from what you expected. A single note removes that ambiguity.",
        "Use the loosest class that still works. Tighter classes require more careful setups, inspection, and sometimes secondary operations, so cost rises. For sheet metal parts, bending and welding add their own variation, and a coarse or medium class often fits more realistically than a fine class for formed features.",
      ],
    },
    {
      heading: "How Corivo uses tolerance notes in quotes",
      paragraphs: [
        "Upload the PDF with your tolerance note and the STEP on the quote form. The manufacturability note comments on any feature where the stated tolerance looks difficult for the process, and suggests relaxing it or splitting a feature into a separate operation. You receive a reply within 2 business days.",
        "Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Say which dimensions must appear in the dimensional report. Delivery follows the Incoterm on the quote. See CNC milling and turning for process-specific notes and the glossary for related terms.",
      ],
    },
  ],
  faq: [
    {
      question: "What does ISO 2768-m mean?",
      answer: "It applies the medium general tolerance class to all untoleranced linear and angular dimensions on the drawing.",
    },
    {
      question: "Does ISO 2768 replace specific tolerances?",
      answer: "No. Critical features should carry their own tolerances; ISO 2768 covers dimensions without individual limits.",
    },
    {
      question: "Which class suits sheet metal parts?",
      answer: "Medium or coarse is common because bending and welding add variation. Confirm for your parts in the quote.",
    },
    {
      question: "Are the table values official?",
      answer: "They are a quick reference. Check the current edition of ISO 2768 before using them contractually.",
    },
    {
      question: "How long until I get a price?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
