import type { SeoPage } from "@/content/seo/types";

export const cncMillingEn: SeoPage = {
  slug: "cnc-milling",
  kind: "service",
  hub: "/cnc-parts",
  related: ["cnc-machining", "cnc-turning", "surface-finishing", "iso-2768-tolerance-table", "/request-a-quote"],
  meta: {
    title: "CNC milling services for prismatic parts",
    description:
      "CNC milling for plates, housings, brackets, and pocketed parts in steel, stainless, and aluminium. Quote in 2 business days with DFM notes.",
  },
  crumb: "CNC milling",
  kicker: "SERVICE",
  h1: "CNC milling for plates, housings, and prismatic parts",
  directAnswer:
    "CNC milling removes material with rotating cutters to form flat faces, pockets, slots, holes, and contoured surfaces on block or plate stock. Corivo quotes milled parts from STEP and a PDF drawing within 2 business days and can combine milling with turning, sheet metal, welding, and finishing.",
  keyFacts: [
    { label: "Typical parts", value: "Machined plates, housings, brackets, fixtures, manifolds, flanges" },
    { label: "Materials", value: "Carbon steel, stainless steel, aluminium, brass, copper (grade stated on RFQ)" },
    { label: "Preferred files", value: "STEP for the model; PDF for tolerances, threads, and finish" },
    { label: "Axis count & envelope", value: "Depends on the partner workshop; state the part envelope on the RFQ", verify: true },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "When milling is the right process",
      paragraphs: [
        "Milling suits parts whose geometry is mostly prismatic: flat reference faces, pockets, bosses, slots, drilled and tapped holes, and contours that cannot be made from sheet alone. Compared with laser cutting, milling holds flatness and depth features that a flat blank cannot, and it can start from a plate, a block, or a casting.",
        "A common pattern in industrial equipment is a laser-cut and bent enclosure fitted with a milled mounting plate or manifold. Quoting both on one request keeps interface dimensions consistent and avoids reconciling separate drawing revisions across suppliers.",
      ],
    },
    {
      heading: "Design choices that affect machining time",
      paragraphs: [
        "Machining time is driven by volume removed, pocket depth, tool reach, and the number of setups. Deep, narrow pockets need long tools and light cuts. Sharp internal corners cannot be produced by a round cutter, so specifying a corner radius slightly larger than the tool radius saves time and improves tool life.",
        "Each time the part must be re-clamped to reach another face, a setup is added. Features that can be reached from one or two orientations quote more cleanly than parts needing many. Thin walls and tall ribs can vibrate during cutting; flag them if wall thickness is below what you consider robust.",
      ],
      bullets: [
        "Use standard hole sizes and thread callouts where possible.",
        "Give internal corners a radius instead of a sharp edge.",
        "Mark only the truly critical dimensions with tight tolerances; let ISO 2768 cover the rest.",
      ],
    },
    {
      heading: "Material, stock, and finish",
      paragraphs: [
        "State the material grade and the stock condition if it matters. Plate that is cut by laser and then milled can distort when stress is released, so parts with a flatness requirement should say so and may be quoted with a stress-relief or a machining allowance. Aluminium and mild steel machine readily; stainless steels work-harden and generally cost more machine time per part.",
        "Surface treatment follows machining in most routes: anodizing for aluminium, plating or black oxide for steel, passivation for stainless, or powder coat on exposed faces. Because coatings add thickness, note whether tolerances apply before or after finishing. Our surface finishing page explains the common options.",
      ],
    },
    {
      heading: "How Corivo handles milled-part RFQs",
      paragraphs: [
        "Upload the STEP and PDF on the quote form, state the material, the quantity for this order, and the estimated annual quantity. You receive a reply within 2 business days with a price, a production lead time, and manufacturability comments. Production runs through partner workshops matched to part size and complexity, so the part envelope and the number of faces to machine are worth stating up front.",
        "Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote. For assemblies that mix milled, turned, and sheet metal parts, mention the assembly relationship so interface dimensions are checked together.",
      ],
    },
  ],
  faq: [
    {
      question: "What files do you need for CNC milling?",
      answer: "A STEP model and a PDF drawing with tolerances, threads, material, and finish. Add the quantity and annual volume.",
    },
    {
      question: "Can you mill parts cut from laser-cut plate?",
      answer: "Yes. Say if the blank comes from laser cutting and note any flatness requirement so stress release is considered.",
    },
    {
      question: "Which materials can be milled?",
      answer: "Carbon steel, stainless steel, aluminium, brass, and copper are commonly quoted. Name the grade on the RFQ.",
    },
    {
      question: "Do you support finishing after machining?",
      answer: "Yes. Anodizing, plating, passivation, and powder coat can be requested; state whether tolerances apply before or after the coating.",
    },
    {
      question: "How long until I get a price?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
