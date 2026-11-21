import Link from "next/link";
import { companyLinks, legalLinks, productLinks } from "@/content/nav";
import { company, contactEmail, contactPhone } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-mono text-sm font-semibold tracking-[0.22em] text-slate-950">CORIVO</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Sheet metal parts, enclosures, and simple CNC parts made in Türkiye for machine builders and panel builders in Europe.
          </p>
          {contactEmail ? (
            <p className="mt-3 text-sm">
              <a className="text-amber-800 underline decoration-amber-800/40 underline-offset-4" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
          ) : null}
          {contactPhone ? (
            <p className="mt-1 text-sm">
              <a className="text-amber-800 underline decoration-amber-800/40 underline-offset-4" href={`tel:${contactPhone}`}>
                {contactPhone}
              </a>
            </p>
          ) : null}
          {company.vat ? <p className="mt-3 font-mono text-xs text-slate-600">VAT {company.vat}</p> : null}
        </div>
        <FooterColumn title="Products" links={productLinks} />
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-4 py-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Quote within 48 hours. Prices are written on the quote, not listed here.</p>
          <p>© {year} {company.legalName || "Corivo"}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="font-mono text-xs tracking-[0.16em] text-slate-500">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-slate-800 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
