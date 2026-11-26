import type { SeoPage } from "@/content/seo/types";

export const sheetMetalFromTurkeyEn: SeoPage = {
  slug: "sheet-metal-from-turkey",
  kind: "guide",
  hub: "/sheet-metal",
  related: [
    "turkey-vs-china-vs-eastern-europe-sourcing",
    "how-to-get-a-sheet-metal-quote",
    "sheet-metal-fabrication",
    "laser-cutting",
    "/request-a-quote",
  ],
  meta: {
    title: "Sourcing sheet metal parts from Turkey: a buyer guide",
    description:
      "What to know before buying laser-cut, bent, and welded sheet metal parts made in Turkey: files, materials, shipping terms, and quoting steps.",
  },
  crumb: "Sheet metal from Turkey",
  kicker: "GUIDE",
  h1: "Sourcing sheet metal parts from Turkey",
  directAnswer:
    "Turkey has an established metalworking sector for laser cutting, bending, welding, and CNC machining, positioned between Europe and Asia. Buyers abroad can send drawings online and receive parts under an agreed Incoterm. Corivo coordinates quotes within 2 business days and production through partner workshops in Turkey.",
  keyFacts: [
    { label: "Typical processes", value: "Laser cutting, bending, welding, CNC machining, powder coat" },
    { label: "Location advantage", value: "Geographically close to Europe, the Middle East, and North Africa" },
    { label: "EU trade relationship", value: "Turkey has a customs union with the EU for industrial goods; check current rules for your product", verify: true },
    { label: "Material names", value: "DKP, HRP, St37, St52 are local shorthand; state the EN/ISO grade on RFQs" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "Why buyers look at Turkey for sheet metal",
      paragraphs: [
        "Turkey has a large domestic metalworking industry that serves automotive, appliance, construction, energy, and machinery customers. For a buyer outside the country, that means a pool of workshops experienced in laser-cut and bent sheet parts, welded frames and enclosures, and machined components. Proximity to Europe and the Middle East shortens transit compared with sourcing from the Far East for many destinations.",
        "Buyers often consider Turkey as an alternative or complement to other regions, particularly when they want shorter shipping routes and the flexibility of small and medium batches. Whether it fits your project depends on quantity, tolerances, timing, and the destination market. A comparison of regions is in our sourcing guide for Turkey versus China versus Eastern Europe.",
      ],
    },
    {
      heading: "Working with Turkish workshops from abroad",
      paragraphs: [
        "Working remotely with a workshop depends on clear files. Send DXF flat patterns for cutting, STEP for bent and welded parts, and a PDF with material, thickness, finish, tolerances, and cosmetic faces. Local material shorthand such as DKP for cold rolled steel, HRP for hot rolled steel, and St37 or St52 for structural steel appears often in Turkish practice. State the equivalent EN or ISO grade on your RFQ to avoid confusion.",
        "Language and units rarely block a project when drawings are clear. Millimetres, standard thread callouts, and an ISO 2768 general tolerance note remove most ambiguity. Where a stricter tolerance matters, mark that dimension and call it out in the PDF. Corivo acts as the point of contact so you do not need to manage each workshop yourself.",
      ],
      bullets: [
        "Send a flat DXF, a folded STEP, and a PDF for every bent part.",
        "State the EN/ISO grade alongside local names such as DKP or St37.",
        "Add the destination country and preferred Incoterm to the RFQ.",
      ],
    },
    {
      heading: "Shipping, customs, and documents",
      paragraphs: [
        "Delivery follows the Incoterm on the quote, such as EXW, FCA, or DAP. Choose the term based on who you want to manage freight and import clearance. Customs requirements depend on the destination, the product, and the origin of materials, so confirm with your customs broker before committing to a date. Shipping times depend on mode and destination and are not guaranteed by this guide.",
        "Shipments include a dimensional report and part photos; material certificates are available when requested on the order. If your industry requires specific documents, such as certificates of origin or conformity statements, state them at the RFQ stage so the quote can address them.",
      ],
    },
    {
      heading: "Getting started with a Corivo quote",
      paragraphs: [
        "Upload your drawings on the quote form, state the material, quantities for this order and annual quantity, destination, and preferred Incoterm. You receive a reply within 2 business days with price, production lead time, and manufacturability comments. Production runs through partner workshops. See how to get a sheet metal quote for a checklist of what to send, and DFM guidelines for design tips.",
      ],
    },
  ],
  faq: [
    {
      question: "Do I need to speak Turkish to order?",
      answer: "No. Send drawings in millimetres with clear notes and Corivo handles coordination. State EN/ISO grades next to local material names.",
    },
    {
      question: "What are DKP, HRP, and St37?",
      answer: "DKP is cold rolled steel sheet, HRP is hot rolled steel sheet, and St37 is a common structural steel designation. Confirm the exact grade on your RFQ.",
    },
    {
      question: "Which Incoterms are available?",
      answer: "Delivery follows the Incoterm on the quote. State your preferred term and destination on the RFQ.",
    },
    {
      question: "Can I get material certificates?",
      answer: "Material certificates are available when requested on the order.",
    },
    {
      question: "How long until I get a quote?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
