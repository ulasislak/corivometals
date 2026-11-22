import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { SpecTable } from "@/components/spec-table";
import { EnclosureDrawing, PartFigure, drawingLabels } from "@/components/part-drawings";
import { readPage } from "@/i18n/page";
import { hrefFor } from "@/i18n/locale";
import { pageMetadata } from "@/lib/seo";

type Props = { params: { lang: string } };

export function generateMetadata({ params }: Props): Metadata {
  const { locale, copy } = readPage(params.lang);
  return pageMetadata({
    title: copy.enclosures.title,
    description: copy.enclosures.description,
    path: "/enclosures",
    lang: locale,
  });
}

export default function EnclosuresPage({ params }: Props) {
  const { locale, copy } = readPage(params.lang);
  const page = copy.enclosures;
  const marks = drawingLabels(locale);
  return (
    <>
      <PageHeader kicker={page.kicker} title={page.heading} lede={page.lede} crumb={page.crumb} path="/enclosures" />
      <div className="mx-auto max-w-page space-y-12 px-4 py-12">
        <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="max-w-3xl space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">{page.coversTitle}</h2>
          {page.covers.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {page.bridgeBefore}{" "}
            <Link href={hrefFor(locale, "/sheet-metal")} className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              {page.sheetLink}
            </Link>
            {page.bridgeMiddle}{" "}
            <Link href={hrefFor(locale, "/cnc-parts")} className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              {page.cncLink}
            </Link>{" "}
            {page.bridgeAfter}
          </p>
          </div>
          <PartFigure label={page.heading}>
            <EnclosureDrawing box={marks.box} bracket={marks.bracket} />
          </PartFigure>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-slate-950">{page.capabilitiesTitle}</h2>
          <div className="mt-4">
            <SpecTable table={copy.tables.enclosureCapabilities} />
          </div>
        </section>
        <SpecTable table={copy.tables.finish} />
        <section className="max-w-3xl space-y-4 text-slate-700">
          <h2 className="text-2xl font-semibold text-slate-950">{page.coatTitle}</h2>
          {page.coat.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        <SpecTable table={copy.tables.material} />
        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-950">{page.arrivesTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {page.arrives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <CtaBand />
    </>
  );
}
