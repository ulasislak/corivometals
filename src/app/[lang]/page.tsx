import type { Metadata } from "next";
import Link from "next/link";
import { ClaimList } from "@/components/claim-list";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { ProcessSteps } from "@/components/process-steps";
import { RfqForm } from "@/components/rfq-form";
import { CncDrawing, EnclosureDrawing, PartFigure, SheetDrawing, drawingLabels } from "@/components/part-drawings";
import { SpecTable } from "@/components/spec-table";
import { JsonLd } from "@/components/json-ld";
import { readPage } from "@/i18n/page";
import { hrefFor } from "@/i18n/locale";
import { faqPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, copy } = readPage((await params).lang);
  return pageMetadata({ title: copy.home.title, description: copy.description, path: "/", lang: locale });
}

export default async function HomePage({ params }: Props) {
  const { locale, copy } = readPage((await params).lang);
  const marks = drawingLabels(locale);
  const drawings = {
    tolerance: <SheetDrawing flat={marks.flat} bend={marks.bend} />,
    finish: <EnclosureDrawing box={marks.box} bracket={marks.bracket} />,
    cnc: <CncDrawing mill={marks.mill} turn={marks.turn} />,
  };
  const tables = {
    tolerance: copy.tables.tolerance,
    finish: copy.tables.finish,
    cnc: copy.tables.cnc,
  };
  return (
    <>
      <section className="tech-grid border-b border-slate-200">
        <div className="mx-auto grid max-w-page items-start gap-8 px-4 py-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:items-stretch lg:gap-10">
          <div className="contents lg:flex lg:min-w-0 lg:flex-col">
            <div className="order-1 border border-slate-300 bg-white p-5 sm:p-8">
              <p className="font-mono text-xs tracking-[0.18em] text-amber-800">{copy.home.eyebrow}</p>
              <h1 className="mt-4 text-pretty text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
                {copy.home.h1}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">{copy.home.lede}</p>
              <p className="mt-6 border-t border-slate-200 pt-4 font-mono text-sm leading-relaxed text-slate-700">{copy.home.trust}</p>
            </div>
            <div className="order-3 min-w-0 lg:mt-6">
              <SpecTable table={copy.tables.material} compact />
            </div>
            <div className="order-4 flex flex-col border border-slate-300 bg-white p-5 sm:p-8 lg:mt-6 lg:flex-1">
              <div className="flex flex-1 flex-col justify-between gap-6">
                <ClaimList items={copy.claims} />
                <BracketMark flatLabel={copy.home.flat} />
              </div>
            </div>
          </div>
          <div className="order-2">
            <RfqForm />
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-page px-4 py-12 sm:py-16">
          <p className="font-mono text-xs tracking-[0.18em] text-amber-800">{copy.home.processKicker}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{copy.home.processTitle}</h2>
          <p className="mt-3 max-w-2xl text-slate-700">{copy.home.processText}</p>
          <div className="mt-8">
            <ProcessSteps steps={copy.steps} />
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-page px-4 py-12 sm:py-16">
          <p className="font-mono text-xs tracking-[0.18em] text-amber-800">{copy.home.productsKicker}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{copy.home.productsTitle}</h2>
          <p className="mt-3 max-w-2xl text-slate-700">{copy.home.productsText}</p>
          <div className="mt-4">
            {copy.home.families.map((family) => (
              <article key={family.href} className="grid gap-6 border-t border-slate-200 py-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-10">
                <div>
                  <PartFigure label={family.title}>{drawings[family.table]}</PartFigure>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{family.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{family.text}</p>
                  <Link
                    href={hrefFor(locale, family.href)}
                    className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4"
                  >
                    {family.link}
                  </Link>
                </div>
                <SpecTable table={tables[family.table]} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-page px-4 py-12 sm:py-16">
          <p className="font-mono text-xs tracking-[0.18em] text-amber-800">{copy.home.whyKicker}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{copy.home.whyTitle}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {copy.reasons.map((reason) => (
              <article key={reason.title} className="border border-slate-300 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-950">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-page px-4 py-12 sm:py-16">
          <p className="font-mono text-xs tracking-[0.18em] text-amber-800">{copy.home.faqKicker}</p>
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{copy.home.faqTitle}</h2>
            <Link href={hrefFor(locale, "/faq")} className="text-sm font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              {copy.home.faqLink}
            </Link>
          </div>
          <div className="mt-8">
            <FaqList items={copy.faq.items} />
          </div>
        </div>
      </section>

      <CtaBand href="/#quote" />
      <JsonLd data={faqPageJsonLd(copy.faq.items, locale)} />
    </>
  );
}

function BracketMark({ flatLabel }: { flatLabel: string }) {
  return (
    <svg viewBox="0 0 780 460" className="h-auto w-full" aria-hidden="true">
      <g fill="none" stroke="#cbd5e1" strokeWidth="1.4">
        <path d="M16 18 H48 M16 18 V50" />
        <path d="M764 18 H732 M764 18 V50" />
        <path d="M16 442 H48 M16 442 V410" />
        <path d="M764 442 H732 M764 442 V410" />
      </g>

      <g strokeLinejoin="round">
        <path d="M120 248 L400 248 L400 108 L120 108 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.7" />
        <path d="M120 108 L198 56 L478 56 L400 108 Z" fill="#e8eef5" stroke="#1e293b" strokeWidth="1.7" />
        <path d="M400 108 L478 56 L478 196 L400 248 Z" fill="#d5dfeb" stroke="#1e293b" strokeWidth="1.7" />
        <path d="M148 102 L214 66 L448 66 L382 102 Z" fill="#ffffff" stroke="#475569" strokeWidth="1.3" />
        <path d="M140 104 H390" fill="none" stroke="#b45309" strokeWidth="1.6" strokeDasharray="7 4" />
        <path d="M158 210 H248 V138 H158 Z" fill="#fff7ed" stroke="#b45309" strokeWidth="1.6" />
        <path d="M158 138 H248" stroke="#fdba74" strokeWidth="3" />
        <path d="M422 128 L456 108 L456 156 L422 176 Z" fill="#fff7ed" stroke="#b45309" strokeWidth="1.4" />
        <circle cx="304" cy="156" r="7" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
        <circle cx="304" cy="188" r="7" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
        <circle cx="336" cy="156" r="7" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
        <circle cx="336" cy="188" r="7" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
        <path d="M292 156 H348 M304 144 V200" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2 3" />
      </g>

      <g strokeLinejoin="round">
        <path d="M48 392 L196 392 L196 314 L48 314 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.6" />
        <path d="M48 314 L92 286 L240 286 L196 314 Z" fill="#e8eef5" stroke="#1e293b" strokeWidth="1.6" />
        <path d="M196 314 L240 286 L240 364 L196 392 Z" fill="#d5dfeb" stroke="#1e293b" strokeWidth="1.6" />
        <path d="M64 314 H180" fill="none" stroke="#b45309" strokeWidth="1.6" strokeDasharray="6 4" />
        <circle cx="92" cy="346" r="6" fill="#ffffff" stroke="#1e293b" strokeWidth="1.35" />
        <circle cx="140" cy="346" r="6" fill="#ffffff" stroke="#1e293b" strokeWidth="1.35" />
        <path d="M80 346 H152" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2 3" />
      </g>

      <g fill="none" stroke="#64748b" strokeWidth="1.1">
        <path d="M120 248 V276 M400 248 V276" />
        <path d="M120 270 H190 M330 270 H400" />
        <path d="M86 248 H120 M86 108 H120" />
        <path d="M92 248 V200 M92 156 V108" />
      </g>
      <g fill="#64748b">
        <path d="M190 270 l8-4.5 v9 z M330 270 l-8-4.5 v9 z" />
        <path d="M92 248 l-4.5-8 h9 z M92 108 l-4.5 8 h9 z" />
      </g>

      <circle cx="620" cy="150" r="86" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <path
        d="M560 168 H612 Q648 168 648 132 V96 H636 V124 Q636 156 608 156 H560 Z"
        fill="#e8eef5"
        stroke="#1e293b"
        strokeWidth="1.4"
      />
      <path d="M612 162 Q640 162 640 134" fill="none" stroke="#b45309" strokeWidth="1.7" />
      <path d="M706 150 H748 M734 136 V164" stroke="#b45309" strokeWidth="1.2" />

      <g strokeLinejoin="round">
        <path d="M520 292 H740 V404 H520 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.4" />
        <path d="M586 292 V404 M674 292 V404" stroke="#b45309" strokeWidth="1.4" strokeDasharray="6 4" />
        <path d="M608 318 H656 V378 H608 Z" fill="#fff7ed" stroke="#b45309" strokeWidth="1.3" />
        <circle cx="552" cy="334" r="6" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
        <circle cx="552" cy="366" r="6" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
        <circle cx="706" cy="334" r="6" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
        <circle cx="706" cy="366" r="6" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
      </g>

      <path d="M248 138 C360 20 520 40 560 78" fill="none" stroke="#94a3b8" strokeWidth="1" />
      <path d="M560 78 l-10 2 l6 8 z" fill="#94a3b8" />

      <g fill="#475569" fontFamily="ui-monospace, monospace" fontSize="14">
        <text x="260" y="266" textAnchor="middle">
          A
        </text>
        <text x="74" y="184" textAnchor="middle">
          B
        </text>
        <text x="620" y="52" textAnchor="middle">
          C
        </text>
        <text x="630" y="286" textAnchor="middle" fontSize="12">
          {flatLabel}
        </text>
      </g>
      <g fill="none" stroke="#1e293b" strokeWidth="1.2">
        <circle cx="458" cy="78" r="11" fill="#ffffff" />
        <circle cx="228" cy="286" r="11" fill="#ffffff" />
      </g>
      <g fill="#1e293b" fontFamily="ui-monospace, monospace" fontSize="12">
        <text x="458" y="82" textAnchor="middle">
          2
        </text>
        <text x="228" y="290" textAnchor="middle">
          1
        </text>
      </g>
      <path d="M447 84 L420 108" fill="none" stroke="#1e293b" strokeWidth="1" />
      <path d="M218 292 L196 300" fill="none" stroke="#1e293b" strokeWidth="1" />
    </svg>
  );
}
