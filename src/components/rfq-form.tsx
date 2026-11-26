"use client";

import {
  cloneElement,
  isValidElement,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { FOCUS_COUNTRIES, MATERIALS, OTHER_COUNTRIES } from "@/content/options";
import { getCopy } from "@/i18n/copy";
import { hrefFor, localeFromPath } from "@/i18n/locale";
import { localizeMessage } from "@/i18n/messages";
import { EMPTY_UTM, loadAttribution, type UtmFields } from "@/lib/rfq/attribution";
import { BUCKET, evaluateIncomingFiles, formatBytes } from "@/lib/rfq/files";
import { parseRfqPayload } from "@/lib/rfq/schema";
import { browserSupabase, supabaseBrowserConfigured } from "@/lib/supabase/browser";
import { contactEmail } from "@/lib/site";
import { fieldClass, primaryButton, secondaryButton } from "@/components/styles";

type SelectedFile = { file: File };
type UploadTicket = { path: string; token: string };
type Pending = { id: string; signature: string; uploads: UploadTicket[]; uploaded: boolean };
type Step = 1 | 2 | 3;

type ApiBody = {
  ok: boolean;
  error?: string;
  fields?: Record<string, string>;
  id?: string;
  uploads?: UploadTicket[];
  reset?: boolean;
};

const STEP_FIELDS: Record<Step, readonly string[]> = {
  1: ["files", "notes"],
  2: ["material", "quantity", "estimatedAnnualQuantity", "thickness", "requiredDeliveryDate"],
  3: ["email", "name", "company", "country"],
};

function stepForField(name: string): Step {
  for (const step of [1, 2, 3] as const) {
    if (STEP_FIELDS[step].includes(name)) return step;
  }
  return 1;
}

function firstErrorStep(fields: Record<string, string>, fileErrors: string[]): Step {
  if (fileErrors.length > 0 || fields.files || fields.notes) return 1;
  for (const key of Object.keys(fields)) {
    return stepForField(key);
  }
  return 1;
}

function readApiBody(value: unknown): ApiBody {
  if (!value || typeof value !== "object") {
    return { ok: false, error: "The quote service returned an unreadable response." };
  }
  const record = value as Record<string, unknown>;
  const fields: Record<string, string> = {};
  if (record.fields && typeof record.fields === "object") {
    for (const [key, message] of Object.entries(record.fields as Record<string, unknown>)) {
      if (typeof message === "string") fields[key] = message;
    }
  }
  const uploads = Array.isArray(record.uploads)
    ? record.uploads.flatMap((item) => {
        if (!item || typeof item !== "object") return [];
        const path = "path" in item ? item.path : undefined;
        const token = "token" in item ? item.token : undefined;
        if (typeof path !== "string" || typeof token !== "string") return [];
        return [{ path, token }];
      })
    : undefined;
  return {
    ok: record.ok === true,
    error: typeof record.error === "string" ? record.error : undefined,
    fields,
    id: typeof record.id === "string" ? record.id : undefined,
    uploads,
    reset: record.reset === true,
  };
}

async function postJson(url: string, body: unknown): Promise<ApiBody> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify(body),
  });
  try {
    return readApiBody(await response.json());
  } catch {
    return { ok: false, error: "The quote service returned an unreadable response." };
  }
}

function signatureOf(files: SelectedFile[]): string {
  return files.map((item) => `${item.file.name}:${item.file.size}:${item.file.lastModified}`).join("|");
}

export function RfqForm({ id = "quote" }: { id?: string }) {
  const router = useRouter();
  const pathname = usePathname() ?? "/en";
  const lang = localeFromPath(pathname);
  const copy = getCopy(lang).form;
  const t = (message: string) => localizeMessage(lang, message);
  const reactId = useId();
  const startedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [utm, setUtm] = useState<UtmFields>(EMPTY_UTM);
  const [referrer, setReferrer] = useState("");
  const [page, setPage] = useState("");
  const [selected, setSelected] = useState<SelectedFile[]>([]);
  const [fileErrors, setFileErrors] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [annualUnknown, setAnnualUnknown] = useState(false);
  const [flexibleDelivery, setFlexibleDelivery] = useState(false);
  const [pending, setPending] = useState<Pending | null>(null);
  const field = (name: string) => `${reactId}-${name}`;

  const steps = [
    { n: 1 as const, label: copy.stepPart },
    { n: 2 as const, label: copy.stepSpecs },
    { n: 3 as const, label: copy.stepContact },
  ];

  useEffect(() => {
    startedAt.current = Date.now();
    setReady(true);
    try {
      const stored = loadAttribution({
        search: window.location.search,
        referrer: document.referrer,
        origin: window.location.origin,
        storage: window.sessionStorage,
      });
      setUtm(stored.utm);
      setReferrer(stored.referrer);
    } catch {
      setUtm(EMPTY_UTM);
    }
    setPage(window.location.pathname);
  }, []);

  useEffect(() => {
    if (!formError && Object.keys(fieldErrors).length === 0) return;
    summaryRef.current?.focus();
  }, [formError, fieldErrors, step]);

  function addFiles(list: FileList | File[]) {
    let current = selected.map((item) => ({ name: item.file.name, size: item.file.size }));
    const next = [...selected];
    const errors: string[] = [];
    for (const file of Array.from(list)) {
      const result = evaluateIncomingFiles(current, [{ name: file.name, size: file.size }]);
      if (result.errors.length > 0) {
        errors.push(...result.errors);
        continue;
      }
      current = result.accepted;
      next.push({ file });
    }
    setSelected(next);
    setFileErrors(errors);
    setPending(null);
    const added = next.length - selected.length;
    const addedLabel =
      lang === "tr"
        ? added === 1
          ? "1 dosya eklendi."
          : `${added} dosya eklendi.`
        : lang === "de"
          ? added === 1
            ? "1 Datei hinzugefügt."
            : `${added} Dateien hinzugefügt.`
          : `${added} file${added === 1 ? "" : "s"} added.`;
    setStatus(errors[0] ? t(errors[0]) : added > 0 ? addedLabel : copy.noneAdded);
    if (fileInput.current) fileInput.current.value = "";
  }

  function removeFile(index: number) {
    setSelected((current) => current.filter((_, itemIndex) => itemIndex !== index));
    setPending(null);
    setFileErrors([]);
    setStatus(copy.removed);
  }

  function clearStepErrors(target: Step) {
    setFieldErrors((current) => {
      const next = { ...current };
      for (const key of STEP_FIELDS[target]) delete next[key];
      return next;
    });
    if (target === 1) setFileErrors([]);
    setFormError("");
  }

  function validateStep(target: Step): boolean {
    const form = formRef.current;
    if (!form) return false;
    const data = new FormData(form);
    const errors: Record<string, string> = {};
    const nextFileErrors: string[] = [];

    if (target === 1) {
      const notes = String(data.get("notes") ?? "").trim();
      if (selected.length === 0 && notes.length < 12) {
        nextFileErrors.push("Add a DXF, DWG, STEP, or PDF, or describe the part in the notes.");
        errors.notes = "Describe the part here, or attach a drawing above.";
        setFormError("Add a drawing, or describe the part in the notes.");
      }
    }

    if (target === 2) {
      if (!String(data.get("material") ?? "")) errors.material = "Select a material.";
      const quantity = String(data.get("quantity") ?? "").trim();
      if (!quantity || !/^\d{1,7}$/.test(quantity) || Number(quantity) < 1) {
        errors.quantity = "Enter the quantity as a whole number of pieces.";
      }
      if (!annualUnknown) {
        const annual = String(data.get("estimatedAnnualQuantity") ?? "").trim();
        if (!annual || !/^\d{1,7}$/.test(annual) || Number(annual) < 1) {
          errors.estimatedAnnualQuantity = "Enter the estimated annual quantity, or choose I don't know yet.";
        }
      }
    }

    if (target === 3) {
      const email = String(data.get("email") ?? "").trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email.";
      if (!String(data.get("name") ?? "").trim()) errors.name = "Enter your name.";
      if (!String(data.get("company") ?? "").trim()) errors.company = "Enter your company.";
    }

    setFieldErrors(errors);
    setFileErrors(nextFileErrors);
    if (Object.keys(errors).length > 0 || nextFileErrors.length > 0) {
      if (!formError) setFormError("Check the highlighted fields.");
      return false;
    }
    setFormError("");
    return true;
  }

  function goNext() {
    if (!validateStep(step)) return;
    clearStepErrors(step);
    setStep((current) => (current < 3 ? ((current + 1) as Step) : current));
  }

  function goBack() {
    clearStepErrors(step);
    setStep((current) => (current > 1 ? ((current - 1) as Step) : current));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 3) {
      goNext();
      return;
    }
    if (!validateStep(3)) return;

    const formData = new FormData(event.currentTarget);
    const body = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      country: String(formData.get("country") ?? ""),
      material: String(formData.get("material") ?? ""),
      thickness: String(formData.get("thickness") ?? ""),
      quantity: String(formData.get("quantity") ?? ""),
      estimatedAnnualQuantity: annualUnknown ? "unknown" : String(formData.get("estimatedAnnualQuantity") ?? ""),
      requiredDeliveryDate: flexibleDelivery ? "" : String(formData.get("requiredDeliveryDate") ?? ""),
      deliveryFlexible: flexibleDelivery,
      notes: String(formData.get("notes") ?? ""),
      files: selected.map((item) => ({ name: item.file.name, size: item.file.size })),
      utmSource: String(formData.get("utm_source") ?? ""),
      utmMedium: String(formData.get("utm_medium") ?? ""),
      utmCampaign: String(formData.get("utm_campaign") ?? ""),
      utmTerm: String(formData.get("utm_term") ?? ""),
      utmContent: String(formData.get("utm_content") ?? ""),
      referrer: String(formData.get("referrer") ?? ""),
      page: String(formData.get("page") ?? ""),
      locale: lang,
      corivoHp: String(formData.get("corivo_hp") ?? ""),
      startedAt: startedAt.current,
    };

    const parsed = parseRfqPayload(body);
    if (!parsed.ok) {
      const fields = parsed.fields ?? {};
      setFormError(parsed.error);
      setFieldErrors(fields);
      if (fields.files) setFileErrors([fields.files]);
      setStep(firstErrorStep(fields, fields.files ? [fields.files] : []));
      return;
    }

    if (!supabaseBrowserConfigured()) {
      setFormError(
        contactEmail
          ? `The quote inbox is not configured yet. Email ${contactEmail} with your drawing.`
          : "The quote inbox is not configured yet. Try again later.",
      );
      setFieldErrors({});
      return;
    }

    setSubmitting(true);
    setFormError("");
    setFieldErrors({});
    setFileErrors([]);

    try {
      const signature = signatureOf(selected);
      let current = pending && pending.signature === signature ? pending : null;

      if (!current) {
        setStatus(copy.checking);
        const prepared = await postJson("/api/rfq", body);
        if (!prepared.ok || !prepared.id || !prepared.uploads || prepared.uploads.length !== selected.length) {
          const fields = prepared.fields ?? {};
          setFormError(prepared.error ?? "The quote database did not accept the request.");
          setFieldErrors(fields);
          if (fields.files) setFileErrors([fields.files]);
          setStep(firstErrorStep(fields, fields.files ? [fields.files] : []));
          return;
        }
        current = { id: prepared.id, signature, uploads: prepared.uploads, uploaded: false };
        setPending(current);
      }

      if (!current.uploaded) {
        const supabase = browserSupabase();
        for (let index = 0; index < selected.length; index += 1) {
          const file = selected[index]?.file;
          const ticket = current.uploads[index];
          if (!file || !ticket) throw new Error("The upload list does not match the drawings.");
          setStatus(`${copy.uploading} ${file.name}.`);
          const uploaded = await supabase.storage.from(BUCKET).uploadToSignedUrl(ticket.path, ticket.token, file, {
            upsert: true,
            contentType: file.type || "application/octet-stream",
          });
          if (uploaded.error) {
            throw new Error(`${file.name} could not be uploaded to the file store. Try again.`);
          }
        }
        current = { ...current, uploaded: true };
        setPending(current);
      }

      setStatus(copy.sendingStatus);
      const completed = await postJson("/api/rfq/complete", { id: current.id });
      if (!completed.ok || !completed.id) {
        if (completed.reset) setPending(null);
        setFormError(completed.error ?? "The quote service did not confirm the request.");
        return;
      }

      try {
        window.sessionStorage.setItem("corivo-rfq-ref", completed.id);
      } catch {
        // The reference is still in the confirmation email.
      }
      router.push(hrefFor(lang, "/thank-you"));
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "The request could not be sent.");
    } finally {
      setSubmitting(false);
    }
  }

  const showSummary = Boolean(formError) || Object.keys(fieldErrors).length > 0 || fileErrors.length > 0;

  return (
    <form
      ref={formRef}
      id={id}
      className="scroll-mt-24 border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]"
      onSubmit={onSubmit}
      onInput={(event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;
        const name = target.getAttribute("name");
        if (!name || name.startsWith("utm_") || name === "referrer" || name === "page" || name === "corivo_hp") return;
        setPending(null);
      }}
      noValidate
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
        <p className="font-mono text-[11px] tracking-[0.18em] text-slate-500">RFQ</p>
        <p className="font-mono text-[11px] tracking-[0.18em] text-amber-800">{copy.window}</p>
      </div>

      <div className="px-4 py-5 sm:px-5">
        <h2 className="text-xl font-semibold tracking-tight text-slate-950">{copy.title}</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{copy.intro}</p>

        <ol className="mt-5 grid grid-cols-3 gap-2" aria-label={copy.title}>
          {steps.map((item) => {
            const active = item.n === step;
            const done = item.n < step;
            return (
              <li key={item.n}>
                <button
                  type="button"
                  className={`flex w-full flex-col gap-1 border-b-2 pb-2 text-left transition-colors ${
                    active
                      ? "border-amber-500 text-slate-950"
                      : done
                        ? "border-slate-300 text-slate-700"
                        : "border-slate-100 text-slate-400"
                  }`}
                  aria-current={active ? "step" : undefined}
                  onClick={() => {
                    if (item.n < step) setStep(item.n);
                    else if (item.n > step) {
                      for (let n = step; n < item.n; n += 1) {
                        if (!validateStep(n as Step)) {
                          setStep(n as Step);
                          return;
                        }
                        clearStepErrors(n as Step);
                      }
                      setStep(item.n);
                    }
                  }}
                >
                  <span className="font-mono text-[10px] tracking-[0.16em]">{String(item.n).padStart(2, "0")}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor={field("hp")}>{copy.honeypot}</label>
          <input id={field("hp")} name="corivo_hp" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>
        <input type="hidden" name="utm_source" value={utm.utmSource} />
        <input type="hidden" name="utm_medium" value={utm.utmMedium} />
        <input type="hidden" name="utm_campaign" value={utm.utmCampaign} />
        <input type="hidden" name="utm_term" value={utm.utmTerm} />
        <input type="hidden" name="utm_content" value={utm.utmContent} />
        <input type="hidden" name="referrer" value={referrer} />
        <input type="hidden" name="page" value={page} />

        <div ref={summaryRef} tabIndex={-1} className="outline-none">
          {showSummary ? (
            <div role="alert" className="mt-4 border border-red-200 bg-red-50 px-3 py-3 text-sm text-red-900">
              <p>{formError ? t(formError) : t("Check the highlighted fields.")}</p>
              {Object.entries(fieldErrors).length > 0 ? (
                <ul className="mt-2 list-disc pl-5">
                  {Object.entries(fieldErrors).map(([key, message]) => (
                    <li key={key}>
                      <a
                        href={`#${field(key === "files" ? "files" : key)}`}
                        className="underline"
                        onClick={(event) => {
                          event.preventDefault();
                          setStep(stepForField(key));
                          requestAnimationFrame(() => {
                            document.getElementById(field(key === "files" ? "files" : key))?.focus();
                          });
                        }}
                      >
                        {t(message)}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>

        <fieldset disabled={submitting} className="mt-5">
          <legend className="sr-only">{copy.title}</legend>

          <div className={step === 1 ? "grid gap-4" : "hidden"} aria-hidden={step !== 1}>
            <div>
              <label htmlFor={field("files")} className="text-sm font-medium text-slate-900">
                {copy.drawings}
              </label>
              <p id={field("files-hint")} className="mt-1 text-xs leading-relaxed text-slate-500">
                {copy.drawingsHint}
              </p>
              <div
                className={`mt-2 border border-dashed px-3 py-3 ${dragOver ? "border-amber-500 bg-amber-50" : "border-slate-200 bg-slate-50/80"}`}
                onDragOver={(event) => {
                  event.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(event) => {
                  event.preventDefault();
                  setDragOver(false);
                  addFiles(event.dataTransfer.files);
                }}
              >
                <input
                  ref={fileInput}
                  id={field("files")}
                  name="drawings"
                  type="file"
                  multiple
                  accept=".dxf,.dwg,.step,.stp,.pdf,application/pdf"
                  className="sr-only"
                  aria-describedby={`${field("files-hint")} ${field("files-error")}`.trim()}
                  onChange={(event) => {
                    if (event.target.files) addFiles(event.target.files);
                  }}
                />
                <label htmlFor={field("files")} className={`${primaryButton} cursor-pointer`}>
                  {copy.choose}
                </label>
                <p className="mt-2 text-xs text-slate-500">{copy.drop}</p>
              </div>
              {selected.length > 0 ? (
                <ul className="mt-3 divide-y divide-slate-100 border border-slate-200">
                  {selected.map((item, index) => (
                    <li key={`${item.file.name}-${item.file.lastModified}-${index}`} className="flex items-center justify-between gap-3 px-3 py-2">
                      <span className="min-w-0 truncate font-mono text-sm text-slate-900">{item.file.name}</span>
                      <span className="flex shrink-0 items-center gap-3">
                        <span className="font-mono text-xs text-slate-500">{formatBytes(item.file.size)}</span>
                        <button
                          type="button"
                          className="min-h-10 text-sm font-medium text-amber-800 underline decoration-amber-800/40"
                          onClick={() => removeFile(index)}
                        >
                          {copy.remove} <span className="sr-only">{item.file.name}</span>
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <p id={field("files-error")} className="mt-2 text-sm text-red-800" role={fileErrors.length ? "alert" : undefined}>
                {fileErrors.map((message) => t(message)).join(" ")}
              </p>
            </div>
            <Field
              label={copy.notes}
              error={fieldErrors.notes ? t(fieldErrors.notes) : undefined}
              hint={copy.notesHint}
              fieldId={field("notes")}
            >
              <textarea id={field("notes")} name="notes" rows={3} maxLength={4000} className={fieldClass} />
            </Field>
          </div>

          <div className={step === 2 ? "grid gap-4" : "hidden"} aria-hidden={step !== 2}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label={copy.material}
                required
                error={fieldErrors.material ? t(fieldErrors.material) : undefined}
                hint={copy.materialHint}
                fieldId={field("material")}
              >
                <select id={field("material")} name="material" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    {copy.materialPlaceholder}
                  </option>
                  {MATERIALS.map((material) => (
                    <option key={material.value} value={material.value}>
                      {copy.materials[material.value] ?? material.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                label={copy.quantity}
                required
                error={fieldErrors.quantity ? t(fieldErrors.quantity) : undefined}
                hint={copy.quantityHint}
                fieldId={field("quantity")}
              >
                <input id={field("quantity")} name="quantity" inputMode="numeric" required className={fieldClass} />
              </Field>
            </div>
            <div className="rounded-sm border border-amber-200/80 bg-amber-50/40 px-3 py-3">
              <Field
                label={copy.annual}
                required
                error={fieldErrors.estimatedAnnualQuantity ? t(fieldErrors.estimatedAnnualQuantity) : undefined}
                hint={copy.annualHint}
                fieldId={field("estimatedAnnualQuantity")}
              >
                <input
                  id={field("estimatedAnnualQuantity")}
                  name="estimatedAnnualQuantity"
                  inputMode="numeric"
                  required={!annualUnknown}
                  disabled={annualUnknown}
                  className={fieldClass}
                />
              </Field>
              <div className="mt-2 flex min-h-10 items-center gap-2">
                <input
                  id={field("annual-unknown")}
                  name="annualUnknown"
                  type="checkbox"
                  className="h-4 w-4 accent-amber-700"
                  checked={annualUnknown}
                  onChange={(event) => setAnnualUnknown(event.target.checked)}
                />
                <label htmlFor={field("annual-unknown")} className="text-sm text-slate-700">
                  {copy.annualUnknown}
                </label>
              </div>
            </div>
            <details className="group border border-slate-200 open:bg-slate-50/50">
              <summary className="cursor-pointer list-none px-3 py-2.5 text-sm font-medium text-slate-800 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  {copy.optionalDetails}
                  <span className="font-mono text-[10px] tracking-[0.14em] text-slate-400 group-open:hidden">+</span>
                  <span className="hidden font-mono text-[10px] tracking-[0.14em] text-slate-400 group-open:inline">−</span>
                </span>
              </summary>
              <div className="grid gap-4 border-t border-slate-200 px-3 py-3">
                <Field
                  label={copy.thickness}
                  optional
                  optionalLabel={copy.optional}
                  error={fieldErrors.thickness ? t(fieldErrors.thickness) : undefined}
                  hint={copy.thicknessHint}
                  fieldId={field("thickness")}
                >
                  <input id={field("thickness")} name="thickness" inputMode="decimal" className={fieldClass} />
                </Field>
                <Field
                  label={copy.delivery}
                  optional
                  optionalLabel={copy.optional}
                  error={fieldErrors.requiredDeliveryDate ? t(fieldErrors.requiredDeliveryDate) : undefined}
                  hint={copy.deliveryHint}
                  fieldId={field("requiredDeliveryDate")}
                >
                  <input
                    id={field("requiredDeliveryDate")}
                    name="requiredDeliveryDate"
                    type="date"
                    disabled={flexibleDelivery}
                    className={fieldClass}
                  />
                </Field>
                <div className="flex min-h-10 items-center gap-2">
                  <input
                    id={field("delivery-flexible")}
                    name="deliveryFlexible"
                    type="checkbox"
                    className="h-4 w-4 accent-amber-700"
                    checked={flexibleDelivery}
                    onChange={(event) => setFlexibleDelivery(event.target.checked)}
                  />
                  <label htmlFor={field("delivery-flexible")} className="text-sm text-slate-700">
                    {copy.flexible}
                  </label>
                </div>
              </div>
            </details>
          </div>

          <div className={step === 3 ? "grid gap-4" : "hidden"} aria-hidden={step !== 3}>
            <Field label={copy.email} required error={fieldErrors.email ? t(fieldErrors.email) : undefined} fieldId={field("email")}>
              <input id={field("email")} name="email" type="email" autoComplete="email" inputMode="email" required className={fieldClass} />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={copy.name} required error={fieldErrors.name ? t(fieldErrors.name) : undefined} hint={copy.nameHint} fieldId={field("name")}>
                <input id={field("name")} name="name" autoComplete="name" required className={fieldClass} />
              </Field>
              <Field label={copy.company} required error={fieldErrors.company ? t(fieldErrors.company) : undefined} fieldId={field("company")}>
                <input id={field("company")} name="company" autoComplete="organization" required className={fieldClass} />
              </Field>
            </div>
            <Field label={copy.country} optional optionalLabel={copy.optional} error={fieldErrors.country ? t(fieldErrors.country) : undefined} fieldId={field("country")}>
              <select id={field("country")} name="country" defaultValue="" className={fieldClass}>
                <option value="">{copy.countryPlaceholder}</option>
                <optgroup label={copy.countryFocus}>
                  {FOCUS_COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {copy.countries[country] ?? country}
                    </option>
                  ))}
                </optgroup>
                <optgroup label={copy.countryOther}>
                  {OTHER_COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {copy.countries[country] ?? country}
                    </option>
                  ))}
                </optgroup>
              </select>
            </Field>
          </div>
        </fieldset>

        <div className="mt-5 flex flex-col gap-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {step > 1 ? (
              <button type="button" className={secondaryButton} onClick={goBack} disabled={submitting}>
                {copy.back}
              </button>
            ) : null}
            {step < 3 ? (
              <button type="button" className={`${primaryButton} sm:ml-auto`} onClick={goNext} disabled={!ready || submitting}>
                {copy.continue}
              </button>
            ) : (
              <button type="submit" className={`${primaryButton} sm:ml-auto`} disabled={!ready || submitting} aria-busy={submitting}>
                {submitting ? copy.sending : copy.submit}
              </button>
            )}
          </div>
          <p className="text-sm leading-relaxed text-slate-600" aria-live="polite">
            {status}
          </p>
          <p className="text-xs leading-relaxed text-slate-500">
            {copy.privacyBefore}{" "}
            <a href={hrefFor(lang, "/privacy")} className="text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              {getCopy(lang).privacy.title}
            </a>
          </p>
        </div>
        <noscript>
          <p className="mt-4 text-sm text-slate-800">
            {copy.noscript}
            {contactEmail ? ` ${copy.noscriptEmail} ${contactEmail}.` : ""}
          </p>
        </noscript>
      </div>
    </form>
  );
}

function Field({
  label,
  required = false,
  optional = false,
  optionalLabel = "optional",
  error,
  hint,
  fieldId,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  optionalLabel?: string;
  error?: string;
  hint?: string;
  fieldId: string;
  children: ReactNode;
}) {
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<{ "aria-invalid"?: boolean; "aria-describedby"?: string }>, {
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
      })
    : children;
  return (
    <div>
      <label htmlFor={fieldId} className="text-sm font-medium text-slate-900">
        {label}
        {required ? <span className="text-amber-800"> *</span> : null}
        {optional ? <span className="font-normal text-slate-400"> {optionalLabel}</span> : null}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 text-xs leading-relaxed text-slate-500">
          {hint}
        </p>
      ) : null}
      {control}
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-red-800">
          {error}
        </p>
      ) : null}
    </div>
  );
}
