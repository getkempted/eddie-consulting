"use server";

import { createServiceRoleClient } from "@/lib/supabase/server";

export type LeadFormState = {
  ok: boolean;
  message: string | null;
  fieldErrors?: Partial<Record<"name" | "email" | "company" | "project_description", string>>;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
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

  return { ok: true, message: "Thanks. We received your consultation request and will follow up shortly." };
}
