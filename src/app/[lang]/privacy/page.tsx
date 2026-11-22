import type { Metadata } from "next";
import { ConsentPreferences } from "@/components/consent";
import { ExternalLink } from "@/components/external-link";
import { PageHeader } from "@/components/page-header";
import { readPage } from "@/i18n/page";
import { company, contactEmail } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, copy } = readPage((await params).lang);
  return pageMetadata({ title: copy.privacy.title, description: copy.privacy.description, path: "/privacy", lang: locale });
}

export default async function PrivacyPage({ params }: Props) {
  const { copy } = readPage((await params).lang);
  const page = copy.privacy;
  const controller = company.legalName || copy.notPublished;
  return (
    <>
      <PageHeader kicker={page.kicker} title={page.heading} lede={page.lede} crumb={page.crumb} path="/privacy" />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-slate-800 [&_h2]:pt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-950 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        <p className="font-mono text-xs text-slate-600">
          {page.updated} {copy.date}
        </p>
        <h2>{page.who}</h2>
        <p>
          {controller} {page.controller}{" "}
          {contactEmail ? (
            <>
              {page.emailLead}{" "}
              <a className="text-amber-800 underline" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              .
            </>
          ) : (
            page.noEmail
          )}
        </p>
        <h2>{page.collectTitle}</h2>
        <ul>
          {page.collect.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>{page.whyTitle}</h2>
        <p>{page.why}</p>
        <h2>{page.howLongTitle}</h2>
        <p>{page.howLong}</p>
        <h2>{page.processorsTitle}</h2>
        <p>{page.processorsLead}</p>
        <ul>
          <li>
            {page.supabase} <ExternalLink href="https://supabase.com/privacy">{page.policy}</ExternalLink>.
          </li>
          <li>
            {page.resend} <ExternalLink href="https://resend.com/legal/privacy-policy">{page.policy}</ExternalLink>.
          </li>
          <li>
            {page.host} <ExternalLink href="https://www.cloudflare.com/privacypolicy/">{page.policy}</ExternalLink>.
          </li>
        </ul>
        <p>{page.region}</p>
        <h2>{page.cookiesTitle}</h2>
        <p>{page.cookies}</p>
        <ConsentPreferences />
        <h2>{page.rightsTitle}</h2>
        <p>{page.rights}</p>
      </article>
    </>
  );
}
