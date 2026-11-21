export const BUCKET = "rfq-drawings";
export const MAX_FILE_BYTES = 20 * 1024 * 1024;
export const MAX_FILES = 8;
export const MAX_TOTAL_BYTES = 80 * 1024 * 1024;
export const ALLOWED_EXTENSIONS = ["dxf", "dwg", "step", "stp", "pdf"] as const;
export const RATE_LIMIT_MAX = 5;
export const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
export const MIN_SUBMIT_MS = 400;
export const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;
export const SIGNED_DOWNLOAD_SECONDS = 60 * 60 * 24 * 7;

const allowed = new Set<string>(ALLOWED_EXTENSIONS);
const blockedExtra = new Set([
  "exe",
  "js",
  "mjs",
  "msi",
  "bat",
  "cmd",
  "com",
  "scr",
  "dll",
  "html",
  "htm",
  "svg",
  "zip",
  "rar",
  "7z",
]);

export type FileMeta = {
  name: string;
  size: number;
};

export function extensionOf(name: string): string {
  const base = name.split(/[/\\]/).pop() ?? "";
  if (!base.includes(".")) return "";
  const ext = base.split(".").pop()?.toLowerCase() ?? "";
  return ext;
}

export function isAllowedDrawingName(name: string): boolean {
  const base = name.split(/[/\\]/).pop() ?? "";
  const parts = base.toLowerCase().split(".");
  if (parts.length < 2) return false;
  const ext = parts.pop();
  if (!ext || !allowed.has(ext)) return false;
  return !parts.some((part) => allowed.has(part) || blockedExtra.has(part));
}

export function safeFileName(name: string): string {
  const base = (name.split(/[/\\]/).pop() ?? "drawing").replace(/[^a-zA-Z0-9._-]/g, "_");
  const trimmed = base.replace(/_+/g, "_").replace(/^\.+/, "").slice(0, 80);
  return trimmed || "drawing";
}

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return "0 B";
  if (bytes < 1024) return `${Math.round(bytes)} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function evaluateIncomingFiles(
  existing: FileMeta[],
  incoming: FileMeta[],
): { accepted: FileMeta[]; errors: string[] } {
  const accepted = [...existing];
  const errors: string[] = [];
  const seen = new Set(existing.map((file) => `${file.name.toLowerCase()}:${file.size}`));

  for (const file of incoming) {
    if (accepted.length >= MAX_FILES) {
      errors.push(`You can attach up to ${MAX_FILES} files.`);
      break;
    }
    if (!isAllowedDrawingName(file.name)) {
      errors.push(`${file.name || "A file"} was not added. Use DXF, DWG, STEP, or PDF.`);
      continue;
    }
    if (!Number.isFinite(file.size) || file.size <= 0 || file.size > MAX_FILE_BYTES) {
      errors.push(`${file.name} was not added. Each file must be 20 MB or smaller.`);
      continue;
    }
    const key = `${file.name.toLowerCase()}:${file.size}`;
    if (seen.has(key)) {
      errors.push(`${file.name} is already attached.`);
      continue;
    }
    const total = accepted.reduce((sum, item) => sum + item.size, 0) + file.size;
    if (total > MAX_TOTAL_BYTES) {
      errors.push("The combined upload is limited to 80 MB.");
      continue;
    }
    seen.add(key);
    accepted.push(file);
  }

  return { accepted, errors };
}

export type ExpectedUpload = {
  path: string;
  name: string;
  size: number;
};

export type ListedUpload = {
  name: string;
  size: number | null;
};

export type UploadCheck =
  | { ok: true }
  | { ok: false; reason: "missing" | "size" | "unknown-size"; message: string };

export function verifyUploadedFiles(expected: ExpectedUpload[], listed: ListedUpload[]): UploadCheck {
  for (const file of expected) {
    const base = file.path.split("/").pop();
    const found = listed.find((item) => item.name === base);
    if (!found) {
      return { ok: false, reason: "missing", message: `${file.name} did not finish uploading. Try again.` };
    }
    if (found.size === null) {
      return {
        ok: false,
        reason: "unknown-size",
        message: `The file store did not confirm the size of ${file.name}. Try again.`,
      };
    }
    if (found.size <= 0 || found.size > MAX_FILE_BYTES) {
      return { ok: false, reason: "size", message: `${file.name} must be 20 MB or smaller.` };
    }
  }
  return { ok: true };
}

export function fileRuleError(files: FileMeta[]): string | null {
  if (files.length === 0) return "Add at least one DXF, DWG, STEP, or PDF.";
  if (files.length > MAX_FILES) return `You can attach up to ${MAX_FILES} files.`;
  let total = 0;
  for (const file of files) {
    if (!isAllowedDrawingName(file.name)) {
      return `${file.name} is not an accepted drawing. Use DXF, DWG, STEP, or PDF.`;
    }
    if (!Number.isInteger(file.size) || file.size <= 0 || file.size > MAX_FILE_BYTES) {
      return `${file.name} must be 20 MB or smaller.`;
    }
    total += file.size;
  }
  if (total > MAX_TOTAL_BYTES) return "The combined upload is limited to 80 MB.";
  return null;
}
