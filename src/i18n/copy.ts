import type { SpecTableData } from "@/content/specs";
import { applyGerman } from "@/i18n/german";
import type { Locale } from "@/i18n/locale";

export type FaqItem = { question: string; answer: string };
export type Step = { n: string; title: string; text: string };
export type Claim = { label: string; value: string };
export type Industry = {
  id: string;
  title: string;
  lede: string;
  parts: string[];
  send: string;
  href: string;
  linkLabel: string;
};
export type NavLink = { href: string; label: string };

export type Copy = {
  description: string;
  ogTitle: string;
  date: string;
  notPublished: string;
  chrome: {
    skip: string;
    homeAria: string;
    menu: string;
    close: string;
    quoteShort: string;
    quote: string;
    privacy: string;
    groups: { products: string; company: string; legal: string };
    header: NavLink[];
    products: NavLink[];
    company: NavLink[];
    legal: NavLink[];
    footerNote: string;
    language: string;
  };
  cta: { kicker: string; title: string; text: string };
  home: {
    title: string;
    eyebrow: string;
    h1: string;
    lede: string;
    trust: string;
    processKicker: string;
    processTitle: string;
    processText: string;
    productsKicker: string;
    productsTitle: string;
    productsText: string;
    families: Array<{ title: string; text: string; href: string; link: string; table: "tolerance" | "finish" | "cnc" }>;
    whyKicker: string;
    whyTitle: string;
    faqKicker: string;
    faqTitle: string;
    faqLink: string;
    flat: string;
  };
  claims: Claim[];
  steps: Step[];
  reasons: Array<{ title: string; text: string }>;
  quoteContents: string[];
  how: { title: string; description: string; kicker: string; heading: string; lede: string; crumb: string; detail: string[]; contains: string; note: string };
  faq: { title: string; description: string; kicker: string; heading: string; lede: string; crumb: string; items: FaqItem[] };
  industries: { title: string; description: string; kicker: string; heading: string; lede: string; crumb: string; items: Industry[] };
  about: { title: string; description: string; kicker: string; heading: string; lede: string; crumb: string; paragraphs: string[] };
  sheet: {
    title: string;
    description: string;
    kicker: string;
    heading: string;
    lede: string;
    crumb: string;
    coversTitle: string;
    covers: string[];
    drawingTitle: string;
    send: string[];
    drawingNoteBefore: string;
    drawingNoteLink: string;
    drawingNoteAfter: string;
    capabilitiesTitle: string;
  };
  enclosures: {
    title: string;
    description: string;
    kicker: string;
    heading: string;
    lede: string;
    crumb: string;
    coversTitle: string;
    covers: string[];
    sheetLink: string;
    cncLink: string;
    bridgeBefore: string;
    bridgeMiddle: string;
    bridgeAfter: string;
    coatTitle: string;
    coat: string[];
    arrivesTitle: string;
    arrives: string[];
    capabilitiesTitle: string;
  };
  cnc: {
    title: string;
    description: string;
    kicker: string;
    heading: string;
    lede: string;
    crumb: string;
    simpleTitle: string;
    simple: string[];
    sheetLink: string;
    enclosureLink: string;
    withBefore: string;
    withMiddle: string;
    withAfter: string;
    gradesTitle: string;
    grades: string;
    scopeTitle: string;
    scope: string[];
  };
  quotePage: { title: string; description: string; kicker: string; heading: string; lede: string; crumb: string };
  thanks: { title: string; description: string; kicker: string; heading: string; body: string; reference: string; referenceMissing: string; back: string };
  missing: { title: string; body: string; home: string; quote: string };
  imprint: { title: string; description: string; kicker: string; heading: string; lede: string; crumb: string; labels: string[]; closing: string };
  privacy: {
    title: string;
    description: string;
    kicker: string;
    heading: string;
    lede: string;
    crumb: string;
    updated: string;
    who: string;
    controller: string;
    emailLead: string;
    noEmail: string;
    collectTitle: string;
    collect: string[];
    whyTitle: string;
    why: string;
    howLongTitle: string;
    howLong: string;
    processorsTitle: string;
    processorsLead: string;
    supabase: string;
    resend: string;
    host: string;
    policy: string;
    region: string;
    cookiesTitle: string;
    cookies: string;
    analyticsOff: string;
    choice: string;
    choiceUnset: string;
    choiceAccepted: string;
    choiceRejected: string;
    accept: string;
    reject: string;
    banner: string;
    rightsTitle: string;
    rights: string;
  };
  terms: {
    title: string;
    description: string;
    kicker: string;
    heading: string;
    lede: string;
    crumb: string;
    updated: string;
    sections: Array<{ title: string; body: string }>;
  };
  tables: {
    material: SpecTableData;
    tolerance: SpecTableData;
    finish: SpecTableData;
    cnc: SpecTableData;
    enquiry: SpecTableData;
    sheetCapabilities: SpecTableData;
    enclosureCapabilities: SpecTableData;
  };
  form: {
    title: string;
    window: string;
    intro: string;
    requiredNote: string;
    honeypot: string;
    drawings: string;
    drawingsHint: string;
    choose: string;
    drop: string;
    remove: string;
    notes: string;
    notesHint: string;
    email: string;
    material: string;
    materialHint: string;
    materialPlaceholder: string;
    quantity: string;
    quantityHint: string;
    annual: string;
    annualHint: string;
    annualUnknown: string;
    name: string;
    nameHint: string;
    company: string;
    country: string;
    countryPlaceholder: string;
    countryFocus: string;
    countryOther: string;
    thickness: string;
    thicknessHint: string;
    delivery: string;
    deliveryHint: string;
    flexible: string;
    optional: string;
    submit: string;
    sending: string;
    privacyBefore: string;
    noscript: string;
    noscriptEmail: string;
    checking: string;
    uploading: string;
    sendingStatus: string;
    added: string;
    noneAdded: string;
    removed: string;
    inboxLater: string;
    inboxEmail: string;
    materials: Record<string, string>;
    countries: Record<string, string>;
  };
};

const countriesEn: Record<string, string> = {
  Germany: "Germany",
  Austria: "Austria",
  Netherlands: "Netherlands",
  Belgium: "Belgium",
  Luxembourg: "Luxembourg",
  France: "France",
  Switzerland: "Switzerland",
  Italy: "Italy",
  Poland: "Poland",
  Czechia: "Czechia",
  Denmark: "Denmark",
  Sweden: "Sweden",
  Norway: "Norway",
  Finland: "Finland",
  Spain: "Spain",
  Portugal: "Portugal",
  Ireland: "Ireland",
  "United Kingdom": "United Kingdom",
  Other: "Other",
};

const countriesTr: Record<string, string> = {
  Germany: "Almanya",
  Austria: "Avusturya",
  Netherlands: "Hollanda",
  Belgium: "Belçika",
  Luxembourg: "Lüksemburg",
  France: "Fransa",
  Switzerland: "İsviçre",
  Italy: "İtalya",
  Poland: "Polonya",
  Czechia: "Çekya",
  Denmark: "Danimarka",
  Sweden: "İsveç",
  Norway: "Norveç",
  Finland: "Finlandiya",
  Spain: "İspanya",
  Portugal: "Portekiz",
  Ireland: "İrlanda",
  "United Kingdom": "Birleşik Krallık",
  Other: "Diğer",
};

const en: Copy = {
  description:
    "Custom sheet metal, welded enclosures, and CNC parts made in Türkiye for manufacturers in Europe. Upload a drawing. Quote in 2 business days, with a price, a lead time, and a manufacturability note.",
  ogTitle: "Corivo — Sheet metal parts and enclosures from Türkiye",
  date: "21 November 2026",
  notPublished: "Not published yet",
  chrome: {
    skip: "Skip to content",
    homeAria: "Corivo home",
    menu: "Menu",
    close: "Close",
    quoteShort: "Quote",
    quote: "Request a quote",
    privacy: "Privacy",
    groups: { products: "Products", company: "Company", legal: "Legal" },
    header: [
      { href: "/sheet-metal", label: "Sheet metal" },
      { href: "/enclosures", label: "Enclosures" },
      { href: "/cnc-parts", label: "CNC parts" },
      { href: "/industries", label: "Industries" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/faq", label: "FAQ" },
    ],
    products: [
      { href: "/sheet-metal", label: "Sheet metal" },
      { href: "/enclosures", label: "Enclosures and welded assemblies" },
      { href: "/cnc-parts", label: "CNC machining" },
    ],
    company: [
      { href: "/industries", label: "Industries" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/faq", label: "FAQ" },
      { href: "/about", label: "About" },
      { href: "/request-a-quote", label: "Request a quote" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
    footerNote: "Quote within 2 business days. Prices are written on the quote, not listed here.",
    language: "Language",
  },
  cta: {
    kicker: "NEXT STEP",
    title: "Send the drawing.",
    text: "A complete request gets a reply within 2 business days: price, lead time, and a manufacturability note. Prices stay on the quote.",
  },
  home: {
    title: "Custom sheet metal parts and enclosures",
    eyebrow: "SHEET METAL · ENCLOSURES · CNC",
    h1: "Custom sheet metal parts. Upload a drawing. Quote in 2 business days.",
    lede: "Laser cutting, bending, welded enclosures, and CNC parts, made in Türkiye for manufacturers in Europe. Prototypes and repeat batches. Send DXF, DWG, STEP, or PDF.",
    trust: "Quote in 2 business days. Manufacturability note with every quote. Dimensional report and photos with each shipment.",
    processKicker: "01",
    processTitle: "From file to finished part",
    processText: "Upload the drawing. The quote comes within 2 business days. Production lead time is written on the quote, not inside those 2 business days.",
    productsKicker: "02",
    productsTitle: "What we manufacture",
    productsText:
      "Sheet metal, welded assemblies, and CNC parts. Grade, finish, and tolerance come from your drawing and are confirmed on the quote.",
    families: [
      {
        title: "Sheet metal",
        text: "Laser-cut blanks and press-brake parts: covers, brackets, gussets, and chassis pieces. Thickness and bend direction come from the drawing.",
        href: "/sheet-metal",
        link: "Laser cutting and bending",
        table: "tolerance",
      },
      {
        title: "Enclosures and welded assemblies",
        text: "Welded boxes, frames, guards, and cabinets. Name the RAL and the faces that must stay bare when you need powder coating.",
        href: "/enclosures",
        link: "Enclosures and powder coating",
        table: "finish",
      },
      {
        title: "CNC machining",
        text: "Milled and turned parts, from a single prototype to a repeat batch. Threads, fits, and the surfaces that matter go on the drawing.",
        href: "/cnc-parts",
        link: "CNC machining",
        table: "cnc",
      },
    ],
    whyKicker: "03",
    whyTitle: "One drawing, one quote, one contact",
    faqKicker: "04",
    faqTitle: "Before you upload",
    faqLink: "Open the FAQ",
    flat: "FLAT",
  },
  claims: [
    { label: "Quote", value: "2 business days" },
    { label: "With every quote", value: "Manufacturability note" },
    { label: "With every shipment", value: "Dimensional report and photos" },
    { label: "On request", value: "Material certificate and NDA" },
  ],
  steps: [
    { n: "01", title: "Upload drawing", text: "Send DXF, DWG, STEP, or PDF, or describe the part in the notes. Add the material, the quantity for this order, and the estimated annual quantity." },
    { n: "02", title: "Quote with manufacturability note", text: "Within 2 business days you receive a price, a lead time, and a note on anything in the drawing we need confirmed before cutting, bending, or welding." },
    { n: "03", title: "Production and inspection", text: "After you accept the quote in writing and pay the advance, the parts are made in Türkiye and checked against the accepted drawing." },
    { n: "04", title: "Delivery", text: "Each shipment includes a dimensional report and photos. Delivery is EXW, FCA, or DAP, as written on the quote. The balance is due before dispatch." },
  ],
  reasons: [
    { title: "A single contact", text: "You deal with one contact from the first drawing through later batches. Questions about a bend, a weld, or a dispatch go to the same place." },
    { title: "An inspection record with each shipment", text: "Every shipment includes a dimensional report and photos of the parts, so the crate can be checked against the report when it arrives." },
    { title: "Repeat orders stay traceable", text: "The quote keeps the drawing set, the grade, and the annual quantity you sent. The next batch can refer to that quote reference." },
  ],
  quoteContents: ["Price and currency", "Production lead time", "Incoterm and the named place", "Advance and balance amounts", "Manufacturability note", "Quote reference", "The date the quote is valid until"],
  how: {
    title: "How it works",
    description: "Upload a drawing, receive a quote and a manufacturability note within 2 business days, then production in Türkiye, inspection, and delivery under EXW, FCA, or DAP.",
    kicker: "PROCESS",
    heading: "How a Corivo order works",
    lede: "One contact, one quote reference, and a written note on manufacturability before any metal is cut. Payment is an advance, then the balance before dispatch. This website does not take payment.",
    crumb: "How it works",
    detail: [
      "Use DXF, DWG, STEP, or PDF, or describe the part if the drawing is not ready. Include material, the quantity for this batch, and the estimated annual quantity. Thickness and a delivery date help when you know them. If you need an NDA before the production file, attach a one-page PDF that says so.",
      "The reply has a price, a production lead time, an Incoterm, and a manufacturability note. The note is where we flag a bend that is too tight, a missing weld, or a coating that was not specified. It is not a redesign. You accept the quote, including that note, in writing.",
      "Production starts after written acceptance and the advance. Parts are made in Türkiye and checked against the accepted drawing. Those 2 business days do not apply to this step. The lead time on the quote does.",
      "You receive the parts, a dimensional report, and photos. A material certificate is included when the order asked for it. The balance is due before dispatch. EXW, FCA, or DAP is whichever term is printed on the quote.",
    ],
    contains: "What the quote contains",
    note: "The validity date is printed on the quote. Where the quote and these website terms differ on price, date, Incoterm, or an exception, the accepted quote controls.",
  },
  faq: {
    title: "FAQ",
    description: "What Corivo supplies, who the parts are for, where they are made, file formats, minimum order, 2-business-day quotes, EXW, FCA, DAP, payment, NDAs, and remakes.",
    kicker: "FAQ",
    heading: "Frequently asked questions",
    lede: "What Corivo supplies, who the parts are for, where they are made, then formats, quantity, time, delivery terms, payment, confidentiality, and non-conforming parts.",
    crumb: "FAQ",
    items: [],
  },
  industries: {
    title: "Industries",
    description: "Custom sheet metal, enclosures, and CNC parts made in Türkiye for manufacturers in Europe, including machine and equipment makers, cabinet and housing builders, and HVAC companies.",
    kicker: "INDUSTRIES",
    heading: "Who the parts are for",
    lede: "Manufacturers in Europe buying custom parts made in Türkiye. The groups below are common uses, not a closed list. The quote path is the same: a drawing or a description, the annual quantity, and a reply within 2 business days.",
    crumb: "Industries",
    items: [],
  },
  about: {
    title: "About",
    description: "Corivo is a sourcing partner for custom sheet metal parts, enclosures, and CNC parts made in Türkiye and supplied to manufacturers in Europe.",
    kicker: "ABOUT",
    heading: "About Corivo",
    lede: "Corivo is a sourcing partner for custom sheet metal parts, enclosures, and CNC parts made in Türkiye. The buyers are manufacturers in Europe, including machine and equipment makers, companies that need metal cabinets or housings, and HVAC companies.",
    crumb: "About",
    paragraphs: [
      "You work with a single contact from the first drawing through later batches. This website is in English, German, and Turkish.",
      "Every quote includes a manufacturability note. Every shipment includes a dimensional report and photos. A material certificate and an NDA are available when you ask for them.",
      "Prices, production lead times, and any certification you need for a specific order belong on the quote, where they can be checked against the drawing. They are not listed on this site.",
    ],
  },
  sheet: {
    title: "Laser cutting and bending",
    description: "Laser-cut and bent sheet metal in DC01, S235JR, galvanized steel, 304, 316, and aluminium 5052. Send DXF, DWG, STEP, or PDF for a quote within 2 business days.",
    kicker: "SHEET METAL",
    heading: "Laser cutting and bending",
    lede: "Flat blanks and brake-formed parts, quoted from your drawing. The manufacturability note calls out bend radii, hole-to-bend distances, and anything else we need confirmed before cutting.",
    crumb: "Sheet metal",
    coversTitle: "What this covers",
    covers: [
      "Laser-cut profiles and parts formed on a press brake. Typical work is covers, brackets, gussets, mounting plates, and multi-bend chassis pieces in the grades below.",
      "A grade that is not in the table can be named in the notes. The quote says whether we can supply it. Tolerances are not published as one number for every part. They follow the drawing, they are confirmed in the manufacturability note, and the shipment includes a dimensional report.",
    ],
    drawingTitle: "What to put on the drawing",
    send: [
      "A DXF for the flat pattern, or a STEP file if the part is already bent.",
      "Material and thickness in millimetres. Do not leave thickness to be scaled off a PDF.",
      "Which face is inside after bending, if the drawing does not already show it.",
      "Tapped holes, inserted hardware, and any edge condition you need called out.",
      "Quantity for this order and the estimated annual quantity.",
    ],
    drawingNoteBefore: "Welded boxes and powder coating are quoted on the",
    drawingNoteLink: "enclosures",
    drawingNoteAfter: "page. Machined parts can be added in the notes of the same request.",
    capabilitiesTitle: "Capabilities",
  },
  enclosures: {
    title: "Enclosures and welded assemblies",
    description: "Welded enclosures, frames, and cabinets made in Türkiye, with powder coating when you specify the colour. Every shipment includes a dimensional report and photos.",
    kicker: "ENCLOSURES",
    heading: "Enclosures and welded assemblies",
    lede: "Welded boxes, frames, machine cabinets, and equipment housings. Powder coating is part of the quote when you specify the colour and the faces that must stay free of paint.",
    crumb: "Enclosures",
    coversTitle: "What this covers",
    covers: [
      "Assemblies that are cut, formed, and welded: electrical cabinets, machine guards with frames, bases, and closed boxes. Send a STEP file of the assembly when you have one, plus a PDF that shows the weld callouts.",
      "If weld symbols or a critical datum are missing, the manufacturability note lists the assumption. Production waits until you accept that note in writing. Distortion on long welds is called out before cutting starts, not after the crate ships.",
    ],
    sheetLink: "sheet metal",
    cncLink: "CNC parts",
    bridgeBefore: "Flat patterns without welds are quoted as",
    bridgeMiddle: ". Machined bosses and spacers can be added as",
    bridgeAfter: "on the same request.",
    coatTitle: "Powder coating",
    coat: [
      "Name the RAL colour and whether the surface is smooth or textured. Mark threads, earth points, and mating faces that must be masked. Coat build is confirmed on the quote after those choices are known. It is not guessed from a photo.",
      "The same material grades used for sheet metal apply. Stainless, galvanized, mild steel, and aluminium 5052 are the default list.",
    ],
    arrivesTitle: "What arrives with the goods",
    arrives: [
      "The parts, packed for the Incoterm on the quote.",
      "A dimensional report against the accepted drawing.",
      "Photos of the parts.",
      "A material certificate if you asked for one on the order.",
    ],
    capabilitiesTitle: "Capabilities",
  },
  cnc: {
    title: "CNC machining",
    description: "Milled and turned parts made in Türkiye. Send STEP and a PDF. Threads, fits, and the surfaces that matter are confirmed in the manufacturability note.",
    kicker: "CNC",
    heading: "CNC machining",
    lede: "Milling and turning, from one prototype to a repeat batch. Send STEP and a PDF. The manufacturability note confirms what we see on the drawing before you accept the quote.",
    crumb: "CNC",
    simpleTitle: "What we machine",
    simple: [
      "Prismatic parts and round parts: pockets, faces, holes, threads, and fits. Put the surfaces that matter on the drawing.",
      "We do not publish one machining tolerance for every part. The drawing is the basis. The manufacturability note confirms what we see, and the dimensional report checks the parts that ship.",
    ],
    sheetLink: "sheet metal",
    enclosureLink: "enclosure",
    withBefore: "A CNC part can ship on its own, or with",
    withMiddle: "or an",
    withAfter: ". Say so in the notes when they are one shipment.",
    gradesTitle: "Grades",
    grades: "The quote form prices DC01, S235JR, galvanized steel, 304, 316, and aluminium 5052. If a turned part needs another grade, name it in the notes. The quote confirms whether that grade is included.",
    scopeTitle: "Capability",
    scope: [
      "If a part is outside our partner workshops' capability, we tell you within the quote window.",
      "Milling and turning to the drawing. Complex multi-axis, certified-aerospace, or very tight-tolerance parts are quoted case by case or declined.",
    ],
  },
  quotePage: {
    title: "Request a quote",
    description: "Send a drawing or a short description, the grade, the quantity, and the annual quantity. Corivo replies within 2 business days with a price, a lead time, and a manufacturability note.",
    kicker: "RFQ",
    heading: "Request a quote",
    lede: "Add a drawing or a short description, the material, the quantity, and the annual quantity. A complete request is answered within 2 business days with a price, a lead time, and a manufacturability note.",
    crumb: "Request a quote",
  },
  thanks: {
    title: "Request received",
    description: "Your Corivo quote request has been received.",
    kicker: "RFQ RECEIVED",
    heading: "Request received",
    body: "We have the request. You will get a reply within 2 business days with a price, a lead time, and a manufacturability note. If a file cannot be read, we will write to the email you gave and ask for another copy. The 2 business days start when the drawing can be read.",
    reference: "Reference",
    referenceMissing: "printed in the confirmation email",
    back: "Back to the homepage",
  },
  missing: {
    title: "This page is not on the drawing.",
    body: "The address does not match a page on this site.",
    home: "Home",
    quote: "Request a quote",
  },
  imprint: {
    title: "Imprint",
    description: "Legal identity and contact details for the operator of the Corivo website.",
    kicker: "LEGAL",
    heading: "Imprint",
    lede: "Identity of the operator of this website. A line that says “Not published yet” has not been set in the site configuration. It is not a placeholder address.",
    crumb: "Imprint",
    labels: ["Legal name", "Address", "Postal code", "City", "Country", "Register", "VAT", "Represented by", "Email", "Phone"],
    closing: "Corivo supplies custom sheet metal parts, enclosures, and CNC parts made in Türkiye to manufacturers in Europe. This website is available in English, German, and Turkish.",
  },
  privacy: {
    title: "Privacy",
    description: "How Corivo handles quote requests, drawings, analytics cookies, and the rights of people who send an enquiry.",
    kicker: "LEGAL",
    heading: "Privacy",
    lede: "This page describes what the quote form collects, why it is kept, and who else processes it. It was last updated on 21 November 2026.",
    crumb: "Privacy",
    updated: "Last updated",
    who: "Who is responsible",
    controller: "is the controller for enquiries sent through this website.",
    emailLead: "Privacy requests go to",
    noEmail: "Until a contact email is published, send a privacy request through the quote form and write “privacy request” in the notes.",
    collectTitle: "What we collect",
    collect: [
      "Name, company, email, and country.",
      "Material, thickness if you send it, quantity, estimated annual quantity, a delivery date or a flexible date, and notes.",
      "Drawing files you upload (DXF, DWG, STEP, or PDF).",
      "The page you submitted from, UTM parameters, and the referring URL when the browser provides one.",
      "A salted hash of the IP address, used only to limit repeated submissions. The raw IP address is not stored.",
    ],
    whyTitle: "Why",
    why: "We use the enquiry to prepare a quote, and if you order, to make and ship the parts and to handle a later batch or a complaint. That is steps toward a contract. The IP hash is a legitimate interest in keeping the form usable. Analytics, when you accept it, is consent. You can reject analytics and still send a quote request.",
    howLongTitle: "How long",
    howLong: "Enquiry records and drawings are kept so we can quote, produce, and refer back to a quote reference. You can ask us to delete an enquiry that did not become an order. Records that became an order are kept for as long as the order, the invoice, and any complaint about the parts require.",
    processorsTitle: "Who else processes it",
    processorsLead: "We do not sell enquiry data. These providers process it to run the site:",
    supabase: "Supabase stores the enquiry row and the private drawing bucket. See the",
    resend: "Resend sends the notification to us and the receipt to you. See the",
    host: "Cloudflare hosts the website. See the",
    policy: "privacy policy",
    region: "The region is the one configured on those projects. Their terms describe any transfer outside the country you are in. Drawings are not published on a public page. Download links in the internal notification expire after seven days.",
    cookiesTitle: "Cookies and storage in the browser",
    cookies: "The quote form does not set an analytics cookie. If analytics is enabled, a script loads only after you accept. The choice is stored in local storage under corivo-consent. UTM parameters and the external referrer are stored in session storage so they can be attached to the form if you move to another page first. The thank-you page reads the quote reference from session storage.",
    analyticsOff: "Analytics is not enabled on this site, so no analytics cookie is set.",
    choice: "Current choice",
    choiceUnset: "not set",
    choiceAccepted: "accepted",
    choiceRejected: "rejected",
    accept: "Accept analytics",
    reject: "Reject",
    banner: "Optional analytics stays off unless you accept. The quote form does not need this cookie.",
    rightsTitle: "Your rights",
    rights: "You can ask for access, correction, deletion, restriction, or a copy of the enquiry data, and you can object to processing based on legitimate interest. You can withdraw analytics consent without affecting a quote request you already sent. You can also complain to the supervisory authority where you live or work, or where the controller is established.",
  },
  terms: {
    title: "Terms",
    description: "Terms for Corivo quotes: drawings, the manufacturability note, advance and balance payment, EXW, FCA, DAP, and non-conforming parts.",
    kicker: "LEGAL",
    heading: "Terms",
    lede: "These terms cover the website and the quote process. An accepted quote controls price, date, Incoterm, and any exception written on it. Last updated 21 November 2026.",
    crumb: "Terms",
    updated: "Last updated",
    sections: [
      { title: "The website", body: "The site describes how to request a quote for sheet metal parts, enclosures, and CNC parts made in Türkiye. It does not list prices, and it does not take payment. Sending a form is a request for a quote, not an order." },
      { title: "Quotes", body: "A complete request includes a drawing or a description of the part, a work email, material, quantity, estimated annual quantity, name, and company. Thickness and delivery date are optional. We reply within 2 business days of a complete request. When a drawing is attached and we cannot read it, the 2 business days start when the drawing can be read. The reply includes a price, a production lead time, and a manufacturability note. The date the quote stays open is printed on the quote." },
      { title: "Your drawing", body: "You are responsible for the drawing, the grade, and the dimensions you send. Tell us if a file is superseded. We use the files to quote and, if you order, to make the parts. We do not publish them. An NDA is available on request before you send production files." },
      { title: "Manufacturability note", body: "The note flags what we see: a bend, a weld, a missing dimension, or a coating. It is not a full design review and it does not move design responsibility to us. Production of an exception starts only after you accept the quote, including the note, in writing." },
      { title: "Orders and payment", body: "An order is formed when both sides accept the quote in writing. Payment is an advance before production starts and the balance before dispatch. Amounts and currency are on the quote. The goods stay the seller’s until the agreed payments are received. This website does not collect card payments." },
      { title: "Delivery", body: "The Incoterm is EXW, FCA, or DAP, as printed on the quote, including the named place. EXW: you collect. FCA: the goods are handed to the named carrier at the named place. DAP: we deliver to the named place and you handle import clearance and duty. Risk follows that Incoterm." },
      { title: "Inspection and parts that do not match", body: "Each shipment includes a dimensional report and photos. A material certificate is sent when the order asks for it. If parts do not match the accepted drawing or the exceptions in the manufacturability note, write to us with the quote reference, photos, and the difference. We review it and agree a remake, a rework, or a credit for the non-conforming parts. Transit damage is handled under the Incoterm on the quote." },
      { title: "Liability", body: "The seller’s liability for a claim about the parts is limited to the price of the affected parts on the order, except where the law does not allow that limit. Nothing on this website is a commitment that a part is fit for a particular machine unless the accepted quote says so." },
      { title: "Law", body: "The seller’s legal name, the governing law, and the courts are stated on the order confirmation." },
    ],
  },
  tables: {
    material: {
      caption: "GRADES WE QUOTE",
      columns: ["Grade", "Standard", "Form", "Notes for the enquiry"],
      rows: [
        ["DC01", "EN 10130", "Cold-rolled steel sheet", "State thickness in millimetres."],
        ["S235JR", "EN 10025-2", "Structural steel", "Used for frames, bases, and thicker plate."],
        ["Galvanized", "EN 10346", "Zinc-coated steel sheet", "Name the coating if you need a specific one, for example Z275."],
        ["304 / 1.4301", "EN 10088", "Stainless sheet", "Describe the environment in the notes."],
        ["316 / 1.4401", "EN 10088", "Stainless sheet", "Use when 304 is not the right corrosion choice."],
        ["AW-5052", "EN 485", "Aluminium sheet", "State the temper if you need one. Otherwise we confirm it on the quote."],
      ],
    },
    tolerance: {
      caption: "TOLERANCE BASIS",
      columns: ["Process", "Basis", "Where it is confirmed"],
      rows: [
        ["Laser-cut profile", "Per your drawing", "Manufacturability note on the quote"],
        ["Bend angle and flange", "Per your drawing", "Manufacturability note on the quote"],
        ["Hole position", "Per your drawing", "Dimensional report with the shipment"],
        ["Welded assembly", "Per your drawing", "Distortion risks called out before production"],
        ["Powder coat", "Per the agreed finish", "Colour and surface written on the quote"],
        ["CNC machining", "Per your drawing", "Manufacturability note, then the dimensional report"],
      ],
    },
    finish: {
      caption: "ENCLOSURE FINISHES",
      columns: ["Finish", "What to specify", "Confirmed on"],
      rows: [
        ["Mill / as welded", "Say if faces must stay uncoated", "Quote"],
        ["Powder coat", "RAL colour and surface, smooth or texture", "Quote"],
        ["Masked areas", "Threads, earth points, mating faces", "Quote"],
        ["Galvanized substrate", "Coating class if you need one", "Quote"],
      ],
    },
    cnc: {
      caption: "CNC MACHINING",
      columns: ["Process", "What we quote", "Send"],
      rows: [
        ["Milling", "Prismatic parts, pockets, faces, and holes", "STEP and a PDF"],
        ["Turning", "Round parts", "STEP and a PDF"],
        ["Threads and fits", "The callout on the drawing", "The drawing, not a verbal fit"],
        ["With sheet metal or an enclosure", "The same request, when the notes say so", "The drawing set"],
      ],
    },
    enquiry: {
      caption: "WHAT THE FORM ASKS FOR",
      columns: ["Field", "Unit", "Why we ask"],
      rows: [
        ["Material", "Grade from the list", "So the quote prices the right sheet or bar"],
        ["Thickness", "Millimetres, optional", "So blank thickness is not guessed from a PDF when you know it"],
        ["Quantity", "Pieces this order", "So the batch is priced as a batch"],
        ["Estimated annual quantity", "Pieces over twelve months, or not known yet", "So a repeat price can be considered"],
        ["Delivery date", "Calendar date, or flexible", "So the lead time can be checked against it when you have a date"],
      ],
    },
    sheetCapabilities: {
      caption: "CAPABILITIES",
      columns: ["Item", "Value"],
      rows: [
        ["Thickness range", ""],
        ["Max sheet size", ""],
        ["Finishes", ""],
      ],
    },
    enclosureCapabilities: {
      caption: "CAPABILITIES",
      columns: ["Item", "Value"],
      rows: [
        ["Thickness range", ""],
        ["Max sheet size", ""],
        ["Finishes", ""],
      ],
    },
  },
  form: {
    title: "Request a quote",
    window: "2 DAYS",
    intro: "We reply within 2 business days of a complete request. The reply includes a price, a lead time, and a manufacturability note.",
    requiredNote: "A drawing or a description of the part is required. Other required fields are marked.",
    honeypot: "Leave this field empty",
    drawings: "Drawings",
    drawingsHint: "DXF, DWG, STEP, or PDF. Up to 8 files, 20 MB each. Required unless the notes describe the part. Need an NDA first? Attach a one-page PDF that says so.",
    choose: "Choose files",
    drop: "Or drop files here.",
    remove: "Remove",
    notes: "Notes",
    notesHint: "Required if you are not attaching a drawing. Describe the part, or add powder coat RAL, hardware, weld notes, or an NDA request.",
    email: "Work email",
    material: "Material",
    materialHint: "If the part uses more than one grade, pick the main one and list the others in notes.",
    materialPlaceholder: "Select a material",
    quantity: "Quantity (this order)",
    quantityHint: "Pieces in this batch.",
    annual: "Estimated annual quantity (pieces)",
    annualHint: "Pieces you expect over twelve months, including later batches.",
    annualUnknown: "I don't know yet",
    name: "Name",
    nameHint: "The person we should reply to.",
    company: "Company",
    country: "Country",
    countryPlaceholder: "Select a country",
    countryFocus: "Focus",
    countryOther: "Other",
    thickness: "Thickness (mm)",
    thicknessHint: "Example: 2.0. Leave blank if the drawing states it, or you do not know it yet.",
    delivery: "Delivery date",
    deliveryHint: "The date you want the parts. Lead time is confirmed on the quote.",
    flexible: "Flexible",
    optional: "optional",
    submit: "Request a quote",
    sending: "Sending…",
    privacyBefore: "Drawings are stored in a private file store and used to prepare the quote.",
    noscript: "This form uploads drawings from the browser and needs JavaScript.",
    noscriptEmail: "If JavaScript is unavailable, email",
    checking: "Checking the request.",
    uploading: "Uploading",
    sendingStatus: "Sending the request.",
    added: "added",
    noneAdded: "No files added.",
    removed: "File removed.",
    inboxLater: "The quote inbox is not configured yet. Try again later.",
    inboxEmail: "The quote inbox is not configured yet. Email",
    materials: {
      DC01: "DC01 cold-rolled steel",
      S235JR: "S235JR",
      galvanized: "Galvanized steel",
      "304": "Stainless 304",
      "316": "Stainless 316",
      "aluminium-5052": "Aluminium 5052",
    },
    countries: countriesEn,
  },
};

en.faq.items = [
  { question: "What does Corivo supply?", answer: "Corivo supplies custom sheet metal parts, welded enclosures, and CNC parts made in Türkiye. A complete request receives a quote within 2 business days. The quote includes a price, a production lead time, and a manufacturability note." },
  { question: "Who are the parts for?", answer: "Manufacturers in Europe. Typical buyers are machine and equipment makers, companies that need metal cabinets or housings, and HVAC equipment builders. The same quote path is used for each. A buyer outside those groups can send a drawing too." },
  { question: "Where are the parts made?", answer: "The parts are made in Türkiye and supplied to buyers in Europe. Delivery is EXW, FCA, or DAP, whichever Incoterm is printed on the quote." },
  { question: "Which file formats do you accept?", answer: "We accept DXF, DWG, STEP (including .stp), and PDF. You can attach up to 8 files, and each file can be up to 20 MB. A DXF or STEP file is more reliable than a PDF alone. If you need an NDA before the production drawing is sent, attach a one-page PDF that says so and write it in the notes. We will send an NDA." },
  { question: "What is the minimum order quantity?", answer: "We do not publish one minimum for every part. The quote states the quantity we can make and whether a smaller or larger batch changes the price. Include the estimated annual quantity so the price can reflect repeat production, not only the first batch." },
  { question: "How long does a quote take, and how long does production take?", answer: "You receive a quote within 2 business days of a complete request: a drawing or a description of the part, a work email, material, quantity, estimated annual quantity, name, and company. Thickness and delivery date are optional. If we cannot read a file, we ask for another copy, and the 2 business days start when the drawing can be read. Production lead time is separate. It is written on the quote and depends on material, quantity, finishing, and the agreed Incoterm." },
  { question: "What if a CNC part is outside your capability?", answer: "If a part is outside our partner workshops' capability, we tell you within the quote window. Milling and turning to the drawing. Complex multi-axis, certified-aerospace, or very tight-tolerance parts are quoted case by case or declined." },
  { question: "Which Incoterms can we use?", answer: "EXW, FCA, and DAP. EXW means you collect from the place named on the quote. FCA means the goods are handed to the carrier named on the quote, at the place named on the quote. DAP means we deliver to the named place in the destination country and you handle import clearance and duty. The Incoterm printed on your quote is the one that applies." },
  { question: "What are the payment terms?", answer: "An advance before production starts, and the balance before dispatch. Amounts and currency are on the quote. We do not take payment on this website. Production starts after the quote is accepted in writing and the advance is received." },
  { question: "How do you handle confidentiality?", answer: "Drawings and enquiry details are used to prepare the quote and, if you order, to make the parts. Files are stored in a private bucket, not on a public page. We will sign an NDA on request. If you want the NDA before the production files, say so in the notes and attach a placeholder PDF instead of the drawing." },
  { question: "Which quality documents come with the parts?", answer: "Every shipment includes a dimensional report and photos of the parts. A material certificate is sent on request. Ask for the certificate on the order if you need it with the goods." },
  { question: "What happens if parts do not match the drawing?", answer: "Write to us with the quote reference, photos, and what does not match the accepted drawing or the exceptions in the manufacturability note. We review it and agree a remake, a rework, or a credit for the non-conforming parts. Transit damage follows the Incoterm on the quote. Under EXW or FCA, risk may already have passed to you when the goods were handed over. Under DAP, we are responsible until the goods are at the named place, ready for unloading." },
];

en.industries.items = [
  { id: "machine-builders", title: "Machine and equipment makers", lede: "Guards, frames, covers, and welded bases for machines and industrial equipment built in Europe.", parts: ["Sheet-metal guards and covers", "Machine frames and welded bases", "Brackets and mounting plates", "Cabinets that bolt to a machine"], send: "Send the part drawings you want made, and the assembly only if it explains welds, hinges, or fit-up. Name the grade and the annual quantity.", href: "/sheet-metal", linkLabel: "Sheet metal" },
  { id: "panel-builders", title: "Cabinets and housings", lede: "Metal cabinets, control housings, doors, and mounting plates. In the electrical trade this buyer is often called a panel builder. Corivo supplies the metal enclosure, not the wiring inside it.", parts: ["Welded boxes and cabinets", "Doors and mounting plates", "Gland plates and DXF cut-outs", "Powder-coated housings"], send: "Put the cut-outs in the DXF. If the box is painted, give the RAL and say which faces or threads must stay bare. A STEP file helps when the box is welded.", href: "/enclosures", linkLabel: "Enclosures" },
  { id: "hvac", title: "HVAC equipment", lede: "Housings, duct parts, access panels, and brackets for heating, ventilation, and air-handling equipment, in galvanized steel, stainless, or aluminium.", parts: ["Equipment housings", "Duct sections and transitions", "Access panels", "Galvanized or stainless brackets"], send: "State the environment if it changes the grade. Name the coating on galvanized sheet if a particular class is required.", href: "/sheet-metal", linkLabel: "Sheet metal" },
];

function turkish(): Copy {
  const copy: Copy = structuredClone(en);
  copy.description = "Türkiye’deki üreticiler için özel sac, kaynaklı muhafaza ve CNC. Çizimi yükleyin. 2 iş günü içinde fiyat, termin ve üretilebilirlik notu.";
  copy.ogTitle = "Corivo — Özel sac parçalar ve muhafazalar";
  copy.date = "21 Kasım 2026";
  copy.notPublished = "Henüz yayımlanmadı";
  copy.chrome.skip = "İçeriğe geç";
  copy.chrome.homeAria = "Corivo ana sayfa";
  copy.chrome.menu = "Menü";
  copy.chrome.close = "Kapat";
  copy.chrome.quoteShort = "Teklif";
  copy.chrome.quote = "Teklif iste";
  copy.chrome.privacy = "Gizlilik";
  copy.chrome.groups = { products: "Ürünler", company: "Şirket", legal: "Yasal" };
  copy.chrome.header = [
    { href: "/sheet-metal", label: "Sac" },
    { href: "/enclosures", label: "Muhafazalar" },
    { href: "/cnc-parts", label: "CNC parçalar" },
    { href: "/industries", label: "Sektörler" },
    { href: "/how-it-works", label: "Nasıl çalışır" },
    { href: "/faq", label: "SSS" },
  ];
  copy.chrome.products = [
    { href: "/sheet-metal", label: "Sac" },
    { href: "/enclosures", label: "Muhafazalar ve kaynaklı montajlar" },
    { href: "/cnc-parts", label: "CNC parçalar" },
  ];
  copy.chrome.company = [
    { href: "/industries", label: "Sektörler" },
    { href: "/how-it-works", label: "Nasıl çalışır" },
    { href: "/faq", label: "SSS" },
    { href: "/about", label: "Hakkında" },
    { href: "/request-a-quote", label: "Teklif iste" },
  ];
  copy.chrome.legal = [
    { href: "/privacy", label: "Gizlilik" },
    { href: "/terms", label: "Koşullar" },
  ];
  copy.chrome.footerNote = "Teklif 2 iş günü içinde. Fiyatlar burada değil, teklifte yazılır.";
  copy.chrome.language = "Dil";
  copy.cta = {
    kicker: "SONRAKİ ADIM",
    title: "Çizimi gönderin.",
    text: "Eksiksiz bir talep 2 iş günü içinde yanıtlanır: fiyat, termin ve üretilebilirlik notu. Fiyatlar teklifte kalır.",
  };
  copy.home = {
    ...copy.home,
    title: "Özel sac parçalar ve muhafazalar",
    eyebrow: "SAC · MUHAFAZA · CNC",
    h1: "Özel sac parçalar, Türkiye’de. Çizimi yükle. Teklif 2 iş gününde.",
    lede: "Lazer kesim, büküm, kaynaklı muhafaza ve CNC. Prototipten tekrarlı üretime. DXF, DWG, STEP veya PDF gönderin. Türkiye’deki makine, ekipman, dolap ve HVAC üreticileri için.",
    trust: "Teklif 2 iş gününde. Her teklifte üretilebilirlik notu. Her sevkiyatta ölçü raporu ve fotoğraflar.",
    processTitle: "Dosyadan parçaya",
    processText: "Çizimi yükleyin. Teklif 2 iş günü içinde gelir. Üretim termini o 2 iş gününün içinde değil, teklifte yazılır.",
    productsTitle: "Ne üretiyoruz",
    productsText: "Sac, kaynaklı montaj ve onlarla birlikte giden CNC parçalar. Kalite, yüzey ve tolerans çiziminizden gelir ve teklifte doğrulanır.",
    families: [
      { title: "Sac", text: "Lazerle kesilmiş açınımlar ve abkant parçaları: kapak, braket, takviye ve şasi. Kalınlık ve büküm yönü çizimden gelir.", href: "/sheet-metal", link: "Lazer kesim ve büküm", table: "tolerance" },
      { title: "Muhafazalar ve kaynaklı montajlar", text: "Kaynaklı kutu, çerçeve, koruyucu ve dolap. Toz boya gerekiyorsa RAL’i ve boyasız kalacak yüzeyleri yazın.", href: "/enclosures", link: "Muhafazalar ve toz boya", table: "finish" },
      { title: "CNC işleme", text: "Tek prototipten tekrarlı partiye freze ve torna. Diş, geçme ve önemli yüzeyler çizimde olsun.", href: "/cnc-parts", link: "CNC işleme", table: "cnc" },
    ],
    whyTitle: "Tek çizim, tek teklif, tek kişi",
    faqTitle: "Yüklemeden önce",
    faqLink: "SSS sayfasını aç",
    flat: "AÇINIM",
  };
  copy.claims = [
    { label: "Teklif", value: "2 iş günü" },
    { label: "Her teklifte", value: "Üretilebilirlik notu" },
    { label: "Her sevkiyatta", value: "Ölçü raporu ve fotoğraflar" },
    { label: "Talep üzerine", value: "Malzeme sertifikası ve NDA" },
  ];
  copy.steps = [
    { n: "01", title: "Çizimi yükle", text: "DXF, DWG, STEP veya PDF gönderin ya da parçayı notlarda tarif edin. Malzemeyi, bu siparişin adedini ve tahmini yıllık adedi ekleyin." },
    { n: "02", title: "Üretilebilirlik notlu teklif", text: "2 iş günü içinde fiyat, termin ve kesim, büküm veya kaynaktan önce doğrulamamız gereken noktaların notunu alırsınız." },
    { n: "03", title: "Üretim ve kontrol", text: "Teklifi yazılı kabul edip avansı ödedikten sonra parçalar Türkiye’de üretilir ve kabul edilen çizime göre kontrol edilir." },
    { n: "04", title: "Teslimat", text: "Her sevkiyatta ölçü raporu ve fotoğraflar vardır. Teslimat, teklifte yazıldığı gibi EXW, FCA veya DAP’tır. Bakiye sevkiyattan önce ödenir." },
  ];
  copy.reasons = [
    { title: "Tek bir kişi", text: "İlk çizimden sonraki partilere kadar tek bir kişiyle çalışırsınız. Büküm, kaynak veya sevkiyat sorusu aynı yere gider." },
    { title: "Her sevkiyatta kontrol kaydı", text: "Her sevkiyatta ölçü raporu ve parça fotoğrafları vardır. Kasa geldiğinde raporla karşılaştırılabilir." },
    { title: "Tekrar sipariş iz bırakır", text: "Teklif, gönderdiğiniz çizim setini, kaliteyi ve yıllık adedi tutar. Sonraki parti o teklif referansına dönebilir." },
  ];
  copy.quoteContents = ["Fiyat ve para birimi", "Üretim termini", "Incoterm ve adlandırılan yer", "Avans ve bakiye tutarları", "Üretilebilirlik notu", "Teklif referansı", "Teklifin geçerli olduğu son tarih"];
  copy.how = {
    title: "Nasıl çalışır",
    description: "Çizim yükleyin, 2 iş günü içinde teklif ve üretilebilirlik notu alın. Ardından Türkiye’de üretim, kontrol ve EXW, FCA veya DAP teslimat.",
    kicker: "SÜREÇ",
    heading: "Bir Corivo siparişi nasıl işler",
    lede: "Tek kişi, tek teklif referansı ve metal kesilmeden önce yazılı üretilebilirlik notu. Ödeme önce avans, sevkiyattan önce bakiyedir. Bu site ödeme almaz.",
    crumb: "Nasıl çalışır",
    detail: [
      "DXF, DWG, STEP veya PDF kullanın. Çizim hazır değilse parçayı tarif edin. Malzemeyi, bu partinin adedini ve tahmini yıllık adedi yazın. Kalınlık ve teslim tarihi biliyorsanız ekleyin. Üretim dosyasından önce NDA istiyorsanız bunu söyleyen tek sayfalık bir PDF ekleyin.",
      "Yanıtta fiyat, üretim termini, Incoterm ve üretilebilirlik notu vardır. Not, çok sıkı bir bükümü, eksik bir kaynağı veya belirtilmemiş bir kaplamayı işaret eder. Yeniden tasarım değildir. Teklifi, not dahil, yazılı kabul edersiniz.",
      "Üretim, yazılı kabul ve avanstan sonra başlar. Parçalar Türkiye’de üretilir ve kabul edilen çizime göre kontrol edilir. 2 iş günü bu adıma uygulanmaz. Teklifteki termin uygulanır.",
      "Parçaları, ölçü raporunu ve fotoğrafları alırsınız. Sipariş istediysa malzeme sertifikası da gelir. Bakiye sevkiyattan önce ödenir. EXW, FCA veya DAP, teklifte yazılı olan terimdir.",
    ],
    contains: "Teklifte neler vardır",
    note: "Geçerlilik tarihi teklifte yazılıdır. Fiyat, tarih, Incoterm veya bir istisna konusunda teklif ile bu site koşulları ayrılırsa kabul edilen teklif geçerlidir.",
  };
  copy.faq = {
    title: "SSS",
    description: "Corivo ne tedarik eder, parçalar kimler içindir, nerede üretilir, dosya biçimleri, asgari adet, 2 iş günlük teklif, EXW, FCA, DAP, ödeme, NDA ve yeniden üretim.",
    kicker: "SSS",
    heading: "Sık sorulan sorular",
    lede: "Corivo’nun ne tedarik ettiği, parçaların kimler için olduğu, nerede üretildiği; ardından biçimler, adet, süre, teslim koşulları, ödeme, gizlilik ve çizime uymayan parçalar.",
    crumb: "SSS",
    items: [
      { question: "Corivo ne tedarik eder?", answer: "Corivo, Türkiye’de üretilen özel sac parçalar, kaynaklı muhafazalar ve CNC parçalar tedarik eder. Eksiksiz bir talep 2 iş günü içinde teklif alır. Teklifte fiyat, üretim termini ve üretilebilirlik notu vardır." },
      { question: "Parçalar kimler içindir?", answer: "Türkiye’deki üreticiler içindir. Tipik alıcılar makine ve ekipman üreticileri, metal dolap veya gövde ihtiyacı olan firmalar ve HVAC ekipmanı üreticileridir. Hepsi için aynı teklif yolu kullanılır. Bu grupların dışında bir alıcı da çizim gönderebilir." },
      { question: "Parçalar nerede üretilir?", answer: "Parçalar Türkiye’de üretilir ve Türkiye’deki alıcılara tedarik edilir. Teslimat EXW, FCA veya DAP’tır; teklifte hangi Incoterm yazılıysa o geçerlidir." },
      { question: "Hangi dosya biçimlerini kabul ediyorsunuz?", answer: "DXF, DWG, STEP (.stp dahil) ve PDF kabul ederiz. En fazla 8 dosya ekleyebilirsiniz ve her dosya 20 MB’a kadar olabilir. Tek başına PDF yerine DXF veya STEP daha güvenilirdir. Üretim çiziminden önce NDA istiyorsanız bunu söyleyen tek sayfalık bir PDF ekleyin ve notlara yazın. NDA göndeririz." },
      { question: "Asgari sipariş adedi nedir?", answer: "Her parça için tek bir asgari adet yayımlamayız. Teklif, üretebileceğimiz adedi ve daha küçük ya da daha büyük bir partinin fiyatı değiştirip değiştirmediğini yazar. Tahmini yıllık adedi de yazın ki fiyat yalnızca ilk partiye değil, tekrara da baksın." },
      { question: "Teklif ne kadar sürer, üretim ne kadar sürer?", answer: "Eksiksiz bir talepten sonra 2 iş günü içinde teklif alırsınız: parçanın çizimi veya tarifi, iş e-postası, malzeme, adet, tahmini yıllık adet, ad ve firma. Kalınlık ve teslim tarihi isteğe bağlıdır. Bir dosyayı okuyamazsak başka bir kopya isteriz ve 2 iş günü, çizim okunabildiğinde başlar. Üretim termini ayrıdır. Teklifte yazılır ve malzemeye, adede, yüzeye ve kararlaştırılan Incoterm’e bağlıdır." },
      { question: "Bir CNC parça kapasitenizin dışındaysa ne olur?", answer: "Parça, partner atölyelerimizin kapasitesinin dışındaysa bunu teklif süresi içinde söyleriz. Freze ve torna çizime göredir. Karmaşık çok eksenli, sertifikalı havacılık veya çok dar toleranslı parçalar duruma göre tekliflenir ya da reddedilir." },
      { question: "Hangi Incoterm’leri kullanabiliriz?", answer: "EXW, FCA ve DAP. EXW, teklifte adlandırılan yerden sizin teslim almanızdır. FCA, malların teklifte adlandırılan taşıyıcıya, adlandırılan yerde teslim edilmesidir. DAP, adlandırılan varış yerine bizim teslim etmemizdir; ithalat işlemleri ve vergi size aittir. Teklifinizde yazılı Incoterm geçerlidir." },
      { question: "Ödeme koşulları nedir?", answer: "Üretimden önce avans, sevkiyattan önce bakiye. Tutar ve para birimi tekliftedir. Bu sitede ödeme alınmaz. Üretim, teklif yazılı kabul edildikten ve avans alındıktan sonra başlar." },
      { question: "Gizliliği nasıl ele alıyorsunuz?", answer: "Çizimler ve talep ayrıntıları teklifi hazırlamak için, sipariş olursa parçaları üretmek için kullanılır. Dosyalar herkese açık bir sayfada değil, özel bir alanda tutulur. Talep üzerine NDA imzalarız. NDA’yı üretim dosyalarından önce istiyorsanız notlara yazın ve çizim yerine bir yer tutucu PDF ekleyin." },
      { question: "Parçalarla hangi kalite belgeleri gelir?", answer: "Her sevkiyatta ölçü raporu ve parça fotoğrafları vardır. Malzeme sertifikası talep üzerine gönderilir. Mallarla birlikte gelmesini istiyorsanız siparişte isteyin." },
      { question: "Parçalar çizime uymazsa ne olur?", answer: "Teklif referansı, fotoğraflar ve kabul edilen çizime veya üretilebilirlik notundaki istisnalara uymayan nokta ile bize yazın. İnceler ve uygunsuz parçalar için yeniden üretim, düzeltme veya alacak konusunda anlaşırız. Taşıma hasarı teklifteki Incoterm’e göre ele alınır. EXW veya FCA’da risk, mallar teslim edildiğinde size geçmiş olabilir. DAP’ta mallar adlandırılan yerde, boşaltmaya hazır olana kadar sorumluluk bizdedir." },
    ],
  };
  copy.industries = {
    title: "Sektörler",
    description: "Türkiye’deki üreticiler için özel sac, muhafaza ve CNC parçalar. Makine ve ekipman üreticileri, dolap ve gövde işleri ve HVAC firmaları dahildir.",
    kicker: "SEKTÖRLER",
    heading: "Parçalar kimler içindir",
    lede: "Türkiye’de parça ihtiyacı olan üreticiler. Aşağıdaki gruplar sık görülen kullanımlardır, kapalı bir liste değildir. Teklif yolu aynıdır: çizim veya tarif, yıllık adet ve 2 iş günü içinde yanıt.",
    crumb: "Sektörler",
    items: [
      { id: "machine-builders", title: "Makine ve ekipman üreticileri", lede: "Türkiye’de üretilen makine ve endüstriyel ekipman için koruyucular, çerçeveler, kapaklar ve kaynaklı şaseler.", parts: ["Sac koruyucular ve kapaklar", "Makine çerçeveleri ve kaynaklı şaseler", "Braketler ve montaj plakaları", "Makineye civatalanan dolaplar"], send: "Üretilmesini istediğiniz parça çizimlerini gönderin. Montajı yalnızca kaynak, menteşe veya oturmayı anlatıyorsa ekleyin. Kaliteyi ve yıllık adedi yazın.", href: "/sheet-metal", linkLabel: "Sac" },
      { id: "panel-builders", title: "Dolaplar ve gövdeler", lede: "Metal dolaplar, kontrol gövdeleri, kapaklar ve montaj plakaları. Elektrik ticaretinde bu alıcıya çoğu zaman pano üreticisi denir. Corivo içindeki kablolamayı değil, metal muhafazayı tedarik eder.", parts: ["Kaynaklı kutular ve dolaplar", "Kapaklar ve montaj plakaları", "Rakor plakaları ve DXF kesimleri", "Toz boyalı gövdeler"], send: "Kesimleri DXF’e koyun. Kutu boyanacaksa RAL’i yazın ve hangi yüzeylerin veya dişlerin boyasız kalacağını söyleyin. Kutu kaynaklıysa STEP dosyası yardımcı olur.", href: "/enclosures", linkLabel: "Muhafazalar" },
      { id: "hvac", title: "HVAC ekipmanı", lede: "Isıtma, havalandırma ve hava işleme ekipmanı için gövdeler, kanal parçaları, erişim kapakları ve braketler. Galvanizli sac, paslanmaz veya alüminyum.", parts: ["Ekipman gövdeleri", "Kanal parçaları ve geçişler", "Erişim kapakları", "Galvanizli veya paslanmaz braketler"], send: "Kaliteyi değiştiren bir ortam varsa yazın. Galvanizli sacta belirli bir kaplama sınıfı gerekiyorsa adını belirtin.", href: "/sheet-metal", linkLabel: "Sac" },
    ],
  };
  copy.about = {
    title: "Hakkında",
    description: "Corivo, Türkiye’deki üreticiler için özel sac parçalar, muhafazalar ve CNC parçalar üretir.",
    kicker: "HAKKINDA",
    heading: "Corivo hakkında",
    lede: "Corivo, Türkiye’deki üreticiler için özel sac parçalar, muhafazalar ve CNC parçalar üretir. Alıcılar makine ve ekipman üreticileri, metal dolap veya gövde ihtiyacı olan firmalar ve HVAC firmalarıdır.",
    crumb: "Hakkında",
    paragraphs: [
      "İlk çizimden sonraki partilere kadar tek bir kişiyle çalışırsınız. Bu site İngilizce, Almanca ve Türkçedir.",
      "Her teklifte üretilebilirlik notu vardır. Her sevkiyatta ölçü raporu ve fotoğraflar vardır. Malzeme sertifikası ve NDA, istediğinizde hazırdır.",
      "Fiyatlar, üretim terminleri ve belirli bir sipariş için gereken belgeler teklifte durur; çizimle orada kontrol edilir. Bu sitede listelenmez.",
    ],
  };
  copy.sheet = {
    title: "Lazer kesim ve büküm",
    description: "DC01, S235JR, galvanizli sac, 304, 316 ve alüminyum 5052’de lazer kesim ve büküm. 2 iş günü içinde teklif için DXF, DWG, STEP veya PDF gönderin.",
    kicker: "SAC",
    heading: "Lazer kesim ve büküm",
    lede: "Düz açınımlar ve abkantta bükülmüş parçalar, çiziminizden tekliflenir. Üretilebilirlik notu büküm yarıçaplarını, delik-büküm mesafelerini ve kesimden önce doğrulanması gereken diğer noktaları yazar.",
    crumb: "Sac",
    coversTitle: "Bu sayfa neleri kapsar",
    covers: [
      "Lazerle kesilmiş profiller ve abkantta şekillendirilmiş parçalar. Tipik iş; kapaklar, braketler, takviyeler, montaj plakaları ve aşağıdaki kalitelerde çok bükümlü şasi parçalarıdır.",
      "Tabloda olmayan bir kalite notlarda yazılabilir. Teklif, tedarik edilip edilemeyeceğini söyler. Toleranslar her parça için tek bir sayı olarak yayımlanmaz. Çizime uyar, üretilebilirlik notunda doğrulanır ve sevkiyatta ölçü raporu bulunur.",
    ],
    drawingTitle: "Çizime ne koymalı",
    send: [
      "Açınım için bir DXF, parça bükülmüşse bir STEP dosyası.",
      "Malzeme ve milimetre cinsinden kalınlık. Kalınlığı bir PDF üzerinden ölçülmeye bırakmayın.",
      "Çizim göstermiyorsa bükümden sonra hangi yüzün içte kalacağı.",
      "Diş açılmış delikler, takılan donanım ve belirtilmesini istediğiniz kenar hali.",
      "Bu siparişin adedi ve tahmini yıllık adet.",
    ],
    drawingNoteBefore: "Kaynaklı kutular ve toz boya",
    drawingNoteLink: "muhafazalar",
    drawingNoteAfter: "sayfasında tekliflenir. İşlenmiş parçalar aynı talebin notlarına eklenebilir.",
    capabilitiesTitle: "Kapasite",
  };
  copy.enclosures = {
    title: "Muhafazalar ve kaynaklı montajlar",
    description: "Türkiye’de üretilen kaynaklı muhafazalar, çerçeveler ve dolaplar. Rengi belirttiğinizde toz boya da teklife girer. Her sevkiyatta ölçü raporu ve fotoğraflar vardır.",
    kicker: "MUHAFAZALAR",
    heading: "Muhafazalar ve kaynaklı montajlar",
    lede: "Kaynaklı kutular, çerçeveler, makine dolapları ve ekipman gövdeleri. Rengi ve boyasız kalması gereken yüzeyleri belirttiğinizde toz boya teklifin parçasıdır.",
    crumb: "Muhafazalar",
    coversTitle: "Bu sayfa neleri kapsar",
    covers: [
      "Kesilen, şekillendirilen ve kaynaklanan montajlar: elektrik dolapları, çerçeveli makine koruyucuları, şaseler ve kapalı kutular. Elinizde varsa montajın STEP dosyasını ve kaynak işaretlerini gösteren bir PDF gönderin.",
      "Kaynak sembolü veya kritik bir referans eksikse üretilebilirlik notu varsayımı listeler. Üretim, bu notu yazılı kabul edene kadar bekler. Uzun kaynaklardaki çarpılma, kasa çıktıktan sonra değil, kesimden önce yazılır.",
    ],
    sheetLink: "sac",
    cncLink: "CNC parçalar",
    bridgeBefore: "Kaynaksız açınımlar",
    bridgeMiddle: " olarak tekliflenir. İşlenmiş göbekler ve ara parçalar aynı talebe",
    bridgeAfter: " olarak eklenebilir.",
    coatTitle: "Toz boya",
    coat: [
      "RAL rengini ve yüzeyin düz mü dokulu mu olduğunu yazın. Maskelenmesi gereken dişleri, topraklama noktalarını ve birleşen yüzeyleri işaretleyin. Boya kalınlığı bu seçimler bilindikten sonra teklifte doğrulanır. Bir fotoğraftan tahmin edilmez.",
      "Sac için kullanılan kaliteler burada da geçerlidir. Varsayılan liste paslanmaz, galvanizli, siyah sac ve alüminyum 5052’dir.",
    ],
    arrivesTitle: "Mallarla birlikte ne gelir",
    arrives: [
      "Teklifteki Incoterm’e göre paketlenmiş parçalar.",
      "Kabul edilen çizime göre ölçü raporu.",
      "Parçaların fotoğrafları.",
      "Siparişte istediyseniz malzeme sertifikası.",
    ],
    capabilitiesTitle: "Kapasite",
  };
  copy.cnc = {
    title: "CNC işleme",
    description: "Türkiye’de freze ve torna. STEP ve PDF gönderin. Dişler, geçmeler ve önemli yüzeyler üretilebilirlik notunda doğrulanır.",
    kicker: "CNC",
    heading: "CNC işleme",
    lede: "Freze ve torna, tek prototipten tekrarlı partiye. STEP ve PDF gönderin. Üretilebilirlik notu, teklifi kabul etmeden önce çizimde gördüğümüzü yazar.",
    crumb: "CNC",
    simpleTitle: "Ne işliyoruz",
    simple: [
      "Prizmatik parçalar ve yuvarlak parçalar: cep, yüzey, delik, diş ve geçme. Önemli yüzeyleri çizime koyun.",
      "Her parça için tek bir işleme toleransı yayımlamayız. Esas çizimdir. Üretilebilirlik notu gördüğümüzü doğrular, ölçü raporu sevk edilen parçaları kontrol eder.",
    ],
    sheetLink: "sac",
    enclosureLink: "muhafaza",
    withBefore: "Bir CNC parça tek başına gidebilir ya da",
    withMiddle: "veya bir",
    withAfter: " ile aynı sevkiyatta gidebilir. Tek sevkiyat olacaksa notlarda belirtin.",
    gradesTitle: "Kaliteler",
    grades: "Teklif formu DC01, S235JR, galvanizli sac, 304, 316 ve alüminyum 5052 fiyatlar. Tornalanmış bir parça başka bir kalite gerektiriyorsa notlarda yazın. Teklif, o kalitenin dahil olup olmadığını doğrular.",
    scopeTitle: "Kapasite",
    scope: [
      "Parça, partner atölyelerimizin kapasitesinin dışındaysa bunu teklif süresi içinde söyleriz.",
      "Freze ve torna çizime göredir. Karmaşık çok eksenli, sertifikalı havacılık veya çok dar toleranslı parçalar duruma göre tekliflenir ya da reddedilir.",
    ],
  };
  copy.quotePage = {
    title: "Teklif iste",
    description: "Bir çizim veya kısa bir tarif, kalite, adet ve yıllık adet gönderin. Corivo 2 iş günü içinde fiyat, termin ve üretilebilirlik notuyla yanıtlar.",
    kicker: "TEKLİF",
    heading: "Teklif iste",
    lede: "Bir çizim veya kısa bir tarif, malzemeyi, adedi ve yıllık adedi ekleyin. Eksiksiz bir talep 2 iş günü içinde fiyat, termin ve üretilebilirlik notuyla yanıtlanır.",
    crumb: "Teklif iste",
  };
  copy.thanks = {
    title: "Talep alındı",
    description: "Corivo teklif talebiniz alındı.",
    kicker: "TALEP ALINDI",
    heading: "Talep alındı",
    body: "Talebi aldık. 2 iş günü içinde fiyat, termin ve üretilebilirlik notuyla yanıt gelir. Bir dosya okunamazsa verdiğiniz e-postaya yazar ve başka bir kopya isteriz. 2 iş günü, çizim okunabildiğinde başlar.",
    reference: "Referans",
    referenceMissing: "onay e-postasında yazılı",
    back: "Ana sayfaya dön",
  };
  copy.missing = {
    title: "Bu sayfa çizimde yok.",
    body: "Adres bu sitedeki bir sayfayla eşleşmiyor.",
    home: "Ana sayfa",
    quote: "Teklif iste",
  };
  copy.imprint = {
    title: "Künye",
    description: "Corivo sitesini işletenin yasal kimliği ve iletişim bilgileri.",
    kicker: "YASAL",
    heading: "Künye",
    lede: "Bu siteyi işletenin kimliği. “Henüz yayımlanmadı” satırı site ayarında doldurulmamıştır. Uydurma bir adres değildir.",
    crumb: "Künye",
    labels: ["Yasal unvan", "Adres", "Posta kodu", "Şehir", "Ülke", "Sicil", "KDV", "Temsil eden", "E-posta", "Telefon"],
    closing: "Corivo, Türkiye’deki üreticiler için özel sac parçalar, muhafazalar ve CNC parçalar üretir. Bu site İngilizce, Almanca ve Türkçedir. İngilizce sayfalar Avrupa’daki alıcılar, Almanca sayfalar Almanya, Avusturya ve İsviçre’deki alıcılar içindir.",
  };
  copy.privacy = {
    ...copy.privacy,
    title: "Gizlilik",
    description: "Corivo’nun teklif taleplerini, çizimleri, analiz çerezlerini ve talep gönderenlerin haklarını nasıl ele aldığı.",
    kicker: "YASAL",
    heading: "Gizlilik",
    lede: "Bu sayfa teklif formunun ne topladığını, neden tutulduğunu ve başka kimlerin işlediğini anlatır. Son güncelleme 21 Kasım 2026.",
    crumb: "Gizlilik",
    updated: "Son güncelleme",
    who: "Sorumlu kim",
    controller: "bu site üzerinden gönderilen taleplerin veri sorumlusudur.",
    emailLead: "Gizlilik talepleri şu adrese gider:",
    noEmail: "Bir iletişim e-postası yayımlanana kadar gizlilik talebini teklif formuyla gönderin ve notlara “gizlilik talebi” yazın.",
    collectTitle: "Ne toplarız",
    collect: [
      "Ad, firma, e-posta ve ülke.",
      "Malzeme, gönderdiyseniz kalınlık, adet, tahmini yıllık adet, teslim tarihi veya esnek tarih ve notlar.",
      "Yüklediğiniz çizim dosyaları (DXF, DWG, STEP veya PDF).",
      "Formu gönderdiğiniz sayfa, UTM parametreleri ve tarayıcı veriyorsa yönlendiren adres.",
      "Yalnızca tekrarlayan gönderimleri sınırlamak için IP adresinin tuzlanmış özeti. Ham IP adresi saklanmaz.",
    ],
    whyTitle: "Neden",
    why: "Talebi teklif hazırlamak için, sipariş olursa parçaları üretip sevk etmek ve sonraki bir partiyi veya şikayeti ele almak için kullanırız. Bu, bir sözleşmeye yönelik adımlardır. IP özeti, formu kullanılabilir tutmak için meşru menfaattir. Analiz, kabul ederseniz rızaya dayanır. Analizi reddedip yine de teklif talebi gönderebilirsiniz.",
    howLongTitle: "Ne kadar süre",
    howLong: "Talep kayıtları ve çizimler teklif verebilmek, üretebilmek ve bir teklif referansına dönebilmek için tutulur. Siparişe dönüşmeyen bir talebin silinmesini isteyebilirsiniz. Siparişe dönüşen kayıtlar, siparişin, faturanın ve parçalarla ilgili bir şikayetin gerektirdiği süre boyunca tutulur.",
    processorsTitle: "Başka kim işler",
    processorsLead: "Talep verisini satmayız. Siteyi çalıştırmak için şu sağlayıcılar işler:",
    supabase: "Supabase talep satırını ve özel çizim alanını saklar. Bkz.",
    resend: "Resend bize bildirimi, size alındı yazısını gönderir. Bkz.",
    host: "Cloudflare siteyi barındırır. Bkz.",
    policy: "gizlilik politikası",
    region: "Bölge, o projelerde ayarlanan bölgedir. Bulunduğunuz ülkenin dışına aktarım, onların koşullarında anlatılır. Çizimler herkese açık bir sayfada yayımlanmaz. İç bildirimdeki indirme bağlantıları yedi gün sonra sona erer.",
    cookiesTitle: "Çerezler ve tarayıcıda saklama",
    cookies: "Teklif formu bir analiz çerezi koymaz. Analiz açıksa betik yalnızca siz kabul ettikten sonra yüklenir. Seçim, corivo-consent anahtarıyla yerel depoda tutulur. UTM parametreleri ve dış yönlendiren, önce başka bir sayfaya geçseniz de forma eklenebilsin diye oturum deposunda tutulur. Teşekkür sayfası teklif referansını oturum deposundan okur.",
    analyticsOff: "Bu sitede analiz açık değil, bu yüzden analiz çerezi konmaz.",
    choice: "Şu anki seçim",
    choiceUnset: "seçilmedi",
    choiceAccepted: "kabul",
    choiceRejected: "ret",
    accept: "Analizi kabul et",
    reject: "Reddet",
    banner: "İsteğe bağlı analiz, kabul etmediğiniz sürece kapalı kalır. Teklif formunun bu çereze ihtiyacı yoktur.",
    rightsTitle: "Haklarınız",
    rights: "Talep verisine erişim, düzeltme, silme, kısıtlama veya bir kopya isteyebilir ve meşru menfaate dayanan işlemeye itiraz edebilirsiniz. Analiz rızasını, daha önce gönderdiğiniz bir teklif talebini etkilemeden geri alabilirsiniz. Yaşadığınız veya çalıştığınız yerdeki ya da veri sorumlusunun yerleşik olduğu yerdeki denetim kurumuna da başvurabilirsiniz.",
  };
  copy.terms = {
    title: "Koşullar",
    description: "Corivo tekliflerinin koşulları: çizimler, üretilebilirlik notu, avans ve bakiye, EXW, FCA, DAP ve uygunsuz parçalar.",
    kicker: "YASAL",
    heading: "Koşullar",
    lede: "Bu koşullar siteyi ve teklif sürecini kapsar. Kabul edilen teklif; fiyatı, tarihi, Incoterm’i ve üzerinde yazılı istisnayı belirler. Son güncelleme 21 Kasım 2026.",
    crumb: "Koşullar",
    updated: "Son güncelleme",
    sections: [
      { title: "Site", body: "Site, Türkiye’de üretilen sac parçalar, muhafazalar ve CNC parçalar için nasıl teklif isteneceğini anlatır. Fiyat listelemez ve ödeme almaz. Form göndermek sipariş değil, teklif talebidir." },
      { title: "Teklifler", body: "Eksiksiz bir talepte parçanın çizimi veya tarifi, iş e-postası, malzeme, adet, tahmini yıllık adet, ad ve firma vardır. Kalınlık ve teslim tarihi isteğe bağlıdır. Eksiksiz bir talebe 2 iş günü içinde yanıt veririz. Çizim ekliyse ve okunamıyorsa 2 iş günü, çizim okunabildiğinde başlar. Yanıtta fiyat, üretim termini ve üretilebilirlik notu vardır. Teklifin açık kaldığı tarih teklifte yazılıdır." },
      { title: "Çiziminiz", body: "Gönderdiğiniz çizimden, kaliteden ve ölçülerden siz sorumlusunuz. Bir dosya değiştiyse söyleyin. Dosyaları teklif için, sipariş olursa üretmek için kullanırız. Yayımlamayız. Üretim dosyalarını göndermeden önce talep üzerine NDA vardır." },
      { title: "Üretilebilirlik notu", body: "Not, gördüğümüzü işaret eder: bir büküm, bir kaynak, eksik bir ölçü veya bir kaplama. Tam bir tasarım incelemesi değildir ve tasarım sorumluluğunu bize geçirmez. Bir istisnanın üretimi, not dahil teklifi yazılı kabul ettikten sonra başlar." },
      { title: "Sipariş ve ödeme", body: "Sipariş, iki taraf teklifi yazılı kabul ettiğinde oluşur. Ödeme, üretimden önce avans ve sevkiyattan önce bakiyedir. Tutar ve para birimi tekliftedir. Kararlaştırılan ödemeler alınana kadar mallar satıcıda kalır. Bu site kart ödemesi toplamaz." },
      { title: "Teslimat", body: "Incoterm, adlandırılan yer dahil, teklifte yazılı olduğu gibi EXW, FCA veya DAP’tır. EXW: siz teslim alırsınız. FCA: mallar adlandırılan yerde adlandırılan taşıyıcıya teslim edilir. DAP: adlandırılan yere biz teslim ederiz, ithalat işlemleri ve vergi size aittir. Risk o Incoterm’e uyar." },
      { title: "Kontrol ve uymayan parçalar", body: "Her sevkiyatta ölçü raporu ve fotoğraflar vardır. Sipariş isterse malzeme sertifikası gönderilir. Parçalar kabul edilen çizime veya üretilebilirlik notundaki istisnalara uymazsa teklif referansı, fotoğraflar ve fark ile bize yazın. İnceler ve uygunsuz parçalar için yeniden üretim, düzeltme veya alacak konusunda anlaşırız. Taşıma hasarı teklifteki Incoterm’e göre ele alınır." },
      { title: "Sorumluluk", body: "Parçalarla ilgili bir talepte satıcının sorumluluğu, yasanın bu sınıra izin vermediği haller dışında, siparişteki etkilenen parçaların fiyatı ile sınırlıdır. Kabul edilen teklif söylemedikçe bu sitedeki hiçbir şey, bir parçanın belirli bir makineye uygun olduğu taahhüdü değildir." },
      { title: "Hukuk", body: "Satıcının unvanı, uygulanacak hukuk ve mahkemeler sipariş teyidinde yazılır." },
    ],
  };
  copy.tables = {
    material: {
      caption: "TEKLİF VERDİĞİMİZ KALİTELER",
      columns: ["Kalite", "Standart", "Biçim", "Talep için not"],
      rows: [
        ["DC01", "EN 10130", "Soğuk haddelenmiş sac", "Kalınlığı milimetre olarak yazın."],
        ["S235JR", "EN 10025-2", "Yapı çeliği", "Çerçeveler, şaseler ve daha kalın plaka için kullanılır."],
        ["Galvanizli", "EN 10346", "Çinko kaplı sac", "Belirli bir kaplama gerekiyorsa adını yazın, örneğin Z275."],
        ["304 / 1.4301", "EN 10088", "Paslanmaz sac", "Ortamı notlarda tarif edin."],
        ["316 / 1.4401", "EN 10088", "Paslanmaz sac", "304 doğru korozyon seçimi değilse kullanılır."],
        ["AW-5052", "EN 485", "Alüminyum sac", "Bir temper gerekiyorsa yazın. Aksi halde teklifte doğrularız."],
      ],
    },
    tolerance: {
      caption: "TOLERANS ESASI",
      columns: ["İşlem", "Esas", "Nerede doğrulanır"],
      rows: [
        ["Lazer kesim profili", "Çiziminize göre", "Teklifteki üretilebilirlik notu"],
        ["Büküm açısı ve flanş", "Çiziminize göre", "Teklifteki üretilebilirlik notu"],
        ["Delik konumu", "Çiziminize göre", "Sevkiyattaki ölçü raporu"],
        ["Kaynaklı montaj", "Çiziminize göre", "Üretimden önce yazılan çarpılma riskleri"],
        ["Toz boya", "Kararlaştırılan yüzeye göre", "Teklifte yazılı renk ve yüzey"],
        ["CNC işleme", "Çiziminize göre", "Üretilebilirlik notu, sonra ölçü raporu"],
      ],
    },
    finish: {
      caption: "MUHAFAZA YÜZEYLERİ",
      columns: ["Yüzey", "Ne belirtmeli", "Nerede doğrulanır"],
      rows: [
        ["Ham / kaynaklı", "Yüzeyler kaplamasız kalacaksa söyleyin", "Teklif"],
        ["Toz boya", "RAL rengi ve yüzey, düz veya dokulu", "Teklif"],
        ["Maskelenen bölgeler", "Dişler, topraklama noktaları, birleşen yüzeyler", "Teklif"],
        ["Galvanizli altlık", "Gerekiyorsa kaplama sınıfı", "Teklif"],
      ],
    },
    cnc: {
      caption: "CNC İŞLEME",
      columns: ["İşlem", "Ne teklifleriz", "Gönderin"],
      rows: [
        ["Freze", "Prizmatik parçalar, cepler, yüzeyler ve delikler", "STEP ve PDF"],
        ["Torna", "Yuvarlak parçalar", "STEP ve PDF"],
        ["Dişler ve geçmeler", "İşaret çizimdeyse", "Sözlü geçme değil, çizim"],
        ["Sac veya muhafaza ile", "Notlarda belirtildiğinde aynı talep", "Çizim seti"],
      ],
    },
    enquiry: {
      caption: "FORMUN İSTEDİKLERİ",
      columns: ["Alan", "Birim", "Neden sorarız"],
      rows: [
        ["Malzeme", "Listedeki kalite", "Teklif doğru sacı veya çubuğu fiyatlasın diye"],
        ["Kalınlık", "Milimetre, isteğe bağlı", "Biliyorsanız kalınlık bir PDF’ten tahmin edilmesin diye"],
        ["Adet", "Bu siparişteki parça", "Parti, parti olarak fiyatlanabilsin diye"],
        ["Tahmini yıllık adet", "On iki aydaki parça veya henüz bilinmiyor", "Tekrar fiyatı düşünülebilsin diye"],
        ["Teslim tarihi", "Takvim tarihi veya esnek", "Tarihiniz varsa termin onunla kontrol edilebilsin diye"],
      ],
    },
    sheetCapabilities: {
      caption: "KAPASİTE",
      columns: ["Kalem", "Değer"],
      rows: [
        ["Kalınlık aralığı", ""],
        ["Azami sac ölçüsü", ""],
        ["Yüzey işlemleri", ""],
      ],
    },
    enclosureCapabilities: {
      caption: "KAPASİTE",
      columns: ["Kalem", "Değer"],
      rows: [
        ["Kalınlık aralığı", ""],
        ["Azami sac ölçüsü", ""],
        ["Yüzey işlemleri", ""],
      ],
    },
  };
  copy.form = {
    title: "Teklif iste",
    window: "2 İŞ GÜNÜ",
    intro: "Eksiksiz bir talebe 2 iş günü içinde yanıt veririz. Yanıtta fiyat, termin ve üretilebilirlik notu vardır.",
    requiredNote: "Parçanın çizimi veya tarifi gerekir. Diğer zorunlu alanlar işaretlidir.",
    honeypot: "Bu alanı boş bırakın",
    drawings: "Çizimler",
    drawingsHint: "DXF, DWG, STEP veya PDF. En fazla 8 dosya, her biri 20 MB. Notlar parçayı tarif etmiyorsa zorunludur. Önce NDA mı gerekiyor? Bunu söyleyen tek sayfalık bir PDF ekleyin.",
    choose: "Dosya seç",
    drop: "Ya da dosyaları buraya bırakın.",
    remove: "Kaldır",
    notes: "Notlar",
    notesHint: "Çizim eklemiyorsanız zorunludur. Parçayı tarif edin veya toz boya RAL’i, donanımı, kaynak notunu ya da NDA talebini yazın.",
    email: "İş e-postası",
    material: "Malzeme",
    materialHint: "Parçada birden fazla kalite varsa ana kaliteyi seçin, diğerlerini notlara yazın.",
    materialPlaceholder: "Bir malzeme seçin",
    quantity: "Adet (bu sipariş)",
    quantityHint: "Bu partideki parça sayısı.",
    annual: "Tahmini yıllık adet (parça)",
    annualHint: "Sonraki partiler dahil, on iki ayda beklediğiniz parça sayısı.",
    annualUnknown: "Henüz bilmiyorum",
    name: "Ad",
    nameHint: "Yanıtlayacağımız kişi.",
    company: "Firma",
    country: "Ülke",
    countryPlaceholder: "Bir ülke seçin",
    countryFocus: "Odak",
    countryOther: "Diğer",
    thickness: "Kalınlık (mm)",
    thicknessHint: "Örnek: 2.0. Çizim yazıyorsa veya henüz bilmiyorsanız boş bırakın.",
    delivery: "Teslim tarihi",
    deliveryHint: "Parçaları istediğiniz tarih. Termin teklifte doğrulanır.",
    flexible: "Esnek",
    optional: "isteğe bağlı",
    submit: "Teklif iste",
    sending: "Gönderiliyor…",
    privacyBefore: "Çizimler özel bir dosya alanında tutulur ve teklifi hazırlamak için kullanılır.",
    noscript: "Bu form çizimleri tarayıcıdan yükler ve JavaScript gerekir.",
    noscriptEmail: "JavaScript yoksa çiziminizi şu adrese gönderin:",
    checking: "Talep kontrol ediliyor.",
    uploading: "Yükleniyor",
    sendingStatus: "Talep gönderiliyor.",
    added: "eklendi",
    noneAdded: "Dosya eklenmedi.",
    removed: "Dosya kaldırıldı.",
    inboxLater: "Teklif kutusu henüz ayarlı değil. Daha sonra tekrar deneyin.",
    inboxEmail: "Teklif kutusu henüz ayarlı değil. Çiziminizi şu adrese gönderin:",
    materials: {
      DC01: "DC01 soğuk haddelenmiş sac",
      S235JR: "S235JR",
      galvanized: "Galvanizli sac",
      "304": "Paslanmaz 304",
      "316": "Paslanmaz 316",
      "aluminium-5052": "Alüminyum 5052",
    },
    countries: countriesTr,
  };
  return copy;
}

const tr = turkish();

function german(): Copy {
  const copy = structuredClone(en);
  applyGerman(copy);
  return copy;
}

const de = german();

export function getCopy(locale: Locale): Copy {
  if (locale === "de") return de;
  if (locale === "tr") return tr;
  return en;
}
