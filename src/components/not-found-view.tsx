import Link from "next/link";
import { headers } from "next/headers";
import { getCopy } from "@/i18n/copy";
import { hrefFor, isLocale } from "@/i18n/locale";

export function NotFoundView() {
  const requested = headers().get("x-corivo-locale");
  const lang = isLocale(requested) ? requested : "en";
  const copy = getCopy(lang).missing;
  return (
    <div className="mx-auto max-w-page px-4 py-20">
      <p className="font-mono text-xs tracking-[0.18em] text-amber-800">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-950">{copy.title}</h1>
      <p className="mt-4 max-w-xl text-slate-700">{copy.body}</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link href={hrefFor(lang, "/")} className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
          {copy.home}
        </Link>
        <Link href={hrefFor(lang, "/request-a-quote")} className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
          {copy.quote}
        </Link>
      </div>
    </div>
  );
}
