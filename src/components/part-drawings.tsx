import type { Locale } from "@/i18n/locale";

export function drawingLabels(locale: Locale) {
  if (locale === "tr") {
    return { flat: "AÇINIM", bend: "BÜKÜM", box: "KUTU", bracket: "BRAKET", mill: "FREZE", turn: "TORNA" };
  }
  if (locale === "de") {
    return { flat: "ABWICKLUNG", bend: "BIEGUNG", box: "GEHÄUSE", bracket: "WINKEL", mill: "FRÄSEN", turn: "DREHEN" };
  }
  return { flat: "FLAT", bend: "BEND", box: "BOX", bracket: "BRACKET", mill: "MILL", turn: "TURN" };
}

export function SheetDrawing({ flat = "FLAT", bend = "BEND" }: { flat?: string; bend?: string }) {
  return (
    <svg viewBox="0 0 520 300" className="h-auto w-full" aria-hidden="true">
      <rect x="28" y="36" width="280" height="168" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.6" />
      <path d="M28 92 H308 M28 148 H308" fill="none" stroke="#b45309" strokeWidth="1.5" strokeDasharray="7 4" />
      <circle cx="78" cy="64" r="8" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <circle cx="258" cy="64" r="8" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <circle cx="78" cy="176" r="8" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <circle cx="258" cy="176" r="8" fill="#ffffff" stroke="#1e293b" strokeWidth="1.4" />
      <path d="M168 112 H228 V148 H168 Z" fill="#fff7ed" stroke="#b45309" strokeWidth="1.4" />
      <g strokeLinejoin="round">
        <path d="M360 196 L470 196 L470 132 L360 132 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M360 132 L392 104 L502 104 L470 132 Z" fill="#e8eef5" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M470 132 L502 104 L502 168 L470 196 Z" fill="#d5dfeb" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M376 132 H454" fill="none" stroke="#b45309" strokeWidth="1.4" strokeDasharray="6 4" />
      </g>
      <g fill="#475569" fontFamily="ui-monospace, monospace" fontSize="12">
        <text x="168" y="28" textAnchor="middle">
          {flat}
        </text>
        <text x="416" y="228" textAnchor="middle">
          {bend}
        </text>
      </g>
    </svg>
  );
}

export function EnclosureDrawing({ box = "BOX", bracket = "BRACKET" }: { box?: string; bracket?: string }) {
  return (
    <svg viewBox="0 0 540 300" className="h-auto w-full" aria-hidden="true">
      <g strokeLinejoin="round">
        <path d="M70 210 L300 210 L300 78 L70 78 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.6" />
        <path d="M70 78 L150 28 L380 28 L300 78 Z" fill="#e8eef5" stroke="#1e293b" strokeWidth="1.6" />
        <path d="M300 78 L380 28 L380 160 L300 210 Z" fill="#d5dfeb" stroke="#1e293b" strokeWidth="1.6" />
        <path d="M98 74 L168 36 L348 36 L278 74 Z" fill="#ffffff" stroke="#475569" strokeWidth="1.3" />
        <path d="M92 76 H286" fill="none" stroke="#b45309" strokeWidth="1.5" strokeDasharray="7 4" />
        <path d="M108 168 H196 V104 H108 Z" fill="#fff7ed" stroke="#b45309" strokeWidth="1.5" />
        <circle cx="236" cy="128" r="7" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
        <circle cx="262" cy="128" r="7" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
        <circle cx="236" cy="154" r="7" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
        <circle cx="262" cy="154" r="7" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
      </g>
      <g strokeLinejoin="round">
        <path d="M400 214 L492 214 L492 150 L400 150 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.4" />
        <path d="M400 150 L432 126 L524 126 L492 150 Z" fill="#e8eef5" stroke="#1e293b" strokeWidth="1.4" />
        <path d="M492 150 L524 126 L524 190 L492 214 Z" fill="#d5dfeb" stroke="#1e293b" strokeWidth="1.4" />
        <path d="M414 150 H478" fill="none" stroke="#b45309" strokeWidth="1.4" strokeDasharray="6 4" />
      </g>
      <g fill="#475569" fontFamily="ui-monospace, monospace" fontSize="12">
        <text x="185" y="248" textAnchor="middle">
          {box}
        </text>
        <text x="446" y="248" textAnchor="middle">
          {bracket}
        </text>
      </g>
    </svg>
  );
}

export function CncDrawing({ mill = "MILL", turn = "TURN" }: { mill?: string; turn?: string }) {
  return (
    <svg viewBox="0 0 520 300" className="h-auto w-full" aria-hidden="true">
      <g strokeLinejoin="round">
        <path d="M48 196 L250 196 L250 96 L48 96 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.6" />
        <path d="M48 96 L96 58 L298 58 L250 96 Z" fill="#e8eef5" stroke="#1e293b" strokeWidth="1.6" />
        <path d="M250 96 L298 58 L298 158 L250 196 Z" fill="#d5dfeb" stroke="#1e293b" strokeWidth="1.6" />
        <path d="M86 168 L188 168 L188 124 L86 124 Z" fill="#fff7ed" stroke="#b45309" strokeWidth="1.4" />
        <path d="M86 124 L118 100 L220 100 L188 124 Z" fill="#ffedd5" stroke="#b45309" strokeWidth="1.3" />
        <circle cx="78" cy="112" r="6" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
        <circle cx="220" cy="112" r="6" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
        <circle cx="78" cy="180" r="6" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
        <circle cx="220" cy="180" r="6" fill="#ffffff" stroke="#1e293b" strokeWidth="1.3" />
      </g>
      <g>
        <path d="M348 150 H430 V168 H348 Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M430 142 H470 V176 H430 Z" fill="#e8eef5" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M470 134 H508 V184 H470 Z" fill="#d5dfeb" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M348 159 H508" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M392 150 V138 M392 168 V180" stroke="#b45309" strokeWidth="1.3" />
        <path d="M386 138 H398 M386 180 H398" stroke="#b45309" strokeWidth="1.3" />
      </g>
      <g fill="#475569" fontFamily="ui-monospace, monospace" fontSize="12">
        <text x="150" y="236" textAnchor="middle">
          {mill}
        </text>
        <text x="428" y="214" textAnchor="middle">
          {turn}
        </text>
      </g>
    </svg>
  );
}

export function PartFigure({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <figure className="border border-slate-300 bg-white">
      <div className="p-3">{children}</div>
      <figcaption className="border-t border-slate-200 px-3 py-2 font-mono text-[11px] tracking-[0.14em] text-slate-500">
        {label}
      </figcaption>
    </figure>
  );
}
