import { ConsentPreferences } from "@/components/consent";
import { ExternalLink } from "@/components/external-link";
import { PageHeader } from "@/components/page-header";
import { company, contactEmail, policyUpdated } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "How Corivo handles quote requests, drawings, analytics cookies, and the rights of people who send an enquiry.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const controller = company.legalName || "The operator named in the imprint";
  return (
    <>
      <PageHeader
        kicker="LEGAL"
        title="Privacy"
        lede="This page describes what the quote form collects, why it is kept, and who else processes it. It was last updated on 21 November 2026."
        crumb="Privacy"
      />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-slate-800 [&_h2]:pt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-950 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        <p className="font-mono text-xs text-slate-600">Last updated {policyUpdated}</p>
        <h2>Who is responsible</h2>
        <p>
          {controller} is the controller for enquiries sent through this website.{" "}
          {contactEmail ? (
            <>
              Privacy requests go to{" "}
              <a className="text-amber-800 underline" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              .
            </>
          ) : (
            "Until a contact email is published in the imprint, send a privacy request through the quote form and write “privacy request” in the notes."
          )}
        </p>
        <h2>What we collect</h2>
        <ul>
          <li>Name, company, email, and country.</li>
          <li>Material, thickness if you send it, quantity, estimated annual quantity, a delivery date or a flexible date, and notes.</li>
          <li>Drawing files you upload (DXF, DWG, STEP, or PDF).</li>
          <li>The page you submitted from, UTM parameters, and the referring URL when the browser provides one.</li>
          <li>A salted hash of the IP address, used only to limit repeated submissions. The raw IP address is not stored.</li>
        </ul>
        <h2>Why</h2>
        <p>
          We use the enquiry to prepare a quote, and if you order, to make and ship the parts and to handle a later batch or a complaint. That is steps toward a contract. The IP hash is a legitimate interest in keeping the form usable. Analytics, when you accept it, is consent. You can reject analytics and still send a quote request.
        </p>
        <h2>How long</h2>
        <p>
          Enquiry records and drawings are kept so we can quote, produce, and refer back to a quote reference. You can ask us to delete an enquiry that did not become an order. Records that became an order are kept for as long as the order, the invoice, and any complaint about the parts require.
        </p>
        <h2>Who else processes it</h2>
        <p>We do not sell enquiry data. These providers process it to run the site:</p>
        <ul>
          <li>
            Supabase stores the enquiry row and the private drawing bucket. See the{" "}
            <ExternalLink href="https://supabase.com/privacy">Supabase privacy policy</ExternalLink>.
          </li>
          <li>
            Resend sends the notification to us and the receipt to you. See the{" "}
            <ExternalLink href="https://resend.com/legal/privacy-policy">Resend privacy policy</ExternalLink>.
          </li>
          <li>
            Vercel hosts the website. See the{" "}
            <ExternalLink href="https://vercel.com/legal/privacy-policy">Vercel privacy policy</ExternalLink>.
          </li>
        </ul>
        <p>
          The region is the one configured on those projects. Their terms describe any transfer outside the country you are in. Drawings are not published on a public page. Download links in the internal notification expire after seven days.
        </p>
        <h2>Cookies and storage in the browser</h2>
        <p>
          The quote form does not set an analytics cookie. If analytics is enabled, a script loads only after you accept. The choice is stored in local storage under <span className="font-mono text-sm">corivo-consent</span>. UTM parameters and the external referrer are stored in session storage so they can be attached to the form if you move to another page first. The thank-you page reads the quote reference from session storage.
        </p>
        <ConsentPreferences />
        <h2>Your rights</h2>
        <p>
          You can ask for access, correction, deletion, restriction, or a copy of the enquiry data, and you can object to processing based on legitimate interest. You can withdraw analytics consent without affecting a quote request you already sent. You can also complain to the supervisory authority where you live or work, or where the controller is established.
        </p>
      </article>
    </>
  );
}
