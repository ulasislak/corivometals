import type { SeoPage } from "@/content/seo/types";

export const carbonSteelSheetEn: SeoPage = {
  slug: "carbon-steel-sheet",
  kind: "material",
  hub: "/sheet-metal-fabrication",
  related: ["laser-cutting", "sheet-metal-bending", "welding-assemblies", "surface-finishing", "material-density-table"],
  meta: {
    title: "Carbon steel sheet: cold rolled, hot rolled, galvanized",
    description:
      "Carbon steel sheet (cold rolled, hot rolled, galvanized) cut, bent, and welded to drawing. Quote in 2 business days with DFM notes.",
  },
  crumb: "Carbon steel sheet",
  kicker: "MATERIAL",
  h1: "Carbon steel sheet: cold rolled, hot rolled, and galvanized",
  directAnswer:
    "Carbon steel sheet is the default material for most industrial enclosures, brackets, and frames because it is strong, easy to cut and weld, and economical. It comes cold rolled, hot rolled, or galvanized. Corivo quotes carbon steel parts that are laser cut, bent, welded, and coated within 2 business days when thickness and grade are stated.",
  keyFacts: [
    { label: "Common forms", value: "Cold rolled (DKP/DC01), hot rolled (HRP), galvanized sheet" },
    { label: "Structural grades", value: "S235 (≈ St37) and S355 (≈ St52) are common for thicker plate", verify: true },
    { label: "Density", value: "About 7.85 g/cm³; see density table", verify: true },
    { label: "Corrosion protection", value: "Bare steel rusts; powder coat, paint, plating, or galvanizing needed" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "Cold rolled, hot rolled, and galvanized compared",
      paragraphs: [
        "Cold rolled steel sheet, often called DKP in Turkey and DC01 in European designations, has a smooth, clean surface and tight thickness tolerance. It is the usual choice for enclosures, covers, and parts that will be powder coated or painted, because the surface takes finish well and the flat pattern is dimensionally predictable.",
        "Hot rolled sheet, called HRP, has a rougher surface covered by mill scale and a wider thickness tolerance. It is cheaper and common for structural parts, frames, and thicker plates where appearance is secondary. Galvanized sheet carries a zinc layer that protects against rust, which makes it a frequent choice for ventilation, outdoor cabinets, and parts that will not be painted. Cut edges expose bare steel, so edge protection needs a note if corrosion matters.",
      ],
    },
    {
      heading: "Grades and thickness on the RFQ",
      paragraphs: [
        "For thicker structural parts, grades such as S235 and S355 are used, roughly corresponding to the Turkish shorthand St37 and St52. Equivalence is approximate and not identical across standards, so if a specific grade or certificate matters for your application, state the exact designation on the drawing instead of relying on the nickname.",
        "Thickness drives cut speed, bend force, weight, and cost. Choose the minimum thickness that meets stiffness and load needs, because material, cutting time, and bending tonnage all rise with thickness. Where stiffness is the goal, a stiffening flange or rib often achieves more than a thicker sheet and can lower mass and cost.",
      ],
      bullets: [
        "Name the form: cold rolled, hot rolled, or galvanized.",
        "Give the grade or standard if a certificate is required.",
        "State thickness and tolerance expectation, especially on hot rolled plate.",
      ],
    },
    {
      heading: "Cutting, bending, and welding carbon steel",
      paragraphs: [
        "Carbon steel is the most forgiving sheet material to laser cut, bend, and weld. Edges cut cleanly, bends are predictable with common tooling, and welding needs no special precautions beyond cleanliness and fit-up. Hot rolled plate may need scale removal before cutting for the best edge quality, and thicker plate can leave heat-affected edges worth discussing for later machining.",
        "Because bare carbon steel rusts, plan the finish with the design. Powder coat, paint, zinc plating, and black oxide are common, and parts with threads or contact faces need masking. Galvanized sheet can be welded but produces fumes and burns the zinc locally, so mention if welded galvanized parts need touch-up. Our surface finishing page describes how to specify protection.",
      ],
    },
    {
      heading: "How Corivo quotes carbon steel parts",
      paragraphs: [
        "Upload the DXF or STEP and a PDF, state the form, grade, thickness, finish, and quantities. You receive a reply within 2 business days with a price, a production lead time, and manufacturability comments. Cutting, bending, welding, and coating can be quoted together.",
        "Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote. Use the sheet metal weight calculator to estimate mass before ordering.",
      ],
    },
  ],
  faq: [
    {
      question: "What is the difference between DKP and HRP?",
      answer: "DKP is cold rolled with a smoother surface and tighter thickness tolerance; HRP is hot rolled with mill scale, cheaper and used for structural parts.",
    },
    {
      question: "Are St37 and S235 the same?",
      answer: "They are approximately equivalent, not identical. State the exact designation if a specific standard or certificate is required.",
    },
    {
      question: "Can galvanized sheet be laser cut and bent?",
      answer: "Yes. Cut edges expose bare steel, so note if edge protection is required after cutting.",
    },
    {
      question: "Can you powder coat carbon steel parts?",
      answer: "Yes. Add the colour reference and mark masked areas on the RFQ.",
    },
    {
      question: "How long until I get a price?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
