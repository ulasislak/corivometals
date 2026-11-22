export const industries = [
  {
    id: "machine-builders",
    title: "Machine and equipment makers",
    lede: "Guards, frames, covers, and welded bases for machines and industrial equipment built in Europe.",
    parts: [
      "Sheet-metal guards and covers",
      "Machine frames and welded bases",
      "Brackets and mounting plates",
      "Cabinets that bolt to a machine",
    ],
    send: "Send the part drawings you want made, and the assembly only if it explains welds, hinges, or fit-up. Name the grade and the annual quantity.",
    href: "/sheet-metal",
    linkLabel: "Sheet metal",
  },
  {
    id: "panel-builders",
    title: "Cabinets and housings",
    lede: "Metal cabinets, control housings, doors, and mounting plates. In the electrical trade this buyer is often called a panel builder. Corivo supplies the metal enclosure, not the wiring inside it.",
    parts: [
      "Welded boxes and cabinets",
      "Doors and mounting plates",
      "Gland plates and DXF cut-outs",
      "Powder-coated housings",
    ],
    send: "Put the cut-outs in the DXF. If the box is painted, give the RAL and say which faces or threads must stay bare. A STEP file helps when the box is welded.",
    href: "/enclosures",
    linkLabel: "Enclosures",
  },
  {
    id: "hvac",
    title: "HVAC equipment",
    lede: "Housings, duct parts, access panels, and brackets for heating, ventilation, and air-handling equipment, in galvanized steel, stainless, or aluminium.",
    parts: [
      "Equipment housings",
      "Duct sections and transitions",
      "Access panels",
      "Galvanized or stainless brackets",
    ],
    send: "State the environment if it changes the grade. Name the coating on galvanized sheet if a particular class is required.",
    href: "/sheet-metal",
    linkLabel: "Sheet metal",
  },
] as const;
