export function DirectAnswer({ text }: { text: string }) {
  return (
    <p className="mt-5 max-w-3xl border-l-2 border-amber-500 bg-amber-50/40 py-3 pl-4 pr-3 text-base leading-relaxed text-slate-800 sm:text-[1.05rem]">
      {text}
    </p>
  );
}
