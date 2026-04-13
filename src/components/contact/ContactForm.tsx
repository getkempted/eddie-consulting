"use client";

import { useActionState } from "react";
import { submitLead, type LeadFormState } from "@/actions/submitLead";
import { Button } from "@/components/ui/Button";

const initialState: LeadFormState = { ok: false, message: null };

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-2 text-sm text-red-700" role="alert">
      {error}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);

  return (
    <form action={formAction} className="space-y-8" noValidate>
      {/* Honeypot: visually hidden, not a real field. Bots that auto-fill will trip this. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Website (leave this field empty)</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(state.fieldErrors?.name)}
            aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
            className="mt-2 w-full rounded-md border-0 bg-surface-container-low px-4 py-3 text-on-surface shadow-inner ring-1 ring-outline-variant/15 placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Alex Morgan"
          />
          <FieldError id="name-error" error={state.fieldErrors?.name} />
        </div>
        <div>
          <label htmlFor="email" className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
            className="mt-2 w-full rounded-md border-0 bg-surface-container-low px-4 py-3 text-on-surface shadow-inner ring-1 ring-outline-variant/15 placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="you@firm.com"
          />
          <FieldError id="email-error" error={state.fieldErrors?.email} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          Company or firm
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          required
          aria-invalid={Boolean(state.fieldErrors?.company)}
          aria-describedby={state.fieldErrors?.company ? "company-error" : undefined}
          className="mt-2 w-full rounded-md border-0 bg-surface-container-low px-4 py-3 text-on-surface shadow-inner ring-1 ring-outline-variant/15 placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary"
          placeholder="Studio name or contractor"
        />
        <FieldError id="company-error" error={state.fieldErrors?.company} />
      </div>

      <div>
        <label
          htmlFor="project_description"
          className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant"
        >
          Project description
        </label>
        <textarea
          id="project_description"
          name="project_description"
          rows={6}
          required
          aria-invalid={Boolean(state.fieldErrors?.project_description)}
          aria-describedby={state.fieldErrors?.project_description ? "project-error" : undefined}
          className="mt-2 min-h-[140px] w-full resize-y rounded-md border-0 bg-surface-container-low px-4 py-3 text-base leading-relaxed text-on-surface shadow-inner ring-1 ring-outline-variant/15 placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary"
          placeholder="Project location, scope (plan review, lighting, EV, marina, etc.), milestones, and what you want reviewed."
        />
        <FieldError id="project-error" error={state.fieldErrors?.project_description} />
      </div>

      {state.message ? (
        <p
          className={`rounded-md px-4 py-3 text-sm font-medium ${state.ok ? "bg-secondary-container text-primary-container" : "bg-red-50 text-red-900"}`}
          role={state.ok ? "status" : "alert"}
        >
          {state.message}
        </p>
      ) : null}

      <Button type="submit" variant="primary" disabled={pending} className="mt-2 min-h-12 w-full px-10 sm:w-auto">
        {pending ? "Sending…" : "Request consultation"}
      </Button>
    </form>
  );
}
