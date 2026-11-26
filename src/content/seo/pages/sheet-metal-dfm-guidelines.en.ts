import type { SeoPage } from "@/content/seo/types";

export const sheetMetalDfmGuidelinesEn: SeoPage = {
  slug: "sheet-metal-dfm-guidelines",
  kind: "guide",
  hub: "/sheet-metal",
  related: [
    "sheet-metal-bending",
    "laser-cutting",
    "bend-allowance-calculator",
    "iso-2768-tolerance-table",
    "how-to-get-a-sheet-metal-quote",
  ],
  meta: {
    title: "Sheet metal DFM guidelines: holes, bends, tolerances",
    description:
      "Practical design-for-manufacturing rules for laser-cut and bent sheet metal: hole sizes, flange length, relief cuts, tolerances, and weld access.",
  },
  crumb: "Sheet metal DFM",
  kicker: "GUIDE",
  h1: "Sheet metal design for manufacturability (DFM) guidelines",
  directAnswer:
    "Design for manufacturability means shaping a part so it can be cut, bent, welded, and finished reliably at reasonable cost. For sheet metal, keep holes at least as large as the thickness, allow flange length for the tooling, add relief at bends, use consistent radii, and avoid unnecessary tight tolerances. Confirm limits with the workshop.",
  keyFacts: [
    { label: "Minimum hole size", value: "Often at least equal to material thickness; confirm per material", verify: true },
    { label: "Hole to edge / bend distance", value: "Keep holes clear of bends, typically a few thicknesses away", verify: true },
    { label: "Minimum flange length", value: "Depends on die opening; commonly several thicknesses", verify: true },
    { label: "Inside bend radius", value: "Often close to material thickness unless specified; use one radius where possible", verify: true },
    { label: "General tolerance", value: "Reference ISO 2768 (medium or coarse for sheet parts)" },
  ],
  sections: [
    {
      heading: "Cutting features: holes, slots, and corners",
      paragraphs: [
        "Laser cutting handles complex shapes, but geometry still has limits. Holes smaller than the sheet thickness may distort, need drilling, or be declined. Narrow slots and thin tabs can warp from heat, particularly on thin sheet. Avoid placing many small features close together, since heat build-up and distortion add up.",
        "Sharp internal corners concentrate stress and are hard to form in bent parts. Add small corner radii or relief notches where a bend meets a cut-out. Keep text and engraving on a separate layer and say so. Leave enough material between a hole and the sheet edge so the web does not tear or deform during cutting and handling.",
      ],
    },
    {
      heading: "Bending features: radii, flanges, and reliefs",
      paragraphs: [
        "Bends need clearance. Holes and slots too close to a bend line can stretch into ovals, so keep them a few thicknesses away or add a dedicated relief. Flanges shorter than the die opening cannot be formed reliably, so check minimum flange length with the workshop. Where possible, use the same inside radius throughout the part so only one tool setup is needed.",
        "Add relief cuts where a bend ends at a flat edge to prevent tearing. Mind the grain direction on hard aluminium and high-strength steels because tight bends across the grain can crack. Use the bend allowance calculator to check flat lengths, and send the flat DXF with the folded STEP so the workshop can compare them.",
      ],
      bullets: [
        "Keep holes and slots clear of bend lines.",
        "Use consistent inside radii to reduce tooling changes.",
        "Add reliefs at bend ends and at corners where flanges meet.",
      ],
    },
    {
      heading: "Tolerances, welds, and finishing",
      paragraphs: [
        "Tight tolerances on formed or welded features are expensive and often unnecessary. Apply tight limits only to functional dimensions, and reference ISO 2768 for the rest. Bending adds cumulative variation across several bends, and welding adds heat distortion, so a looser class for assembled parts is often more realistic. Our ISO 2768 table explains the classes.",
        "Plan weld access and finishing together with the geometry. Welds need room for a torch and a view of the joint. Parts that will be powder coated need drainage or vent holes in closed sections and masked areas for threads and grounding points. Marking cosmetic faces on the drawing lets the workshop place seams and brake marks on hidden sides.",
      ],
    },
    {
      heading: "Checking the design with Corivo",
      paragraphs: [
        "Corivo includes manufacturability comments in each quote. Upload the DXF, STEP, and PDF on the quote form and you receive a reply within 2 business days with price, production lead time, and notes on features that are hard to cut, likely to warp, or better produced another way. You can then revise before ordering.",
        "Production runs through partner workshops. Shipments include a dimensional report and part photos; material certificates are available when requested on the order. Delivery follows the Incoterm on the quote. See how to get a sheet metal quote for the full list of files to send.",
      ],
    },
  ],
  faq: [
    {
      question: "What is the smallest hole I can cut in sheet metal?",
      answer: "Often about the material thickness, but it depends on material and workshop. The manufacturability note flags holes that need drilling.",
    },
    {
      question: "How close can a hole be to a bend?",
      answer: "Several material thicknesses is a common rule of thumb. Confirm with the workshop for your material and radius.",
    },
    {
      question: "Why are relief cuts needed?",
      answer: "They prevent tearing where a bend ends at an edge or meets another flange.",
    },
    {
      question: "Which tolerance class suits sheet metal?",
      answer: "ISO 2768 medium or coarse is common for formed parts. Mark functional dimensions separately.",
    },
    {
      question: "How long until I get DFM feedback?",
      answer: "Within 2 business days, as part of the quote reply.",
    },
  ],
  updated: "26 November 2026",
};
