import { PageHeader } from "@/components/page-header";
import { RfqForm } from "@/components/rfq-form";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Request a quote",
  description:
    "Send a drawing or a short description, the grade, the quantity, and the annual quantity. Corivo replies within 48 hours with a price, a lead time, and a manufacturability note.",
  path: "/request-a-quote",
});

export default function RequestQuotePage() {
  return (
    <>
      <PageHeader
        kicker="RFQ"
        title="Request a quote"
        lede="Add a drawing or a short description, the material, the quantity, and the annual quantity. A complete request is answered within 48 hours with a price, a lead time, and a manufacturability note."
        crumb="Request a quote"
      />
      <div className="mx-auto max-w-page px-4 py-10">
        <div className="mx-auto max-w-xl">
          <RfqForm id="quote-page" />
        </div>
      </div>
    </>
  );
}
