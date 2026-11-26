export const steps = [
  {
    n: "01",
    title: "Upload drawing",
    text: "Send DXF, DWG, STEP, or PDF, or describe the part in the notes. Add the material, the quantity for this order, and the estimated annual quantity.",
  },
  {
    n: "02",
    title: "Quote with manufacturability note",
    text: "Within 2 business days you receive a price, a lead time, and a note on anything in the drawing we need confirmed before cutting, bending, or welding.",
  },
  {
    n: "03",
    title: "Production and inspection",
    text: "After you accept the quote in writing and pay the advance, the parts are made and checked against the accepted drawing. We ship worldwide.",
  },
  {
    n: "04",
    title: "Delivery",
    text: "Each shipment includes a dimensional report and photos. Delivery is EXW, FCA, or DAP, as written on the quote. The balance is due before dispatch.",
  },
] as const;

export const reasons = [
  {
    title: "A single contact",
    text: "You deal with one contact from the first drawing through later batches. Questions about a bend, a weld, or a dispatch go to the same place.",
  },
  {
    title: "An inspection record with each shipment",
    text: "Every shipment includes a dimensional report and photos of the parts, so the crate can be checked against the report when it arrives.",
  },
  {
    title: "Repeat orders stay traceable",
    text: "The quote keeps the drawing set, the grade, and the annual quantity you sent. The next batch can refer to that quote reference.",
  },
] as const;

export const claims = [
  { label: "Quote", value: "2 business days" },
  { label: "With every quote", value: "Manufacturability note" },
  { label: "With every shipment", value: "Dimensional report and photos" },
  { label: "On request", value: "Material certificate and NDA" },
] as const;

export const quoteContents = [
  "Price and currency",
  "Production lead time",
  "Incoterm and the named place",
  "Advance and balance amounts",
  "Manufacturability note",
  "Quote reference",
  "The date the quote is valid until",
] as const;
