export const siteName = "Corivo";

export const siteDescription =
  "Custom sheet metal parts and enclosures made in Türkiye for European machine builders and panel builders. Quote in 48 hours.";

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

export const siteUrl = trimTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000",
);

export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";
export const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "";

export const company = {
  legalName: process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME?.trim() || "",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS?.trim() || "",
  postalCode: process.env.NEXT_PUBLIC_COMPANY_POSTAL_CODE?.trim() || "",
  city: process.env.NEXT_PUBLIC_COMPANY_CITY?.trim() || "",
  country: process.env.NEXT_PUBLIC_COMPANY_COUNTRY?.trim() || "",
  register: process.env.NEXT_PUBLIC_COMPANY_REGISTER?.trim() || "",
  vat: process.env.NEXT_PUBLIC_COMPANY_VAT?.trim() || "",
  representative: process.env.NEXT_PUBLIC_COMPANY_REPRESENTATIVE?.trim() || "",
};

export const analytics = {
  src: process.env.NEXT_PUBLIC_ANALYTICS_SRC?.trim() || "",
  domain: process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN?.trim() || "",
};

export function analyticsEnabled(): boolean {
  return Boolean(analytics.src && analytics.domain);
}

export const policyUpdated = "21 November 2026";

export const quoteHours = 48;

export const routes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/sheet-metal", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/enclosures", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/cnc-parts", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/industries", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/how-it-works", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/request-a-quote", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/imprint", changeFrequency: "yearly" as const, priority: 0.3 },
];
