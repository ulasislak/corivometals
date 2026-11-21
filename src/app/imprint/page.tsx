import { PageHeader } from "@/components/page-header";
import { company, contactEmail, contactPhone } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Imprint",
  description: "Legal identity and contact details for the operator of the Corivo website.",
  path: "/imprint",
});

const facts = [
  { label: "Legal name", value: company.legalName },
  { label: "Address", value: company.address },
  { label: "Postal code", value: company.postalCode },
  { label: "City", value: company.city },
  { label: "Country", value: company.country },
  { label: "Register", value: company.register },
  { label: "VAT", value: company.vat },
  { label: "Represented by", value: company.representative },
  { label: "Email", value: contactEmail },
  { label: "Phone", value: contactPhone },
];

export default function ImprintPage() {
  return (
    <>
      <PageHeader
        kicker="LEGAL"
        title="Imprint"
        lede="Identity of the operator of this website. A line that says “Not published yet” has not been set in the site configuration. It is not a placeholder address."
        crumb="Imprint"
      />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <dl className="border-t border-slate-200">
          {facts.map((fact) => (
            <div key={fact.label} className="grid gap-1 border-b border-slate-200 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm text-slate-600">{fact.label}</dt>
              <dd className="font-medium text-slate-950 sm:col-span-2">{fact.value || "Not published yet"}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm leading-relaxed text-slate-700">
          Corivo supplies custom sheet metal parts, enclosures, and simple CNC parts made in Türkiye. Quotes on this website are in English.
        </p>
      </div>
    </>
  );
}
