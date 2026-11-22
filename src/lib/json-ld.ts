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
    areaServed: [
      { "@type": "Place", name: "Europe" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "Belgium" },
      { "@type": "Country", name: "Luxembourg" },
    ],
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
      name: "Parts made in Türkiye",
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
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: homeName, item: `${siteUrl}${homePath}` },
      { "@type": "ListItem", position: 2, name, item: `${siteUrl}${path}` },
    ],
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
