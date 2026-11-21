import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { SpecTable } from "@/components/spec-table";
import { cncScopeTable, materialTable } from "@/content/specs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Simple CNC parts",
  description:
    "Simple milled and turned parts quoted with sheet metal and enclosure work. Fits, threads, and out-of-scope geometry are confirmed in the manufacturability note.",
  path: "/cnc-parts",
});

export default function CncPage() {
  return (
    <>
      <PageHeader
        kicker="CNC"
        title="Simple CNC parts"
        lede="Milled plates, spacers, bosses, and straightforward turned parts that ship with a sheet-metal or enclosure order. The quote says so when a part needs more than that."
        crumb="CNC parts"
      />
      <div className="mx-auto max-w-page space-y-12 px-4 py-12">
        <section className="max-w-3xl space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">What “simple” means</h2>
          <p>
            Prismatic parts and plain round parts: a spacer, a cover plate, a pin, a small bracket that is faster to machine than to fold. Send STEP and a PDF. Put threads, fits, and the surfaces that matter on the drawing.
          </p>
          <p>
            If the geometry, the tolerance, or the material sits outside this, the manufacturability note says that before you accept the quote. We do not publish a blanket machining tolerance. The drawing is the basis, and the dimensional report checks the parts that ship.
          </p>
          <p>
            These parts are meant to travel with{" "}
            <Link href="/sheet-metal" className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              sheet metal
            </Link>{" "}
            or an{" "}
            <Link href="/enclosures" className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              enclosure
            </Link>
            . Say that in the notes so the quote can treat them as one shipment.
          </p>
        </section>
        <SpecTable table={cncScopeTable} />
        <section className="max-w-3xl space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">Grades</h2>
          <p>
            The quote form prices DC01, S235JR, galvanized steel, 304, 316, and aluminium 5052. If a turned part needs another grade, name it in the notes. The quote confirms whether that grade is included.
          </p>
        </section>
        <SpecTable table={materialTable} />
      </div>
      <CtaBand />
    </>
  );
}
