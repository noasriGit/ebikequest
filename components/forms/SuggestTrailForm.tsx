"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { SuggestTrailPayload } from "@/types/submission";
import { Button } from "@/components/design-system/Button/Button";
import { FormField, Input, Textarea } from "@/components/design-system/Input/Input";

export function SuggestTrailForm() {
  const searchParams = useSearchParams();
  const prefilledTrail = searchParams.get("trail") ?? "";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof SuggestTrailPayload, string>>>({});
  const [serverError, setServerError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload: SuggestTrailPayload = {
      trailName: String(form.get("trailName") ?? "").trim(),
      location: String(form.get("location") ?? "").trim(),
      notes: String(form.get("notes") ?? "").trim(),
      submitterEmail: String(form.get("submitterEmail") ?? "").trim(),
    };

    const nextErrors: Partial<Record<keyof SuggestTrailPayload, string>> = {};
    if (!payload.trailName) nextErrors.trailName = "Trail name is required";
    if (!payload.location) nextErrors.location = "Location is required";
    if (!payload.submitterEmail) nextErrors.submitterEmail = "Email is required";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setServerError("");
      return;
    }

    setErrors({});
    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/suggest-trail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed");
      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--brand)_25%,transparent)] bg-brand-light p-6"
        role="status"
      >
        <h2 className="text-lg font-semibold text-text-primary">Thank you!</h2>
        <p className="mt-2 text-text-secondary">
          Your trail suggestion has been received. Our editorial team will review it and follow up
          if we need additional information.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-6 shadow-[var(--shadow-xs)]"
      noValidate
    >
      <FormField id="trailName" label="Trail name" error={errors.trailName} required>
        <Input
          id="trailName"
          name="trailName"
          defaultValue={prefilledTrail}
          invalid={!!errors.trailName}
          aria-describedby={errors.trailName ? "trailName-error" : undefined}
        />
      </FormField>

      <FormField id="location" label="Location" error={errors.location} required>
        <Input
          id="location"
          name="location"
          placeholder="City, park, or address"
          invalid={!!errors.location}
          aria-describedby={errors.location ? "location-error" : undefined}
        />
      </FormField>

      <FormField id="notes" label="Notes">
        <Textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="E-bike policy, surface type, or why you recommend this trail"
        />
      </FormField>

      <FormField id="submitterEmail" label="Your email" error={errors.submitterEmail} required>
        <Input
          id="submitterEmail"
          name="submitterEmail"
          type="email"
          autoComplete="email"
          invalid={!!errors.submitterEmail}
          aria-describedby={errors.submitterEmail ? "submitterEmail-error" : undefined}
        />
      </FormField>

      {serverError ? (
        <p className="text-sm text-semantic-disallow" role="alert">
          {serverError}
        </p>
      ) : null}

      <Button type="submit" loading={loading}>
        Submit suggestion
      </Button>
    </form>
  );
}
