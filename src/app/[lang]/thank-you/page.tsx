import type { Metadata } from "next";
import Link from "next/link";
import { QuoteReference } from "@/components/quote-reference";
import { readPage } from "@/i18n/page";
import { hrefFor } from "@/i18n/locale";
import { pageMetadata } from "@/lib/seo";

type Props = { params: { lang: string } };

export function generateMetadata({ params }: Props): Metadata {
  const { locale, copy } = readPage(params.lang);
  return pageMetadata({
    title: copy.thanks.title,
    description: copy.thanks.description,
    path: "/thank-you",
    lang: locale,
    index: false,
  });
}

export default function ThankYouPage({ params }: Props) {
  const { locale, copy } = readPage(params.lang);
  return (
    <div className="mx-auto max-w-page px-4 py-16">
      <div className="max-w-2xl border border-slate-300 bg-white p-6 sm:p-8">
        <p className="font-mono text-xs tracking-[0.18em] text-amber-800">{copy.thanks.kicker}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{copy.thanks.heading}</h1>
        <p className="mt-4 text-slate-700">{copy.thanks.body}</p>
        <div className="mt-6 border-t border-slate-200 pt-4">
          <QuoteReference />
        </div>
        <p className="mt-6">
          <Link href={hrefFor(locale, "/")} className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
            {copy.thanks.back}
          </Link>
        </p>
      </div>
    </div>
  );
}
