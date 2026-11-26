import type { SeoPage } from "@/content/seo/types";

export const bendAllowanceCalculatorEn: SeoPage = {
  slug: "bend-allowance-calculator",
  kind: "tool",
  toolId: "bend-allowance",
  hub: "/sheet-metal-fabrication",
  related: ["sheet-metal-bending", "glossary", "sheet-metal-dfm-guidelines", "laser-cutting", "/request-a-quote"],
  meta: {
    title: "Bend allowance calculator for sheet metal",
    description:
      "Estimate bend allowance, bend deduction, and flat length from thickness, radius, angle, and K-factor. Planning tool; shop sheet decides.",
  },
  crumb: "Bend allowance calculator",
  kicker: "TOOL",
  h1: "Bend allowance calculator",
  directAnswer:
    "Bend allowance is the arc length of the neutral axis through a bend, used to convert folded dimensions into a flat pattern length. Enter thickness, inside radius, bend angle, and K-factor to estimate allowance and deduction. Corivo treats the result as a planning check; the workshop's process sheet governs production.",
  keyFacts: [
    { label: "Bend allowance", value: "BA = angle (rad) × (inside radius + K × thickness)" },
    { label: "Bend deduction", value: "BD = 2 × (inside radius + thickness) × tan(angle / 2) − BA" },
    { label: "Typical K-factor range", value: "Roughly 0.3 to 0.5, depending on material, radius, and tooling", verify: true },
    { label: "Inputs", value: "Thickness, inside radius, bend angle, K-factor, flange lengths" },
    { label: "Not a process sheet", value: "Shop tooling and material batch can shift real values" },
  ],
  sections: [
    {
      heading: "What bend allowance means",
      paragraphs: [
        "When a flat sheet is bent, the outer surface stretches and the inner surface compresses. Somewhere between them is a neutral axis that keeps its original length. Bend allowance is the length of that neutral axis through the bend, and it is the amount of flat material consumed by one bend. Adding the flat flange lengths and the bend allowances gives the length of the blank that must be cut.",
        "The calculator on this page uses the standard geometric formula. The bend angle is the angle through which the sheet turns, so a right-angle flange is a 90 degree bend. The K-factor is the ratio of the neutral axis position to the thickness, and it is the least certain input because it depends on material, thickness, radius, and the tooling used.",
      ],
    },
    {
      heading: "Bend allowance versus bend deduction",
      paragraphs: [
        "Bend allowance and bend deduction describe the same behaviour from two directions. Allowance is added to the straight flange lengths measured to the bend. Deduction is subtracted from the sum of outside dimensions, which is how many drawings are dimensioned. Using the wrong convention is a common source of blanks that come out too long or too short.",
        "State on the RFQ which convention your CAD flat pattern uses. If your CAD exports a flat pattern, send it as DXF and say that its K-factor or deduction table should be treated as a reference. The workshop confirms against its own tooling, and the manufacturability note will flag where the flat length differs from what you sent.",
      ],
      bullets: [
        "Use outside dimensions with bend deduction, or inside lengths with bend allowance.",
        "Keep thickness and radius consistent between the model and the drawing.",
        "Note any non-standard tooling or radius in the PDF.",
      ],
    },
    {
      heading: "Limits of a calculator",
      paragraphs: [
        "A calculator cannot know the exact springback of a given batch, the die opening a workshop uses, or how a particular coil of stainless behaves. Real bend results shift with material grade, grain direction, and radius-to-thickness ratio. Small bends with tight radii or hard tempers are the most variable. Treat the result as a way to check that a flat pattern is plausible before sending it.",
        "Flat length errors compound across multi-bend parts. A part with several bends can accumulate enough error that holes do not align when assembled. For critical fits, send a few lengths with key dimensions toleranced, and let the quote state which dimensions are checked in the dimensional report.",
      ],
    },
    {
      heading: "From calculation to Corivo quote",
      paragraphs: [
        "Once your flat length looks right, upload the flat DXF, the folded STEP, and a PDF with bend angles, radii, and directions on the quote form. You receive a reply within 2 business days with price, production lead time, and manufacturability comments on bend order, minimum flange length, and relief cuts.",
        "Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote. See sheet metal bending for how flanges, radii, and tooling are reviewed, and the DFM guidelines for design rules.",
      ],
    },
  ],
  faq: [
    {
      question: "What K-factor should I use?",
      answer: "Many designers start between 0.3 and 0.5. The workshop's K-factor depends on material, radius, and tooling, so treat any value as an estimate.",
    },
    {
      question: "Is this the same as bend deduction?",
      answer: "They are related. Deduction is subtracted from outside dimensions; allowance is added to inside lengths. The tool shows both.",
    },
    {
      question: "Will my parts match the calculated flat length?",
      answer: "Approximately. The shop's process sheet governs the final blank length, and the quote flags noticeable differences.",
    },
    {
      question: "Should I send a DXF flat pattern?",
      answer: "Yes. Send the flat DXF with the folded STEP and a PDF listing bend angles, radii, and directions.",
    },
    {
      question: "How long until I get a quote?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
