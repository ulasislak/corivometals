import Link from "next/link";
import { getSeoUiCopy } from "@/content/seo/ui-copy";
import { primaryButton } from "@/components/styles";
import { hrefFor, type Locale } from "@/i18n/locale";

export function SeoCta({ locale }: { locale: Locale }) {
  const ui = getSeoUiCopy(locale);
  return (
    <section className="mt-12 border border-slate-900 bg-slate-950 px-5 py-8 text-white sm:px-8">
      <h2 className="text-2xl font-semibold tracking-tight">{ui.ctaTitle}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">{ui.ctaText}</p>
      <Link href={hrefFor(locale, "/request-a-quote")} className={`${primaryButton} mt-6`}>
        {ui.ctaButton}
      </Link>
    </section>
  );
}
