import { company, contactEmail, siteDescription, siteName, siteUrl } from "@/lib/site";
import { faqItems } from "@/content/faq";

export function organizationJsonLd(): Record<string, unknown> {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    areaServed: ["Germany", "Austria", "Netherlands", "Belgium", "Luxembourg"],
    knowsLanguage: "en",
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

export function faqPageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
