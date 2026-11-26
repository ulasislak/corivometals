import Link from "next/link";
import { DirectAnswer } from "@/components/seo/direct-answer";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListJsonLd } from "@/lib/json-ld";
import { hrefFor, type Locale } from "@/i18n/locale";
import { getCopy } from "@/i18n/copy";

export type Crumb = { label: string; href?: string };

export function SeoPageHeader({
  locale,
  kicker,
  h1,
  directAnswer,
  crumbs,
}: {
  locale: Locale;
  kicker: string;
  h1: string;
  directAnswer: string;
  crumbs: readonly Crumb[];
}) {
  const home = getCopy(locale).missing.home;
  const trail: Crumb[] = [{ label: home, href: "/" }, ...crumbs];
  const jsonCrumbs = trail.map((item, index) => ({
    name: item.label,
    path: index === 0 || !item.href ? hrefFor(locale, item.href ?? "/") : hrefFor(locale, item.href),
  }));

  return (
    <header className="tech-grid border-b border-slate-200">
      <JsonLd data={breadcrumbListJsonLd(jsonCrumbs)} />
      <div className="mx-auto max-w-page px-4 py-8 sm:py-10">
        <div className="border border-slate-300 bg-white p-5 sm:p-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-600">
              {trail.map((item, index) => {
                const last = index === trail.length - 1;
                return (
                  <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {index > 0 ? <span aria-hidden="true">/</span> : null}
                    {last || !item.href ? (
                      <span aria-current={last ? "page" : undefined}>{item.label}</span>
                    ) : (
                      <Link
                        href={hrefFor(locale, item.href)}
                        className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
          <p className="mt-5 font-mono text-xs tracking-[0.18em] text-amber-800">{kicker}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{h1}</h1>
          <DirectAnswer text={directAnswer} />
        </div>
      </div>
    </header>
  );
}
