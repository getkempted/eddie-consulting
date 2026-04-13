"use server";

import { headers } from "next/headers";
import { createServiceRoleClient } from "@/lib/supabase/server";

export type LeadFormState = {
  ok: boolean;
  message: string | null;
  fieldErrors?: Partial<Record<"name" | "email" | "company" | "project_description", string>>;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// In-memory rate limiter: max RATE_LIMIT_MAX submissions per RATE_LIMIT_WINDOW_MS
// per IP. Persists for the lifetime of the serverless instance; cold starts reset it.
// Good enough to deter casual abuse without external infrastructure.
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const submissionLog = new Map<string, number[]>();

function getClientIp(headerList: Headers): string {
  const forwarded = headerList.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return headerList.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const recent = (submissionLog.get(ip) ?? []).filter((ts) => ts > cutoff);

  if (recent.length >= RATE_LIMIT_MAX) {
    submissionLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  submissionLog.set(ip, recent);
  return false;
}

const FAKE_SUCCESS_MESSAGE =
  "Thanks. We received your consultation request and will follow up shortly.";

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  // Honeypot: a hidden `website` field no human will fill. If populated, pretend
  // the submission succeeded so bots don't learn they were blocked.
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot) {
    return { ok: true, message: FAKE_SUCCESS_MESSAGE };
  }

  // Rate limit per IP
  const headerList = await headers();
  const ip = getClientIp(headerList);
  if (isRateLimited(ip)) {
    return {
      ok: false,
      message:
        "Too many submissions from this network. Please wait a few minutes before trying again.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const project_description = String(formData.get("project_description") ?? "").trim();

  const fieldErrors: LeadFormState["fieldErrors"] = {};

  if (!name) fieldErrors.name = "Name is required.";
  if (!email) fieldErrors.email = "Email is required.";
  else if (!isValidEmail(email)) fieldErrors.email = "Enter a valid email address.";
  if (!company) fieldErrors.company = "Company is required.";
  if (!project_description) fieldErrors.project_description = "Please describe your project.";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, message: "Please fix the highlighted fields.", fieldErrors };
  }

  const supabase = createServiceRoleClient();
  if (!supabase) {
    return {
      ok: false,
      message:
        "Server is not configured for lead capture yet. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY for local Supabase.",
    };
  }

  const { error } = await supabase.from("leads").insert({
    name,
    email,
    company,
    project_description,
    status: "new",
  });

  if (error) {
    return {
      ok: false,
      message: error.message || "Could not save your request. Please try again.",
    };
  }

  return { ok: true, message: FAKE_SUCCESS_MESSAGE };
}
