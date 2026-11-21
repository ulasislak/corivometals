import Link from "next/link";
import { QuoteReference } from "@/components/quote-reference";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Request received",
  description: "Your Corivo quote request has been received.",
  path: "/thank-you",
  index: false,
});

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-page px-4 py-16">
      <div className="max-w-2xl border border-slate-300 bg-white p-6 sm:p-8">
        <p className="font-mono text-xs tracking-[0.18em] text-amber-800">RFQ RECEIVED</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Request received</h1>
        <p className="mt-4 text-slate-700">
          We have the request. You will get a reply within 48 hours with a price, a lead time, and a manufacturability note. If a file cannot be read, we will write to the email you gave and ask for another copy. The 48 hours start when the drawing can be read.
        </p>
        <div className="mt-6 border-t border-slate-200 pt-4">
          <QuoteReference />
        </div>
        <p className="mt-6">
          <Link href="/" className="font-semibold text-amber-800 underline decoration-amber-800/40 underline-offset-4">
            Back to the homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
