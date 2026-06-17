import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { EntityMeta } from "@/components/content/EntityMeta";
import { GuideSectionRenderer } from "@/components/guides/GuideCard";
import { editorialStandards } from "@/content/editorial/editorial-standards";
import { getHubImage } from "@/config/images";
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
        kicker="Trust & accuracy"
        align="split"
        image={getHubImage("guides")}
        imageAlt="Editorial research and verification"
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
      <Container className="max-w-3xl py-10">
        <EntityMeta
          author={editorialStandards.author}
          reviewedBy={editorialStandards.reviewedBy}
          publishedAt={editorialStandards.updatedAt}
          updatedAt={editorialStandards.updatedAt}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { step: "01", label: "Research", detail: "Primary sources first" },
            { step: "02", label: "Verify", detail: "Cross-reference official records" },
            { step: "03", label: "Publish", detail: "Review before going live" },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-5 shadow-[var(--shadow-xs)]"
            >
              <p className="font-mono text-sm text-brand-accent">{item.step}</p>
              <p className="mt-2 font-display text-lg text-text-primary">{item.label}</p>
              <p className="mt-1 text-body-sm text-text-secondary">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="prose-editorial mt-10">
          <GuideSectionRenderer sections={editorialStandards.sections} />
        </div>
      </Container>
    </>
  );
}
