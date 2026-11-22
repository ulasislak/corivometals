import type { Metadata } from "next";
import { ClaimList } from "@/components/claim-list";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { readPage } from "@/i18n/page";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, copy } = readPage((await params).lang);
  return pageMetadata({ title: copy.about.title, description: copy.about.description, path: "/about", lang: locale });
}

export default async function AboutPage({ params }: Props) {
  const { copy } = readPage((await params).lang);
  return (
    <>
      <PageHeader
        kicker={copy.about.kicker}
        title={copy.about.heading}
        lede={copy.about.lede}
        crumb={copy.about.crumb}
        path="/about"
      />
      <div className="mx-auto max-w-page px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="max-w-3xl space-y-4 text-slate-700">
            {copy.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ClaimList items={copy.claims} />
        </div>
      </div>
      <CtaBand />
    </>
  );
}
