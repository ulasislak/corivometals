import Link from "next/link";
import { hrefFor, type Locale } from "@/i18n/locale";
import { getSeoUiCopy } from "@/content/seo/ui-copy";

export type RelatedLink = {
  href: string;
  title: string;
  description?: string;
};

export function RelatedPages({
  locale,
  items,
  hub,
}: {
  locale: Locale;
  items: readonly RelatedLink[];
  hub?: RelatedLink;
}) {
  const ui = getSeoUiCopy(locale);
  if (items.length === 0 && !hub) return null;
  return (
    <section className="border-t border-slate-200 pt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{ui.related}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {hub ? (
          <li>
            <Link
              href={hrefFor(locale, hub.href)}
              className="block border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:border-slate-400"
            >
              <p className="font-mono text-[10px] tracking-[0.16em] text-amber-800">{ui.hub}</p>
              <p className="mt-1 text-sm font-semibold text-slate-950">{hub.title}</p>
              {hub.description ? <p className="mt-1 text-sm text-slate-600">{hub.description}</p> : null}
            </Link>
          </li>
        ) : null}
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={hrefFor(locale, item.href)}
              className="block border border-slate-200 bg-white px-4 py-3 transition-colors hover:border-slate-400"
            >
              <p className="text-sm font-semibold text-slate-950">{item.title}</p>
              {item.description ? <p className="mt-1 text-sm text-slate-600">{item.description}</p> : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
