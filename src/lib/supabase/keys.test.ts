import { describe, expect, it } from "vitest";
import { isPublishableSupabaseKey, isSecretSupabaseKey } from "@/lib/supabase/keys";

describe("Supabase key placement", () => {
  it("recognises a secret key and refuses it as a public key", () => {
    expect(isSecretSupabaseKey("sb_secret_example")).toBe(true);
    expect(isPublishableSupabaseKey("sb_secret_example")).toBe(false);
  });

  it("recognises a publishable key and refuses it as the server key", () => {
    expect(isPublishableSupabaseKey("sb_publishable_example")).toBe(true);
    expect(isSecretSupabaseKey("sb_publishable_example")).toBe(false);
  });
});
