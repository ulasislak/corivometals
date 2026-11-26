import type { SeoPage } from "@/content/seo/types";

export const howToGetASheetMetalQuoteEn: SeoPage = {
  slug: "how-to-get-a-sheet-metal-quote",
  kind: "guide",
  hub: "/sheet-metal",
  related: [
    "sheet-metal-dfm-guidelines",
    "laser-cutting",
    "sheet-metal-bending",
    "sheet-metal-from-turkey",
    "/request-a-quote",
  ],
  meta: {
    title: "How to get a sheet metal quote: file checklist",
    description:
      "What to send for an accurate sheet metal quote: DXF, STEP, PDF, material, thickness, finish, quantities, and Incoterm. Reply in 2 business days.",
  },
  crumb: "How to get a quote",
  kicker: "GUIDE",
  h1: "How to get an accurate sheet metal quote",
  directAnswer:
    "An accurate sheet metal quote needs a flat DXF or STEP model, a PDF drawing with material, thickness, finish, and tolerances, the order quantity, an annual estimate, and a delivery destination. Send these to Corivo and you receive a reply within 2 business days with price, lead time, and manufacturability comments.",
  keyFacts: [
    { label: "Geometry files", value: "DXF/DWG flat pattern for cutting; STEP for bent or welded parts" },
    { label: "Drawing", value: "PDF with material, thickness, finish, tolerances, cosmetic faces" },
    { label: "Quantities", value: "Order quantity and estimated annual quantity" },
    { label: "Delivery", value: "Destination and preferred Incoterm" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "The files a workshop actually needs",
      paragraphs: [
        "A workshop quotes from geometry and from instructions. The geometry comes from a flat DXF or DWG for laser cutting, and a STEP model for bent, welded, or machined parts. The instructions come from a PDF drawing that states the material, thickness, finish, tolerances, threads, and any cosmetic faces. Each source answers different questions, so sending only one usually triggers a clarification round.",
        "Keep one part per file or name layers clearly. Use millimetres, remove duplicate lines and construction geometry, and close all contours. If an assembly is involved, add a bill of materials listing each part with its quantity. A clean package saves a day or more on the first reply and reduces mistakes in production.",
      ],
    },
    {
      heading: "Details that change the price",
      paragraphs: [
        "Several inputs have a strong effect on a quote: material grade, thickness, finish, quantity, and tolerances. Naming the grade, not just “steel” or “stainless,” avoids ambiguity. For steel, local shorthand such as DKP, HRP, or St37 should be accompanied by an equivalent EN or ISO grade. Thickness drives cutting speed, bending force, and material cost.",
        "Quantity matters in two ways. The order quantity sets nesting and setup spread, while the annual estimate tells the workshop whether to prepare a repeat-friendly route. State both, even if the annual number is rough. Tolerances tighter than the process normally holds add inspection and sometimes secondary operations, so mark only functional dimensions as critical.",
      ],
      bullets: [
        "Name the material grade and thickness for every part.",
        "State the finish, colour reference, and any masking.",
        "Add order quantity, estimated annual quantity, and target date.",
      ],
    },
    {
      heading: "Notes that prevent surprises",
      paragraphs: [
        "Mark cosmetic faces so brake marks, weld seams, and handling scratches land on hidden sides. Note any special requirement such as leak-tight welds, grain direction, protective film, or packaging. If an NDA is required before the production file is shared, say so and send a one-page placeholder PDF.",
        "Mention the destination and the Incoterm you prefer, such as EXW, FCA, or DAP. Delivery follows the Incoterm on the quote, and customs documents depend on your destination. If you need certificates, a specific inspection, or particular documents, request them at the RFQ stage so the quote addresses them.",
      ],
    },
    {
      heading: "What happens after you send the request",
      paragraphs: [
        "Upload your files on the quote form. Corivo reviews the package and replies within 2 business days with price, production lead time, and manufacturability comments. Those comments flag features that are hard to cut, likely to warp, or better made by another process, and suggest changes before you order.",
        "Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. For design tips before you send, see the DFM guidelines. For bending-specific details, see the bending page.",
      ],
    },
  ],
  faq: [
    {
      question: "Is a PDF enough for a quote?",
      answer: "A PDF can start a quote but a DXF or STEP is needed for accurate cutting and bending. Send both when possible.",
    },
    {
      question: "Do I need to send a bill of materials?",
      answer: "Yes for assemblies with several parts. List each part, material, thickness, and quantity.",
    },
    {
      question: "Can I get a quote with a rough annual quantity?",
      answer: "Yes. An estimate helps the workshop plan a repeat-friendly route; you do not have to commit to it.",
    },
    {
      question: "What if my drawing is incomplete?",
      answer: "Send what you have and say what is unknown. The quote will list assumptions and questions.",
    },
    {
      question: "How long until I get a quote?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
