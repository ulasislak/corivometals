import type { FaqItem } from "@/content/faq";

export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="divide-y divide-slate-200 border border-slate-300 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="cursor-pointer list-none px-4 py-4 font-medium text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-slate-950 [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              <span>{item.question}</span>
              <span aria-hidden="true" className="font-mono text-xs text-slate-500 group-open:hidden">
                +
              </span>
              <span aria-hidden="true" className="hidden font-mono text-xs text-slate-500 group-open:inline">
                −
              </span>
            </span>
          </summary>
          <p className="px-4 pb-4 leading-relaxed text-slate-700">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
