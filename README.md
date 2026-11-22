# Corivo

Marketing site and quote request form for sheet metal parts, enclosures, and CNC parts made in Türkiye.

## Stack

Next.js 14 (App Router), TypeScript, Tailwind, Supabase (Postgres and private Storage), Resend, Vercel.

## Setup

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and fill in the values.
3. In Supabase, run `supabase/schema.sql` in the SQL editor.
4. Confirm the `rfq-drawings` bucket is private and limited to 20 MB. Do not add a public storage policy.
5. Verify the Resend domain used in `RESEND_FROM_EMAIL`.
6. Set `NEXT_PUBLIC_SITE_URL` to the production origin before building. `NEXT_PUBLIC_*` values are read at build time.
7. Leave legal identity variables empty until the company record is confirmed. The imprint page is unpublished and returns 404.

## Scripts

- `npm run dev` — local site
- `npm run test` — validation, file rules, and copy checks
- `npm run typecheck`
- `npm run build`

## Quote flow

The browser posts the form to `/api/rfq`. The server checks a honeypot, a short timing window, and a rate limit (5 requests per hour per email, and per hashed IP when `RATE_LIMIT_SALT` is set). It writes a row in `rfqs` and returns signed upload URLs. Files go straight to the private bucket, up to 8 files and 20 MB each. `/api/rfq/complete` checks the stored objects, marks the row received, and emails the team and the buyer through Resend.

The service role key stays on the server. The anon key can only upload with a signed URL.

Saved requests are listed at `/inbox/<QUOTE_INBOX_KEY>`. That address is not in the menu or the sitemap. A wrong or missing key returns 404.

## What the site does not claim

No customer logos, testimonials, statistics, certifications, list prices, or instant quotes. The published commitments are a quote within 2 business days, a manufacturability note with every quote, a dimensional report and photos with each shipment, and a material certificate or NDA on request.
