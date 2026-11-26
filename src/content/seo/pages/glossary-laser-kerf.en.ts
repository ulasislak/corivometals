import type { SeoPage } from "@/content/seo/types";

export const glossaryLaserKerfEn: SeoPage = {
  slug: "glossary-laser-kerf",
  kind: "glossary",
  term: "Laser kerf",
  hub: "/sheet-metal",
  related: ["glossary", "laser-cutting", "laser-cutting-cost-drivers", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "Laser kerf: definition and why it matters",
    description:
      "Laser kerf is the width of material removed by the beam during a cut. Learn how kerf affects dimensions, small features, and nesting spacing.",
  },
  crumb: "Laser kerf",
  kicker: "GLOSSARY",
  h1: "Laser kerf",
  directAnswer:
    "Laser kerf is the narrow channel of material vaporised or melted away by the laser beam as it cuts. Its width depends on material, thickness, focus, and gas, and it is compensated in the cutting program so finished dimensions match the drawing. Kerf also sets the minimum practical gap between nested parts.",
  keyFacts: [
    { label: "Definition", value: "Width of material removed along the cut path" },
    { label: "Typical width", value: "A fraction of a millimetre; varies with material, thickness, and settings", verify: true },
    { label: "Compensation", value: "Handled in the cutting program, not drawn into the DXF" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "What laser kerf is",
      paragraphs: [
        "When a laser cuts sheet metal, it removes a thin strip of material along the path. That strip is the kerf. Its width depends on the beam, the material and thickness, the focus position, and the assist gas. Thicker material and certain settings produce a wider kerf than thin sheet cut at optimal speed, and the cut walls are not always perfectly parallel.",
        "Kerf is why a cut part is never exactly the size of the uncompensated path. The cutting program offsets the path by half the kerf so that the finished hole or outline matches the drawing. You do not draw kerf into a DXF; draw the finished geometry and let the workshop compensate.",
      ],
    },
    {
      heading: "Why kerf matters for design and quoting",
      paragraphs: [
        "Kerf limits how close features and parts can be. Very narrow slots, thin webs, and tiny holes may be affected by kerf and heat. When parts are nested, leaving a small gap between them accounts for kerf and prevents overlap. Closely spaced cuts can also distort thin sheet, so the manufacturability note may suggest more spacing.",
        "For press-fit or tight-clearance features, mention the requirement on the drawing so the workshop can check it against its process. See the laser cutting page for what to send and the cost drivers page for how nesting and cut length affect price.",
      ],
    },
  ],
  faq: [
    {
      question: "Should I add kerf to my DXF?",
      answer: "No. Draw the finished geometry. The workshop compensates kerf in the cutting program.",
    },
    {
      question: "Does kerf change with thickness?",
      answer: "Yes. Kerf depends on material, thickness, focus, and gas, so it differs between jobs.",
    },
    {
      question: "How does kerf affect nesting?",
      answer: "It sets a minimum gap between parts. Very tight spacing can also cause heat distortion on thin sheet.",
    },
    {
      question: "How long until I get a laser cutting quote?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
