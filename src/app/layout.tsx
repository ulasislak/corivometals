import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { Analytics, CookieConsent } from "@/components/consent";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCopy } from "@/i18n/copy";
import { isLocale } from "@/i18n/locale";
import { organizationJsonLd } from "@/lib/json-ld";
import { rootMetadata } from "@/lib/seo";
import { gtmId } from "@/lib/site";
import "./globals.css";

const gtmBootstrap = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var granted = false;
try { granted = localStorage.getItem("corivo-consent") === "accepted"; } catch (e) {}
var state = granted ? "granted" : "denied";
gtag("consent", "default", {
  ad_storage: state,
  ad_user_data: state,
  ad_personalization: state,
  analytics_storage: state
});
gtag("js", new Date());
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);})(window,document,"script","dataLayer","${gtmId}");
`;

const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

const rootFontClass = `${sans.variable} ${mono.variable} ${sans.className}`;

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const requested = (await headers()).get("x-corivo-locale");
  const lang = isLocale(requested) ? requested : "en";
  const copy = getCopy(lang);
  return (
    <html lang={lang} className={rootFontClass}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: gtmBootstrap }} />
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased [font-feature-settings:'ss01'_on] tracking-[-0.011em]">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          {copy.chrome.skip}
        </a>
        <CookieConsent />
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <JsonLd data={organizationJsonLd(copy.description, lang)} />
        <Analytics />
      </body>
    </html>
  );
}
