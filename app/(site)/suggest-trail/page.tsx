import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SuggestTrailForm } from "@/components/forms/SuggestTrailForm";
import { getSuggestTrailPageContent } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";

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
        <Suspense
          fallback={
            <div
              className="h-64 animate-pulse rounded-[var(--radius-md)] bg-surface-sunken"
              role="status"
              aria-label="Loading form"
            />
          }
        >
          <SuggestTrailForm />
        </Suspense>
      </Container>
    </>
  );
}
