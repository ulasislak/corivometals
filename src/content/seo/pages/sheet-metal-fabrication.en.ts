import type { SeoPage } from "@/content/seo/types";

export const sheetMetalFabricationEn: SeoPage = {
  slug: "sheet-metal-fabrication",
  kind: "service",
  hub: "/sheet-metal",
  related: ["laser-cutting", "sheet-metal-bending", "cnc-machining", "/sheet-metal"],
  meta: {
    title: "Sheet metal fabrication",
    description:
      "Custom sheet metal fabrication for European buyers: laser cutting, bending, welding, and finishing. Quote in 2 business days.",
  },
  crumb: "Sheet metal fabrication",
  kicker: "SERVICE",
  h1: "Sheet metal fabrication for custom parts",
  directAnswer:
    "Sheet metal fabrication turns flat sheet into finished parts through cutting, bending, joining, and finishing. Corivo quotes custom sheet metal from your DXF, DWG, STEP, or PDF within 2 business days, with a price, lead time, and manufacturability note, then produces through partner workshops and ships worldwide.",
  keyFacts: [
    { label: "Typical thickness", value: "0.5–12 mm for most laser and brake work", verify: true },
    { label: "Common materials", value: "Mild steel (DC01, S235), stainless 304/316, aluminium, galvanized" },
    { label: "File formats", value: "DXF, DWG, STEP, PDF" },
    { label: "Quote window", value: "2 business days for a complete request" },
    { label: "Processes", value: "Laser cutting, bending, welding, powder coating, hardware" },
  ],
  sections: [
    {
      heading: "What sheet metal fabrication covers",
      paragraphs: [
        "Sheet metal fabrication is the sequence that starts with a flat blank and ends with a usable part or welded assembly. Cutting defines the outline and internal features. Bending forms flanges, channels, and boxes. Joining adds welds, rivets, or fasteners. Finishing protects or colours the surface. Most industrial covers, brackets, chassis, and cabinets are made this way rather than as solid-machined blocks.",
        "Buyers usually send a drawing set rather than a verbal description. A DXF or DWG of the flat pattern, or a STEP of the folded part, plus a PDF with material grade, thickness, bend notes, and tolerances, is enough to quote. If powder coat, masking, PEM hardware, or weld symbols matter, they belong on the drawing or in the RFQ notes—otherwise the quote prices a bare cut-and-bend part.",
      ],
      bullets: [
        "Flat patterns and folded 3D models both work; state which is master if they disagree.",
        "Call out grain direction, cosmetic faces, and faces that must stay uncoated.",
        "Separate laser-only blanks from assemblies that need welding or finish.",
      ],
    },
    {
      heading: "How European buyers usually specify the job",
      paragraphs: [
        "German and Austrian machine builders typically reference EN grades (DC01, S235JR, 1.4301 / 304) and ISO general tolerances such as ISO 2768-m for non-critical dimensions. Thread callouts, fit classes, and bend radii should follow the drawing—not a shop default. Thickness is stated in millimetres; if the PDF and the DXF disagree, the quote will ask which one rules.",
        "Batch size and estimated annual quantity change the process choice. A one-off prototype may stay laser-cut and hand-finished. A repeating enclosure may justify fixtures, powder-coat colour standards, and hardware kits. Corivo asks for both the quantity on this order and an estimated annual quantity so the quote can reflect repeat production where it applies—not only the first batch.",
      ],
    },
    {
      heading: "From RFQ to shipped parts",
      paragraphs: [
        "A complete request includes a drawing or a clear part description, work email, material, quantity, estimated annual quantity, name, and company. Thickness and delivery date are optional. Corivo replies within 2 business days with a price, a production lead time, and a manufacturability note. Production lead time is separate from the quote window and is written on the quote.",
        "Parts are made through partner workshops. If a feature is outside capability, that is stated inside the quote window rather than after an order starts. Every shipment includes a dimensional report and photos of the parts. Material certificates are available on request when you ask for them on the order. Shipping is worldwide under the Incoterm printed on the quote (EXW, FCA, or DAP).",
      ],
    },
    {
      heading: "When to choose fabrication vs CNC",
      paragraphs: [
        "Fabrication wins on thin walls, large panels, formed channels, and welded boxes where removing solid stock would waste material and time. CNC machining wins on thick prismatic parts, tight positional tolerances across many faces, and turned features that a press brake cannot form. Many programmes mix both: laser-cut and bent sheet for covers, CNC for bosses and shafts. Send the full set in one RFQ when the parts mate; the manufacturability note will say where a bend, weld, or mill step is the cleaner route.",
      ],
    },
  ],
  faq: [
    {
      question: "What files do you need for a sheet metal quote?",
      answer:
        "DXF, DWG, STEP, or PDF. A flat DXF plus a PDF with material, thickness, and bend notes is common. STEP helps for welded or multi-bend parts. Up to 8 files, 20 MB each.",
    },
    {
      question: "How fast is the quote?",
      answer:
        "Within 2 business days of a complete request. The reply includes price, production lead time, and a manufacturability note.",
    },
    {
      question: "Do you only cut, or also bend and weld?",
      answer:
        "Cutting, bending, welding, powder coating, and hardware can be quoted on the same request when the notes and drawings say so.",
    },
    {
      question: "Where do you ship?",
      answer: "Worldwide. The Incoterm on the quote (EXW, FCA, or DAP) defines delivery responsibility.",
    },
    {
      question: "Is there a published price list?",
      answer:
        "No. Prices are written on the quote for your drawing, material, quantity, and finish—not listed on the website.",
    },
  ],
  updated: "26 November 2026",
};
