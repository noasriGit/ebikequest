import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/design-system/Button/Button";
import { siteConfig } from "@/config/site";
import { getSuggestTrailPageContent } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";

const suggestTrailMailto = `mailto:${siteConfig.helpEmail}?subject=${encodeURIComponent("Trail suggestion")}&body=${encodeURIComponent("Trail name:\nLocation (city, park, or jurisdiction):\nWhy you recommend it:\nOfficial policy link (if available):\n")}`;

export async function generateMetadata() {
  const content = await getSuggestTrailPageContent();
  return buildPageMetadata({
    title: content.title,
    description: content.description,
    path: "/suggest-trail",
  });
}

export default async function SuggestTrailPage() {
  const content = await getSuggestTrailPageContent();

  return (
    <>
      <PageHero
        title={content.title}
        description={content.heroDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Suggest a Trail" },
        ]}
      />
      <Container className="max-w-xl py-10">
        <div className="prose-editorial mb-8 space-y-3">
          <h2 className="text-heading-md text-text-primary">What we verify</h2>
          <ul className="list-disc space-y-2 pl-5 text-body-md text-text-secondary">
            {content.instructions.map((item) => (
              <li key={item.slice(0, 40)}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-6 shadow-[var(--shadow-xs)]">
          <h2 className="text-heading-sm text-text-primary">Email your suggestion</h2>
          <p className="mt-3 text-body-md text-text-secondary">
            Send trail name, location, and any official policy links to{" "}
            <a href={`mailto:${siteConfig.helpEmail}`} className="link-editorial">
              {siteConfig.helpEmail}
            </a>
            . Our editorial team will review your message and follow up if we need more detail.
          </p>
          <Button href={suggestTrailMailto} className="mt-6">
            Email {siteConfig.helpEmail}
          </Button>
        </div>
      </Container>
    </>
  );
}
