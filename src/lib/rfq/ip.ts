import { createHash } from "node:crypto";

export function clientIp(headerValue: string | null): string | null {
  if (!headerValue) return null;
  const first = headerValue.split(",")[0]?.trim() ?? "";
  if (!first) return null;
  return first.slice(0, 64);
}

export function hashIp(ip: string, salt: string): string {
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}
