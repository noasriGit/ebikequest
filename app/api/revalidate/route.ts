import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidation-secret");
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  // ISR webhook stub, enable when CMS integration is added
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
