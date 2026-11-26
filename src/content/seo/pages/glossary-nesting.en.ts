import type { SeoPage } from "@/content/seo/types";

export const glossaryNestingEn: SeoPage = {
  slug: "glossary-nesting",
  kind: "glossary",
  term: "Nesting",
  hub: "/sheet-metal",
  related: ["glossary", "laser-cutting", "laser-cutting-cost-drivers", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "Nesting in laser cutting: definition",
    description:
      "Nesting arranges parts on a sheet to use material efficiently and reduce scrap. Definition, how yield affects cost, and how to design for good nests.",
  },
  crumb: "Nesting",
  kicker: "GLOSSARY",
  h1: "Nesting",
  directAnswer:
    "Nesting is the arrangement of many parts on a single sheet so that as much material as possible is used and scrap is minimised. Higher sheet utilisation, called yield, usually lowers the cost per part. Part shape, spacing, kerf, and quantity all influence how well a nest works.",
  keyFacts: [
    { label: "Definition", value: "Arranging parts on a sheet to reduce scrap" },
    { label: "Key metric", value: "Sheet utilisation (yield)" },
    { label: "Helps nesting", value: "Simple outlines, shared edges, standard materials and thicknesses" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "What nesting is",
      paragraphs: [
        "Laser cutting starts with a standard sheet, and parts are laid out on it like pieces of a puzzle. Nesting software arranges them to reduce the unused material, called skeleton scrap, left between parts. The result is a cutting program that cuts many parts from one sheet.",
        "Utilisation matters because scrap is paid for. A nest with high yield spends less material per part. Parts with irregular shapes, large internal cut-outs, or unusual dimensions leave more waste. Parts that share material and thickness can be nested together, which is why standardising them across a project helps.",
      ],
    },
    {
      heading: "How to design and send files for good nesting",
      paragraphs: [
        "Provide flat DXF files with closed contours and no duplicate lines. State the quantity per part and the estimated annual quantity so the workshop can plan nests. Allow a sensible gap between parts for kerf, and avoid tiny features that force wide spacing.",
        "Where parts touch, shared edges can be cut once, which saves time as well as material. Read the laser cutting cost drivers page for how nesting affects price and the laser cutting page for what to send. Corivo replies within 2 business days.",
      ],
    },
  ],
  faq: [
    {
      question: "Does nesting change the price?",
      answer: "Yes. Higher yield means less material wasted, which usually lowers cost per part.",
    },
    {
      question: "Do I need to nest parts myself?",
      answer: "No. Send individual flat DXF files; the workshop nests them for the sheet.",
    },
    {
      question: "What makes a part hard to nest?",
      answer: "Irregular outlines, large internal cut-outs, and mixing many thicknesses or materials.",
    },
    {
      question: "How long until I get a laser cutting quote?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
