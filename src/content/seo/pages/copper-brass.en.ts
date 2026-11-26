import type { SeoPage } from "@/content/seo/types";

export const copperBrassEn: SeoPage = {
  slug: "copper-brass",
  kind: "material",
  hub: "/sheet-metal-fabrication",
  related: ["laser-cutting", "sheet-metal-bending", "cnc-turning", "surface-finishing", "material-density-table"],
  meta: {
    title: "Copper and brass sheet and machined parts",
    description:
      "Copper and brass sheet cut, bent, and machined to drawing for electrical and decorative parts. Quote in 2 business days with DFM notes.",
  },
  crumb: "Copper and brass",
  kicker: "MATERIAL",
  h1: "Copper and brass for electrical, thermal, and decorative parts",
  directAnswer:
    "Copper conducts electricity and heat better than most engineering metals, while brass is a copper-zinc alloy that machines easily and keeps a warm appearance. Corivo quotes copper and brass sheet parts and turned or milled components within 2 business days. State the alloy, temper, thickness, and any finish on the RFQ.",
  keyFacts: [
    { label: "Copper density", value: "About 8.96 g/cm³; see density table", verify: true },
    { label: "Brass density", value: "About 8.5 g/cm³, depending on alloy; see density table", verify: true },
    { label: "Typical uses", value: "Busbars, contacts, heat spreaders, fittings, decorative panels, turned parts" },
    { label: "Laser cutting", value: "Reflective metals; capability depends on thickness and workshop, confirmed in quote", verify: true },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "What copper and brass are used for",
      paragraphs: [
        "Copper is chosen for electrical conductivity and heat transfer. Typical parts include busbars, grounding straps, contact plates, heat spreaders, and thermal interface components. It is also used for decorative panels and architectural details where its colour and ageing are part of the design.",
        "Brass, an alloy of copper and zinc, is easier to machine than pure copper and offers good wear and corrosion resistance. It is common for fittings, bushings, valve components, terminals, inserts, and decorative hardware. Many brass parts are turned from bar stock, while flatter brass parts and copper busbars are cut and bent from sheet.",
      ],
    },
    {
      heading: "Fabrication considerations",
      paragraphs: [
        "Copper and brass are softer than steel and form easily, but they scratch and mark readily, so protective film and careful handling matter for visible faces. Pure copper work-hardens during bending, and tight bends in hard tempers can crack. Name the alloy and temper on the RFQ so bends are reviewed against the real material.",
        "Both metals reflect laser light and conduct heat strongly, which makes thermal cutting more demanding than on steel. Whether a part is cut by laser or by another method depends on thickness and the partner workshop, and the manufacturability note will say what is appropriate. For busbars with punched or drilled holes, state hole positions and edge distances carefully.",
      ],
      bullets: [
        "State alloy and temper, for example copper or a named brass, not only “copper/brass.”",
        "Mark cosmetic faces so protective film and handling are specified.",
        "State plating requirements for electrical contact surfaces.",
      ],
    },
    {
      heading: "Machined copper and brass parts",
      paragraphs: [
        "Brass is a popular choice for CNC turning because it cuts freely and gives good surface finish. Copper machines less easily because it is gummy and tends to produce long chips, so tolerances and finishes on copper parts should be confirmed during quoting. Send the STEP and a PDF with tolerances, threads, and surface requirements.",
        "Finishes include plating, such as tin or nickel for electrical or corrosion needs, as well as polishing, brushing, or clear lacquer to preserve appearance. If a part is a contact surface, say so, since coating thickness and flatness can matter. Our surface finishing page explains how to describe coatings and masking on a drawing.",
      ],
    },
    {
      heading: "How Corivo quotes copper and brass parts",
      paragraphs: [
        "Upload the DXF, STEP, and PDF on the quote form, state the alloy, temper, thickness or stock size, finish, and quantities. You receive a reply within 2 business days with a price, a production lead time, and manufacturability comments. Cutting, bending, machining, and finishing can be combined in one request where the route allows.",
        "Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote. Use the material density table for mass estimates, noting that alloy variants shift density slightly.",
      ],
    },
  ],
  faq: [
    {
      question: "Can copper and brass be laser cut?",
      answer: "It depends on thickness and the workshop because both are reflective. The quote will confirm the cutting method.",
    },
    {
      question: "What files do I send for copper or brass parts?",
      answer: "A DXF or STEP and a PDF with alloy, temper, thickness, finish, and quantities.",
    },
    {
      question: "Can you plate copper busbars?",
      answer: "Plating such as tin or nickel can be requested on the RFQ; state the contact surfaces.",
    },
    {
      question: "Is brass better for turned parts?",
      answer: "Brass machines more freely than copper, so it is a common choice for turned parts. State the alloy on the RFQ.",
    },
    {
      question: "How long until I get a price?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
