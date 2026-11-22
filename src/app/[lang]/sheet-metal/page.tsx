import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { SpecTable } from "@/components/spec-table";
import { PartFigure, SheetDrawing, drawingLabels } from "@/components/part-drawings";
import { readPage } from "@/i18n/page";
import { hrefFor } from "@/i18n/locale";
import { pageMetadata } from "@/lib/seo";

type Props = { params: { lang: string } };

export function generateMetadata({ params }: Props): Metadata {
  const { locale, copy } = readPage(params.lang);
  return pageMetadata({ title: copy.sheet.title, description: copy.sheet.description, path: "/sheet-metal", lang: locale });
}

export default function SheetMetalPage({ params }: Props) {
  const { locale, copy } = readPage(params.lang);
  const sheet = copy.sheet;
  const marks = drawingLabels(locale);
  return (
    <>
      <PageHeader kicker={sheet.kicker} title={sheet.heading} lede={sheet.lede} crumb={sheet.crumb} path="/sheet-metal" />
      <div className="mx-auto max-w-page space-y-12 px-4 py-12">
        <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="max-w-3xl space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">{sheet.coversTitle}</h2>
          {sheet.covers.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          </div>
          <PartFigure label={sheet.heading}>
            <SheetDrawing flat={marks.flat} bend={marks.bend} />
          </PartFigure>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-950">{sheet.capabilitiesTitle}</h2>
          <div className="mt-4">
            <SpecTable table={copy.tables.sheetCapabilities} />
          </div>
        </section>
        <SpecTable table={copy.tables.material} />
        <SpecTable table={copy.tables.tolerance} />
        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-950">{sheet.drawingTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {sheet.send.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-slate-700">
            {sheet.drawingNoteBefore}{" "}
            <Link href={hrefFor(locale, "/enclosures")} className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              {sheet.drawingNoteLink}
            </Link>{" "}
            {sheet.drawingNoteAfter}
          </p>
        </section>
        <SpecTable table={copy.tables.enquiry} />
      </div>
      <CtaBand />
    </>
  );
}
