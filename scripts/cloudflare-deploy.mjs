import { spawnSync } from "node:child_process";
import { rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const secretNames = [
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
  "QUOTE_NOTIFY_EMAIL",
  "RATE_LIMIT_SALT",
  "QUOTE_INBOX_KEY",
];

function run(bin, args) {
  const result = spawnSync(process.execPath, [bin, ...args], { cwd: root, stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

run(path.join(root, "node_modules", "vite", "bin", "vite.js"), ["build"]);

const secrets = {};
for (const name of secretNames) {
  const value = process.env[name]?.trim();
  if (value) secrets[name] = value;
}

const args = ["deploy", "--prebuilt", "--mode", "production"];
let secretsPath;
if (Object.keys(secrets).length > 0) {
  secretsPath = path.join(tmpdir(), `corivo-cf-secrets-${process.pid}.json`);
  writeFileSync(secretsPath, JSON.stringify(secrets), { mode: 0o600 });
  args.push("--secrets-file", secretsPath);
}

try {
  run(path.join(root, "node_modules", "cf", "bin", "cf"), args);
} finally {
  if (secretsPath) rmSync(secretsPath, { force: true });
}
