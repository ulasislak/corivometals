import Link from "next/link";
import { ClaimList } from "@/components/claim-list";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { ProcessSteps } from "@/components/process-steps";
import { RfqForm } from "@/components/rfq-form";
import { SpecTable } from "@/components/spec-table";
import { faqItems } from "@/content/faq";
import { reasons } from "@/content/process";
import { cncScopeTable, finishTable, materialTable, toleranceTable } from "@/content/specs";
import { pageMetadata } from "@/lib/seo";
import type { SpecTableData } from "@/content/specs";

export const metadata = pageMetadata({
  title: "Sheet metal parts and enclosures from Türkiye",
  description:
    "Request a quote for custom sheet metal parts and enclosures made in Türkiye. Send a drawing. The reply includes a price, a lead time, and a manufacturability note within 48 hours.",
  path: "/",
});

const families: Array<{
  title: string;
  text: string;
  href: string;
  link: string;
  table: SpecTableData;
}> = [
  {
    title: "Sheet metal",
    text: "Laser-cut and bent parts. Grades are listed beside the quote form. Thickness, grain, and bend direction come from your drawing. We confirm anything that is unclear in the manufacturability note.",
    href: "/sheet-metal",
    link: "Laser cutting and bending",
    table: toleranceTable,
  },
  {
    title: "Enclosures and welded assemblies",
    text: "Boxes, frames, guards, and cabinets. Powder coating is quoted when you name the RAL and the surfaces that must stay bare.",
    href: "/enclosures",
    link: "Enclosures and powder coating",
    table: finishTable,
  },
  {
    title: "Simple CNC parts",
    text: "Milled plates, spacers, and straightforward turned parts that belong with the sheet-metal work. If a part sits outside that scope, the quote says so before you order.",
    href: "/cnc-parts",
    link: "Simple CNC scope",
    table: cncScopeTable,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="tech-grid border-b border-slate-200">
        <div className="mx-auto grid max-w-page items-start gap-8 px-4 py-8 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:items-stretch lg:gap-10">
          <div className="contents lg:flex lg:min-w-0 lg:flex-col">
            <div className="order-1 border border-slate-300 bg-white p-5 sm:p-8">
              <p className="font-mono text-xs tracking-[0.18em] text-amber-800">SOURCING · TÜRKİYE TO EUROPE</p>
              <h1 className="mt-4 text-pretty text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
                Sheet metal parts and enclosures from Türkiye. Quote in 48 hours.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                Corivo supplies custom parts made in Türkiye to machine builders and panel builders in Europe, with the work concentrated on Germany, Austria, and the Benelux.
              </p>
              <p className="mt-6 border-t border-slate-200 pt-4 font-mono text-sm leading-relaxed text-slate-700">
                Quote in 48 hours. Manufacturability note with every quote. Dimensional report and photos with each shipment.
              </p>
            </div>
            <div className="order-3 min-w-0 lg:mt-6">
              <SpecTable table={materialTable} compact />
            </div>
            <div className="order-4 border border-slate-300 bg-white p-5 sm:p-8 lg:mt-6 lg:flex-1">
              <ClaimList />
              <BracketMark />
            </div>
          </div>
          <div className="order-2">
            <RfqForm />
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-page px-4 py-12 sm:py-16">
          <p className="font-mono text-xs tracking-[0.18em] text-amber-800">01</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">How an order moves</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Four steps. The 48 hours is the time to quote, not the time to ship. Production lead time is written on the quote.
          </p>
          <div className="mt-8">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-page px-4 py-12 sm:py-16">
          <p className="font-mono text-xs tracking-[0.18em] text-amber-800">02</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Three things we quote</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            Grades are beside the quote form. Finishes are listed here. Tolerances are taken from your drawing and confirmed in the quote, then checked in the dimensional report.
          </p>
          <div className="mt-4">
            {families.map((family) => (
              <article key={family.href} className="grid gap-6 border-t border-slate-200 py-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-10">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{family.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{family.text}</p>
                  <Link
                    href={family.href}
                    className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4"
                  >
                    {family.link}
                  </Link>
                </div>
                <SpecTable table={family.table} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-page px-4 py-12 sm:py-16">
          <p className="font-mono text-xs tracking-[0.18em] text-amber-800">03</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Why buyers stay with one contact</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {reasons.map((reason) => (
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
          <p className="font-mono text-xs tracking-[0.18em] text-amber-800">04</p>
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Questions before you send a drawing</h2>
            <Link href="/faq" className="text-sm font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              Open the FAQ
            </Link>
          </div>
          <div className="mt-8">
            <FaqList items={faqItems} />
          </div>
        </div>
      </section>

      <CtaBand href="/#quote" />
    </>
  );
}

function BracketMark() {
  return (
    <svg viewBox="0 0 280 120" className="mt-8 hidden h-28 w-full text-slate-400 lg:block" aria-hidden="true" fill="none">
      <path d="M16 96 V28 H150 L188 58 V96 Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 28 L36 12 H170 L188 28" stroke="currentColor" strokeWidth="1.5" />
      <path d="M150 28 L170 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M188 58 L208 42 V80 L188 96" stroke="currentColor" strokeWidth="1.5" />
      <path d="M170 12 L208 42" stroke="currentColor" strokeWidth="1.5" />
      <path d="M48 96 V52 H92 V96" stroke="#b45309" strokeWidth="1.5" />
      <path d="M48 52 H70" stroke="#b45309" strokeWidth="1.5" />
    </svg>
  );
}
