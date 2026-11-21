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
import { useRouter } from "next/navigation";
import { FOCUS_COUNTRIES, MATERIALS, OTHER_COUNTRIES } from "@/content/options";
import { EMPTY_UTM, loadAttribution, type UtmFields } from "@/lib/rfq/attribution";
import { BUCKET, evaluateIncomingFiles, formatBytes, MAX_FILES } from "@/lib/rfq/files";
import { parseRfqPayload } from "@/lib/rfq/schema";
import { browserSupabase, supabaseBrowserConfigured } from "@/lib/supabase/browser";
import { contactEmail } from "@/lib/site";
import { fieldClass, primaryButton } from "@/components/styles";

type SelectedFile = { file: File };
type UploadTicket = { path: string; token: string };
type Pending = { id: string; signature: string; uploads: UploadTicket[]; uploaded: boolean };

type ApiBody = {
  ok: boolean;
  error?: string;
  fields?: Record<string, string>;
  id?: string;
  uploads?: UploadTicket[];
  reset?: boolean;
};

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
  const reactId = useId();
  const startedAt = useRef(0);
  const fileInput = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
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
  }, [formError, fieldErrors]);

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
    setStatus(errors[0] ?? (added > 0 ? `${added} file${added === 1 ? "" : "s"} added.` : "No files added."));
    if (fileInput.current) fileInput.current.value = "";
  }

  function removeFile(index: number) {
    setSelected((current) => current.filter((_, itemIndex) => itemIndex !== index));
    setPending(null);
    setFileErrors([]);
    setStatus("File removed.");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      corivoHp: String(formData.get("corivo_hp") ?? ""),
      startedAt: startedAt.current,
    };

    const parsed = parseRfqPayload(body);
    if (!parsed.ok) {
      setFormError(parsed.error);
      setFieldErrors(parsed.fields ?? {});
      if (parsed.fields?.files) setFileErrors([parsed.fields.files]);
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
        setStatus("Checking the request.");
        const prepared = await postJson("/api/rfq", body);
        if (!prepared.ok || !prepared.id || !prepared.uploads || prepared.uploads.length !== selected.length) {
          setFormError(prepared.error ?? "The quote database did not accept the request.");
          setFieldErrors(prepared.fields ?? {});
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
          setStatus(`Uploading ${file.name}.`);
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

      setStatus("Sending the request.");
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
      router.push("/thank-you");
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "The request could not be sent.");
    } finally {
      setSubmitting(false);
    }
  }

  const showSummary = Boolean(formError) || Object.keys(fieldErrors).length > 0 || fileErrors.length > 0;

  return (
    <form
      id={id}
      className="scroll-mt-24 border-2 border-slate-950 bg-white"
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
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
        <p className="font-mono text-xs tracking-[0.18em] text-slate-600">RFQ</p>
        <p className="font-mono text-xs tracking-[0.18em] text-amber-800">48 H</p>
      </div>
      <div className="px-4 py-5 sm:px-5">
        <h2 className="text-xl font-semibold text-slate-950">Request a quote</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          We reply within 48 hours of a complete request. The reply includes a price, a lead time, and a manufacturability note.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          A drawing or a description of the part is required. Other required fields are marked.
        </p>

        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor={field("hp")}>Leave this field empty</label>
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
            <div role="alert" className="mt-4 border border-red-800 bg-red-50 px-3 py-3 text-sm text-red-900">
              <p>{formError || "Check the highlighted fields."}</p>
              {Object.entries(fieldErrors).length > 0 ? (
                <ul className="mt-2 list-disc pl-5">
                  {Object.entries(fieldErrors).map(([key, message]) => (
                    <li key={key}>
                      <a href={`#${field(key)}`} className="underline">
                        {message}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>

        <fieldset disabled={submitting} className="mt-5 grid gap-4">
          <legend className="sr-only">Quote request</legend>
          <div>
            <label htmlFor={field("files")} className="text-sm font-medium text-slate-950">
              Drawings
            </label>
            <p id={field("files-hint")} className="mt-1 text-sm text-slate-600">
              DXF, DWG, STEP, or PDF. Up to {MAX_FILES} files, 20 MB each. Required unless the notes describe the part. Need an NDA first? Attach a one-page PDF that says so.
            </p>
            <div
              className={`mt-2 border border-dashed px-3 py-4 ${dragOver ? "border-amber-600 bg-amber-50" : "border-slate-300 bg-slate-50"}`}
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
                Choose files
              </label>
              <p className="mt-2 text-sm text-slate-600">Or drop files here.</p>
            </div>
            {selected.length > 0 ? (
              <ul className="mt-3 divide-y divide-slate-200 border border-slate-300">
                {selected.map((item, index) => (
                  <li key={`${item.file.name}-${item.file.lastModified}-${index}`} className="flex items-center justify-between gap-3 px-3 py-2">
                    <span className="min-w-0 truncate font-mono text-sm text-slate-900">{item.file.name}</span>
                    <span className="flex shrink-0 items-center gap-3">
                      <span className="font-mono text-xs text-slate-600">{formatBytes(item.file.size)}</span>
                      <button
                        type="button"
                        className="min-h-11 text-sm font-semibold text-amber-800 underline decoration-amber-800/40"
                        onClick={() => removeFile(index)}
                      >
                        Remove <span className="sr-only">{item.file.name}</span>
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
            <p id={field("files-error")} className="mt-2 text-sm text-red-800" role={fileErrors.length ? "alert" : undefined}>
              {fileErrors.join(" ")}
            </p>
          </div>
          <Field
            label="Notes"
            error={fieldErrors.notes}
            hint="Required if you are not attaching a drawing. Describe the part, or add powder coat RAL, hardware, weld notes, or an NDA request."
            fieldId={field("notes")}
          >
            <textarea id={field("notes")} name="notes" rows={4} maxLength={4000} className={fieldClass} />
          </Field>
          <Field label="Work email" required error={fieldErrors.email} fieldId={field("email")}>
            <input id={field("email")} name="email" type="email" autoComplete="email" inputMode="email" required className={fieldClass} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Material"
              required
              error={fieldErrors.material}
              hint="If the part uses more than one grade, pick the main one and list the others in notes."
              fieldId={field("material")}
            >
              <select id={field("material")} name="material" required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select a material
                </option>
                {MATERIALS.map((material) => (
                  <option key={material.value} value={material.value}>
                    {material.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Quantity (this order)" required error={fieldErrors.quantity} hint="Pieces in this batch." fieldId={field("quantity")}>
              <input id={field("quantity")} name="quantity" inputMode="numeric" required className={fieldClass} />
            </Field>
          </div>
          <div className="border-l-2 border-amber-500 pl-3">
            <Field
              label="Estimated annual quantity (pieces)"
              required
              error={fieldErrors.estimatedAnnualQuantity}
              hint="Pieces you expect over twelve months, including later batches."
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
            <div className="mt-2 flex min-h-11 items-center gap-2">
              <input
                id={field("annual-unknown")}
                name="annualUnknown"
                type="checkbox"
                className="h-4 w-4 accent-amber-700"
                checked={annualUnknown}
                onChange={(event) => setAnnualUnknown(event.target.checked)}
              />
              <label htmlFor={field("annual-unknown")} className="text-sm text-slate-800">
                I don&apos;t know yet
              </label>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" required error={fieldErrors.name} hint="The person we should reply to." fieldId={field("name")}>
              <input id={field("name")} name="name" autoComplete="name" required className={fieldClass} />
            </Field>
            <Field label="Company" required error={fieldErrors.company} fieldId={field("company")}>
              <input id={field("company")} name="company" autoComplete="organization" required className={fieldClass} />
            </Field>
          </div>
          <Field label="Country" optional error={fieldErrors.country} fieldId={field("country")}>
            <select id={field("country")} name="country" defaultValue="" className={fieldClass}>
              <option value="">Select a country</option>
              <optgroup label="Focus">
                {FOCUS_COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Other">
                {OTHER_COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </optgroup>
            </select>
          </Field>
          <Field
            label="Thickness (mm)"
            optional
            error={fieldErrors.thickness}
            hint="Example: 2.0. Leave blank if the drawing states it, or you do not know it yet."
            fieldId={field("thickness")}
          >
            <input id={field("thickness")} name="thickness" inputMode="decimal" className={fieldClass} />
          </Field>
          <Field
            label="Delivery date"
            optional
            error={fieldErrors.requiredDeliveryDate}
            hint="The date you want the parts. Lead time is confirmed on the quote."
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
          <div className="flex min-h-11 items-center gap-2">
            <input
              id={field("delivery-flexible")}
              name="deliveryFlexible"
              type="checkbox"
              className="h-4 w-4 accent-amber-700"
              checked={flexibleDelivery}
              onChange={(event) => setFlexibleDelivery(event.target.checked)}
            />
            <label htmlFor={field("delivery-flexible")} className="text-sm text-slate-800">
              Flexible
            </label>
          </div>
        </fieldset>

        <div className="mt-5 flex flex-col gap-3">
          <button type="submit" className={primaryButton} disabled={!ready || submitting} aria-busy={submitting}>
            {submitting ? "Sending…" : "Request a quote"}
          </button>
          <p className="text-sm leading-relaxed text-slate-700" aria-live="polite">
            {status}
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            Drawings are stored in a private file store and used to prepare the quote.{" "}
            <a href="/privacy" className="text-amber-800 underline decoration-amber-800/40 underline-offset-4">
              Privacy
            </a>
          </p>
        </div>
        <noscript>
          <p className="mt-4 text-sm text-slate-800">
            This form uploads drawings from the browser and needs JavaScript.
            {contactEmail ? ` Email ${contactEmail} with your drawing if JavaScript is unavailable.` : ""}
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
  error,
  hint,
  fieldId,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
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
      <label htmlFor={fieldId} className="text-sm font-medium text-slate-950">
        {label}
        {required ? <span className="text-amber-800"> *</span> : null}
        {optional ? <span className="font-normal text-slate-500"> optional</span> : null}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 text-sm text-slate-600">
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
