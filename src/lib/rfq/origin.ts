export function isAllowedRequestOrigin(origin: string | null, host: string | null): boolean {
  if (!origin) return true;
  if (origin === "null") return false;
  if (!host) return false;

  let url: URL;
  try {
    url = new URL(origin);
  } catch {
    return false;
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") return false;

  const hostName = host.split(",")[0]?.trim().toLowerCase().split(":")[0];
  if (!hostName) return false;
  return url.hostname.toLowerCase() === hostName;
}

export function requestHost(headers: Headers): string | null {
  return headers.get("x-forwarded-host") ?? headers.get("host");
}
