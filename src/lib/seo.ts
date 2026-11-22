import type { Metadata } from "next";
import { hrefFor, locales, type Locale } from "@/i18n/locale";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  lang?: Locale;
  index?: boolean;
};

export function pageMetadata({ title, description, path, lang = "en", index = true }: PageMetaInput): Metadata {
  const canonical = hrefFor(lang, path);
  const url = `${siteUrl}${canonical}`;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(locales.map((locale) => [locale, hrefFor(locale, path)])),
        "x-default": hrefFor("en", path),
      },
    },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title: `${title} · ${siteName}`,
      description,
      url,
      siteName,
      locale: lang === "tr" ? "tr_TR" : lang === "de" ? "de_DE" : "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${siteName}`,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Sheet metal parts and enclosures`,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "manufacturing",
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName,
    title: `${siteName} — Sheet metal parts and enclosures from Türkiye`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Sheet metal parts and enclosures from Türkiye`,
    description: siteDescription,
  },
};
