"use client";

import { useMemo, useState } from "react";
import { fieldClass } from "@/components/styles";
import type { Locale } from "@/i18n/locale";

const copy = {
  en: {
    thickness: "Thickness (mm)",
    radius: "Inside radius (mm)",
    angle: "Bend angle (°)",
    kFactor: "K-factor",
    flangeA: "Flange A (mm, optional)",
    flangeB: "Flange B (mm, optional)",
    ba: "Bend allowance",
    bd: "Bend deduction",
    flat: "Flat length (A + B + BA)",
    note: "Planning estimate. Confirm against the shop process sheet and your drawing’s bend table.",
    mm: "mm",
  },
  de: {
    thickness: "Dicke (mm)",
    radius: "Innenradius (mm)",
    angle: "Biegewinkel (°)",
    kFactor: "K-Faktor",
    flangeA: "Schenkel A (mm, optional)",
    flangeB: "Schenkel B (mm, optional)",
    ba: "Biegezugabe",
    bd: "Biegeabzug",
    flat: "Abwicklung (A + B + BA)",
    note: "Planungswert. Mit der Werkstatt-Prozesskarte und der Biegetabelle der Zeichnung abgleichen.",
    mm: "mm",
  },
  tr: {
    thickness: "Kalınlık (mm)",
    radius: "İç yarıçap (mm)",
    angle: "Büküm açısı (°)",
    kFactor: "K-faktörü",
    flangeA: "Flanş A (mm, isteğe bağlı)",
    flangeB: "Flanş B (mm, isteğe bağlı)",
    ba: "Büküm payı",
    bd: "Büküm düşümü",
    flat: "Açınım boyu (A + B + BA)",
    note: "Planlama tahmini. Atölye proses kartı ve çizimdeki büküm tablosuyla doğrulayın.",
    mm: "mm",
  },
} as const;

export function BendAllowanceCalculator({ locale }: { locale: Locale }) {
  const t = copy[locale] ?? copy.en;
  const [thickness, setThickness] = useState("2");
  const [radius, setRadius] = useState("2");
  const [angle, setAngle] = useState("90");
  const [kFactor, setKFactor] = useState("0.44");
  const [flangeA, setFlangeA] = useState("40");
  const [flangeB, setFlangeB] = useState("40");

  const result = useMemo(() => {
    const T = Number(thickness);
    const R = Number(radius);
    const Adeg = Number(angle);
    const K = Number(kFactor);
    const FA = Number(flangeA);
    const FB = Number(flangeB);
    if (![T, R, Adeg, K].every((n) => Number.isFinite(n) && n > 0)) return null;
    if (Adeg >= 180 || K <= 0 || K >= 1) return null;
    const Arad = (Adeg * Math.PI) / 180;
    // VERIFY classic BA/BD formulas — confirm against your shop sheet
    const ba = Arad * (R + K * T);
    const bd = 2 * (R + T) * Math.tan(Arad / 2) - ba;
    const flat =
      Number.isFinite(FA) && FA > 0 && Number.isFinite(FB) && FB > 0 ? FA + FB + ba : null;
    return { ba, bd, flat };
  }, [thickness, radius, angle, kFactor, flangeA, flangeB]);

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-900">
          {t.thickness}
          <input className={fieldClass} inputMode="decimal" value={thickness} onChange={(e) => setThickness(e.target.value)} />
        </label>
        <label className="text-sm font-medium text-slate-900">
          {t.radius}
          <input className={fieldClass} inputMode="decimal" value={radius} onChange={(e) => setRadius(e.target.value)} />
        </label>
        <label className="text-sm font-medium text-slate-900">
          {t.angle}
          <input className={fieldClass} inputMode="decimal" value={angle} onChange={(e) => setAngle(e.target.value)} />
        </label>
        <label className="text-sm font-medium text-slate-900">
          {t.kFactor}
          <input className={fieldClass} inputMode="decimal" value={kFactor} onChange={(e) => setKFactor(e.target.value)} />
        </label>
        <label className="text-sm font-medium text-slate-900">
          {t.flangeA}
          <input className={fieldClass} inputMode="decimal" value={flangeA} onChange={(e) => setFlangeA(e.target.value)} />
        </label>
        <label className="text-sm font-medium text-slate-900">
          {t.flangeB}
          <input className={fieldClass} inputMode="decimal" value={flangeB} onChange={(e) => setFlangeB(e.target.value)} />
        </label>
      </div>
      <div className="grid gap-3 border border-slate-200 bg-white px-4 py-3 sm:grid-cols-3">
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-slate-500">{t.ba}</p>
          <p className="mt-1 text-xl font-semibold text-slate-950">
            {result ? `${result.ba.toFixed(3)} ${t.mm}` : "—"}
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-slate-500">{t.bd}</p>
          <p className="mt-1 text-xl font-semibold text-slate-950">
            {result ? `${result.bd.toFixed(3)} ${t.mm}` : "—"}
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-slate-500">{t.flat}</p>
          <p className="mt-1 text-xl font-semibold text-slate-950">
            {result?.flat != null ? `${result.flat.toFixed(3)} ${t.mm}` : "—"}
          </p>
        </div>
      </div>
      <p className="text-xs leading-relaxed text-slate-500">{t.note}</p>
    </div>
  );
}
