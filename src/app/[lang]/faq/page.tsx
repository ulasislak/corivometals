import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { readPage } from "@/i18n/page";
import { faqPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, copy } = readPage((await params).lang);
  return pageMetadata({ title: copy.faq.title, description: copy.faq.description, path: "/faq", lang: locale });
}

export default async function FaqPage({ params }: Props) {
  const { locale, copy } = readPage((await params).lang);
  return (
    <>
      <PageHeader kicker={copy.faq.kicker} title={copy.faq.heading} lede={copy.faq.lede} crumb={copy.faq.crumb} path="/faq" />
      <div className="mx-auto max-w-page px-4 py-12">
        <FaqList items={copy.faq.items} />
      </div>
      <CtaBand />
      <JsonLd data={faqPageJsonLd(copy.faq.items, locale)} />
    </>
  );
}
