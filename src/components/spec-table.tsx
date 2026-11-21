import type { SpecTableData } from "@/content/specs";

export function SpecTable({ table, compact = false }: { table: SpecTableData; compact?: boolean }) {
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={table.caption}
      className="overflow-x-auto border border-slate-300 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-slate-950"
    >
      <table
        className={`w-full border-collapse text-left font-mono text-sm leading-6 text-slate-900 ${compact ? "min-w-0" : "min-w-[40rem]"}`}
      >
        <caption className="border-b border-slate-300 bg-slate-50 px-3 py-2 text-left text-xs tracking-[0.16em] text-slate-600">
          {table.caption}
        </caption>
        <thead>
          <tr>
            {table.columns.map((column) => (
              <th key={column} scope="col" className="border-b border-slate-300 px-3 py-2 font-medium text-slate-600">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join("|")} className="align-top odd:bg-white even:bg-slate-50">
              {row.map((cell, index) =>
                index === 0 ? (
                  <th key={cell} scope="row" className="border-b border-slate-200 px-3 py-2 font-medium text-slate-950">
                    {cell}
                  </th>
                ) : (
                  <td key={`${cell}-${index}`} className="border-b border-slate-200 px-3 py-2 text-slate-800">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
