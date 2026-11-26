import type { SeoPage } from "@/content/seo/types";

export const aluminumSheetEn: SeoPage = {
  slug: "aluminum-sheet",
  kind: "material",
  hub: "/sheet-metal-fabrication",
  related: ["laser-cutting", "sheet-metal-bending", "surface-finishing", "welding-assemblies", "material-density-table"],
  meta: {
    title: "Aluminum sheet fabrication: cut, bend, weld",
    description:
      "Aluminum sheet laser cut, bent, welded, and finished to drawing. Send DXF or STEP with alloy. Quote in 2 business days with DFM notes.",
  },
  crumb: "Aluminum sheet",
  kicker: "MATERIAL",
  h1: "Aluminum sheet fabrication for light, corrosion-resistant parts",
  directAnswer:
    "Aluminum sheet weighs roughly a third of steel, resists atmospheric corrosion, and takes anodizing or powder coat well, which suits housings, panels, and brackets where mass matters. Corivo quotes laser-cut, bent, welded, and finished aluminum sheet parts within 2 business days. State the alloy, temper, and thickness on the RFQ.",
  keyFacts: [
    { label: "Common alloys", value: "5052, 6061, and 1050 are typical; alloy stated on RFQ", verify: true },
    { label: "Density", value: "About 2.70 g/cm³; see density table", verify: true },
    { label: "Bending", value: "Alloy and temper strongly affect minimum bend radius and cracking risk" },
    { label: "Surface finishes", value: "Anodizing, powder coat, brushed, or mill finish (state on drawing)" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "Why choose aluminum sheet",
      paragraphs: [
        "Aluminum offers a high strength-to-weight ratio, good thermal conductivity, and natural corrosion resistance. Typical sheet parts include equipment housings, front panels, heat spreaders, covers, brackets for lightweight assemblies, and transport or portable equipment. It is non-magnetic and takes decorative finishes well, which makes it popular for visible faces.",
        "Compared with steel, aluminum is lighter but softer, scratches more easily, and has a lower stiffness for a given thickness. If a part must carry structural load or resist denting, compare with carbon steel or stainless steel. Where mass or corrosion in outdoor use matters more than raw stiffness, aluminum is often the better fit.",
      ],
    },
    {
      heading: "Alloy and temper decide how it bends",
      paragraphs: [
        "Not all aluminum sheet behaves the same. Softer alloys and tempers bend tightly with little risk, while harder tempers can crack on a tight bend, particularly across the grain direction. Alloys such as 5052 are commonly chosen for bent sheet because of their formability, while 6061 is often used where strength or machining matters more. Always name the alloy and temper on the RFQ so bends are reviewed against the right material.",
        "Aluminum also springs back, though differently from steel. Minimum inside radius, bend direction relative to the rolling direction, and flange length should be confirmed with the workshop rather than reused from a steel drawing. Our sheet metal bending page and bend allowance calculator help estimate flat patterns, and the workshop can confirm tooling.",
      ],
      bullets: [
        "State alloy, temper, and thickness, not just “aluminum.”",
        "Allow generous inside radii on hard tempers to reduce cracking risk.",
        "Note grain direction if a bend is close to a cosmetic or load-bearing feature.",
      ],
    },
    {
      heading: "Cutting, welding, and finishing aluminum",
      paragraphs: [
        "Aluminum cuts by laser, but its reflectivity and thermal conductivity make it behave differently from steel at the edge, so edge quality and burr should be discussed for cosmetic parts. Thin sheet can distort when many cuts are made close together, and the manufacturability note will flag geometry likely to warp.",
        "Aluminum welds well with the right process and filler but is more sensitive to heat distortion and cleanliness than steel. Anodizing adds a hard, corrosion-resistant layer and permits colour, but welds and different alloys can anodize with different appearance, so consider this when a visible assembly mixes parts. Powder coat is the usual alternative. See surface finishing for how to describe masked threads and cosmetic faces.",
      ],
    },
    {
      heading: "How Corivo quotes aluminum sheet parts",
      paragraphs: [
        "Upload a DXF or STEP and a PDF on the quote form, state the alloy, temper, thickness, finish, and quantities. You receive a reply within 2 business days with price, production lead time, and manufacturability comments. Cutting, bending, welding, and finishing can be combined in one request.",
        "Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote. For mass planning, use the sheet metal weight calculator with the aluminum density.",
      ],
    },
  ],
  faq: [
    {
      question: "Which aluminum alloy should I specify?",
      answer: "Name the alloy and temper you need. If unsure, describe the application and the workshop can suggest one in the quote.",
    },
    {
      question: "Can aluminum sheet be anodized?",
      answer: "Anodizing can be requested; state the alloy and any colour or thickness requirement on the RFQ.",
    },
    {
      question: "Does aluminum crack when bent?",
      answer: "It can on hard tempers with tight radii. Name the temper and flag critical bends so they are reviewed.",
    },
    {
      question: "Can you weld aluminum assemblies?",
      answer: "Yes, welded aluminum assemblies can be quoted. Send the STEP assembly and a PDF with weld notes.",
    },
    {
      question: "How long until I get a price?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
