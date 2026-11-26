import type { SeoPage } from "@/content/seo/types";

export const surfaceFinishingEn: SeoPage = {
  slug: "surface-finishing",
  kind: "service",
  hub: "/sheet-metal-fabrication",
  related: ["sheet-metal-fabrication", "welding-assemblies", "cnc-milling", "stainless-steel-sheet", "aluminum-sheet"],
  meta: {
    title: "Surface finishing: powder coat, anodizing, plating",
    description:
      "Powder coat, anodizing, plating, and passivation for sheet metal and machined parts. Add the finish to your RFQ. Quote in 2 business days.",
  },
  crumb: "Surface finishing",
  kicker: "SERVICE",
  h1: "Surface finishing for sheet metal and machined parts",
  directAnswer:
    "Surface finishing protects metal parts from corrosion and sets their appearance. Common routes include powder coat, anodizing for aluminium, plating or black oxide for steel, and passivation for stainless. Corivo quotes finishing together with cutting, bending, machining, and welding within 2 business days when the finish is stated on the RFQ.",
  keyFacts: [
    { label: "Common finishes", value: "Powder coat, anodizing, zinc or other plating, black oxide, passivation, brushing" },
    { label: "Colour reference", value: "State RAL or sample reference for powder coat" },
    { label: "Coating thickness", value: "Typically adds tens of microns on coated faces; confirm for tight-fit features", verify: true },
    { label: "Masking", value: "Mark threads, grounding points, and mating faces that must stay uncoated" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "Choosing a finish for the part and the environment",
      paragraphs: [
        "The right finish depends on the base metal, the operating environment, and what the part looks like in service. Mild steel needs a barrier such as powder coat, paint, or plating because bare steel rusts. Aluminium forms a natural oxide, but anodizing thickens it for wear resistance and allows colour. Stainless steel resists corrosion on its own, though welding or machining can leave contamination that passivation removes.",
        "Indoor equipment often only needs powder coat for appearance and light protection. Outdoor, washdown, or chemically exposed parts need more thought about coating system, edge coverage, and drainage. If the part will live somewhere demanding, describe the environment on the RFQ so the quote can reflect a suitable route rather than a default one.",
      ],
    },
    {
      heading: "Powder coat on sheet metal parts",
      paragraphs: [
        "Powder coat is the usual finish for enclosures, brackets, and covers. Parts are cleaned, pre-treated, coated with electrostatically charged powder, and cured. It gives a durable, uniform film in many colours and textures. Specify a colour reference and gloss level, and mention if one face is cosmetic and others can be less critical.",
        "Because the film has thickness, tight-fit features such as hinge pins, slots for sliding parts, and press-fit holes can bind after coating. Mask or oversize them, and say which on the drawing. Threads and grounding points normally need masking to preserve electrical contact. Sharp edges coat thinly, so a small edge break helps coverage and durability.",
      ],
      bullets: [
        "Name the colour reference and gloss; add texture if required.",
        "Mark masked areas, threads, and electrical contact surfaces.",
        "Add drain and vent holes on closed sections so pre-treatment does not get trapped.",
      ],
    },
    {
      heading: "Anodizing, plating, and passivation",
      paragraphs: [
        "Anodizing converts the surface of aluminium into a hard oxide layer and can be dyed. It suits machined and sheet aluminium parts but behaves differently across alloys, so state the alloy. Plating, such as zinc, protects steel parts and fasteners, and black oxide gives a thin dark finish with limited corrosion protection unless oiled. Passivation treats stainless steel to restore surface corrosion resistance after fabrication.",
        "Finishing choices interact with earlier steps. Weld spatter, heavy burrs, and oil from machining affect adhesion and appearance. Describing cosmetic faces and the finish together with the geometry lets the workshop sequence deburring, grinding, and coating correctly, which is cheaper than correcting a finish that was chosen after the parts were made.",
      ],
    },
    {
      heading: "How Corivo quotes finishing",
      paragraphs: [
        "Add the finish, colour or specification, and any masking to the quote form or the PDF. Finishing is quoted together with cutting, bending, machining, or welding, so the price and lead time reflect the whole route. You receive a reply within 2 business days with price, production lead time, and manufacturability comments.",
        "Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote. If a coating specification or test is required, state it up front so it can be confirmed before ordering.",
      ],
    },
  ],
  faq: [
    {
      question: "Can you powder coat in a specific RAL colour?",
      answer: "State the RAL or a sample reference on the RFQ. Availability and finish is confirmed in the quote.",
    },
    {
      question: "Does the coating change part dimensions?",
      answer: "Yes, coatings add thickness. Say whether tolerances apply before or after finishing, and mark features to mask.",
    },
    {
      question: "Is anodizing available for aluminium sheet?",
      answer: "Anodizing can be requested for aluminium parts. State the alloy and any colour requirement on the RFQ.",
    },
    {
      question: "Can stainless steel be passivated?",
      answer: "Yes, passivation can be added to the quote when the drawing calls for it, typically after welding or machining.",
    },
    {
      question: "Do you quote finishing without fabrication?",
      answer: "Finishing is normally quoted with the parts it applies to. Send the drawing and say if parts arrive from elsewhere.",
    },
  ],
  updated: "26 November 2026",
};
