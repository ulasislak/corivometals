import type { SeoPage } from "@/content/seo/types";

export const laserCuttingEn: SeoPage = {
  slug: "laser-cutting",
  kind: "service",
  hub: "/sheet-metal-fabrication",
  related: ["sheet-metal-fabrication", "sheet-metal-bending", "cnc-machining", "/sheet-metal"],
  meta: {
    title: "Laser cutting services",
    description:
      "Laser cutting for mild steel, stainless, and aluminium sheet. Send DXF or STEP. Quote in 2 business days with manufacturability notes.",
  },
  crumb: "Laser cutting",
  kicker: "SERVICE",
  h1: "Laser cutting for sheet metal parts",
  directAnswer:
    "Laser cutting separates sheet metal along programmed paths with a focused beam, producing accurate blanks and internal cut-outs. Corivo quotes laser-cut parts from DXF, DWG, STEP, or PDF within 2 business days and can combine cutting with bending, welding, and finishing when your drawing set requires it.",
  keyFacts: [
    { label: "Typical thickness", value: "About 0.5–20 mm depending on grade and machine", verify: true },
    { label: "Materials", value: "Mild steel, stainless 304/316, aluminium, galvanized" },
    { label: "Preferred files", value: "DXF/DWG flat pattern; PDF for notes; STEP for context" },
    { label: "Kerf & nesting", value: "Priced from nested yield; avoid tiny gaps between parts" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "When laser cutting is the right first step",
      paragraphs: [
        "Laser cutting is the default blanking method for industrial sheet parts that need clean edges, tight internal openings, and repeatable outlines. Compared with punching, lasers handle complex contours and frequent design changes without dedicated tooling. Compared with waterjet, lasers are usually faster on mid-thickness steel and stainless when heat-affected zones are acceptable.",
        "Typical laser parts include mounting plates, brackets in the flat, gland plates, decorative panels, and the flat patterns that later go to a press brake. If the finished part is a bent box, still send the flat DXF for cutting and the folded view for bends—shops nest from the flat, not from the 3D alone.",
      ],
    },
    {
      heading: "Geometry that quotes cleanly",
      paragraphs: [
        "Closed contours, consistent layer conventions, and millimetre units prevent the most common RFQ delays. Remove double lines and construction geometry. Holes smaller than material thickness may need drilling or may be declined—call them out. Slot widths, tab features, and engraved marks should be drawn as separate layers or clearly labelled so they are not cut as through-features by mistake.",
        "Edge quality depends on thickness, grade, assist gas, and feed. Cosmetic faces and grain direction belong on the PDF. For stainless and aluminium, note if oxide, burr, or film must be removed before powder coat or assembly. Galvanized sheet needs notes if the cut edge must be touch-up coated after cutting exposes the core.",
      ],
      bullets: [
        "One part per file or clearly named layers; do not bury multiple unrelated parts without a BOM.",
        "State quantity per unique blank and estimated annual quantity.",
        "If an NDA is required before the production file, say so in notes and attach a one-page placeholder PDF.",
      ],
    },
    {
      heading: "Nesting, scrap, and batch economics",
      paragraphs: [
        "Laser price tracks cut length, pierce count, sheet utilisation, and material grade. Small batches on thick plate cost more per piece than nested repeating blanks on thin sheet. Providing estimated annual quantity lets the quote consider whether a larger sheet nest or a reserved process route makes sense for repeats—without publishing a generic price list.",
        "Combining laser blanks with bending on the same RFQ avoids mismatched flanges. If only cutting is needed, say “flat only” in the notes so the quote does not assume brake work. Corivo’s manufacturability note flags features that are hard to cut, likely to warp, or better moved to milling or punching.",
      ],
    },
    {
      heading: "How Corivo quotes laser work",
      paragraphs: [
        "Upload the drawing on the quote form, select the material, and give this-order and annual quantities. You receive a reply within 2 business days with price, production lead time, and manufacturability comments. Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote.",
      ],
    },
  ],
  faq: [
    {
      question: "DXF or STEP for laser cutting?",
      answer:
        "DXF or DWG of the flat pattern is preferred for nesting. STEP helps when bends or assemblies surround the blank. Always add a PDF with thickness and material.",
    },
    {
      question: "Can you cut stainless and aluminium?",
      answer: "Yes—stainless 304/316, aluminium sheet, mild steel, and galvanized are commonly quoted. State the grade on the RFQ.",
    },
    {
      question: "Do you quote cutting only?",
      answer: "Yes. Write that the parts stay flat if no bending or welding is required.",
    },
    {
      question: "What about very small holes?",
      answer:
        "Holes much smaller than thickness may need secondary drilling or may be outside capability. The manufacturability note will say which.",
    },
    {
      question: "How long until I get a price?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
