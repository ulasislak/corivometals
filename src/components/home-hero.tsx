import Link from "next/link";
import { primaryButton } from "@/components/styles";

const heroSecondaryButton =
  "inline-flex min-h-11 items-center justify-center border border-white/55 bg-transparent px-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

type HomeHeroProps = {
  brand: string;
  eyebrow: string;
  h1: string;
  lede: string;
  imageAlt: string;
  imageSrc: string;
  quoteLabel: string;
  productsLabel: string;
  quoteHref: string;
  productsHref: string;
};

export function HomeHero({
  brand,
  eyebrow,
  h1,
  lede,
  imageAlt,
  imageSrc,
  quoteLabel,
  productsLabel,
  quoteHref,
  productsHref,
}: HomeHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-900 bg-slate-950">
      <img
        src={imageSrc}
        alt={imageAlt}
        width={1800}
        height={1200}
        fetchPriority="high"
        className="hero-zoom absolute inset-0 h-full w-full object-cover object-[center_62%]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(2,6,23,0.78)_0%,rgba(2,6,23,0.42)_48%,rgba(2,6,23,0.2)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 w-[min(70%,42rem)] bg-gradient-to-r from-slate-950/50 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[min(72svh,34rem)] max-w-page flex-col justify-center px-4 py-16 sm:py-20 lg:min-h-[32rem] lg:py-24">
        <div className="max-w-2xl text-white">
          <p className="hero-rise font-mono text-[0.7rem] font-medium tracking-[0.28em] text-amber-300 sm:text-xs">
            {eyebrow}
          </p>
          <p className="hero-rise hero-rise-delay-1 mt-5 font-mono text-4xl font-semibold tracking-[0.32em] text-white sm:text-5xl">
            {brand}
          </p>
          <h1 className="hero-rise hero-rise-delay-2 mt-6 text-pretty text-[1.85rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.4rem] lg:text-[2.75rem] lg:leading-[1.08]">
            {h1}
          </h1>
          <p className="hero-rise hero-rise-delay-3 mt-4 max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
            {lede}
          </p>
          <div className="hero-rise hero-rise-delay-4 mt-8 flex flex-wrap items-center gap-3">
            <Link href={quoteHref} className={`${primaryButton} min-w-[10.5rem]`}>
              {quoteLabel}
            </Link>
            <Link href={productsHref} className={heroSecondaryButton}>
              {productsLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
