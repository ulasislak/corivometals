import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuoteInbox } from "@/components/quote-inbox";
import { inboxKeyAccepts } from "@/lib/rfq/inbox";
import { loadInbox } from "@/lib/rfq/inbox-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Teklif kutusu",
  robots: { index: false, follow: false },
};

type Props = { params: { key: string } };

export default async function InboxPage({ params }: Props) {
  if (!inboxKeyAccepts(params.key, process.env.QUOTE_INBOX_KEY)) notFound();

  const loaded = await loadInbox();
  if (!loaded.ok) {
    return (
      <div className="mx-auto max-w-page px-4 py-12">
        <h1 className="text-3xl font-semibold text-slate-950">Teklif kutusu</h1>
        <p className="mt-4 border border-red-800 bg-red-50 px-4 py-3 text-red-900">{loaded.message}</p>
      </div>
    );
  }

  return <QuoteInbox items={loaded.items} />;
}
