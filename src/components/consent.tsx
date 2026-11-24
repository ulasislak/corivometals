"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCopy } from "@/i18n/copy";
import { hrefFor, localeFromPath } from "@/i18n/locale";
import { analyticsEnabled } from "@/lib/site";
import { secondaryButton } from "@/components/styles";

const STORAGE_KEY = "corivo-consent";
const CONSENT_EVENT = "corivo-consent-change";

type Consent = "accepted" | "rejected";

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (value === "accepted" || value === "rejected") return value;
  } catch {
    return null;
  }
  return null;
}

export function writeConsent(value: Consent) {
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function CookieConsent() {
  const lang = localeFromPath(usePathname() ?? "/en");
  const copy = getCopy(lang).privacy;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!analyticsEnabled()) return;
    if (!readConsent()) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="no-print border-b border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-4 py-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-slate-100">
          {copy.banner}{" "}
          <Link href={hrefFor(lang, "/privacy")} className="underline decoration-amber-400 underline-offset-4">
            {copy.title}
          </Link>
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="inline-flex min-h-11 items-center border border-slate-500 px-4 text-sm font-semibold text-white"
            onClick={() => {
              writeConsent("rejected");
              setVisible(false);
            }}
          >
            {copy.reject}
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center border border-amber-600 bg-amber-500 px-4 text-sm font-semibold text-slate-950"
            onClick={() => {
              writeConsent("accepted");
              setVisible(false);
            }}
          >
            {copy.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

type DataLayerWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

function applyConsent(value: Consent | null) {
  const target = window as DataLayerWindow;
  if (typeof target.gtag !== "function") return;
  const state = value === "accepted" ? "granted" : "denied";
  target.gtag("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
}

export function Analytics() {
  useEffect(() => {
    if (!analyticsEnabled()) return;

    function sync() {
      applyConsent(readConsent());
    }

    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  return null;
}

export function ConsentPreferences() {
  const lang = localeFromPath(usePathname() ?? "/en");
  const copy = getCopy(lang).privacy;
  const enabled = analyticsEnabled();
  const [choice, setChoice] = useState(copy.choiceUnset);

  useEffect(() => {
    function sync() {
      const stored = readConsent();
      setChoice(stored === "accepted" ? copy.choiceAccepted : stored === "rejected" ? copy.choiceRejected : copy.choiceUnset);
    }
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  if (!enabled) {
    return <p>{copy.analyticsOff}</p>;
  }

  return (
    <div className="border border-slate-300 bg-white p-4">
      <p>
        {copy.choice}: <span className="font-mono text-sm">{choice}</span>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className={secondaryButton} onClick={() => writeConsent("accepted")}>
          {copy.accept}
        </button>
        <button type="button" className={secondaryButton} onClick={() => writeConsent("rejected")}>
          {copy.reject}
        </button>
      </div>
    </div>
  );
}
