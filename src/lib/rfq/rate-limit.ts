import { RATE_LIMIT_MAX } from "@/lib/rfq/files";

export function isOverRateLimit(recentCount: number, max = RATE_LIMIT_MAX): boolean {
  return recentCount >= max;
}
