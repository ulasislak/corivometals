import { steps } from "@/content/process";

export function ProcessSteps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li key={step.n} className="border border-slate-300 bg-white p-4">
          <p className="font-mono text-xs tracking-[0.16em] text-amber-800">{step.n}</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-950">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
