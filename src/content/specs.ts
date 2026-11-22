export type SpecTableData = {
  caption: string;
  columns: string[];
  rows: string[][];
};

export const materialTable: SpecTableData = {
  caption: "GRADES WE QUOTE",
  columns: ["Grade", "Standard", "Form", "Notes for the enquiry"],
  rows: [
    ["DC01", "EN 10130", "Cold-rolled steel sheet", "State thickness in millimetres."],
    ["S235JR", "EN 10025-2", "Structural steel", "Used for frames, bases, and thicker plate."],
    [
      "Galvanized",
      "EN 10346",
      "Zinc-coated steel sheet",
      "Name the coating if you need a specific one, for example Z275.",
    ],
    ["304 / 1.4301", "EN 10088", "Stainless sheet", "Describe the environment in the notes."],
    ["316 / 1.4401", "EN 10088", "Stainless sheet", "Use when 304 is not the right corrosion choice."],
    [
      "AW-5052",
      "EN 485",
      "Aluminium sheet",
      "State the temper if you need one. Otherwise we confirm it on the quote.",
    ],
  ],
};

export const toleranceTable: SpecTableData = {
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
};

export const finishTable: SpecTableData = {
  caption: "ENCLOSURE FINISHES",
  columns: ["Finish", "What to specify", "Confirmed on"],
  rows: [
    ["Mill / as welded", "Say if faces must stay uncoated", "Quote"],
    ["Powder coat", "RAL colour and surface, smooth or texture", "Quote"],
    ["Masked areas", "Threads, earth points, mating faces", "Quote"],
    ["Galvanized substrate", "Coating class if you need one", "Quote"],
  ],
};

export const cncScopeTable: SpecTableData = {
  caption: "CNC MACHINING",
  columns: ["Process", "What we quote", "Send"],
  rows: [
    ["Milling", "Prismatic parts, pockets, faces, and holes", "STEP and a PDF"],
    ["Turning", "Round parts", "STEP and a PDF"],
    ["Threads and fits", "The callout on the drawing", "The drawing, not a verbal fit"],
    ["With sheet metal or an enclosure", "The same request, when the notes say so", "The drawing set"],
  ],
};

export const enquiryTable: SpecTableData = {
  caption: "WHAT THE FORM ASKS FOR",
  columns: ["Field", "Unit", "Why we ask"],
  rows: [
    ["Material", "Grade from the list", "So the quote prices the right sheet or bar"],
    ["Thickness", "Millimetres, optional", "So blank thickness is not guessed from a PDF when you know it"],
    ["Quantity", "Pieces this order", "So the batch is priced as a batch"],
    ["Estimated annual quantity", "Pieces over twelve months, or not known yet", "So a repeat price can be considered"],
    ["Delivery date", "Calendar date, or flexible", "So the lead time can be checked against it when you have a date"],
  ],
};
