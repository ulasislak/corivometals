import type { SeoPage } from "@/content/seo/types";

export const sheetMetalBendingEn: SeoPage = {
  slug: "sheet-metal-bending",
  kind: "service",
  hub: "/sheet-metal-fabrication",
  related: ["laser-cutting", "sheet-metal-fabrication", "cnc-machining", "/sheet-metal"],
  meta: {
    title: "Sheet metal bending",
    description:
      "Press-brake bending for laser-cut blanks. Inside radius, flanges, and bend notes on the quote. Reply in 2 business days.",
  },
  crumb: "Sheet metal bending",
  kicker: "SERVICE",
  h1: "Sheet metal bending and press-brake forming",
  directAnswer:
    "Sheet metal bending forms flanges and profiles on a press brake using a punch and die matched to thickness and inside radius. Corivo quotes bent parts from your flat pattern and bend notes within 2 business days, and can combine laser cutting with bending on one request.",
  keyFacts: [
    { label: "Typical thickness", value: "About 0.8–8 mm for common brake work", verify: true },
    { label: "Inside radius", value: "Often ≈ material thickness unless the drawing states otherwise", verify: true },
    { label: "Inputs", value: "Flat DXF + bend angles/radii on PDF or STEP fold" },
    { label: "K-factor", value: "Shop-standard unless you specify bend deduction", verify: true },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "What the brake needs from your drawing",
      paragraphs: [
        "A press brake needs the flat blank size, bend sequence awareness, flange lengths, angles, and inside radii. If you only send a folded STEP without a flat, the shop must unfold it—possible, but ambiguous K-factors create length errors. Best practice: master flat DXF for cutting, plus a folded view or bend table that lists angle, radius, and direction for each bend.",
        "Minimum flange length is limited by the die opening and punch tip. Very short flanges, deep Z-bends, and hems need explicit notes. Relief cuts at bend ends prevent tearing; if they are missing on thick stainless, the manufacturability note may add them or ask for a redesign.",
      ],
    },
    {
      heading: "Bend allowance and why blanks shrink",
      paragraphs: [
        "When sheet bends, the neutral axis shifts. Bend allowance and bend deduction convert folded dimensions into flat pattern length. European buyers often leave K-factor to the supplier; others print bend deduction tables on the drawing. State which rule applies. Corivo’s bend-allowance calculator page explains the conventional formula so you can check flat lengths before you send the RFQ—without replacing the shop’s process sheet.",
        "Grain direction affects cracking on tight radii in aluminium and some high-strength steels. Mark cosmetic outside faces so brake marks land on the hidden side when possible. For powder-coated parts, decide whether bends happen before or after coat; most industrial work bends bare metal, then coats.",
      ],
    },
    {
      heading: "Tolerances on formed parts",
      paragraphs: [
        "Angular tolerances and flange lengths stack. ISO 2768 covers linear dimensions; formed angles often need an explicit angular tolerance on the drawing. Large panels spring back; stainless springs more than mild steel. If a flange must mate to a CNC plate, give the critical gap and which part is master.",
        "Hardware after bending (PEM nuts, studs) needs keep-out from the bend line so the insert sits on flat stock. Weld nuts on bent boxes should be called after the forming sequence. Send the assembly PDF when order of operations matters.",
      ],
    },
    {
      heading: "Quoting bent work with Corivo",
      paragraphs: [
        "Use the RFQ form, attach flat and folded files, select material and thickness, and list quantities. Within 2 business days you get price, lead time, and a manufacturability note covering bend feasibility, reliefs, and finish. Production is through partner workshops; shipping is worldwide under the quote Incoterm. Dimensional reports and photos ship with the parts.",
      ],
    },
  ],
  faq: [
    {
      question: "Do I need a flat pattern?",
      answer:
        "Strongly preferred. A DXF flat plus bend notes avoids K-factor surprises. STEP-only jobs are quoteable but may need clarification.",
    },
    {
      question: "What inside radius should I draw?",
      answer:
        "Unless your process demands a sharp tool, drawing an inside radius about equal to thickness is a common starting point. Confirm on the quote if you need a specific tool radius.",
    },
    {
      question: "Can you bend after powder coat?",
      answer:
        "Usually parts are formed bare, then coated. If you need post-coat forming, say so—many coats crack on bends.",
    },
    {
      question: "How are bend tolerances handled?",
      answer:
        "Follow the drawing. If only ISO 2768 linear tolerances appear, ask for angular tolerances on critical flanges in the RFQ notes.",
    },
    {
      question: "Quote time?",
      answer: "2 business days for a complete request.",
    },
  ],
  updated: "26 November 2026",
};
