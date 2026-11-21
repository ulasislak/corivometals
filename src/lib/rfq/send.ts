import "server-only";

import { Resend } from "resend";
import {
  buildNotifyEmail,
  buildReceiptEmail,
  notifySubject,
  receiptSubject,
  type EmailFile,
  type StoredEnquiry,
} from "@/lib/rfq/emails";

export async function deliverRfqEmails(
  enquiry: StoredEnquiry,
  files: EmailFile[],
): Promise<string | null> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const notify = process.env.QUOTE_NOTIFY_EMAIL?.trim();
  if (!apiKey || !from || !notify) return "Email is not configured.";

  const resend = new Resend(apiKey);
  try {
    const [internal, receipt] = await Promise.all([
      resend.emails.send({
        from,
        to: notify,
        replyTo: enquiry.email,
        subject: notifySubject(enquiry),
        text: buildNotifyEmail(enquiry, files),
      }),
      resend.emails.send({
        from,
        to: enquiry.email,
        replyTo: notify,
        subject: receiptSubject(),
        text: buildReceiptEmail(enquiry),
      }),
    ]);
    const problems = [internal.error?.message, receipt.error?.message].filter(
      (message): message is string => Boolean(message),
    );
    return problems.length ? problems.join(" ").slice(0, 500) : null;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Email send failed.";
    return message.slice(0, 500);
  }
}
