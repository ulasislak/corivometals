import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { RfqForm } from "@/components/rfq-form";
import { readPage } from "@/i18n/page";
import { pageMetadata } from "@/lib/seo";

type Props = { params: { lang: string } };

export function generateMetadata({ params }: Props): Metadata {
  const { locale, copy } = readPage(params.lang);
  return pageMetadata({
    title: copy.quotePage.title,
    description: copy.quotePage.description,
    path: "/request-a-quote",
    lang: locale,
  });
}

export default function RequestQuotePage({ params }: Props) {
  const { copy } = readPage(params.lang);
  return (
    <>
      <PageHeader
        kicker={copy.quotePage.kicker}
        title={copy.quotePage.heading}
        lede={copy.quotePage.lede}
        crumb={copy.quotePage.crumb}
        path="/request-a-quote"
      />
      <div className="mx-auto max-w-page px-4 py-10">
        <div className="mx-auto max-w-xl">
          <RfqForm id="quote-page" />
        </div>
      </div>
    </>
  );
}
