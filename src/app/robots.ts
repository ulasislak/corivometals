import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/thank-you",
        "/en/thank-you",
        "/de/thank-you",
        "/tr/thank-you",
        "/imprint",
        "/en/imprint",
        "/de/imprint",
        "/tr/imprint",
        "/inbox",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
