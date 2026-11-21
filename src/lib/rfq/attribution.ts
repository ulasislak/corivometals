export type UtmFields = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
};

export const EMPTY_UTM: UtmFields = {
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmTerm: "",
  utmContent: "",
};

export const UTM_STORAGE_KEY = "corivo-utm";
export const REFERRER_STORAGE_KEY = "corivo-referrer";

export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

const UTM_PARAMS: Array<[keyof UtmFields, string]> = [
  ["utmSource", "utm_source"],
  ["utmMedium", "utm_medium"],
  ["utmCampaign", "utm_campaign"],
  ["utmTerm", "utm_term"],
  ["utmContent", "utm_content"],
];

export function readUtm(search: string): UtmFields {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const next = { ...EMPTY_UTM };
  for (const [field, param] of UTM_PARAMS) {
    next[field] = (params.get(param) ?? "").slice(0, 200);
  }
  return next;
}

export function hasUtm(utm: UtmFields): boolean {
  return Object.values(utm).some((value) => value.trim().length > 0);
}

export function parseStoredUtm(raw: string | null): UtmFields | null {
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    const record = parsed as Record<string, unknown>;
    const next = { ...EMPTY_UTM };
    for (const field of Object.keys(EMPTY_UTM) as Array<keyof UtmFields>) {
      const value = record[field];
      if (typeof value !== "string") return null;
      next[field] = value.slice(0, 200);
    }
    return next;
  } catch {
    return null;
  }
}

export function shouldKeepReferrer(referrer: string, origin: string): boolean {
  if (!referrer) return false;
  try {
    const url = new URL(referrer);
    if (url.protocol !== "http:" && url.protocol !== "https:") return false;
    return url.origin !== origin;
  } catch {
    return false;
  }
}

export function loadAttribution(input: {
  search: string;
  referrer: string;
  origin: string;
  storage: KeyValueStore;
}): { utm: UtmFields; referrer: string } {
  const fromUrl = readUtm(input.search);
  if (hasUtm(fromUrl)) {
    input.storage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
  }
  const utm = hasUtm(fromUrl)
    ? fromUrl
    : (parseStoredUtm(input.storage.getItem(UTM_STORAGE_KEY)) ?? EMPTY_UTM);

  const storedReferrer = input.storage.getItem(REFERRER_STORAGE_KEY);
  let referrer = "";
  if (storedReferrer && shouldKeepReferrer(storedReferrer, input.origin)) {
    referrer = storedReferrer;
  } else if (shouldKeepReferrer(input.referrer, input.origin)) {
    input.storage.setItem(REFERRER_STORAGE_KEY, input.referrer);
    referrer = input.referrer;
  }

  return { utm, referrer };
}

export function cleanUtm(value: string | undefined): string | null {
  if (!value) return null;
  const cleaned = value.trim().replace(/[^\w.\-]/g, "").slice(0, 120);
  return cleaned || null;
}

export function cleanReferrer(value: string | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim().slice(0, 500);
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.toString().slice(0, 500);
  } catch {
    return null;
  }
}

export function cleanPage(value: string | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!/^\/[a-z0-9\-/]*$/.test(trimmed)) return null;
  return trimmed.slice(0, 120);
}
