import { ClaimList } from "@/components/claim-list";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Corivo is a sourcing partner for custom sheet metal parts and enclosures made in Türkiye and supplied to European machine builders and panel builders.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="ABOUT"
        title="About Corivo"
        lede="Corivo is a sourcing partner. Sheet metal parts, enclosures, and simple CNC parts are made in Türkiye for machine builders, panel builders, and HVAC companies in Europe. The buyers we spend the most time with are in Germany, Austria, and the Benelux."
        crumb="About"
      />
      <div className="mx-auto max-w-page px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="max-w-3xl space-y-4 text-slate-700">
            <p>You work with a single contact from the first drawing through later batches. Quotes and this website are in English.</p>
            <p>
              Every quote includes a manufacturability note. Every shipment includes a dimensional report and photos. A material certificate and an NDA are available when you ask for them.
            </p>
            <p>
              Prices, production lead times, and any certification you need for a specific order belong on the quote, where they can be checked against the drawing. They are not listed on this site.
            </p>
          </div>
          <ClaimList />
        </div>
      </div>
      <CtaBand />
    </>
  );
}
