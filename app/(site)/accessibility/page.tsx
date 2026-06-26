import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

export const metadata = buildPageMetadata({
  title: "Accessibility",
  description:
    "How eBikeQuest works to improve website accessibility and how to report barriers or request assistance.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        title="Accessibility"
        description="Our commitment to an accessible experience and how to reach us if you need help."
        kicker="Accessibility"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Accessibility" }]}
      />
      <Container className="max-w-3xl py-10">
        <p className="text-body-sm text-text-muted">Last updated: June 2026</p>

        <div className="prose-editorial mt-8">
          <section>
            <h2>Our commitment</h2>
            <p>
              {siteConfig.name} is committed to making our website accessible and usable for as many
              people as possible. We aim to follow generally recognized accessibility standards,
              including WCAG 2.1 AA and WCAG 2.2 AA where practical.
            </p>
            <p>
              Accessibility is an ongoing effort. We regularly review pages, forms, navigation, and
              interactive features, and we welcome feedback from riders, readers, and assistive
              technology users.
            </p>
          </section>

          <section>
            <h2>What we are working on</h2>
            <p>Recent and ongoing improvements include:</p>
            <ul>
              <li>Semantic page structure with clear headings and landmarks</li>
              <li>Keyboard-accessible navigation, search, filters, and forms</li>
              <li>Visible focus indicators on interactive elements</li>
              <li>Descriptive link text and form labels</li>
              <li>Support for reduced-motion preferences</li>
              <li>Color contrast adjustments where needed to preserve readability</li>
            </ul>
          </section>

          <section>
            <h2>Known limitations</h2>
            <p>
              Interactive maps use Mapbox. We provide keyboard-accessible zoom controls, a trail list
              alongside the home page map, and trail detail pages with the same information in text
              form. Map canvas navigation may still vary by browser and assistive technology.
            </p>
            <p>
              Automated testing and internal reviews cannot catch every barrier. This statement does
              not guarantee that every part of the site meets every accessibility requirement at all
              times.
            </p>
          </section>

          <section>
            <h2>Report a barrier or request assistance</h2>
            <p>
              If you experience difficulty accessing any part of this website, please contact us so
              we can assist you and work to address the issue. When you reach out, include:
            </p>
            <ul>
              <li>The page URL where you encountered the barrier</li>
              <li>A brief description of the issue</li>
              <li>The browser or assistive technology you were using, if applicable</li>
            </ul>
            <p>
              Email:{" "}
              <a href={`mailto:${siteConfig.helpEmail}`} className="link-editorial">
                {siteConfig.helpEmail}
              </a>
            </p>
            <p>
              You can also visit our{" "}
              <Link href="/about" className="link-editorial">
                About page
              </Link>{" "}
              for general contact information.
            </p>
          </section>

          <section>
            <h2>Related policies</h2>
            <p>
              See our{" "}
              <Link href="/privacy" className="link-editorial">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="link-editorial">
                Terms of Use
              </Link>{" "}
              for additional information about how we operate the site.
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
