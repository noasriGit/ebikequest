import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { EntityMeta } from "@/components/content/EntityMeta";
import { GuideSectionRenderer } from "@/components/guides/GuideCard";
import { editorialStandards } from "@/content/editorial/editorial-standards";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildAboutPageSchema,
  buildBreadcrumbSchema,
} from "@/lib/seo/structured-data";

export const metadata = buildPageMetadata({
  title: "Editorial Standards, How eBikeQuest Verifies Information",
  description: editorialStandards.description,
  path: "/editorial-standards",
});

export default function EditorialStandardsPage() {
  return (
    <>
      <PageHero
        title={editorialStandards.title}
        description={editorialStandards.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Editorial Standards" },
        ]}
      />
      <JsonLd
        data={[
          buildAboutPageSchema({
            title: editorialStandards.title,
            description: editorialStandards.description,
            path: "/editorial-standards",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Editorial Standards", path: "/editorial-standards" },
          ]),
        ]}
      />
      <Container className="py-10 max-w-3xl">
        <EntityMeta
          author={editorialStandards.author}
          reviewedBy={editorialStandards.reviewedBy}
          publishedAt={editorialStandards.updatedAt}
          updatedAt={editorialStandards.updatedAt}
        />
        <div className="mt-8">
          <GuideSectionRenderer sections={editorialStandards.sections} />
        </div>
      </Container>
    </>
  );
}
