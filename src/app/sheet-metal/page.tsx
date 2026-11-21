import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { SpecTable } from "@/components/spec-table";
import { enquiryTable, materialTable, toleranceTable } from "@/content/specs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Laser cutting and bending",
  description:
    "Laser-cut and bent sheet metal in DC01, S235JR, galvanized steel, 304, 316, and aluminium 5052. Send DXF, DWG, STEP, or PDF for a quote within 48 hours.",
  path: "/sheet-metal",
});

const send = [
  "A DXF for the flat pattern, or a STEP file if the part is already bent.",
  "Material and thickness in millimetres. Do not leave thickness to be scaled off a PDF.",
  "Which face is inside after bending, if the drawing does not already show it.",
  "Tapped holes, inserted hardware, and any edge condition you need called out.",
  "Quantity for this order and the estimated annual quantity.",
];

export default function SheetMetalPage() {
  return (
    <>
      <PageHeader
        kicker="SHEET METAL"
        title="Laser cutting and bending"
        lede="Flat blanks and brake-formed parts, quoted from your drawing. The manufacturability note calls out bend radii, hole-to-bend distances, and anything else we need confirmed before cutting."
        crumb="Sheet metal"
      />
      <div className="mx-auto max-w-page space-y-12 px-4 py-12">
        <section className="max-w-3xl space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">What this covers</h2>
          <p>
            Laser-cut profiles and parts formed on a press brake. Typical work is covers, brackets, gussets, mounting plates, and multi-bend chassis pieces in the grades below.
          </p>
          <p>
            A grade that is not in the table can be named in the notes. The quote says whether we can supply it. Tolerances are not published as one number for every part. They follow the drawing, they are confirmed in the manufacturability note, and the shipment includes a dimensional report.
          </p>
        </section>
        <SpecTable table={materialTable} />
        <SpecTable table={toleranceTable} />
        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-950">What to put on the drawing</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {send.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-slate-700">
            Welded boxes and powder coating are quoted on the{" "}
            <Link href="/enclosures" className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              enclosures
            </Link>{" "}
            page. Simple machined spacers can be added in the notes of the same request.
          </p>
        </section>
        <SpecTable table={enquiryTable} />
      </div>
      <CtaBand />
    </>
  );
}
