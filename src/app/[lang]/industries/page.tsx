import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { readPage } from "@/i18n/page";
import { hrefFor } from "@/i18n/locale";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, copy } = readPage((await params).lang);
  return pageMetadata({
    title: copy.industries.title,
    description: copy.industries.description,
    path: "/industries",
    lang: locale,
  });
}

export default async function IndustriesPage({ params }: Props) {
  const { locale, copy } = readPage((await params).lang);
  return (
    <>
      <PageHeader
        kicker={copy.industries.kicker}
        title={copy.industries.heading}
        lede={copy.industries.lede}
        crumb={copy.industries.crumb}
        path="/industries"
      />
      <div className="mx-auto max-w-page px-4 py-12">
        <div className="space-y-6">
          {copy.industries.items.map((industry) => (
            <article key={industry.id} id={industry.id} className="scroll-mt-24 border border-slate-300 bg-white p-5 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">{industry.title}</h2>
              <p className="mt-3 max-w-3xl text-slate-700">{industry.lede}</p>
              <ul className="mt-4 grid gap-2 text-slate-800 sm:grid-cols-2">
                {industry.parts.map((part) => (
                  <li key={part} className="border border-slate-200 px-3 py-2 font-mono text-sm">
                    {part}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-3xl text-slate-700">{industry.send}</p>
              <p className="mt-4">
                <Link
                  href={hrefFor(locale, industry.href)}
                  className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4"
                >
                  {industry.linkLabel}
                </Link>
              </p>
            </article>
          ))}
        </div>
      </div>
      <CtaBand />
    </>
  );
}
