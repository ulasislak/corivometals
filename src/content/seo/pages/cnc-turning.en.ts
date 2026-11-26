import type { SeoPage } from "@/content/seo/types";

export const cncTurningEn: SeoPage = {
  slug: "cnc-turning",
  kind: "service",
  hub: "/cnc-parts",
  related: ["cnc-machining", "cnc-milling", "surface-finishing", "iso-2768-tolerance-table", "/request-a-quote"],
  meta: {
    title: "CNC turning services for round parts",
    description:
      "CNC turning for shafts, bushings, spacers, and threaded round parts. Send STEP and PDF. Quote in 2 business days with manufacturability notes.",
  },
  crumb: "CNC turning",
  kicker: "SERVICE",
  h1: "CNC turning for shafts, bushings, and round parts",
  directAnswer:
    "CNC turning rotates bar stock or a forged blank against a cutting tool to produce cylindrical features such as shafts, bushings, spacers, pins, and threaded bodies. Corivo quotes turned parts from STEP and a PDF drawing within 2 business days and can combine turning with milling, finishing, or sheet metal assemblies.",
  keyFacts: [
    { label: "Typical parts", value: "Shafts, pins, bushings, spacers, flanges, threaded fittings" },
    { label: "Materials", value: "Carbon steel, stainless steel, aluminium, brass, copper (grade stated on RFQ)" },
    { label: "Preferred files", value: "STEP for the model; PDF for tolerances, threads, and surface notes" },
    { label: "Achievable tolerance", value: "Depends on diameter, length, and material; state critical dimensions on the PDF", verify: true },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "What CNC turning is best at",
      paragraphs: [
        "Turning is the most economical way to make parts that are round about a single axis. The workpiece spins while a tool moves along and across it, removing material to form diameters, faces, grooves, tapers, and threads. For rotationally symmetric parts, turning usually beats milling on cycle time because material is removed continuously rather than pocket by pocket.",
        "Typical turned parts include drive shafts, spindles, rollers, spacers, bushings, hose and pipe fittings, standoffs, and pins. Many industrial assemblies pair a turned component with a sheet metal bracket or housing, which is why Corivo handles turning next to laser cutting and bending on the same project when the drawing set calls for it.",
      ],
    },
    {
      heading: "Turning, milling, or both",
      paragraphs: [
        "A part is a turning candidate when its dominant shape is round. If it also needs flats, cross holes, keyways, or off-axis pockets, the quote may combine turning with a milling operation. Parts with mostly prismatic geometry are better quoted as milling from the start. If you are unsure, send the STEP and say so—the manufacturability note will suggest the more sensible route.",
        "Bar stock diameter drives material cost and waste. Designing a shaft so its largest diameter sits close to a standard bar size lets the workshop start from less material. Long, slender parts can deflect under cutting forces, so length-to-diameter ratio is worth flagging early when a tight runout or straightness is required.",
      ],
      bullets: [
        "Mark datum diameters and the faces that locate the part in your assembly.",
        "Call out thread type, pitch, class, and whether threads are cut or rolled.",
        "State concentricity, runout, or straightness only where function demands it.",
      ],
    },
    {
      heading: "Drawing details that speed up a quote",
      paragraphs: [
        "A turned-part PDF should show every critical diameter with its tolerance, the overall length, chamfers and radii, thread callouts, and any surface roughness requirement. General tolerances can reference ISO 2768 so the workshop knows what applies to dimensions without individual limits. Our ISO 2768 tolerance table explains how those classes are normally read.",
        "Material and condition matter as much as shape. Name the grade, for example carbon steel, 304 or 316 stainless, 6061 aluminium, or brass, and note if heat treatment, plating, anodizing, or passivation follows machining. Finishing steps change the final dimensions, so say whether the tolerance applies before or after the coating.",
      ],
    },
    {
      heading: "How Corivo handles turned-part RFQs",
      paragraphs: [
        "Upload the STEP and PDF on the quote form, state the material, the quantity for this order, and the estimated annual quantity. You receive a reply within 2 business days with a price, a production lead time, and manufacturability comments. Production runs through partner workshops selected for the part type and volume.",
        "Prototype quantities and repeat production are both normal. Giving the annual quantity helps the quote consider fixturing and process choices for repeats. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote.",
      ],
    },
  ],
  faq: [
    {
      question: "What files do you need for turned parts?",
      answer:
        "A STEP model plus a PDF drawing with tolerances, threads, material, and finish. A STEP alone is acceptable for a first price if you state the material and quantity.",
    },
    {
      question: "Can turning and milling be quoted together?",
      answer:
        "Yes. Parts that are mostly round but need flats, cross holes, or keyways are commonly quoted with both operations in one request.",
    },
    {
      question: "Which materials can be turned?",
      answer:
        "Carbon steel, stainless steel, aluminium, brass, and copper are commonly quoted. State the exact grade on the RFQ so the quote reflects it.",
    },
    {
      question: "Do you quote prototypes and small batches?",
      answer: "Yes. State the order quantity and the likely annual quantity so repeat production can be considered.",
    },
    {
      question: "How long until I get a price?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
