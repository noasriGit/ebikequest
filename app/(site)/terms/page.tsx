import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
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
    <>
      <PageHero
        title="Terms of Service"
        description="How you may use eBikeQuest and what to expect from our informational content."
        kicker="Legal"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />
      <Container className="max-w-3xl py-10">
        <p className="text-body-sm text-text-muted">Last updated: July 2026</p>

        <div className="prose-editorial mt-8">
          <section>
            <h2>Agreement</h2>
            <p>
              By accessing {siteConfig.name} at {siteConfig.url}, you agree to these Terms of
              Service. If you do not agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2>Informational use only</h2>
            <p>
              {siteConfig.name} provides informational content about e-bike trails, laws, guides,
              and related resources. Content is for general informational purposes only and does not
              constitute legal, medical, safety, financial, or professional advice.
            </p>
            <p>
              You are responsible for your own riding decisions, equipment choices, and compliance
              with applicable rules.
            </p>
          </section>

          <section>
            <h2>Accuracy and verification</h2>
            <p>
              We strive to maintain accurate, verified information and publish our{" "}
              <Link href="/editorial-standards" className="link-editorial">
                editorial standards
              </Link>{" "}
              publicly. E-bike laws, trail access rules, park policies, and local regulations can
              change. Land managers, municipalities, and states may update requirements without
              notice.
            </p>
            <p>
              You should verify rules with local authorities, land managers, manufacturers,
              retailers, or other official sources before riding, purchasing, or relying on any
              information on this site.
            </p>
          </section>

          <section>
            <h2>Outbound and affiliate links</h2>
            <p>
              {siteConfig.name} may link to third-party websites, including retailers. Some links
              may be affiliate links, as described in our{" "}
              <Link href="/affiliate-disclosure" className="link-editorial">
                Affiliate Disclosure
              </Link>
              .
            </p>
            <p>
              We do not control third-party sites and are not responsible for their content,
              policies, pricing, availability, or product suitability. Outbound links are provided
              for convenience and do not constitute an endorsement of every product or service
              listed on an external site.
            </p>
          </section>

          <section>
            <h2>Products and recommendations</h2>
            <p>
              Future product or gear recommendations are provided for informational purposes. We do
              not guarantee product availability, pricing, specifications, warranties, or fitness for
              a particular rider or use case. Confirm details with the retailer or manufacturer
              before purchasing.
            </p>
          </section>

          <section>
            <h2>User submissions</h2>
            <p>
              When you submit trail suggestions or other content, you grant us a non-exclusive
              license to review, edit, and publish that information. Do not submit content you do
              not have the right to share.
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
              arising from your use of the site or reliance on its content, including trail
              conditions, legal compliance, product purchases, or personal injury.
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
