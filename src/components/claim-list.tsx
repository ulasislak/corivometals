import type { Claim } from "@/i18n/copy";

export function ClaimList({ items }: { items: readonly Claim[] }) {
  return (
    <dl className="border-b border-slate-200">
      {items.map((claim) => (
        <div key={claim.label} className="grid grid-cols-1 gap-0.5 border-t border-slate-200 py-2.5 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
          <dt className="font-mono text-[11px] tracking-wide text-slate-500">{claim.label}</dt>
          <dd className="text-sm font-medium leading-snug text-slate-900">{claim.value}</dd>
        </div>
      ))}
    </dl>
  );
}
