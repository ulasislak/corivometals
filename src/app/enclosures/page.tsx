import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { SpecTable } from "@/components/spec-table";
import { finishTable, materialTable } from "@/content/specs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Enclosures and welded assemblies",
  description:
    "Welded enclosures, frames, and cabinets made in Türkiye, with powder coating when you specify the colour. Every shipment includes a dimensional report and photos.",
  path: "/enclosures",
});

export default function EnclosuresPage() {
  return (
    <>
      <PageHeader
        kicker="ENCLOSURES"
        title="Enclosures and welded assemblies"
        lede="Welded boxes, frames, machine cabinets, and panel housings. Powder coating is part of the quote when you specify the colour and the faces that must stay free of paint."
        crumb="Enclosures"
      />
      <div className="mx-auto max-w-page space-y-12 px-4 py-12">
        <section className="max-w-3xl space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">What this covers</h2>
          <p>
            Assemblies that are cut, formed, and welded: electrical cabinets, machine guards with frames, bases, and closed boxes. Send a STEP file of the assembly when you have one, plus a PDF that shows the weld callouts.
          </p>
          <p>
            If weld symbols or a critical datum are missing, the manufacturability note lists the assumption. Production waits until you accept that note in writing. Distortion on long welds is called out before cutting starts, not after the crate ships.
          </p>
          <p>
            Flat patterns without welds are quoted as{" "}
            <Link href="/sheet-metal" className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              sheet metal
            </Link>
            . Machined bosses and spacers can be added as{" "}
            <Link href="/cnc-parts" className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              simple CNC parts
            </Link>{" "}
            on the same request.
          </p>
        </section>
        <SpecTable table={finishTable} />
        <section className="max-w-3xl space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">Powder coating</h2>
          <p>
            Name the RAL colour and whether the surface is smooth or textured. Mark threads, earth points, and mating faces that must be masked. Coat build is confirmed on the quote after those choices are known. It is not guessed from a photo.
          </p>
          <p>The same material grades used for sheet metal apply. Stainless, galvanized, mild steel, and aluminium 5052 are the default list.</p>
        </section>
        <SpecTable table={materialTable} />
        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-950">What arrives with the goods</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>The parts, packed for the Incoterm on the quote.</li>
            <li>A dimensional report against the accepted drawing.</li>
            <li>Photos of the parts.</li>
            <li>A material certificate if you asked for one on the order.</li>
          </ul>
        </section>
      </div>
      <CtaBand />
    </>
  );
}
