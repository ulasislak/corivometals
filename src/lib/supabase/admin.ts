import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { isPublishableSupabaseKey, isSecretSupabaseKey } from "@/lib/supabase/keys";

export function adminClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const publicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ?? "";
  if (!url || !key) return null;
  if (isPublishableSupabaseKey(key) || isSecretSupabaseKey(publicKey)) {
    console.error("Supabase keys are in the wrong variables. The secret key must stay server-only.");
    return null;
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
