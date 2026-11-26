export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What does Corivo supply?",
    answer:
      "Corivo supplies custom sheet metal parts, welded enclosures, and CNC parts. A complete request receives a quote within 2 business days. The quote includes a price, a production lead time, and a manufacturability note. We ship worldwide.",
  },
  {
    question: "Who are the parts for?",
    answer:
      "Manufacturers. Typical buyers are machine and equipment makers, companies that need metal cabinets or housings, and HVAC equipment builders. The same quote path is used for each. There is no country limit.",
  },
  {
    question: "Where do you ship?",
    answer:
      "We ship worldwide. Delivery is EXW, FCA, or DAP, whichever Incoterm is printed on the quote.",
  },
  {
    question: "Which file formats do you accept?",
    answer:
      "We accept DXF, DWG, STEP (including .stp), and PDF. You can attach up to 8 files, and each file can be up to 20 MB. A DXF or STEP file is more reliable than a PDF alone. If you need an NDA before the production drawing is sent, attach a one-page PDF that says so and write it in the notes. We will send an NDA.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "We do not publish one minimum for every part. The quote states the quantity we can make and whether a smaller or larger batch changes the price. Include the estimated annual quantity so the price can reflect repeat production, not only the first batch.",
  },
  {
    question: "How long does a quote take, and how long does production take?",
    answer:
      "You receive a quote within 2 business days of a complete request: a drawing or a description of the part, a work email, material, quantity, estimated annual quantity, name, and company. Thickness and delivery date are optional. If we cannot read a file, we ask for another copy, and the 2 business days start when the drawing can be read. Production lead time is separate. It is written on the quote and depends on material, quantity, finishing, and the agreed Incoterm.",
  },
  {
    question: "What if a CNC part is outside your capability?",
    answer:
      "If a part is outside our partner workshops' capability, we tell you within the quote window. Milling and turning to the drawing. Complex multi-axis, certified-aerospace, or very tight-tolerance parts are quoted case by case or declined.",
  },
  {
    question: "Which Incoterms can we use?",
    answer:
      "EXW, FCA, and DAP. EXW means you collect from the place named on the quote. FCA means the goods are handed to the carrier named on the quote, at the place named on the quote. DAP means we deliver to the named place in the destination country and you handle import clearance and duty. The Incoterm printed on your quote is the one that applies.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "An advance before production starts, and the balance before dispatch. Amounts and currency are on the quote. We do not take payment on this website. Production starts after the quote is accepted in writing and the advance is received.",
  },
  {
    question: "How do you handle confidentiality?",
    answer:
      "Drawings and enquiry details are used to prepare the quote and, if you order, to make the parts. Files are stored in a private bucket, not on a public page. We will sign an NDA on request. If you want the NDA before the production files, say so in the notes and attach a placeholder PDF instead of the drawing.",
  },
  {
    question: "Which quality documents come with the parts?",
    answer:
      "Every shipment includes a dimensional report and photos of the parts. A material certificate is sent on request. Ask for the certificate on the order if you need it with the goods.",
  },
  {
    question: "What happens if parts do not match the drawing?",
    answer:
      "Write to us with the quote reference, photos, and what does not match the accepted drawing or the exceptions in the manufacturability note. We review it and agree a remake, a rework, or a credit for the non-conforming parts. Transit damage follows the Incoterm on the quote. Under EXW or FCA, risk may already have passed to you when the goods were handed over. Under DAP, we are responsible until the goods are at the named place, ready for unloading.",
  },
];
