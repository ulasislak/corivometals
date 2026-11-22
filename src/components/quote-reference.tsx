"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCopy } from "@/i18n/copy";
import { localeFromPath } from "@/i18n/locale";

export function QuoteReference() {
  const copy = getCopy(localeFromPath(usePathname() ?? "/en")).thanks;
  const [reference, setReference] = useState<string | null>(null);

  useEffect(() => {
    try {
      setReference(window.sessionStorage.getItem("corivo-rfq-ref"));
    } catch {
      setReference(null);
    }
  }, []);

  return (
    <p className="font-mono text-sm text-slate-800">
      {copy.reference}: {reference ?? copy.referenceMissing}
    </p>
  );
}
