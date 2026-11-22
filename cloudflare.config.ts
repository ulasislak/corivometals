import { bindings, defineConfig, defineWorker } from "cf/config";

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
      SUPABASE_SERVICE_ROLE_KEY: bindings.secret(),
      RESEND_API_KEY: bindings.secret(),
      RESEND_FROM_EMAIL: bindings.secret(),
      QUOTE_NOTIFY_EMAIL: bindings.secret(),
      RATE_LIMIT_SALT: bindings.secret(),
      QUOTE_INBOX_KEY: bindings.secret(),
    },
  }),
});
