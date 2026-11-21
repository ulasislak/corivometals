import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { policyUpdated } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms",
  description:
    "Terms for Corivo quotes: drawings, the manufacturability note, advance and balance payment, EXW, FCA, DAP, and non-conforming parts.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        kicker="LEGAL"
        title="Terms"
        lede="These terms cover the website and the quote process. An accepted quote controls price, date, Incoterm, and any exception written on it. Last updated 21 November 2026."
        crumb="Terms"
      />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-slate-800 [&_h2]:pt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-950 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        <p className="font-mono text-xs text-slate-600">Last updated {policyUpdated}</p>
        <h2>The website</h2>
        <p>
          The site describes how to request a quote for sheet metal parts, enclosures, and simple CNC parts made in Türkiye. It does not list prices, and it does not take payment. Sending a form is a request for a quote, not an order.
        </p>
        <h2>Quotes</h2>
        <p>
          A complete request includes a drawing or a description of the part, a work email, material, quantity, estimated annual quantity, name, and company. Thickness and delivery date are optional. We reply within 48 hours of a complete request. When a drawing is attached and we cannot read it, the 48 hours start when the drawing can be read. The reply includes a price, a production lead time, and a manufacturability note. The date the quote stays open is printed on the quote.
        </p>
        <h2>Your drawing</h2>
        <p>
          You are responsible for the drawing, the grade, and the dimensions you send. Tell us if a file is superseded. We use the files to quote and, if you order, to make the parts. We do not publish them. An NDA is available on request before you send production files.
        </p>
        <h2>Manufacturability note</h2>
        <p>
          The note flags what we see: a bend, a weld, a missing dimension, a coating, or a part that is outside simple CNC. It is not a full design review and it does not move design responsibility to us. Production of an exception starts only after you accept the quote, including the note, in writing.
        </p>
        <h2>Orders and payment</h2>
        <p>
          An order is formed when both sides accept the quote in writing. Payment is an advance before production starts and the balance before dispatch. Amounts and currency are on the quote. The goods stay the seller’s until the agreed payments are received. This website does not collect card payments.
        </p>
        <h2>Delivery</h2>
        <p>
          The Incoterm is EXW, FCA, or DAP, as printed on the quote, including the named place. EXW: you collect. FCA: the goods are handed to the named carrier at the named place. DAP: we deliver to the named place and you handle import clearance and duty. Risk follows that Incoterm.
        </p>
        <h2>Inspection and parts that do not match</h2>
        <p>
          Each shipment includes a dimensional report and photos. A material certificate is sent when the order asks for it. If parts do not match the accepted drawing or the exceptions in the manufacturability note, write to us with the quote reference, photos, and the difference. We review it and agree a remake, a rework, or a credit for the non-conforming parts. Transit damage is handled under the Incoterm on the quote.
        </p>
        <h2>Liability</h2>
        <p>
          The seller’s liability for a claim about the parts is limited to the price of the affected parts on the order, except where the law does not allow that limit. Nothing on this website is a commitment that a part is fit for a particular machine unless the accepted quote says so.
        </p>
        <h2>Law</h2>
        <p>
          The seller is the legal entity named in the <Link href="/imprint" className="text-amber-800 underline">imprint</Link>. Governing law and the courts are stated on the order confirmation.
        </p>
      </article>
    </>
  );
}
