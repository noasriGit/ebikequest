import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { HubBanner } from "@/components/layout/HubBanner";
import { PageHero } from "@/components/layout/PageHero";
import { DirectoryGrid, TrailCard } from "@/components/trails/TrailCard";
import {
  assertPublicJurisdiction,
  getJurisdictionName,
  getJurisdictionTrailParams,
  getTrails,
} from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getJurisdictionHubImage } from "@/lib/utils/images";
import type { JurisdictionSlug } from "@/types/jurisdiction";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getJurisdictionTrailParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ jurisdiction: string }>;
}) {
  const { jurisdiction } = await params;
  if (!assertPublicJurisdiction(jurisdiction)) return {};
  const name = getJurisdictionName(jurisdiction);
  return buildPageMetadata({
    title: `E-Bike Trails in ${name}`,
    description: `Browse verified e-bike trails in ${name} with access policies and route details.`,
    path: `/trails/${jurisdiction}`,
  });
}

export default async function JurisdictionTrailsPage({
  params,
}: {
  params: Promise<{ jurisdiction: string }>;
}) {
  const { jurisdiction } = await params;
  if (!assertPublicJurisdiction(jurisdiction)) notFound();

  const name = getJurisdictionName(jurisdiction);
  const trails = await getTrails({ jurisdiction: jurisdiction as JurisdictionSlug });
  const hubImage = getJurisdictionHubImage(jurisdiction as JurisdictionSlug);

  return (
    <>
      <PageHero
        title={`E-Bike Trails in ${name}`}
        description={`Verified trail directory for ${name} with e-bike access policies.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Trails", href: "/trails" },
          { label: name },
        ]}
      >
        <Link href={`/laws/${jurisdiction}`} className="text-sm font-semibold text-emerald-700 hover:underline">
          View {name} e-bike laws →
        </Link>
      </PageHero>
      <Container className="py-10">
        <HubBanner image={hubImage} title={`${name} trail listings`} />
        <DirectoryGrid>
          {trails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </DirectoryGrid>
      </Container>
    </>
  );
}
