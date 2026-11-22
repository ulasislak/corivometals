import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { hrefFor } from "@/i18n/locale";
import { pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

describe("page metadata", () => {
  it("sets canonical, hreflang, and x-default for each locale", () => {
    const meta = pageMetadata({
      title: "Laser cutting and bending",
      description: "Sheet metal.",
      path: "/sheet-metal",
      lang: "tr",
    });
    expect(meta.alternates?.canonical).toBe(hrefFor("tr", "/sheet-metal"));
    expect(meta.alternates?.languages).toEqual({
      en: "/en/sheet-metal",
      de: "/de/sheet-metal",
      tr: "/tr/sheet-metal",
      "x-default": "/en/sheet-metal",
    });
    expect(meta.openGraph && "locale" in meta.openGraph ? meta.openGraph.locale : "").toBe("tr_TR");
  });

  it("lists every locale in the sitemap with hreflang", () => {
    const entries = sitemap();
    const sheet = entries.find((entry) => entry.url === `${siteUrl}/de/sheet-metal`);
    expect(sheet?.alternates?.languages).toEqual({
      en: `${siteUrl}/en/sheet-metal`,
      de: `${siteUrl}/de/sheet-metal`,
      tr: `${siteUrl}/tr/sheet-metal`,
      "x-default": `${siteUrl}/en/sheet-metal`,
    });
    expect(entries.some((entry) => entry.url.endsWith("/thank-you"))).toBe(false);
    expect(entries.some((entry) => entry.url.includes("/inbox"))).toBe(false);
  });
});
