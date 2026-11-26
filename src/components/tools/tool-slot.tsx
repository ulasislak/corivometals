import type { Locale } from "@/i18n/locale";
import { BendAllowanceCalculator } from "@/components/tools/bend-allowance-calculator";
import { WeightCalculator } from "@/components/tools/weight-calculator";

export function ToolSlot({
  toolId,
  locale,
}: {
  toolId?: "weight" | "bend-allowance";
  locale: Locale;
}) {
  if (toolId === "weight") return <WeightCalculator locale={locale} />;
  if (toolId === "bend-allowance") return <BendAllowanceCalculator locale={locale} />;
  return (
    <p className="text-sm text-slate-600">
      {locale === "tr"
        ? "Bu sayfada etkileşimli hesaplayıcı yok; tablolar ve açıklamalar aşağıdadır."
        : locale === "de"
          ? "Kein interaktiver Rechner auf dieser Seite — Tabellen und Erläuterungen folgen unten."
          : "No interactive calculator on this page — tables and explanations follow below."}
    </p>
  );
}
