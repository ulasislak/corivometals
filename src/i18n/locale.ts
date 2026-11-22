export const locales = ["en", "de", "tr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const localePrefix = new RegExp(`^/(${locales.join("|")})(?=/|$)`);

export function isLocale(value: string | null | undefined): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

export function localeFromPath(pathname: string): Locale {
  const matched = pathname.match(localePrefix)?.[1];
  return isLocale(matched) ? matched : defaultLocale;
}

export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(localePrefix, "");
  return stripped === "" ? "/" : stripped;
}

export function hrefFor(locale: Locale, path: string): string {
  const [base, hash = ""] = path.split("#");
  const normalized = base?.startsWith("/") ? base : `/${base ?? ""}`;
  const suffix = hash ? `#${hash}` : "";
  if (normalized === "/") return `/${locale}${suffix}`;
  return `/${locale}${normalized}${suffix}`;
}

export function switchLocale(pathname: string, locale: Locale): string {
  return hrefFor(locale, stripLocale(pathname));
}
