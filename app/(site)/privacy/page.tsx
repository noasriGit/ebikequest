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
        <p className="text-body-sm text-text-muted">Last updated: July 2026</p>

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
            <h2>Analytics and cookies</h2>
            <p>
              We use analytics services to understand aggregate traffic patterns and improve the
              site. These tools may use cookies or similar technologies to collect usage data such
              as pages visited, browser type, and referring URLs.
            </p>
            <p>
              You can control cookies through your browser settings. Disabling cookies may affect
              certain site features.
            </p>
          </section>

          <section>
            <h2>Outbound and affiliate links</h2>
            <p>
              {siteConfig.name} links to external websites, including land managers, government
              resources, retailers, and other third-party destinations. When you follow an outbound
              link, you leave our site and become subject to that site&apos;s terms and privacy
              practices.
            </p>
            <p>
              Some future pages may include affiliate links. If you purchase through an affiliate
              link, we may earn a commission at no extra cost to you. Affiliate relationships are
              described in our{" "}
              <Link href="/affiliate-disclosure" className="link-editorial">
                Affiliate Disclosure
              </Link>
              .
            </p>
            <p>
              Please review the privacy policies of third-party retailers and services when you
              leave {siteConfig.name}.
            </p>
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
              <a href={`mailto:${siteConfig.helpEmail}`} className="link-editorial">
                {siteConfig.helpEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href={`mailto:${siteConfig.helpEmail}`} className="link-editorial">
                {siteConfig.helpEmail}
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
