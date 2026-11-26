import type { Metadata } from "next";
import Link from "next/link";
import { ClaimList } from "@/components/claim-list";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { HomeHero } from "@/components/home-hero";
import { ProcessSteps } from "@/components/process-steps";
import { RfqForm } from "@/components/rfq-form";
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

const photos = {
  tolerance: { src: "/home/sheet-metal.jpg", width: 1600, height: 1067 },
  finish: { src: "/home/enclosure.jpg", width: 1600, height: 1067 },
  cnc: { src: "/home/cnc.jpg", width: 1400, height: 1120 },
} as const;

export default async function HomePage({ params }: Props) {
  const { locale, copy } = readPage((await params).lang);
  const tables = {
    tolerance: copy.tables.tolerance,
    finish: copy.tables.finish,
    cnc: copy.tables.cnc,
  };
  return (
    <>
      <HomeHero
        brand="CORIVO"
        eyebrow={copy.home.eyebrow}
        h1={copy.home.h1}
        lede={copy.home.lede}
        imageAlt={copy.home.cuttingAlt}
        imageSrc="/home/hero.jpg"
        quoteLabel={copy.home.heroQuote}
        productsLabel={copy.home.heroProducts}
        quoteHref={`${hrefFor(locale, "/")}#quote`}
        productsHref={`${hrefFor(locale, "/")}#products`}
      />

      <section id="quote" className="scroll-mt-24 border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-page px-4 py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.18em] text-amber-800">{copy.home.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{copy.cta.title}</h2>
            <p className="mt-3 max-w-xl text-slate-600">{copy.cta.text}</p>
          </div>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:gap-12">
            <RfqForm />
            <aside className="space-y-8 lg:pt-1">
              <ClaimList items={copy.claims} />
              <SpecTable table={copy.tables.material} compact />
            </aside>
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
                  <img
                    src={photos[family.table].src}
                    alt={family.imageAlt}
                    width={photos[family.table].width}
                    height={photos[family.table].height}
                    className="aspect-[4/3] w-full border border-slate-300 object-cover"
                  />
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
          <p className="mt-8 border-t border-slate-200 pt-4 text-[11px] leading-relaxed text-slate-500">
            {copy.home.photoNote}{" "}
            <PhotoCredit href="https://www.pexels.com/photo/close-up-of-precision-machined-metal-parts-28752153/">Connor Lucock, Pexels</PhotoCredit>
            {". "}
            <PhotoCredit href="https://www.pexels.com/photo/industrial-laser-cutting-machine-in-action-29988988/">Cemrecan Yurtman, Pexels</PhotoCredit>
            {". "}
            <PhotoCredit href="https://www.pexels.com/photo/industrial-powder-coating-process-in-workshop-36184235/">Full Blown Coatings, Pexels</PhotoCredit>
            {". "}
            <PhotoCredit href="https://www.pexels.com/photo/close-up-photo-of-metal-tool-10406128/">Daniel Smyth, Pexels</PhotoCredit>
            .
          </p>
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

function PhotoCredit({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-slate-300 underline-offset-2">
      {children}
    </a>
  );
}
