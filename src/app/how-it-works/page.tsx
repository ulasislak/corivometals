import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { ProcessSteps } from "@/components/process-steps";
import { quoteContents, steps } from "@/content/process";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How it works",
  description:
    "Upload a drawing, receive a quote and a manufacturability note within 48 hours, then production in Türkiye, inspection, and delivery under EXW, FCA, or DAP.",
  path: "/how-it-works",
});

const detail = [
  "Use DXF, DWG, STEP, or PDF, or describe the part if the drawing is not ready. Include material, the quantity for this batch, and the estimated annual quantity. Thickness and a delivery date help when you know them. If you need an NDA before the production file, attach a one-page PDF that says so.",
  "The reply has a price, a production lead time, an Incoterm, and a manufacturability note. The note is where we flag a bend that is too tight, a missing weld, or a coating that was not specified. It is not a redesign. You accept the quote, including that note, in writing.",
  "Production starts after written acceptance and the advance. Parts are made in Türkiye and checked against the accepted drawing. The 48-hour figure does not apply to this step. The lead time on the quote does.",
  "You receive the parts, a dimensional report, and photos. A material certificate is included when the order asked for it. The balance is due before dispatch. EXW, FCA, or DAP is whichever term is printed on the quote.",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        kicker="PROCESS"
        title="How a Corivo order works"
        lede="One contact, one quote reference, and a written note on manufacturability before any metal is cut. Payment is an advance, then the balance before dispatch. This website does not take payment."
        crumb="How it works"
      />
      <div className="mx-auto max-w-page space-y-12 px-4 py-12">
        <ProcessSteps />
        <ol className="max-w-3xl space-y-8">
          {steps.map((step, index) => {
            const paragraph = detail[index];
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
          <h2 className="text-2xl font-semibold text-slate-950">What the quote contains</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {quoteContents.map((item) => (
              <li key={item} className="border border-slate-300 bg-white px-3 py-3 font-mono text-sm text-slate-900">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-slate-700">
            The validity date is printed on the quote. Where the quote and these website terms differ on price, date, Incoterm, or an exception, the accepted quote controls.
          </p>
        </section>
      </div>
      <CtaBand />
    </>
  );
}
