"use client";

import { useMemo, useState } from "react";
import { fieldClass } from "@/components/styles";
import type { Locale } from "@/i18n/locale";

const DENSITIES: { id: string; label: Record<Locale, string>; density: number }[] = [
  { id: "mild", label: { en: "Mild steel (≈7.85)", de: "Baustahl (≈7.85)", tr: "DKP / St37 (≈7.85)" }, density: 7.85 },
  { id: "stainless", label: { en: "Stainless 304 (≈8.00)", de: "Edelstahl 304 (≈8.00)", tr: "Paslanmaz 304 (≈8.00)" }, density: 8.0 },
  { id: "alu", label: { en: "Aluminium (≈2.70)", de: "Aluminium (≈2.70)", tr: "Alüminyum (≈2.70)" }, density: 2.7 },
  { id: "galv", label: { en: "Galvanized steel (≈7.85)", de: "Verzinkt (≈7.85)", tr: "Galvaniz (≈7.85)" }, density: 7.85 },
  { id: "copper", label: { en: "Copper (≈8.96)", de: "Kupfer (≈8.96)", tr: "Bakır (≈8.96)" }, density: 8.96 },
  { id: "brass", label: { en: "Brass (≈8.50)", de: "Messing (≈8.50)", tr: "Pirinç (≈8.50)" }, density: 8.5 },
];

const copy = {
  en: {
    material: "Material",
    length: "Length (mm)",
    width: "Width (mm)",
    thickness: "Thickness (mm)",
    qty: "Quantity",
    result: "Estimated mass",
    note: "Estimate only. Uses conventional density values. Scrap, kerf, and coatings are not included.",
    kg: "kg",
    g: "g",
  },
  de: {
    material: "Werkstoff",
    length: "Länge (mm)",
    width: "Breite (mm)",
    thickness: "Dicke (mm)",
    qty: "Stückzahl",
    result: "Geschätzte Masse",
    note: "Nur Schätzung. Übliche Dichtewerte. Verschnitt, Kerf und Beschichtung sind nicht enthalten.",
    kg: "kg",
    g: "g",
  },
  tr: {
    material: "Malzeme",
    length: "Boy (mm)",
    width: "En (mm)",
    thickness: "Kalınlık (mm)",
    qty: "Adet",
    result: "Tahmini kütle",
    note: "Yalnızca tahmin. Yaygın yoğunluk değerleri kullanılır. Fire, kerf ve kaplama dahil değildir.",
    kg: "kg",
    g: "g",
  },
} as const;

export function WeightCalculator({ locale }: { locale: Locale }) {
  const t = copy[locale] ?? copy.en;
  const [materialId, setMaterialId] = useState("mild");
  const [length, setLength] = useState("500");
  const [width, setWidth] = useState("300");
  const [thickness, setThickness] = useState("2");
  const [qty, setQty] = useState("1");

  const massKg = useMemo(() => {
    const material = DENSITIES.find((item) => item.id === materialId) ?? DENSITIES[0];
    const l = Number(length);
    const w = Number(width);
    const th = Number(thickness);
    const q = Number(qty);
    if (![l, w, th, q].every((n) => Number.isFinite(n) && n > 0) || !material) return null;
    // VERIFY density table values are conventional handbook figures
    const volumeCm3 = (l * w * th) / 1000;
    return (volumeCm3 * material.density * q) / 1000;
  }, [materialId, length, width, thickness, qty]);

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-900">
          {t.material}
          <select className={fieldClass} value={materialId} onChange={(event) => setMaterialId(event.target.value)}>
            {DENSITIES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label[locale]}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-slate-900">
          {t.qty}
          <input className={fieldClass} inputMode="numeric" value={qty} onChange={(event) => setQty(event.target.value)} />
        </label>
        <label className="text-sm font-medium text-slate-900">
          {t.length}
          <input className={fieldClass} inputMode="decimal" value={length} onChange={(event) => setLength(event.target.value)} />
        </label>
        <label className="text-sm font-medium text-slate-900">
          {t.width}
          <input className={fieldClass} inputMode="decimal" value={width} onChange={(event) => setWidth(event.target.value)} />
        </label>
        <label className="text-sm font-medium text-slate-900 sm:col-span-2">
          {t.thickness}
          <input className={fieldClass} inputMode="decimal" value={thickness} onChange={(event) => setThickness(event.target.value)} />
        </label>
      </div>
      <div className="border border-slate-200 bg-white px-4 py-3">
        <p className="font-mono text-[11px] tracking-[0.16em] text-slate-500">{t.result}</p>
        <p className="mt-1 text-2xl font-semibold text-slate-950">
          {massKg === null
            ? "—"
            : massKg >= 1
              ? `${massKg.toFixed(3)} ${t.kg}`
              : `${(massKg * 1000).toFixed(1)} ${t.g}`}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">{t.note}</p>
      </div>
    </div>
  );
}
