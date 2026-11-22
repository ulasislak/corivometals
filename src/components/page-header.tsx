import Link from "next/link";
import { headers } from "next/headers";
import { JsonLd } from "@/components/json-ld";
import { getCopy } from "@/i18n/copy";
import { hrefFor, isLocale } from "@/i18n/locale";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export async function PageHeader({
  kicker,
  title,
  lede,
  crumb,
  path,
}: {
  kicker: string;
  title: string;
  lede: string;
  crumb: string;
  path: string;
}) {
  const requested = (await headers()).get("x-corivo-locale");
  const lang = isLocale(requested) ? requested : "en";
  const home = getCopy(lang).missing.home;
  const homePath = hrefFor(lang, "/");
  const pagePath = hrefFor(lang, path);
  return (
    <header className="tech-grid border-b border-slate-200">
      <JsonLd data={breadcrumbJsonLd(crumb, pagePath, home, homePath)} />
      <div className="mx-auto max-w-page px-4 py-8 sm:py-10">
        <div className="border border-slate-300 bg-white p-5 sm:p-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-600">
              <li>
                <Link href={homePath} className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950">
                  {home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{crumb}</li>
            </ol>
          </nav>
          <p className="mt-5 font-mono text-xs tracking-[0.18em] text-amber-800">{kicker}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">{lede}</p>
        </div>
      </div>
    </header>
  );
}
