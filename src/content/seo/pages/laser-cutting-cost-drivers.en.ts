import type { SeoPage } from "@/content/seo/types";

export const laserCuttingCostDriversEn: SeoPage = {
  slug: "laser-cutting-cost-drivers",
  kind: "aeo",
  hub: "/sheet-metal",
  related: [
    "laser-cutting",
    "sheet-metal-dfm-guidelines",
    "how-to-get-a-sheet-metal-quote",
    "carbon-steel-sheet",
    "glossary",
  ],
  meta: {
    title: "What drives laser cutting cost? Key factors explained",
    description:
      "Laser cutting cost depends on material, thickness, cut length, pierces, nesting, quantity, and secondary work. See what to change to lower it.",
  },
  crumb: "Laser cutting cost drivers",
  kicker: "ANSWER",
  h1: "What drives the cost of laser cutting?",
  directAnswer:
    "Laser cutting cost is driven mainly by material and thickness, total cut length, the number of pierces, how efficiently parts nest on the sheet, order quantity, and secondary work such as bending, deburring, or finishing. Simplifying contours and sharing annual volume usually lowers cost. Corivo quotes within 2 business days.",
  keyFacts: [
    { label: "Main drivers", value: "Material grade, thickness, cut length, pierces, nesting yield, quantity" },
    { label: "Secondary work", value: "Bending, deburring, welding, and finishing add cost beyond cutting" },
    { label: "Thickness effect", value: "Thicker sheet cuts more slowly and uses more material" },
    { label: "How to lower cost", value: "Simplify contours, merge cut lines, standardise material and thickness" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "Material and thickness",
      paragraphs: [
        "Material is the first cost driver. Grade matters because stainless steel and aluminium cost more per kilogram than mild steel, and some alloys cut differently. Thickness matters twice: thicker sheet costs more material per part and cuts more slowly, so machine time per metre rises. Choosing the thinnest sheet that meets stiffness requirements often lowers cost significantly.",
        "Standardising materials across a project also helps. Using a common sheet size and thickness across several parts lets the workshop nest them together and buy once. Mixing many odd thicknesses forces extra material handling and sheet purchases. State the material grade and thickness on the RFQ, using the EN or ISO grade next to local names such as DKP or HRP.",
      ],
    },
    {
      heading: "Cut length, pierces, and geometry",
      paragraphs: [
        "A laser cuts at a speed that depends on material and thickness, so total cut length is a direct cost driver. Every piercing point, where the beam starts a cut, adds time too, and thick plate pierces more slowly. A part with many small holes can cost more than a larger part with a simple outline because each hole needs its own pierce.",
        "Geometry choices can reduce both. Merging shared edges between adjacent parts, which is called common-line cutting, removes duplicate cuts. Replacing many tiny holes with one slot or a larger opening cuts pierce counts. Avoid extremely intricate contours where the function does not require them, and remove duplicate lines from the DXF so the same edge is not cut twice.",
      ],
      bullets: [
        "Merge shared edges where parts touch.",
        "Reduce the number of small holes if one slot will do.",
        "Delete duplicate or overlapping lines from the DXF.",
      ],
    },
    {
      heading: "Nesting, quantity, and setup",
      paragraphs: [
        "Nesting is how parts are arranged on a sheet. High utilisation means less scrap, and scrap is paid for. Parts with awkward shapes or large internal cut-outs can leave unused material, and a quote may reflect a lower yield. Increasing spacing between parts, or using unusual margins, lowers yield too. Check our glossary entry on nesting for the definition.",
        "Quantity affects setup spread and nesting. Small batches carry programming and handling cost across few parts, while larger batches spread them out and nest more efficiently. Providing the annual quantity allows the workshop to consider whether a repeat-friendly process is worthwhile without publishing a generic price list.",
      ],
    },
    {
      heading: "Secondary operations and how Corivo quotes",
      paragraphs: [
        "Cutting is often only part of the route. Bending, deburring, tapping, welding, and finishing each add cost, and tight tolerances raise inspection effort. If only flat parts are needed, say so, so the quote does not include brake work. If a part needs finishing, name the finish so the whole route is quoted together.",
        "Upload the DXF, STEP, and PDF on the quote form with material, thickness, finish, and quantities. You receive a reply within 2 business days with price, production lead time, and manufacturability comments that suggest changes to reduce cost. Production runs through partner workshops, and delivery follows the Incoterm on the quote. See the DFM guidelines for design tips.",
      ],
    },
  ],
  faq: [
    {
      question: "Is thicker sheet always more expensive to cut?",
      answer: "Generally yes, because it costs more material and cuts more slowly. Choose the thinnest sheet that meets your stiffness needs.",
    },
    {
      question: "Do small holes increase the price?",
      answer: "Yes. Each hole needs a pierce. Replacing several small holes with a slot can lower cost where the design allows.",
    },
    {
      question: "Does quantity change the unit price?",
      answer: "Often. Larger batches spread setup and nest more efficiently. Share annual volume so the quote can consider it.",
    },
    {
      question: "Can I get a laser cutting price list?",
      answer: "No. Price depends on your drawing and route, so each quote is specific to the parts you send.",
    },
    {
      question: "How long until I get a price?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
