import type { SeoSection } from "@/content/seo/types";

export function ContentSections({ sections }: { sections: readonly SeoSection[] }) {
  return (
    <div className="mt-10 space-y-10">
      {sections.map((section) => (
        <section key={section.heading} className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{section.heading}</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          {section.bullets && section.bullets.length > 0 ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
