import type { SeoPage } from "@/content/seo/types";

export const glossaryEn: SeoPage = {
  slug: "glossary",
  kind: "aeo",
  hub: "/sheet-metal",
  related: [
    "bend-allowance-calculator",
    "iso-2768-tolerance-table",
    "sheet-metal-dfm-guidelines",
    "laser-cutting-cost-drivers",
    "/faq",
  ],
  meta: {
    title: "Sheet metal glossary: kerf, K-factor, nesting, DFM",
    description:
      "Plain-language definitions of laser kerf, K-factor, bend allowance, ISO 2768, nesting, and DFM for sheet metal and CNC buyers.",
  },
  crumb: "Glossary",
  kicker: "GLOSSARY",
  h1: "Sheet metal and CNC glossary",
  directAnswer:
    "This glossary defines six terms buyers meet when ordering sheet metal and machined parts: laser kerf, K-factor, bend allowance, ISO 2768, nesting, and design for manufacturability (DFM). Each entry explains the term in plain language and shows what to state on a drawing or RFQ. Corivo replies to quotes within 2 business days.",
  keyFacts: [
    { label: "Terms covered", value: "Laser kerf, K-factor, bend allowance, ISO 2768, nesting, DFM" },
    { label: "Where they matter", value: "Cutting accuracy, flat pattern length, tolerances, material yield, design review" },
    { label: "Related tools", value: "Bend allowance calculator and ISO 2768 tolerance table" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "Cutting terms",
      paragraphs: [
        "Two terms describe how laser-cut parts are made and priced. They affect how close the cut part is to the drawing and how much material is used. Understanding both helps you read a quote and prepare files that cut cleanly.",
      ],
      bullets: [
        "Laser kerf: the width of material removed by the laser beam during a cut. Parts are programmed with the kerf compensated, so the finished dimension matches the drawing. Full entry: /glossary-laser-kerf.",
        "Nesting: arranging many parts on one sheet to use as much of it as possible and reduce scrap. Higher yield usually lowers cost. Full entry: /glossary-nesting.",
      ],
    },
    {
      heading: "Bending terms",
      paragraphs: [
        "Bending turns a flat blank into a formed part, and the flat length has to account for how the metal stretches. These two terms are the basis for converting a folded drawing into a flat pattern.",
      ],
      bullets: [
        "K-factor: the ratio that locates the neutral axis within the thickness of the sheet. It is used to calculate bend allowance. Full entry: /glossary-k-factor.",
        "Bend allowance: the length of the neutral axis through a bend, which is the flat material consumed by that bend. Full entry: /glossary-bend-allowance. See also the bend allowance calculator.",
      ],
    },
    {
      heading: "Tolerance and design terms",
      paragraphs: [
        "General tolerances and design rules prevent most disagreements between buyers and workshops. Setting them clearly on the drawing keeps cost and expectations aligned.",
      ],
      bullets: [
        "ISO 2768: a standard of general tolerances for dimensions without individual limits, with classes such as fine, medium, and coarse. Full entry: /glossary-iso-2768. See also the tolerance table.",
        "DFM (design for manufacturability): shaping a design so it can be produced reliably and at reasonable cost. Full entry: /glossary-dfm. See also the sheet metal DFM guidelines.",
      ],
    },
    {
      heading: "Using these terms in your RFQ",
      paragraphs: [
        "You do not need to use the jargon to get a quote, but naming the conventions you rely on prevents misunderstandings. State whether your flat pattern uses bend allowance or bend deduction, add a general tolerance note such as ISO 2768-m, and mention if parts must be nested in a particular way. Corivo replies within 2 business days with price, lead time, and manufacturability comments.",
        "Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote. For the full list of files and details to send, see our guide on getting a sheet metal quote.",
      ],
    },
  ],
  faq: [
    {
      question: "Do I need to know these terms to request a quote?",
      answer: "No. Send your drawings and notes in plain language; the quote reply will clarify anything that is unclear.",
    },
    {
      question: "Which term affects flat pattern length?",
      answer: "Bend allowance and the K-factor behind it set how much flat material each bend consumes.",
    },
    {
      question: "Which term affects tolerances on the drawing?",
      answer: "ISO 2768 sets general tolerances for dimensions with no individual limit. Critical features should carry their own tolerance.",
    },
    {
      question: "Where can I find calculators and tables?",
      answer: "See the bend allowance calculator, the ISO 2768 tolerance table, and the sheet metal weight calculator.",
    },
  ],
  updated: "26 November 2026",
};
