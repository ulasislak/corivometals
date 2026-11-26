import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { readPage } from "@/i18n/page";
import { pageMetadata } from "@/lib/seo";
import { company, contactEmail, contactPhone } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, copy } = readPage((await params).lang);
  return pageMetadata({
    title: copy.imprint.title,
    description: copy.imprint.description,
    path: "/imprint",
    lang: locale,
  });
}

export default async function ImprintPage({ params }: Props) {
  const { copy } = readPage((await params).lang);
  const page = copy.imprint;
  const notPublished = copy.notPublished;
  const rows: { label: string; value: string }[] = [
    { label: page.labels[0] ?? "Legal name", value: company.legalName || notPublished },
    { label: page.labels[1] ?? "Address", value: company.address || notPublished },
    { label: page.labels[2] ?? "Postal code", value: company.postalCode || notPublished },
    { label: page.labels[3] ?? "City", value: company.city || notPublished },
    { label: page.labels[4] ?? "Country", value: company.country || notPublished },
    { label: page.labels[5] ?? "Register", value: company.register || notPublished },
    { label: page.labels[6] ?? "VAT", value: company.vat || notPublished },
    { label: page.labels[7] ?? "Represented by", value: company.representative || notPublished },
    { label: page.labels[8] ?? "Email", value: contactEmail || notPublished },
    { label: page.labels[9] ?? "Phone", value: contactPhone || notPublished },
  ];

  return (
    <>
      <PageHeader kicker={page.kicker} title={page.heading} lede={page.lede} crumb={page.crumb} path="/imprint" />
      <div className="mx-auto max-w-page px-4 py-12">
        <div className="max-w-2xl overflow-hidden border border-slate-200">
          <table className="w-full border-collapse text-left text-sm">
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-slate-200 first:border-t-0">
                  <th scope="row" className="w-[40%] bg-slate-50 px-3 py-2.5 font-medium text-slate-700">
                    {row.label}
                  </th>
                  <td className="px-3 py-2.5 text-slate-900">
                    {row.value === notPublished ? (
                      <span className="text-slate-500">
                        {/* Placeholder — fill via NEXT_PUBLIC_COMPANY_* env; do not invent legal data */}
                        {notPublished}
                      </span>
                    ) : (
                      row.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate-600">{page.closing}</p>
      </div>
    </>
  );
}
