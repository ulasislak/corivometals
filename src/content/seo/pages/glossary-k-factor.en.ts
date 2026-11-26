import type { SeoPage } from "@/content/seo/types";

export const glossaryKFactorEn: SeoPage = {
  slug: "glossary-k-factor",
  kind: "glossary",
  term: "K-factor",
  hub: "/sheet-metal",
  related: ["glossary", "bend-allowance-calculator", "sheet-metal-bending", "sheet-metal-dfm-guidelines"],
  meta: {
    title: "K-factor in sheet metal bending: definition",
    description:
      "K-factor locates the neutral axis within sheet thickness and is used to calculate bend allowance and flat pattern length. Plain-language definition.",
  },
  crumb: "K-factor",
  kicker: "GLOSSARY",
  h1: "K-factor",
  directAnswer:
    "K-factor is the ratio of the neutral axis position to the sheet thickness, measured from the inside of a bend. It is used to calculate bend allowance and therefore flat pattern length. The value depends on material, thickness, radius, and tooling, so the workshop's figure governs production.",
  keyFacts: [
    { label: "Definition", value: "Neutral axis distance from inside surface divided by thickness" },
    { label: "Typical range", value: "Roughly 0.3 to 0.5 for many sheet bends", verify: true },
    { label: "Used in", value: "Bend allowance and flat pattern length" },
    { label: "Quote window", value: "2 business days" },
  ],
  sections: [
    {
      heading: "What K-factor is",
      paragraphs: [
        "When sheet metal bends, the outer surface stretches and the inner surface compresses. Between them lies a neutral axis that does not change length. The K-factor expresses where that axis sits as a fraction of the thickness. A K-factor of 0.5 would put it exactly in the middle, while smaller values move it closer to the inside of the bend.",
        "In practice the neutral axis usually sits somewhat inside the middle, so the K-factor is often below 0.5. It depends on material, thickness, bend radius, and how the bend is formed, which is why it cannot be fixed as one universal number.",
      ],
    },
    {
      heading: "How K-factor is used",
      paragraphs: [
        "K-factor goes into the bend allowance formula, which gives the flat length consumed by each bend. A higher K-factor increases the allowance, and a lower one reduces it. Small errors in K-factor change the flat length, and across several bends they add up.",
        "State on the RFQ whether your CAD flat pattern uses a particular K-factor or bend deduction. The workshop confirms against its tooling, and the manufacturability note flags differences. Try the bend allowance calculator to check flat lengths before sending drawings.",
      ],
    },
  ],
  faq: [
    {
      question: "What K-factor should I use?",
      answer: "Many designers start between 0.3 and 0.5. The workshop's value depends on material, radius, and tooling.",
    },
    {
      question: "Is K-factor the same for every material?",
      answer: "No. It varies with material, thickness, radius, and forming method.",
    },
    {
      question: "Where do I find the K-factor in CAD?",
      answer: "Most CAD tools have a sheet metal setting for K-factor or bend deduction. State which one your flat pattern uses.",
    },
    {
      question: "How long until I get a bending quote?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
