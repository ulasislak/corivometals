import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-page px-4 py-20">
      <p className="font-mono text-xs tracking-[0.18em] text-amber-800">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-950">This page is not on the drawing.</h1>
      <p className="mt-4 max-w-xl text-slate-700">The address does not match a page on this site.</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link href="/" className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
          Home
        </Link>
        <Link href="/request-a-quote" className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
          Request a quote
        </Link>
      </div>
    </div>
  );
}
