import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { ProcessSteps } from "@/components/process-steps";
import { readPage } from "@/i18n/page";
import { pageMetadata } from "@/lib/seo";

type Props = { params: { lang: string } };

export function generateMetadata({ params }: Props): Metadata {
  const { locale, copy } = readPage(params.lang);
  return pageMetadata({ title: copy.how.title, description: copy.how.description, path: "/how-it-works", lang: locale });
}

export default function HowItWorksPage({ params }: Props) {
  const { copy } = readPage(params.lang);
  return (
    <>
      <PageHeader kicker={copy.how.kicker} title={copy.how.heading} lede={copy.how.lede} crumb={copy.how.crumb} path="/how-it-works" />
      <div className="mx-auto max-w-page space-y-12 px-4 py-12">
        <ProcessSteps steps={copy.steps} />
        <ol className="max-w-3xl space-y-8">
          {copy.steps.map((step, index) => {
            const paragraph = copy.how.detail[index];
            return (
              <li key={step.n}>
                <h2 className="text-xl font-semibold text-slate-950">
                  <span className="mr-3 font-mono text-sm text-amber-800">{step.n}</span>
                  {step.title}
                </h2>
                {paragraph ? <p className="mt-3 text-slate-700">{paragraph}</p> : null}
              </li>
            );
          })}
        </ol>
        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-950">{copy.how.contains}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {copy.quoteContents.map((item) => (
              <li key={item} className="border border-slate-300 bg-white px-3 py-3 font-mono text-sm text-slate-900">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-slate-700">{copy.how.note}</p>
        </section>
      </div>
      <CtaBand />
    </>
  );
}
