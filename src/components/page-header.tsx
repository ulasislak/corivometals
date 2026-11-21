import Link from "next/link";

export function PageHeader({
  kicker,
  title,
  lede,
  crumb,
}: {
  kicker: string;
  title: string;
  lede: string;
  crumb: string;
}) {
  return (
    <header className="tech-grid border-b border-slate-200">
      <div className="mx-auto max-w-page px-4 py-8 sm:py-10">
        <div className="border border-slate-300 bg-white p-5 sm:p-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-600">
              <li>
                <Link href="/" className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950">
                  Home
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
