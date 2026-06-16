import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "eBikeQuest privacy policy placeholder.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <Container className="py-16 max-w-3xl">
      <h1 className="text-3xl font-bold text-zinc-900">Privacy Policy</h1>
      <p className="mt-4 text-zinc-600">
        Privacy policy content will be published before public launch. For questions, contact{" "}
        <a href="mailto:corrections@ebikequest.com" className="text-emerald-700 underline">
          corrections@ebikequest.com
        </a>
        .
      </p>
      <Link href="/" className="mt-8 inline-block text-emerald-700 hover:underline">
        ← Back to home
      </Link>
    </Container>
  );
}
