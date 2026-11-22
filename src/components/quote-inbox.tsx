import { materialLabel } from "@/content/options";
import { formatBytes } from "@/lib/rfq/files";
import type { InboxItem } from "@/lib/rfq/inbox-data";

const when = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  dateStyle: "medium",
  timeStyle: "short",
});

function shown(value: string | null | undefined): string {
  return value && value.trim() ? value : "Yok";
}

function annual(value: string): string {
  return value === "unknown" ? "Henüz bilmiyor" : value;
}

function delivery(item: InboxItem): string {
  if (item.deliveryFlexible && item.requiredDeliveryDate) return `${item.requiredDeliveryDate} · Esnek`;
  if (item.deliveryFlexible) return "Esnek";
  return shown(item.requiredDeliveryDate);
}

function statusLabel(status: InboxItem["status"]): string {
  return status === "received" ? "Alındı" : "Dosya bekleniyor";
}

export function QuoteInbox({ items }: { items: InboxItem[] }) {
  return (
    <div className="mx-auto max-w-page px-4 py-12">
      <p className="font-mono text-xs tracking-[0.16em] text-amber-800">TEKLİF KUTUSU</p>
      <h1 className="mt-2 text-3xl font-semibold text-slate-950">Gelen talepler</h1>
      <p className="mt-3 max-w-2xl text-slate-700">
        En yeni 50 talep. Bu adres menüde yok. Çizim bağlantısı 30 dakika geçerlidir.
      </p>
      {items.length === 0 ? (
        <p className="mt-8 border border-slate-300 bg-slate-50 px-4 py-6 text-slate-700">Henüz talep yok.</p>
      ) : (
        <div className="mt-8 space-y-6">
          {items.map((item) => (
            <article key={item.id} className="border border-slate-300 bg-white">
              <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 px-4 py-3">
                <p className="font-mono text-xs text-slate-600">{when.format(new Date(item.createdAt))}</p>
                <p className="font-mono text-xs tracking-[0.14em] text-amber-800">{statusLabel(item.status)}</p>
              </header>
              <dl className="grid gap-4 px-4 py-4 sm:grid-cols-2">
                <Field label="Firma" value={item.company} />
                <Field label="Ad" value={item.name} />
                <Field label="E-posta" value={item.email} />
                <Field label="Ülke" value={shown(item.country)} />
                <Field label="Malzeme" value={materialLabel(item.material)} />
                <Field label="Kalınlık" value={item.thickness ? `${item.thickness} mm` : "Yok"} />
                <Field label="Adet" value={item.quantity} />
                <Field label="Yıllık adet" value={annual(item.estimatedAnnualQuantity)} />
                <Field label="Teslim" value={delivery(item)} />
                <Field label="Sayfa" value={shown(item.page)} />
              </dl>
              <div className="border-t border-slate-200 px-4 py-4">
                <p className="font-mono text-xs tracking-[0.14em] text-slate-500">NOT</p>
                <p className="mt-2 whitespace-pre-wrap text-slate-800">{shown(item.notes)}</p>
              </div>
              <div className="border-t border-slate-200 px-4 py-4">
                <p className="font-mono text-xs tracking-[0.14em] text-slate-500">ÇİZİMLER</p>
                {item.files.length === 0 ? (
                  <p className="mt-2 text-slate-700">Dosya yok.</p>
                ) : (
                  <ul className="mt-2 space-y-2">
                    {item.files.map((file) => (
                      <li key={`${item.id}-${file.name}`} className="flex flex-wrap items-baseline justify-between gap-2">
                        {file.url ? (
                          <a
                            href={file.url}
                            rel="noreferrer"
                            referrerPolicy="no-referrer"
                            target="_blank"
                            className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4"
                          >
                            {file.name}
                          </a>
                        ) : (
                          <span className="text-slate-800">
                            {file.name} <span className="text-slate-500">bağlantı kurulamadı</span>
                          </span>
                        )}
                        <span className="font-mono text-xs text-slate-500">{formatBytes(file.size)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <dl className="grid gap-2 border-t border-slate-200 px-4 py-3 font-mono text-xs text-slate-600 sm:grid-cols-2">
                <div>utm_source {shown(item.utmSource)}</div>
                <div>utm_medium {shown(item.utmMedium)}</div>
                <div>utm_campaign {shown(item.utmCampaign)}</div>
                <div className="truncate">referrer {shown(item.referrer)}</div>
                <div className="sm:col-span-2">ref {item.id}</div>
              </dl>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-xs tracking-[0.14em] text-slate-500">{label}</dt>
      <dd className="mt-1 text-slate-950">{value}</dd>
    </div>
  );
}
