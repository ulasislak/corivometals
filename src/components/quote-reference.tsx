"use client";

import { useEffect, useState } from "react";

export function QuoteReference() {
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
      Reference: {reference ?? "printed in the confirmation email"}
    </p>
  );
}
