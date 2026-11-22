"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { isSecretSupabaseKey } from "@/lib/supabase/keys";

let browserClient: SupabaseClient | null = null;

export function browserSupabase(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("Supabase public keys are missing.");
  }
  if (isSecretSupabaseKey(key)) {
    throw new Error("Refusing to use a Supabase secret key in the browser.");
  }
  if (!browserClient) {
    browserClient = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return browserClient;
}

export function supabaseBrowserConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return Boolean(url && key && !isSecretSupabaseKey(key));
}
