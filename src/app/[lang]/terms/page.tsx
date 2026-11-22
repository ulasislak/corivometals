import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { readPage } from "@/i18n/page";
import { pageMetadata } from "@/lib/seo";

type Props = { params: { lang: string } };

export function generateMetadata({ params }: Props): Metadata {
  const { locale, copy } = readPage(params.lang);
  return pageMetadata({ title: copy.terms.title, description: copy.terms.description, path: "/terms", lang: locale });
}

export default function TermsPage({ params }: Props) {
  const { copy } = readPage(params.lang);
  const page = copy.terms;
  return (
    <>
      <PageHeader kicker={page.kicker} title={page.heading} lede={page.lede} crumb={page.crumb} path="/terms" />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-slate-800 [&_h2]:pt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-950 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        <p className="font-mono text-xs text-slate-600">
          {page.updated} {copy.date}
        </p>
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </article>
    </>
  );
}
