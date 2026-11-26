import type { SeoPage } from "@/content/seo/types";

export const turkeyVsChinaVsEasternEuropeSourcingEn: SeoPage = {
  slug: "turkey-vs-china-vs-eastern-europe-sourcing",
  kind: "guide",
  hub: "/sheet-metal",
  related: [
    "sheet-metal-from-turkey",
    "how-to-get-a-sheet-metal-quote",
    "sheet-metal-fabrication",
    "sheet-metal-dfm-guidelines",
    "/request-a-quote",
  ],
  meta: {
    title: "Turkey vs China vs Eastern Europe sheet metal sourcing",
    description:
      "How to compare Turkey, China, and Eastern Europe for sheet metal parts: lead time, batch size, logistics, communication, and total landed cost.",
  },
  crumb: "Sourcing comparison",
  kicker: "GUIDE",
  h1: "Turkey vs China vs Eastern Europe for sheet metal sourcing",
  directAnswer:
    "No region wins on every project. China often suits large volumes and long supply chains, Eastern Europe suits buyers who want EU proximity and tight communication, and Turkey sits between them on distance and batch flexibility. Compare total landed cost, lead time, quality control, and risk rather than unit price alone.",
  keyFacts: [
    { label: "What to compare", value: "Unit price, tooling, lead time, freight, duties, quality control, communication" },
    { label: "Best fit varies", value: "Batch size, tolerance, and destination market decide the sensible region" },
    { label: "Duties and tariffs", value: "Depend on origin, product code, and destination; check before comparing prices", verify: true },
    { label: "Shipping time", value: "Differs by mode and route; get quotes for your lane", verify: true },
    { label: "Quote window", value: "2 business days (Corivo, Turkey-based production)" },
  ],
  sections: [
    {
      heading: "Compare total landed cost, not unit price",
      paragraphs: [
        "A low unit price can disappear once freight, duties, packaging, inspection, and delays are added. Total landed cost is the price of the part delivered to your dock, including transport, insurance, customs duties, import taxes, and any rework or rejection. A fair comparison requests quotes on the same Incoterm, with the same drawing, material grade, finish, and quantity.",
        "Hidden costs include communication time, sample rounds, change handling, and stock held to cover longer lead times. These costs differ by project and by team, which is why a table of generic prices would be misleading. Ask each supplier for a quote with the same assumptions and compare line by line.",
      ],
    },
    {
      heading: "Where each region tends to fit",
      paragraphs: [
        "China has deep supply chains and capacity, which often makes it a strong option for large series, complex multi-material assemblies, and cost-sensitive production. Lead time can be longer once sea freight is included, and communication across time zones needs planning. Quality outcomes depend heavily on supplier selection and inspection routines, not on the country alone.",
        "Eastern Europe offers proximity to Western European markets, easy road transport, and often straightforward customs treatment within the EU. Buyers choose it for shorter shipping, closer working hours, and ease of visits. Prices are typically higher than long-distance options for some products, and capacity varies by workshop. Turkey occupies a middle position, with proximity to Europe and the Middle East, a broad metalworking base, and flexibility for small and medium batches.",
      ],
      bullets: [
        "Large series with stable drawings: compare long-distance options carefully.",
        "Frequent revisions and short lead times: closer regions reduce friction.",
        "Mixed processes in one RFQ: check whether one supplier can coordinate them.",
      ],
    },
    {
      heading: "Quality, communication, and risk",
      paragraphs: [
        "Quality depends on the workshop, its inspection routine, and how clearly the drawing sets expectations. Ask what appears in the dimensional report, whether material certificates are available, and how non-conformances are handled. A clear general tolerance note, such as ISO 2768, helps any region deliver what you expect.",
        "Risk includes lead-time variability, supply disruption, currency movement, and intellectual property concerns. Different regions carry different profiles, and the right balance depends on how critical the part is. For production-critical parts, consider qualifying a second source or ordering a first batch to verify quality before committing to volume.",
      ],
    },
    {
      heading: "How Corivo fits into the comparison",
      paragraphs: [
        "Corivo coordinates sheet metal and CNC production through partner workshops in Turkey. It does not claim to be the right answer for every project. If your project is a fit, upload your drawings on the quote form and receive a reply within 2 business days with price, production lead time, and manufacturability comments. Delivery follows the Incoterm on the quote, and shipments include a dimensional report and part photos.",
        "Use the same drawing and the same Incoterm when you request quotes elsewhere so the numbers can be compared. Our guide to sheet metal sourcing from Turkey and the quote checklist can help you prepare a package that works with any supplier.",
      ],
    },
  ],
  faq: [
    {
      question: "Which region is cheapest?",
      answer: "It depends on batch size, freight, duties, and tolerance. Compare total landed cost on the same Incoterm.",
    },
    {
      question: "Is Eastern Europe always faster than Turkey?",
      answer: "Not always. Transit depends on route, mode, and workshop lead time. Request quotes for your destination.",
    },
    {
      question: "Does quality depend on the country?",
      answer: "Mostly on the supplier, inspection routine, and drawing clarity. Ask for the dimensional report scope up front.",
    },
    {
      question: "Should I use one supplier or several?",
      answer: "For critical parts, consider qualifying a second source. For simple parts, one reliable supplier may be enough.",
    },
    {
      question: "How long does Corivo take to quote?",
      answer: "Within 2 business days of a complete request.",
    },
  ],
  updated: "26 November 2026",
};
