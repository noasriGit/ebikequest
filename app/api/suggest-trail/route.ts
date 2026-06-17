import { NextResponse } from "next/server";
import type { SuggestTrailPayload } from "@/types/submission";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SuggestTrailPayload;

    if (!body.trailName?.trim()) {
      return NextResponse.json({ error: "Trail name is required" }, { status: 400 });
    }
    if (!body.location?.trim()) {
      return NextResponse.json({ error: "Location is required" }, { status: 400 });
    }
    if (!body.submitterEmail?.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Stub: log submission until email/CRM integration is wired
    console.info("[suggest-trail]", {
      trailName: body.trailName.trim(),
      location: body.location.trim(),
      notes: body.notes?.trim(),
      submitterEmail: body.submitterEmail.trim(),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
