import type { MetadataRoute } from "next";
import { hrefFor, locales, type Locale } from "@/i18n/locale";
import { routes, siteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

const lastModified = new Date("2026-11-24T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) =>
    routes.map((route) => ({
      url: `${siteUrl}${hrefFor(lang, route.path)}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((locale: Locale) => [locale, `${siteUrl}${hrefFor(locale, route.path)}`])),
          "x-default": `${siteUrl}${hrefFor("en", route.path)}`,
        },
      },
    })),
  );
}
