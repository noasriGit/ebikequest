import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { GuideCard } from "@/components/guides/GuideCard";
import { DirectoryGrid } from "@/components/trails/TrailCard";
import { getHubImage } from "@/config/images";
import { getGuides } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "E-Bike Guides",
  description:
    "Reference guides for e-bike classes, trail etiquette, maintenance, and regional riding in the Mid-Atlantic.",
  path: "/guides",
});

export default async function GuidesPage() {
  const guides = await getGuides();

  return (
    <>
      <PageHero
        variant="guides"
        title="E-Bike Guides"
        description="Structured reference guides, not blog posts. Find answers on classes, laws, maintenance, and local riding."
        kicker="Reference library"
        align="split"
        image={getHubImage("guides")}
        imageAlt="E-bike guide reference"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
      />
      <Container className="py-10">
        <DirectoryGrid>
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </DirectoryGrid>
      </Container>
    </>
  );
}
