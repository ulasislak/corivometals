-- Corivo enquiry storage.
-- Run once in the Supabase SQL editor.
-- Keep SUPABASE_SERVICE_ROLE_KEY on the server only (Vercel env). Never expose it to the browser.
--
-- Drawings live in the private bucket `rfq-drawings`.
-- The browser uploads through a short-lived signed URL created by the service role.
-- The notification email receives signed download links. The bucket stays private.
-- Do not add a public storage policy.

create extension if not exists pgcrypto;

create table if not exists public.rfqs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  status text not null default 'pending_upload' check (status in ('pending_upload', 'received')),
  name text not null check (char_length(name) between 1 and 120),
  company text not null check (char_length(company) between 1 and 160),
  email text not null check (char_length(email) between 3 and 160),
  country text check (country is null or char_length(country) between 1 and 80),
  material text not null check (
    material in ('DC01', 'S235JR', 'galvanized', '304', '316', 'aluminium-5052')
  ),
  thickness text check (thickness is null or char_length(thickness) between 1 and 20),
  quantity text not null check (quantity ~ '^[1-9][0-9]{0,6}$'),
  estimated_annual_quantity text not null check (
    estimated_annual_quantity = 'unknown'
    or estimated_annual_quantity ~ '^[1-9][0-9]{0,7}$'
  ),
  required_delivery_date date,
  delivery_flexible boolean not null default false,
  notes text check (notes is null or char_length(notes) <= 4000),
  files jsonb not null default '[]'::jsonb,
  page text check (page is null or char_length(page) <= 120),
  utm_source text check (utm_source is null or char_length(utm_source) <= 120),
  utm_medium text check (utm_medium is null or char_length(utm_medium) <= 120),
  utm_campaign text check (utm_campaign is null or char_length(utm_campaign) <= 120),
  utm_term text check (utm_term is null or char_length(utm_term) <= 120),
  utm_content text check (utm_content is null or char_length(utm_content) <= 120),
  referrer text check (referrer is null or char_length(referrer) <= 500),
  ip_hash text check (ip_hash is null or ip_hash ~ '^[a-f0-9]{64}$'),
  email_sent_at timestamptz,
  email_error text check (email_error is null or char_length(email_error) <= 500)
);

create index if not exists rfqs_ip_hash_created_at_idx on public.rfqs (ip_hash, created_at desc);
create index if not exists rfqs_email_created_at_idx on public.rfqs (email, created_at desc);
create index if not exists rfqs_status_created_at_idx on public.rfqs (status, created_at desc);

-- Safe to re-run if the table was created from an earlier script.
alter table public.rfqs alter column country drop not null;
alter table public.rfqs alter column thickness drop not null;
alter table public.rfqs alter column required_delivery_date drop not null;
alter table public.rfqs add column if not exists delivery_flexible boolean not null default false;

alter table public.rfqs drop constraint if exists rfqs_country_check;
alter table public.rfqs add constraint rfqs_country_check
  check (country is null or char_length(country) between 1 and 80);

alter table public.rfqs drop constraint if exists rfqs_thickness_check;
alter table public.rfqs add constraint rfqs_thickness_check
  check (thickness is null or char_length(thickness) between 1 and 20);

alter table public.rfqs drop constraint if exists rfqs_quantity_check;
alter table public.rfqs add constraint rfqs_quantity_check
  check (quantity ~ '^[1-9][0-9]{0,6}$');

alter table public.rfqs drop constraint if exists rfqs_estimated_annual_quantity_check;
alter table public.rfqs add constraint rfqs_estimated_annual_quantity_check
  check (
    estimated_annual_quantity = 'unknown'
    or estimated_annual_quantity ~ '^[1-9][0-9]{0,7}$'
  );

alter table public.rfqs enable row level security;

revoke all on table public.rfqs from anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit)
values ('rfq-drawings', 'rfq-drawings', false, 20971520)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit;

-- Optional manual cleanup of abandoned uploads:
-- delete from public.rfqs
-- where status = 'pending_upload'
--   and created_at < now() - interval '2 days';
-- Also remove the matching objects under rfq-drawings/{id}/ in Storage.
