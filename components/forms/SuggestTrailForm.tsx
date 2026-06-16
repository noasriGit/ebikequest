"use client";

import { useState } from "react";
import type { SuggestTrailPayload } from "@/types/submission";
import { Button } from "@/components/ui/Button";

export function SuggestTrailForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof SuggestTrailPayload, string>>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-lg font-semibold text-emerald-900">Thank you!</h2>
        <p className="mt-2 text-emerald-800">
          Your trail suggestion has been received. Our editorial team will review it and follow up
          if we need additional information.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-zinc-200 bg-white p-6">
      <div>
        <label htmlFor="trailName" className="block text-sm font-medium text-zinc-700">
          Trail name *
        </label>
        <input
          id="trailName"
          name="trailName"
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
        />
        {errors.trailName ? <p className="mt-1 text-sm text-red-600">{errors.trailName}</p> : null}
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-zinc-700">
          Location *
        </label>
        <input
          id="location"
          name="location"
          placeholder="City, park, or address"
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
        />
        {errors.location ? <p className="mt-1 text-sm text-red-600">{errors.location}</p> : null}
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-zinc-700">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="E-bike policy, surface type, or why you recommend this trail"
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="submitterEmail" className="block text-sm font-medium text-zinc-700">
          Your email *
        </label>
        <input
          id="submitterEmail"
          name="submitterEmail"
          type="email"
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
        />
        {errors.submitterEmail ? (
          <p className="mt-1 text-sm text-red-600">{errors.submitterEmail}</p>
        ) : null}
      </div>

      <Button type="submit">Submit suggestion</Button>
    </form>
  );
}
