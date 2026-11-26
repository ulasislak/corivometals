import { ContentSections } from "@/components/seo/content-sections";
import { KeyFacts } from "@/components/seo/key-facts";
import { LastUpdated } from "@/components/seo/last-updated";
import { RelatedPages, type RelatedLink } from "@/components/seo/related-pages";
import { SeoCta } from "@/components/seo/seo-cta";
import { SeoPageHeader } from "@/components/seo/seo-page-header";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import type { SeoPage } from "@/content/seo/types";
import { getSeoUiCopy } from "@/content/seo/ui-copy";
import type { Locale } from "@/i18n/locale";
import { faqPageJsonLd } from "@/lib/json-ld";

export function GuidePageView({
  locale,
  page,
  related,
  hub,
}: {
  locale: Locale;
  page: SeoPage;
  related: readonly RelatedLink[];
  hub?: RelatedLink;
}) {
  const ui = getSeoUiCopy(locale);
  const crumbs = [
    ...(hub ? [{ label: hub.title, href: hub.href }] : []),
    { label: page.crumb },
  ];

  return (
    <>
      <SeoPageHeader
        locale={locale}
        kicker={page.kicker}
        h1={page.h1}
        directAnswer={page.directAnswer}
        crumbs={crumbs}
      />
      {page.faq.length > 0 ? <JsonLd data={faqPageJsonLd([...page.faq], locale)} /> : null}
      <article className="mx-auto max-w-page px-4 py-10 sm:py-12">
        <KeyFacts locale={locale} facts={page.keyFacts} />
        <ContentSections sections={page.sections} />
        {page.faq.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{ui.faq}</h2>
            <div className="mt-4">
              <FaqList items={[...page.faq]} />
            </div>
          </section>
        ) : null}
        <SeoCta locale={locale} />
        <RelatedPages locale={locale} items={related} hub={hub} />
        <LastUpdated locale={locale} date={page.updated} />
      </article>
    </>
  );
}
