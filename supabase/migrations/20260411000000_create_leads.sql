-- Leads captured from the marketing site contact form (server-side insert via service role).

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  phone text,
  service_interest text,
  project_description text,
  status text not null default 'new'
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

-- Intentionally no INSERT/SELECT policies for anon/authenticated roles.
-- Next.js server actions use the service role key for trusted writes.
