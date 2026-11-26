import type { SeoPage } from "@/content/seo/types";

export const stainlessSteelSheetEn: SeoPage = {
  slug: "stainless-steel-sheet",
  kind: "material",
  hub: "/sheet-metal-fabrication",
  related: ["laser-cutting", "sheet-metal-bending", "welding-assemblies", "surface-finishing", "material-density-table"],
  meta: {
    title: "Stainless steel sheet: 304 and 316 fabrication",
    description:
      "Stainless steel sheet 304 and 316 laser cut, bent, and welded to drawing. Send DXF or STEP. Quote in 2 business days with DFM notes.",
  },
  crumb: "Stainless steel sheet",
  kicker: "MATERIAL",
  h1: "Stainless steel sheet fabrication (304 and 316)",
  directAnswer:
    "Stainless steel sheet resists corrosion thanks to its chromium content, which makes grades 304 and 316 common for enclosures, food equipment, and outdoor parts. Corivo quotes stainless sheet that is laser cut, bent, welded, and finished from your drawing within 2 business days. Specify the grade and surface finish on the RFQ.",
  keyFacts: [
    { label: "Common grades", value: "304 (1.4301) and 316 (1.4401); grade stated on RFQ" },
    { label: "Corrosion resistance", value: "316 adds molybdenum and generally resists chlorides better than 304" },
    { label: "Density", value: "About 8.0 g/cm³ for 304; see density table", verify: true },
    { label: "Surface finishes", value: "Mill finish, brushed, polished, or passivated after fabrication (state on drawing)" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "Where stainless steel sheet is the right choice",
      paragraphs: [
        "Stainless steel contains enough chromium to form a thin, self-repairing oxide film that resists rust. That makes it a standard choice for enclosures in humid areas, food and beverage equipment, medical-adjacent housings, outdoor cabinets, and parts that cannot be repainted easily. It also holds a clean appearance, so it is often left uncoated.",
        "The trade-off is cost and fabrication effort. Stainless is more expensive than mild steel per kilogram, tougher on cutting tools, and springs back more after bending. If the part only needs short-term protection and a painted look, carbon steel sheet with powder coat can be the more economical route; the quote can compare options if you ask.",
      ],
    },
    {
      heading: "304 versus 316",
      paragraphs: [
        "Grade 304 is the general-purpose austenitic stainless. It performs well in most indoor and mildly corrosive environments. Grade 316 contains molybdenum, which improves resistance to chlorides such as salt spray, marine air, and some cleaning chemicals. If parts will be used near the coast or in chemical washdown, say so and consider 316.",
        "The grade must be named on the RFQ, along with thickness and surface finish. Other grades exist, including ferritic types that are magnetic and cheaper. If your drawing says only “stainless steel,” the quote will ask for clarification, which delays the reply. A material certificate can be requested on the order when traceability is required.",
      ],
      bullets: [
        "Name the grade, not just “stainless.”",
        "State the finish: mill, brushed, polished, or passivated.",
        "Mention grain direction if a brushed finish is visible.",
      ],
    },
    {
      heading: "Cutting, bending, and welding stainless",
      paragraphs: [
        "Stainless cuts cleanly by laser, but edge colour and heat tint depend on the assist gas and thickness. Parts that will be welded or passivated may need edge cleaning. Bending stainless needs more force and shows more springback than mild steel, so bend angles and inside radii should be confirmed with the workshop rather than assumed from a carbon steel table. Our bending page explains how radii and flanges are reviewed.",
        "Welding stainless works well when heat input is controlled. Excess heat leaves a tint and can reduce local corrosion resistance, so tint removal and passivation are worth requesting on visible or wet-service welds. Brushed or polished surfaces can be scratched during handling, so protective film is commonly specified; add that to the drawing when cosmetic faces matter.",
      ],
    },
    {
      heading: "How Corivo quotes stainless sheet parts",
      paragraphs: [
        "Upload the DXF or STEP and a PDF on the quote form, state the grade, thickness, finish, and quantities. You receive a reply within 2 business days with a price, a production lead time, and manufacturability comments. Cutting, bending, welding, and finishing can be quoted on one request.",
        "Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote. For density and mass planning, see the material density table and the sheet metal weight calculator.",
      ],
    },
  ],
  faq: [
    {
      question: "Which stainless grades do you quote?",
      answer: "304 and 316 are the most common. State the exact grade and thickness on the RFQ so the quote is accurate.",
    },
    {
      question: "Is 316 always better than 304?",
      answer: "Not always. 316 resists chlorides better, but 304 is usually sufficient for indoor use and costs less. Say where the part is used.",
    },
    {
      question: "Can stainless parts be passivated or brushed?",
      answer: "Yes. State the finish on the drawing; brushing, polishing, and passivation can be included in the quote.",
    },
    {
      question: "Can you provide material certificates?",
      answer: "Material certificates are available when requested on the order.",
    },
    {
      question: "How long until I get a price?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
