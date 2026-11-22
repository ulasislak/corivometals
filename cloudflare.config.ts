import { existsSync, readFileSync } from "node:fs";
import { bindings, defineConfig, defineWorker } from "cf/config";

function configured(name: string): boolean {
  const fromProcess = process.env[name]?.trim();
  if (fromProcess) return true;
  if (!existsSync(".env.local")) return false;
  return readFileSync(".env.local", "utf8")
    .split(/\r?\n/)
    .some((line) => line.startsWith(`${name}=`) && line.slice(name.length + 1).trim().length > 0);
}

function secret(name: string): Record<string, ReturnType<typeof bindings.secret>> {
  return configured(name) ? { [name]: bindings.secret() } : {};
}

export default defineConfig({
  worker: defineWorker({
    name: "corivo",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-22",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      ...secret("SUPABASE_SERVICE_ROLE_KEY"),
      ...secret("RESEND_API_KEY"),
      ...secret("RESEND_FROM_EMAIL"),
      ...secret("QUOTE_NOTIFY_EMAIL"),
      ...secret("RATE_LIMIT_SALT"),
      ...secret("QUOTE_INBOX_KEY"),
    },
  }),
});
