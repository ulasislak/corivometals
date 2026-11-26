import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageView } from "@/components/seo/guide-page";
import { MaterialPageView } from "@/components/seo/material-page";
import { ServicePageView } from "@/components/seo/service-page";
import { ToolPageView } from "@/components/seo/tool-page";
import { GlossaryEntryView } from "@/components/seo/glossary-entry";
import { getSeoPage, isSeoSlug, listSeoSlugs, resolveRelated } from "@/content/seo/registry";
import { locales, type Locale } from "@/i18n/locale";
import { isLocale } from "@/i18n/locale";
import { pageMetadata } from "@/lib/seo";
import { ToolSlot } from "@/components/tools/tool-slot";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((lang) => listSeoSlugs().map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isSeoSlug(slug)) return {};
  const page = getSeoPage(slug, lang);
  if (!page) return {};
  return pageMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: `/${page.slug}`,
    lang,
  });
}

export default async function SeoSlugPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isSeoSlug(slug)) notFound();
  const locale: Locale = lang;
  const page = getSeoPage(slug, locale);
  if (!page) notFound();

  const { related, hub } = resolveRelated(locale, page);

  if (page.kind === "service") {
    return <ServicePageView locale={locale} page={page} related={related} hub={hub} />;
  }
  if (page.kind === "material") {
    return <MaterialPageView locale={locale} page={page} related={related} hub={hub} />;
  }
  if (page.kind === "guide" || page.kind === "aeo") {
    return <GuidePageView locale={locale} page={page} related={related} hub={hub} />;
  }
  if (page.kind === "glossary") {
    return <GlossaryEntryView locale={locale} page={page} related={related} hub={hub} />;
  }
  if (page.kind === "tool") {
    return (
      <ToolPageView
        locale={locale}
        page={page}
        related={related}
        hub={hub}
        tool={<ToolSlot toolId={page.toolId} locale={locale} />}
      />
    );
  }

  notFound();
}
