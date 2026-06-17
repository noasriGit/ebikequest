"use client";

import { useState } from "react";
import { Input } from "@/components/design-system/Input/Input";
import { Button } from "@/components/design-system/Button/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStatus("success");
      setMessage("You're subscribed. We'll send trail and law updates for the Mid-Atlantic.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-brand" role="status">
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
      <Input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        aria-label="Email address"
        className="sm:min-w-[220px]"
      />
      <Button type="submit" loading={status === "loading"} size="md">
        Subscribe
      </Button>
      {status === "error" ? (
        <p className="text-sm text-semantic-disallow sm:basis-full" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
