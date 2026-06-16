import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "About eBikeQuest",
  description:
    "eBikeQuest is a platform-first national e-bike discovery directory for trails, laws, guides, and future shop and rental listings.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About eBikeQuest"
        description="Everything E-Bike. One Quest."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <Container className="py-10 prose-section max-w-3xl">
        <p>
          {siteConfig.name} is building the national discovery platform for e-bike riders, starting
          with verified trail directories and authoritative law references in Virginia, Maryland,
          and Washington DC.
        </p>
        <p>
          We are a platform first and a content website second. Our product is structured,
          searchable directory data designed for discovery, closer to AllTrails or Zillow than a
          traditional blog.
        </p>
        <p>
          Over time, eBikeQuest will expand to cover shops, rentals, repairs, events, reviews, and
          news, all built on the same verified-data foundation.
        </p>
        <p>
          Questions or corrections? Email{" "}
          <a href={`mailto:${siteConfig.correctionsEmail}`} className="text-emerald-700 underline">
            {siteConfig.correctionsEmail}
          </a>
          .
        </p>
      </Container>
    </>
  );
}
