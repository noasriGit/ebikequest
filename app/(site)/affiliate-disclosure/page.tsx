import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { AmazonAssociateDisclosure } from "@/components/affiliate/AmazonAssociateDisclosure";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "Affiliate Disclosure",
  description:
    "How eBikeQuest uses affiliate links, including Amazon Associates, and how affiliate relationships relate to our editorial recommendations.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <>
      <PageHero
        title="Affiliate Disclosure"
        description="How affiliate links support eBikeQuest and how they relate to our editorial work."
        kicker="Trust & transparency"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Affiliate Disclosure" },
        ]}
      />
      <Container className="max-w-3xl py-10">
        <p className="text-body-sm text-text-muted">Last updated: July 2026</p>

        <div className="prose-editorial mt-8">
          <section>
            <h2>Overview</h2>
            <p>
              {siteConfig.name} is an e-bike authority and resource platform. We publish trail
              listings, law summaries, guides, and other rider-focused information. As we expand
              into buying guides, gear recommendations, and product comparison content, some pages
              may include affiliate links to retailers.
            </p>
            <p>
              eBikeQuest may earn commissions from qualifying purchases made through affiliate
              links. Some future links may be Amazon Associates links. Affiliate income helps
              support site operations, research, and content updates.
            </p>
          </section>

          <section>
            <h2>Amazon Associates</h2>
            <AmazonAssociateDisclosure variant="page" className="not-prose my-4" />
            <p>
              When we link to Amazon as an affiliate, this disclosure will appear on the relevant
              page or near the applicable links, consistent with Amazon Associates program
              requirements.
            </p>
          </section>

          <section>
            <h2>Editorial independence</h2>
            <p>
              Affiliate relationships do not control our editorial recommendations. Product or
              gear suggestions will be based on research, specifications, rider use cases, safety,
              usefulness, value, and editorial judgment — not commission rates or retailer
              relationships.
            </p>
            <p>
              We do not accept payment for favorable trail listings, and affiliate partnerships
              will not determine what we cover or recommend. See our{" "}
              <Link href="/editorial-standards" className="link-editorial">
                Editorial Standards
              </Link>{" "}
              for how we research and verify content.
            </p>
          </section>

          <section>
            <h2>Testing and reviews</h2>
            <p>
              eBikeQuest will not claim hands-on testing, formal product reviews, or lab results
              unless we actually performed that work. When we have not tested a product, we will
              describe recommendations in terms of specifications, published documentation, rider
              needs, and editorial analysis.
            </p>
          </section>

          <section>
            <h2>Retailer information</h2>
            <p>
              Retailer prices, availability, shipping terms, warranties, and product details can
              change at any time. Always confirm current information on the retailer&apos;s website
              before making a purchase. eBikeQuest does not guarantee pricing, stock, or product
              suitability for your specific situation.
            </p>
          </section>

          <section>
            <h2>Amazon product assets</h2>
            <p>
              We do not scrape Amazon product pages. Amazon product images, prices, star ratings,
              review counts, and customer review text must not be copied manually into our
              content. When we use Amazon assets after program approval, they will come from
              approved Amazon Associates tools, the Product Advertising API, SiteStripe, or
              separately licensed or owned assets — combined with substantial original editorial
              content on each page.
            </p>
          </section>

          <section>
            <h2>Outbound links</h2>
            <p>
              Affiliate and non-affiliate outbound links open in a new browser tab. Affiliate
              links use{" "}
              <code className="text-body-sm">rel=&quot;sponsored noopener noreferrer&quot;</code>.
              We do not cloak affiliate URLs or route purchases through internal tracking redirects.
            </p>
          </section>

          <section>
            <h2>Related policies</h2>
            <p>
              See also our{" "}
              <Link href="/privacy" className="link-editorial">
                Privacy Policy
              </Link>
              ,{" "}
              <Link href="/terms" className="link-editorial">
                Terms of Service
              </Link>
              , and{" "}
              <Link href="/editorial-standards" className="link-editorial">
                Editorial Standards
              </Link>
              .
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about affiliate relationships or disclosures? Email{" "}
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
