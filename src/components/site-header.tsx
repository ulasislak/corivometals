"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { headerLinks } from "@/content/nav";
import { primaryButton } from "@/components/styles";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const quoteHref = pathname === "/" ? "/#quote" : "/request-a-quote";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="font-mono text-sm font-semibold tracking-[0.22em] text-slate-950" aria-label="Corivo home">
          CORIVO
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-x-4 lg:flex">
          {headerLinks.map((link) => {
            const current = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`text-sm ${current ? "border-b-2 border-amber-500 font-semibold text-slate-950" : "text-slate-700 hover:text-slate-950"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={quoteHref}
            className={primaryButton}
            aria-current={pathname === "/request-a-quote" ? "page" : undefined}
          >
            <span className="sm:hidden">Quote</span>
            <span className="hidden sm:inline">Request a quote</span>
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 items-center border border-slate-300 px-3 text-sm font-semibold text-slate-950 lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav id={panelId} aria-label="Mobile" className="border-t border-slate-200 bg-white px-4 py-2 lg:hidden">
          <ul>
            {headerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="flex min-h-11 items-center text-sm font-medium text-slate-950"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
