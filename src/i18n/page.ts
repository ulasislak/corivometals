import { notFound } from "next/navigation";
import { getCopy, type Copy } from "@/i18n/copy";
import { isLocale, type Locale } from "@/i18n/locale";

export function readPage(lang: string): { locale: Locale; copy: Copy } {
  if (!isLocale(lang)) notFound();
  return { locale: lang, copy: getCopy(lang) };
}
