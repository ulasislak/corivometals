import type { Claim } from "@/i18n/copy";

export function ClaimList({ items }: { items: readonly Claim[] }) {
  return (
    <dl className="border-b border-slate-200">
      {items.map((claim) => (
        <div key={claim.label} className="grid grid-cols-1 gap-1 border-t border-slate-200 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
          <dt className="font-mono text-xs tracking-wide text-slate-600">{claim.label}</dt>
          <dd className="text-sm font-medium text-slate-950">{claim.value}</dd>
        </div>
      ))}
    </dl>
  );
}
