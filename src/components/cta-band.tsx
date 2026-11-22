import Link from "next/link";
import { headers } from "next/headers";
import { getCopy } from "@/i18n/copy";
import { hrefFor, isLocale, type Locale } from "@/i18n/locale";
import { primaryButton } from "@/components/styles";

export function CtaBand({ href = "/request-a-quote", locale }: { href?: string; locale?: Locale }) {
  const requested = headers().get("x-corivo-locale");
  const lang = locale ?? (isLocale(requested) ? requested : "en");
  const copy = getCopy(lang);
  return (
    <section className="no-print bg-slate-950 text-white">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-14 sm:py-16">
        <p className="font-mono text-xs tracking-[0.18em] text-amber-400">{copy.cta.kicker}</p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight">{copy.cta.title}</h2>
        <p className="max-w-xl text-slate-300">{copy.cta.text}</p>
        <div>
          <Link href={hrefFor(lang, href)} className={primaryButton}>
            {copy.chrome.quote}
          </Link>
        </div>
      </div>
    </section>
  );
}
