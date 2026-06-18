import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { HubIntro } from "@/components/hubs/HubIntro";
import { GuideCard } from "@/components/guides/GuideCard";
import { DirectoryGrid } from "@/components/trails/TrailCard";
import { getHubImage } from "@/config/images";
import { getGuides, getHub } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  const hub = await getHub("guides");
  if (!hub) return {};
  return buildPageMetadata({
    title: hub.title,
    description: hub.description,
    path: hub.path,
  });
}

export default async function GuidesPage() {
  const guides = await getGuides();
  const hub = await getHub("guides");

  return (
    <>
      <PageHero
        variant="guides"
        title={hub?.title ?? "E-Bike Guides"}
        description={hub?.description ?? "Reference guides for e-bike riders."}
        kicker={hub?.kicker ?? "Reference library"}
        align="split"
        image={getHubImage("guides")}
        imageAlt="E-bike guide reference"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
      />
      <Container className="py-10">
        {hub?.intro.length ? <HubIntro paragraphs={hub.intro} /> : null}
        <DirectoryGrid>
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </DirectoryGrid>
      </Container>
    </>
  );
}
