import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SuggestTrailForm } from "@/components/forms/SuggestTrailForm";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Suggest a Trail",
  description:
    "Recommend an e-bike-friendly trail in Virginia, Maryland, or Washington DC for the eBikeQuest directory.",
  path: "/suggest-trail",
});

export default function SuggestTrailPage() {
  return (
    <>
      <PageHero
        title="Suggest a Trail"
        description="Help us grow the eBikeQuest trail directory with community recommendations. Our editorial team reviews every submission."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Suggest a Trail" },
        ]}
      />
      <Container className="max-w-xl py-10">
        <SuggestTrailForm />
      </Container>
    </>
  );
}
