import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { CncDrawing, PartFigure, drawingLabels } from "@/components/part-drawings";
import { SpecTable } from "@/components/spec-table";
import { readPage } from "@/i18n/page";
import { hrefFor } from "@/i18n/locale";
import { pageMetadata } from "@/lib/seo";

type Props = { params: { lang: string } };

export function generateMetadata({ params }: Props): Metadata {
  const { locale, copy } = readPage(params.lang);
  return pageMetadata({ title: copy.cnc.title, description: copy.cnc.description, path: "/cnc-parts", lang: locale });
}

export default function CncPage({ params }: Props) {
  const { locale, copy } = readPage(params.lang);
  const page = copy.cnc;
  const marks = drawingLabels(locale);
  return (
    <>
      <PageHeader kicker={page.kicker} title={page.heading} lede={page.lede} crumb={page.crumb} path="/cnc-parts" />
      <div className="mx-auto max-w-page space-y-12 px-4 py-12">
        <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="max-w-3xl space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">{page.simpleTitle}</h2>
          {page.simple.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {page.withBefore}{" "}
            <Link href={hrefFor(locale, "/sheet-metal")} className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              {page.sheetLink}
            </Link>{" "}
            {page.withMiddle}{" "}
            <Link href={hrefFor(locale, "/enclosures")} className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              {page.enclosureLink}
            </Link>
            {page.withAfter}
          </p>
          </div>
          <PartFigure label={page.heading}>
            <CncDrawing mill={marks.mill} turn={marks.turn} />
          </PartFigure>
        </section>
        <section className="max-w-3xl space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">{page.scopeTitle}</h2>
          {page.scope.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        <SpecTable table={copy.tables.cnc} />
        <section className="max-w-3xl space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">{page.gradesTitle}</h2>
          <p>{page.grades}</p>
        </section>
        <SpecTable table={copy.tables.material} />
      </div>
      <CtaBand />
    </>
  );
}
