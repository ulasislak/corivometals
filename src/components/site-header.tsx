"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { getCopy } from "@/i18n/copy";
import { hrefFor, localeFromPath, locales, stripLocale, switchLocale } from "@/i18n/locale";
import { primaryButton } from "@/components/styles";

export function SiteHeader() {
  const pathname = usePathname() ?? "/en";
  const lang = localeFromPath(pathname);
  const copy = getCopy(lang).chrome;
  const bare = stripLocale(pathname);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const quoteHref = bare === "/" ? hrefFor(lang, "/#quote") : hrefFor(lang, "/request-a-quote");

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
        <Link href={hrefFor(lang, "/")} className="font-mono text-sm font-semibold tracking-[0.22em] text-slate-950" aria-label={copy.homeAria}>
          CORIVO
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-x-4 lg:flex">
          {copy.header.map((link) => {
            const href = hrefFor(lang, link.href);
            const current = bare === link.href;
            return (
              <Link
                key={link.href}
                href={href}
                aria-current={current ? "page" : undefined}
                className={`text-sm ${current ? "border-b-2 border-amber-500 font-semibold text-slate-950" : "text-slate-700 hover:text-slate-950"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitch pathname={pathname} label={copy.language} />
          <Link
            href={quoteHref}
            className={primaryButton}
            aria-current={bare === "/request-a-quote" ? "page" : undefined}
          >
            <span className="sm:hidden">{copy.quoteShort}</span>
            <span className="hidden sm:inline">{copy.quote}</span>
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 items-center border border-slate-300 px-3 text-sm font-semibold text-slate-950 lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? copy.close : copy.menu}
          </button>
        </div>
      </div>
      {open ? (
        <nav id={panelId} aria-label="Mobile" className="border-t border-slate-200 bg-white px-4 py-2 lg:hidden">
          <ul>
            {copy.header.map((link) => (
              <li key={link.href}>
                <Link
                  href={hrefFor(lang, link.href)}
                  aria-current={bare === link.href ? "page" : undefined}
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

function LanguageSwitch({ pathname, label }: { pathname: string; label: string }) {
  const current = localeFromPath(pathname);
  return (
    <nav aria-label={label} className="flex min-h-11 items-center border border-slate-300 font-mono text-xs">
      {locales.map((locale) => {
        const active = current === locale;
        return (
          <Link
            key={locale}
            href={switchLocale(pathname, locale)}
            hrefLang={locale}
            lang={locale}
            aria-current={active ? "true" : undefined}
            className={`flex h-11 items-center px-2 ${active ? "bg-slate-950 text-white" : "text-slate-700 hover:text-slate-950"}`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
