import type { SeoPage } from "@/content/seo/types";

export const weldingAssembliesEn: SeoPage = {
  slug: "welding-assemblies",
  kind: "service",
  hub: "/enclosures",
  related: ["sheet-metal-fabrication", "laser-cutting", "sheet-metal-bending", "surface-finishing", "/enclosures"],
  meta: {
    title: "Welding assemblies and welded sheet metal parts",
    description:
      "Welded frames, enclosures, and sheet metal assemblies from your drawings. Send STEP and PDF. Quote in 2 business days with manufacturability notes.",
  },
  crumb: "Welding assemblies",
  kicker: "SERVICE",
  h1: "Welding assemblies for frames, enclosures, and sheet metal parts",
  directAnswer:
    "Welding assemblies join laser-cut, bent, and machined components into frames, enclosures, and fixtures. Corivo quotes welded assemblies from a STEP assembly model and a PDF drawing with weld notes within 2 business days, and can include finishing such as powder coat when the drawing calls for it.",
  keyFacts: [
    { label: "Typical assemblies", value: "Enclosures, frames, brackets, guards, stands, fixtures" },
    { label: "Materials", value: "Mild steel, stainless steel, aluminium (state grade and thickness)" },
    { label: "Preferred files", value: "STEP assembly; PDF with weld symbols, finish, and cosmetic faces" },
    { label: "Weld processes", value: "MIG and TIG are common; confirm per assembly with the partner workshop", verify: true },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "What a welded assembly includes",
      paragraphs: [
        "A welded assembly starts with individual parts: laser-cut blanks, bent flanges, tubes, and sometimes machined blocks. These are fitted, tacked, welded, and often ground or dressed before finishing. The result might be an equipment enclosure, a machine frame, a guard, or a stand where several parts must end up square, flat, and correctly spaced.",
        "Because welding adds heat and heat distorts metal, the quality of a weldment depends as much on part design and fixturing as on the weld itself. Tabs, slots, and self-locating features cut into the blanks help parts align without relying on a hand-held square, which improves repeatability across a batch.",
      ],
    },
    {
      heading: "Giving the drawing the weld information it needs",
      paragraphs: [
        "A weld drawing should show which joints are welded, the weld type, and the length. Continuous seams, stitch welds, and spot welds produce different strength, distortion, and cosmetic results. If a weld must be leak-tight, such as a tank or a sealed enclosure, say so explicitly because it changes how the joint is prepared and inspected.",
        "Cosmetic requirements deserve their own note. If a weld must be ground flush and blended on a visible face, the PDF should mark that face, since grinding adds labour and affects the finish that follows. For stainless steel, state whether a brushed, polished, or passivated finish is expected after welding.",
      ],
      bullets: [
        "Mark leak-tight or structural welds separately from tack or stitch welds.",
        "Show which faces are cosmetic and which may carry visible weld marks.",
        "State flatness, squareness, or overall tolerance for the finished assembly.",
      ],
    },
    {
      heading: "Material combinations and finishing",
      paragraphs: [
        "Mild steel welds readily and is typically finished with powder coat or paint to prevent corrosion. Stainless steel welds well but needs care to preserve corrosion resistance, so heat tint removal and passivation are worth discussing. Aluminium welds differently from steel and is more sensitive to distortion; the RFQ should name the alloy and temper. Mixing dissimilar metals in one weld is not generally advisable.",
        "Finishing should be planned together with welding. Powder coat requires clean, ground surfaces, and drainage or vent holes may be needed so coating fluids and pre-treatment do not become trapped in closed sections. Our surface finishing page covers common coating routes and how to describe them on a drawing.",
      ],
    },
    {
      heading: "How Corivo quotes welded assemblies",
      paragraphs: [
        "Upload the STEP assembly and the PDF on the quote form, include a bill of materials if there are many parts, and give the quantity for this order plus the estimated annual quantity. You receive a reply within 2 business days with a price, a production lead time, and manufacturability comments about weld access, distortion risk, and finishing.",
        "Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote. If you need a specific welding standard or weld inspection, state it on the RFQ so it can be confirmed before you order.",
      ],
    },
  ],
  faq: [
    {
      question: "Can you weld assemblies that include laser-cut and bent parts?",
      answer: "Yes. Send the STEP assembly and a PDF with weld notes so cutting, bending, and welding are quoted together.",
    },
    {
      question: "Which metals can be welded?",
      answer: "Mild steel, stainless steel, and aluminium are commonly quoted. State the grade and thickness for each part.",
    },
    {
      question: "Can welds be ground and finished?",
      answer: "Yes, where the drawing asks for it. Mark the cosmetic faces so grinding and finishing are included in the quote.",
    },
    {
      question: "Do you quote powder coat after welding?",
      answer: "Yes. Add the finish and colour reference on the RFQ; see surface finishing for the usual options.",
    },
    {
      question: "How long until I get a price?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
