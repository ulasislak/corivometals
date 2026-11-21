import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { industries } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "Sheet metal, enclosures, and simple CNC parts for machine builders, panel builders, and HVAC companies in Germany, Austria, and the Benelux.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        kicker="INDUSTRIES"
        title="Who the parts are for"
        lede="Machine builders, panel builders, and HVAC companies buying custom parts made in Türkiye. The same quote path applies: drawing, annual quantity, reply within 48 hours."
        crumb="Industries"
      />
      <div className="mx-auto max-w-page px-4 py-12">
        <div className="space-y-6">
          {industries.map((industry) => (
            <article key={industry.id} id={industry.id} className="scroll-mt-24 border border-slate-300 bg-white p-5 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">{industry.title}</h2>
              <p className="mt-3 max-w-3xl text-slate-700">{industry.lede}</p>
              <ul className="mt-4 grid gap-2 text-slate-800 sm:grid-cols-2">
                {industry.parts.map((part) => (
                  <li key={part} className="border border-slate-200 px-3 py-2 font-mono text-sm">
                    {part}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-3xl text-slate-700">{industry.send}</p>
              <p className="mt-4">
                <Link
                  href={industry.href}
                  className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4"
                >
                  {industry.linkLabel}
                </Link>
              </p>
            </article>
          ))}
        </div>
      </div>
      <CtaBand />
    </>
  );
}
