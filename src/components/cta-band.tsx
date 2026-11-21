import Link from "next/link";
import { primaryButton } from "@/components/styles";

export function CtaBand({ href = "/request-a-quote" }: { href?: string }) {
  return (
    <section className="no-print bg-slate-950 text-white">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-14 sm:py-16">
        <p className="font-mono text-xs tracking-[0.18em] text-amber-400">NEXT STEP</p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight">Send the drawing.</h2>
        <p className="max-w-xl text-slate-300">
          A complete request gets a reply within 48 hours: price, lead time, and a manufacturability note. Prices stay on the quote.
        </p>
        <div>
          <Link href={href} className={primaryButton}>
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
