import type { SeoPage } from "@/content/seo/types";

export const materialDensityTableEn: SeoPage = {
  slug: "material-density-table",
  kind: "tool",
  hub: "/sheet-metal-fabrication",
  related: [
    "sheet-metal-weight-calculator",
    "carbon-steel-sheet",
    "stainless-steel-sheet",
    "aluminum-sheet",
    "copper-brass",
  ],
  meta: {
    title: "Material density table for sheet metal and CNC",
    description:
      "Reference densities for mild steel, stainless, aluminium, copper, and brass in g/cm³ and kg/m³ for mass planning. Quote in 2 business days.",
  },
  crumb: "Material density table",
  kicker: "TABLE",
  h1: "Material density table for sheet metal and machined parts",
  directAnswer:
    "Density is mass per unit volume, and it converts a part's volume into weight. Common handbook values are about 7.85 g/cm³ for mild steel, 8.0 for 304 stainless, 2.70 for aluminium, 8.96 for copper, and 8.5 for brass. Corivo uses them for planning only; alloy variants differ slightly.",
  keyFacts: [
    { label: "Mild / carbon steel (DKP, HRP, St37)", value: "≈ 7.85 g/cm³ (7,850 kg/m³)", verify: true },
    { label: "Stainless steel 304", value: "≈ 8.00 g/cm³ (8,000 kg/m³)", verify: true },
    { label: "Stainless steel 316", value: "≈ 8.00 g/cm³ (8,000 kg/m³)", verify: true },
    { label: "Aluminium (5052, 6061)", value: "≈ 2.70 g/cm³ (2,700 kg/m³)", verify: true },
    { label: "Copper", value: "≈ 8.96 g/cm³ (8,960 kg/m³)", verify: true },
    { label: "Brass", value: "≈ 8.4–8.7 g/cm³ depending on alloy", verify: true },
  ],
  sections: [
    {
      heading: "How to use a density table",
      paragraphs: [
        "A density table lets you estimate the mass of a part before ordering. Multiply the part volume in cubic centimetres by the density in grams per cubic centimetre to get grams, then divide by 1,000 for kilograms. For sheet metal, volume is length times width times thickness, all in the same unit. As a worked example, a 1 m² sheet that is 1 mm thick has a volume of 1,000 cm³, so mild steel at 7.85 g/cm³ comes to about 7.85 kg.",
        "Mass estimates are useful for cartons, freight planning, handling decisions, and cross-checking supplier line items. They are not weigh tickets. Real mass depends on cut-outs, kerf, coating, and how the part is nested, so treat the table as the first step and the weight calculator as the convenient way to apply it.",
      ],
    },
    {
      heading: "Why the same material can have different values",
      paragraphs: [
        "Published densities are rounded handbook values, and alloys vary. Stainless grades differ slightly depending on composition. Aluminium alloys fall between roughly 2.65 and 2.80 g/cm³. Brass spans a range because the copper-zinc ratio changes. Galvanized steel is usually treated as plain steel for planning because the zinc layer is thin, though it adds a small amount of mass.",
        "If your application depends on exact mass, for example for balanced rotating parts or contractual weight limits, ask for the material certificate and weigh a sample. Do not rely on handbook density alone. Note any weight requirement on the RFQ so the workshop knows it matters and can discuss options.",
      ],
      bullets: [
        "Use steel density for galvanized sheet in planning calculations.",
        "Treat brass and aluminium values as ranges rather than single numbers.",
        "Add coating mass separately when it matters, such as heavy powder coat.",
      ],
    },
    {
      heading: "Density and process choice",
      paragraphs: [
        "Density influences more than shipping weight. Aluminium parts are a third of the mass of equivalent steel parts, which matters for handling and transport equipment. Copper and brass are heavy and costly per kilogram, so thin sections or alternative designs can pay off. Stainless is similar in mass to carbon steel but is generally more expensive.",
        "When comparing materials, include thickness changes. A stiffener or flange can allow thinner sheet and offset a higher density or price. Our material pages for carbon steel, stainless steel, aluminium, and copper and brass describe the trade-offs in fabrication and finishing.",
      ],
    },
    {
      heading: "From table to Corivo quote",
      paragraphs: [
        "Use the table and the sheet metal weight calculator to plan mass, then upload the DXF or STEP and a PDF on the quote form. State the material, grade, thickness, and quantities. You receive a reply within 2 business days with price, production lead time, and manufacturability comments.",
        "Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote. If mass appears in a freight or customs document, use certified weights rather than these planning values.",
      ],
    },
  ],
  faq: [
    {
      question: "What is the density of mild steel?",
      answer: "About 7.85 g/cm³, or 7,850 kg/m³, as a common handbook value. Alloys vary slightly.",
    },
    {
      question: "Is stainless steel heavier than mild steel?",
      answer: "Slightly. 304 and 316 are about 8.0 g/cm³ versus about 7.85 for mild steel.",
    },
    {
      question: "How heavy is aluminium compared to steel?",
      answer: "Roughly one third. Aluminium is about 2.70 g/cm³ versus about 7.85 for steel.",
    },
    {
      question: "Can I use these values for contractual weight?",
      answer: "No. They are planning values; request material certificates and weigh samples if exact mass matters.",
    },
    {
      question: "How long until I get a price?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
