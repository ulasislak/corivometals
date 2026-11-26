import type { SeoPage } from "@/content/seo/types";

export const cncMachiningEn: SeoPage = {
  slug: "cnc-machining",
  kind: "service",
  hub: "/cnc-parts",
  related: ["sheet-metal-fabrication", "laser-cutting", "sheet-metal-bending", "/cnc-parts"],
  meta: {
    title: "CNC machining services",
    description:
      "CNC milling and turning for custom metal parts. Send STEP and PDF. Quote in 2 business days with a manufacturability note.",
  },
  crumb: "CNC machining",
  kicker: "SERVICE",
  h1: "CNC machining for custom metal parts",
  directAnswer:
    "CNC machining removes material from bar or plate with programmed milling and turning to match your drawing. Corivo quotes CNC parts from STEP and PDF within 2 business days, including price, lead time, and a manufacturability note, and can combine CNC with sheet metal when the same request needs both.",
  keyFacts: [
    { label: "Processes", value: "Milling, turning, threads, and fits to the drawing" },
    { label: "Preferred files", value: "STEP + PDF with tolerances; DXF alone is weak for 3D parts" },
    { label: "Materials", value: "Aluminium, mild steel, stainless; others case by case", verify: true },
    { label: "Capability edge", value: "Complex multi-axis or aerospace-certified work is case by case or declined" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "What belongs on a CNC RFQ",
      paragraphs: [
        "CNC quotes need a 3D solid (STEP) and a 2D PDF that carries tolerances, threads, surface finish, and inspection datums. A DXF of one face is not enough for a prismatic part. Stock size, material grade, and heat treatment—if any—should be explicit. If only some faces are critical, mark them; blanket tight tolerances on every dimension raise cost without improving function.",
        "Threads should use standard callouts (e.g. M8×1.25-6H). Fits (H7/g6 and similar) need the mating part or the class on the drawing. Deep pockets, thin walls, and small internal radii drive tool choices and time—mention if a radius can open up.",
      ],
    },
    {
      heading: "Milling vs turning vs mixed routes",
      paragraphs: [
        "Milling suits prismatic parts, pockets, faces, and hole patterns. Turning suits round parts from bar. Many components need both: turn the OD, mill flats and cross-holes. Sheet-metal covers that bolt to a CNC plate should arrive in one RFQ so hole patterns stay aligned in the manufacturability review.",
        "Prototype quantities often run on 3-axis mills from plate. Repeating annual volume may justify fixtures. Give estimated annual quantity even if the first PO is small—the quote can reflect that path without publishing rates on the website.",
      ],
    },
    {
      heading: "Tolerances and inspection",
      paragraphs: [
        "ISO 2768-m is a common general tolerance when the drawing is silent on non-critical sizes; critical sizes need explicit limits. Geometric tolerances (position, flatness, perpendicularity) should appear where they matter for assembly. Every Corivo shipment includes a dimensional report and photos; ask for a material certificate on the order if you need it with the goods.",
        "If a part is outside partner workshop capability—complex multi-axis, certified-aerospace, or very tight-tolerance work—Corivo tells you inside the quote window. That keeps RFQs honest instead of accepting and failing later.",
      ],
    },
    {
      heading: "How the Corivo CNC quote works",
      paragraphs: [
        "Submit STEP and PDF through the quote form with material, quantity, and annual quantity. You receive a reply within 2 business days. Production lead time is stated on the quote separately from the quote window. Shipping is worldwide under EXW, FCA, or DAP as printed on the quote. Payment terms are advance before production and balance before dispatch, as written on the quote—not taken on the website.",
      ],
    },
  ],
  faq: [
    {
      question: "STEP only, or PDF as well?",
      answer: "Both. STEP defines shape; PDF carries tolerances, threads, and notes that STEP alone does not communicate clearly.",
    },
    {
      question: "Do you machine stainless and aluminium?",
      answer: "Yes for common grades. State the grade. Unusual alloys are quoted case by case.",
    },
    {
      question: "Can CNC and sheet metal be one quote?",
      answer: "Yes—send the set together and explain the mate in the notes.",
    },
    {
      question: "What if the part is too complex?",
      answer:
        "If it is outside partner capability, you are told within the quote window. Multi-axis or aerospace-certified work is case by case or declined.",
    },
    {
      question: "How fast is the quote?",
      answer: "2 business days for a complete request.",
    },
  ],
  updated: "26 November 2026",
};
