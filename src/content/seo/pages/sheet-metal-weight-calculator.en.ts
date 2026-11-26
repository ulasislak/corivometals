import type { SeoPage } from "@/content/seo/types";

export const sheetMetalWeightCalculatorEn: SeoPage = {
  slug: "sheet-metal-weight-calculator",
  kind: "tool",
  toolId: "weight",
  hub: "/sheet-metal-fabrication",
  related: ["laser-cutting", "sheet-metal-bending", "sheet-metal-fabrication", "/request-a-quote"],
  meta: {
    title: "Sheet metal weight calculator",
    description:
      "Estimate flat sheet mass from length, width, thickness, and material density. For RFQ planning—not a certified weigh ticket.",
  },
  crumb: "Weight calculator",
  kicker: "TOOL",
  h1: "Sheet metal weight calculator",
  directAnswer:
    "A sheet metal weight calculator multiplies blank volume by material density to estimate mass before you order. Enter length, width, and thickness in millimetres, choose a conventional density, and scale by quantity. Corivo uses the estimate only for planning—final mass depends on nesting, kerf, and coatings.",
  keyFacts: [
    { label: "Formula", value: "mass = L × W × T × density × qty (mm → cm³ → kg)" },
    { label: "Mild steel density", value: "≈ 7.85 g/cm³", verify: true },
    { label: "Stainless 304 density", value: "≈ 8.00 g/cm³", verify: true },
    { label: "Aluminium density", value: "≈ 2.70 g/cm³", verify: true },
    { label: "Not included", value: "Kerf scrap, bend stretch, powder coat film" },
  ],
  sections: [
    {
      heading: "How to read the result",
      paragraphs: [
        "The calculator assumes a rectangular solid blank. Real laser nests leave skeleton scrap; cut-outs remove mass; bends do not add volume but change shipping envelope. Use the number to size cartons, estimate freight class, or cross-check a supplier line item—not as a certified scale reading.",
        "If your blank is irregular, approximate with bounding-box dimensions and reduce by a scrap factor, or split the shape into rectangles and sum the results. For tubes and formed sections, a flat-blank calculator under- or over-states mass; send the STEP with the RFQ when mass is contractual.",
      ],
    },
    {
      heading: "Density values used here",
      paragraphs: [
        "Densities are conventional handbook figures for planning: mild steel ≈7.85, stainless 304 ≈8.0, aluminium ≈2.70, copper ≈8.96, brass ≈8.5 g/cm³. Alloy variants (316, 5052, DC01 vs S355) shift slightly. Galvanized sheet is treated as steel density here; zinc coating mass is ignored.",
        "When a material certificate or weigh ticket is required on delivery, say so on the order. Corivo shipments include dimensional reports and photos; certificates are available on request as stated elsewhere on the site.",
      ],
    },
    {
      heading: "From weight estimate to a Corivo quote",
      paragraphs: [
        "Weight alone does not price a part—cut length, pierces, bends, welds, and finish dominate. After you estimate mass, upload the DXF or STEP on the quote form. You receive a reply within 2 business days with price, production lead time, and a manufacturability note. Shipping is worldwide under the Incoterm on the quote.",
      ],
    },
  ],
  faq: [
    {
      question: "Is this weight binding for shipping?",
      answer: "No. It is a planning estimate. Actual mass varies with nesting, cut-outs, and finish.",
    },
    {
      question: "Which units does the tool use?",
      answer: "Millimetres for size, grams per cubic centimetre for density, output in kilograms or grams.",
    },
    {
      question: "Can I calculate a bent box?",
      answer:
        "Approximate from the flat pattern area and thickness, or send STEP with the RFQ for a shop estimate.",
    },
    {
      question: "Do you publish a price per kilogram?",
      answer: "No. Prices are written on the quote for your drawing and process route.",
    },
  ],
  updated: "26 November 2026",
};
