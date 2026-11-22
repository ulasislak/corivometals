const SECRET_PREFIX = "sb_secret_";
const PUBLISHABLE_PREFIX = "sb_publishable_";

export function isSecretSupabaseKey(key: string): boolean {
  return key.trim().startsWith(SECRET_PREFIX);
}

export function isPublishableSupabaseKey(key: string): boolean {
  return key.trim().startsWith(PUBLISHABLE_PREFIX);
}
