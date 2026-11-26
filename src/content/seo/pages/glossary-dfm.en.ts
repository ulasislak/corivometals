import type { SeoPage } from "@/content/seo/types";

export const glossaryDfmEn: SeoPage = {
  slug: "glossary-dfm",
  kind: "glossary",
  term: "DFM",
  hub: "/sheet-metal",
  related: ["glossary", "sheet-metal-dfm-guidelines", "how-to-get-a-sheet-metal-quote", "laser-cutting-cost-drivers"],
  meta: {
    title: "DFM: design for manufacturability explained",
    description:
      "DFM, design for manufacturability, shapes a part so it can be made reliably at reasonable cost. Definition and how it applies to sheet metal and CNC.",
  },
  crumb: "DFM",
  kicker: "GLOSSARY",
  h1: "DFM (design for manufacturability)",
  directAnswer:
    "DFM, short for design for manufacturability, is the practice of shaping a part so it can be produced reliably, repeatably, and at reasonable cost with the chosen process. For sheet metal this covers hole sizes, bend clearances, radii, tolerances, weld access, and finishing. A DFM review flags problems before production starts.",
  keyFacts: [
    { label: "Definition", value: "Designing parts so they can be made reliably and economically" },
    { label: "Sheet metal focus", value: "Holes, bends, reliefs, tolerances, weld access, finishing" },
    { label: "When", value: "Before ordering; the quote reply includes manufacturability comments" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "What DFM means in practice",
      paragraphs: [
        "A design can look fine in CAD and still be hard to make. DFM brings process limits into the design stage. In sheet metal, that means keeping holes large enough to cut cleanly, holes away from bend lines, flanges long enough for the tooling, and relief cuts where bends end.",
        "In CNC machining, DFM covers internal corner radii, pocket depth, tool access, and the number of setups. In every process, DFM also means setting tolerances that match function rather than defaulting to the tightest value.",
      ],
    },
    {
      heading: "Getting a DFM review",
      paragraphs: [
        "The cheapest time to change a design is before parts are made. Corivo includes manufacturability comments in every quote, flagging features that are hard to cut, likely to warp, or better made another way. Upload the DXF, STEP, and PDF and you receive a reply within 2 business days.",
        "Read the sheet metal DFM guidelines for practical rules, and the quote checklist for what to send. DFM comments are advice; you decide what to change before ordering.",
      ],
    },
  ],
  faq: [
    {
      question: "What does DFM stand for?",
      answer: "Design for manufacturability: shaping a part so it can be produced reliably and at reasonable cost.",
    },
    {
      question: "Is DFM feedback included in quotes?",
      answer: "Yes. Each quote includes manufacturability comments on features that may be difficult.",
    },
    {
      question: "Does DFM apply to CNC parts too?",
      answer: "Yes. It covers corner radii, pocket depth, tool access, setups, and tolerances.",
    },
    {
      question: "How long until I get DFM feedback?",
      answer: "Within 2 business days, as part of the quote reply.",
    },
  ],
  updated: "26 November 2026",
};
