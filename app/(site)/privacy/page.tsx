import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How eBikeQuest collects, uses, and protects your information when you browse trails, guides, and submit trail suggestions.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
        kicker="Legal"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />
      <Container className="max-w-3xl py-10">
        <p className="text-body-sm text-text-muted">Last updated: June 2026</p>

        <div className="prose-editorial mt-8">
          <section>
            <h2>Overview</h2>
            <p>
              {siteConfig.name} (&quot;we,&quot; &quot;us&quot;) operates a national e-bike discovery
              platform. This policy describes how we handle information when you use our website at{" "}
              {siteConfig.url}.
            </p>
          </section>

          <section>
            <h2>Information we collect</h2>
            <p>We may collect:</p>
            <ul>
              <li>
                <strong>Information you provide</strong> — such as your email when you subscribe to
                updates or suggest a trail.
              </li>
              <li>
                <strong>Usage data</strong> — such as pages visited, browser type, and referring URLs,
                collected through standard analytics tools.
              </li>
              <li>
                <strong>Cookies</strong> — small files stored on your device to remember preferences
                and measure site performance.
              </li>
            </ul>
          </section>

          <section>
            <h2>How we use information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Operate and improve the platform</li>
              <li>Respond to trail suggestions and correction requests</li>
              <li>Send optional email updates you have subscribed to</li>
              <li>Understand aggregate usage patterns</li>
            </ul>
          </section>

          <section>
            <h2>Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with service providers who
              assist in hosting, analytics, or email delivery, subject to confidentiality obligations.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p>
              You may unsubscribe from emails at any time. You may request access to or deletion of
              personal data by contacting{" "}
              <a href={`mailto:${siteConfig.correctionsEmail}`} className="link-editorial">
                {siteConfig.correctionsEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href={`mailto:${siteConfig.correctionsEmail}`} className="link-editorial">
                {siteConfig.correctionsEmail}
              </a>
              .
            </p>
          </section>
        </div>

        <Link href="/" className="mt-10 inline-block link-editorial">
          ← Back to home
        </Link>
      </Container>
    </>
  );
}
