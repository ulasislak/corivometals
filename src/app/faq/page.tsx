import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { faqItems } from "@/content/faq";
import { faqPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "File formats, minimum order, 48-hour quotes, production lead times, EXW, FCA, DAP, payment, NDAs, dimensional reports, and remakes.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHeader
        kicker="FAQ"
        title="Frequently asked questions"
        lede="Formats, quantity, time, delivery terms, payment, confidentiality, documents, and what happens when a part does not match the drawing."
        crumb="FAQ"
      />
      <div className="mx-auto max-w-page px-4 py-12">
        <FaqList items={faqItems} />
      </div>
      <CtaBand />
      <JsonLd data={faqPageJsonLd()} />
    </>
  );
}
