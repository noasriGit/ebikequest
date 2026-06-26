import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "Terms of Service",
  description:
    "Terms governing your use of eBikeQuest trail listings, law summaries, guides, and community submission features.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-16">
      <h1 className="text-display-lg text-text-primary">Terms of Service</h1>
      <p className="mt-2 text-body-sm text-text-muted">Last updated: June 2026</p>

      <div className="prose-content mt-10">
        <section>
          <h2>Agreement</h2>
          <p>
            By accessing {siteConfig.name} at {siteConfig.url}, you agree to these Terms of Service.
            If you do not agree, please do not use the site.
          </p>
        </section>

        <section>
          <h2>Platform purpose</h2>
          <p>
            {siteConfig.name} provides informational content about e-bike trails, laws, and related
            resources. Content is for general informational purposes only and does not constitute
            legal, safety, or professional advice.
          </p>
        </section>

        <section>
          <h2>Accuracy and updates</h2>
          <p>
            We strive to maintain accurate, verified information and publish our editorial standards
            publicly. Laws, trail policies, and conditions change. You are responsible for verifying
            information with official sources before riding or making decisions.
          </p>
        </section>

        <section>
          <h2>User submissions</h2>
          <p>
            When you submit trail suggestions or other content, you grant us a non-exclusive license
            to review, edit, and publish that information. Do not submit content you do not have the
            right to share.
          </p>
        </section>

        <section>
          <h2>Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the site for unlawful purposes</li>
            <li>Attempt to disrupt or compromise site security</li>
            <li>Scrape or reproduce content at scale without permission</li>
            <li>Submit false or misleading information</li>
          </ul>
        </section>

        <section>
          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {siteConfig.name} is not liable for damages
            arising from your use of the site or reliance on its content, including trail conditions,
            legal compliance, or personal injury.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            We may update these terms from time to time. Continued use after changes constitutes
            acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions? Contact{" "}
            <a href={`mailto:${siteConfig.helpEmail}`} className="text-brand underline">
              {siteConfig.helpEmail}
            </a>
            .
          </p>
        </section>
      </div>

      <Link href="/" className="mt-10 inline-block text-brand hover:underline">
        ← Back to home
      </Link>
    </Container>
  );
}
