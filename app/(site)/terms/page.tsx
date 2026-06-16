import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Terms of Service",
  description: "eBikeQuest terms of service placeholder.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <Container className="py-16 max-w-3xl">
      <h1 className="text-3xl font-bold text-zinc-900">Terms of Service</h1>
      <p className="mt-4 text-zinc-600">
        Terms of service content will be published before public launch.
      </p>
      <Link href="/" className="mt-8 inline-block text-emerald-700 hover:underline">
        ← Back to home
      </Link>
    </Container>
  );
}
