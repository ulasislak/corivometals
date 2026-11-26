import { company, contactEmail, siteName, siteUrl } from "@/lib/site";
import type { FaqItem } from "@/i18n/copy";
import { hrefFor, locales, type Locale } from "@/i18n/locale";

export function organizationJsonLd(description: string, lang: Locale = "en"): Record<string, unknown> {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    description,
    inLanguage: lang,
    areaServed: { "@type": "Place", name: "Worldwide" },
    knowsLanguage: [...locales],
    knowsAbout: [
      "Sheet metal fabrication",
      "Laser cutting",
      "Press brake bending",
      "Welded enclosures",
      "Powder coating",
      "CNC machining",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom parts",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Laser-cut and bent sheet metal",
            url: `${siteUrl}${hrefFor(lang, "/sheet-metal")}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enclosures and welded assemblies",
            url: `${siteUrl}${hrefFor(lang, "/enclosures")}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CNC machining",
            url: `${siteUrl}${hrefFor(lang, "/cnc-parts")}`,
          },
        },
      ],
    },
  };

  if (contactEmail) data.email = contactEmail;
  if (process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim()) {
    data.telephone = process.env.NEXT_PUBLIC_CONTACT_PHONE.trim();
  }
  if (company.address || company.city || company.country) {
    data.address = {
      "@type": "PostalAddress",
      ...(company.address ? { streetAddress: company.address } : {}),
      ...(company.postalCode ? { postalCode: company.postalCode } : {}),
      ...(company.city ? { addressLocality: company.city } : {}),
      ...(company.country ? { addressCountry: company.country } : {}),
    };
  }

  return data;
}

export function faqPageJsonLd(items: readonly FaqItem[], lang: Locale = "en"): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(name: string, path: string, homeName = "Home", homePath = "/"): Record<string, unknown> {
  return breadcrumbListJsonLd([
    { name: homeName, path: homePath },
    { name, path },
  ]);
}

export function breadcrumbListJsonLd(
  crumbs: readonly { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.path.startsWith("http") ? crumb.path : `${siteUrl}${crumb.path}`,
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  lang: Locale;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    inLanguage: input.lang,
    provider: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
  };
}

export function webApplicationJsonLd(input: {
  name: string;
  description: string;
  path: string;
  lang: Locale;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: input.name,
    description: input.description,
    url: `${siteUrl}${input.path}`,
    inLanguage: input.lang,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    provider: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
