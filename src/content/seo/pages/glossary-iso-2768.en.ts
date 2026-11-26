import type { SeoPage } from "@/content/seo/types";

export const glossaryIso2768En: SeoPage = {
  slug: "glossary-iso-2768",
  kind: "glossary",
  term: "ISO 2768",
  hub: "/cnc-parts",
  related: ["glossary", "iso-2768-tolerance-table", "cnc-machining", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "ISO 2768: general tolerances explained",
    description:
      "ISO 2768 sets general tolerances for dimensions without individual limits, in classes f, m, c, and v. Definition and how to cite it on drawings.",
  },
  crumb: "ISO 2768",
  kicker: "GLOSSARY",
  h1: "ISO 2768",
  directAnswer:
    "ISO 2768 is an international standard of general tolerances for linear and angular dimensions, and for geometric characteristics, that have no individual tolerance on the drawing. Its linear classes are fine (f), medium (m), coarse (c), and very coarse (v). A title block note such as “ISO 2768-m” applies the class.",
  keyFacts: [
    { label: "Definition", value: "General tolerances for dimensions without individual limits" },
    { label: "Linear classes", value: "f (fine), m (medium), c (coarse), v (very coarse)" },
    { label: "Part 2", value: "Geometric classes H, K, L", verify: true },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "What ISO 2768 is",
      paragraphs: [
        "ISO 2768 is a general tolerance standard. Rather than writing a tolerance on every dimension, a drawing can state one class, and every untoleranced dimension inherits the matching limits. The first part covers linear and angular dimensions, and the second covers geometric characteristics such as flatness and straightness.",
        "The allowed deviation grows with the nominal size. A short dimension in the medium class has a much tighter limit than a long one. Critical features such as bearing bores and mating faces should still carry their own tolerance, with ISO 2768 handling everything else.",
      ],
    },
    {
      heading: "How to cite it on a drawing",
      paragraphs: [
        "Add a note in the title block, for example “General tolerances ISO 2768-m.” Without it, a workshop may apply its own default, which may differ from your expectation. Choose the loosest class that still works, because tighter classes add cost.",
        "See the ISO 2768 tolerance table for typical values, and CNC machining for how tolerances affect quotes. Corivo reads the note when quoting and replies within 2 business days.",
      ],
    },
  ],
  faq: [
    {
      question: "What does ISO 2768-m mean?",
      answer: "It applies the medium general tolerance class to all untoleranced dimensions on the drawing.",
    },
    {
      question: "Does ISO 2768 replace specific tolerances?",
      answer: "No. Critical features need their own tolerances; ISO 2768 covers the rest.",
    },
    {
      question: "Which class is common for sheet metal?",
      answer: "Medium or coarse is common because bending and welding add variation.",
    },
    {
      question: "How long until I get a quote?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
