import type { SeoFact } from "@/content/seo/types";
import { getSeoUiCopy } from "@/content/seo/ui-copy";
import type { Locale } from "@/i18n/locale";

export function KeyFacts({ locale, facts }: { locale: Locale; facts: readonly SeoFact[] }) {
  const ui = getSeoUiCopy(locale);
  if (facts.length === 0) return null;
  return (
    <section className="mt-8">
      <h2 className="font-mono text-xs tracking-[0.18em] text-slate-500">{ui.keyFacts}</h2>
      <div className="mt-3 overflow-x-auto border border-slate-200">
        <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
          <tbody>
            {facts.map((fact) => (
              <tr key={fact.label} className="border-t border-slate-200 first:border-t-0">
                <th scope="row" className="w-[40%] bg-slate-50 px-3 py-2.5 font-medium text-slate-700">
                  {fact.label}
                </th>
                <td className="px-3 py-2.5 text-slate-900">
                  {fact.value}
                  {fact.verify ? (
                    <>
                      {" "}
                      {/* VERIFY */}
                      <span className="ml-1 font-mono text-[10px] tracking-wide text-amber-700">{ui.verify}</span>
                    </>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
