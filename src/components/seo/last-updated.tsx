import { getSeoUiCopy } from "@/content/seo/ui-copy";
import type { Locale } from "@/i18n/locale";

export function LastUpdated({ locale, date }: { locale: Locale; date: string }) {
  const ui = getSeoUiCopy(locale);
  return (
    <p className="mt-10 font-mono text-xs tracking-wide text-slate-500">
      {ui.updated}: {date}
    </p>
  );
}
