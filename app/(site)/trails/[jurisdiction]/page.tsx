import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { HubBanner } from "@/components/layout/HubBanner";
import { PageHero } from "@/components/layout/PageHero";
import { HubIntro } from "@/components/hubs/HubIntro";
import { DirectoryGrid, TrailCard } from "@/components/trails/TrailCard";
import {
  assertPublicJurisdiction,
  getJurisdictionName,
  getJurisdictionTrailHub,
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
  const hub = await getJurisdictionTrailHub(jurisdiction as JurisdictionSlug);
  if (!hub) {
    const name = getJurisdictionName(jurisdiction);
    return buildPageMetadata({
      title: `E-Bike Trails in ${name}`,
      description: `Browse verified e-bike trails in ${name} with access policies and route details.`,
      path: `/trails/${jurisdiction}`,
    });
  }
  return buildPageMetadata({
    title: hub.title,
    description: hub.description,
    path: hub.path,
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
  const hub = await getJurisdictionTrailHub(jurisdiction as JurisdictionSlug);

  return (
    <>
      <PageHero
        variant="trails"
        title={hub?.title ?? `E-Bike Trails in ${name}`}
        description={hub?.description ?? `Verified trail directory for ${name}.`}
        kicker={name}
        image={hubImage.src}
        imageAlt={hubImage.alt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Trails", href: "/trails" },
          { label: name },
        ]}
      >
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href={`/laws/${jurisdiction}`} className="text-sm font-semibold link-editorial">
            View {name} e-bike laws →
          </Link>
          {jurisdiction === "washington-dc" ? (
            <Link
              href="/guides/riding-ebikes-in-washington-dc"
              className="text-sm font-semibold link-editorial"
            >
              Riding e-bikes in Washington DC →
            </Link>
          ) : jurisdiction === "virginia" ? (
            <Link
              href="/guides/riding-ebikes-in-northern-virginia"
              className="text-sm font-semibold link-editorial"
            >
              Northern Virginia e-bike riding guide →
            </Link>
          ) : jurisdiction === "maryland" ? (
            <Link
              href="/guides/best-paved-ebike-trails-in-maryland"
              className="text-sm font-semibold link-editorial"
            >
              Best paved e-bike trails in Maryland →
            </Link>
          ) : null}
        </div>
      </PageHero>
      <Container className="py-10">
        {hub?.intro.length ? <HubIntro paragraphs={hub.intro} /> : null}
        {jurisdiction === "washington-dc" ? (
          <p className="mb-10 max-w-3xl text-body-md text-text-secondary">
            Planning a ride in the District? Read our{" "}
            <Link href="/guides/riding-ebikes-in-washington-dc" className="link-editorial">
              DC e-bike rules and local riding tips
            </Link>{" "}
            for helmet, age, and cross-jurisdiction guidance.
          </p>
        ) : jurisdiction === "virginia" ? (
          <p className="mb-10 max-w-3xl text-body-md text-text-secondary">
            Compare trails across Arlington, Alexandria, and Loudoun in our{" "}
            <Link href="/guides/best-ebike-trails-in-northern-virginia" className="link-editorial">
              Northern Virginia e-bike trail roundup
            </Link>{" "}
            and{" "}
            <Link href="/guides/riding-ebikes-in-northern-virginia" className="link-editorial">
              local riding guide
            </Link>
            .
          </p>
        ) : jurisdiction === "maryland" ? (
          <p className="mb-10 max-w-3xl text-body-md text-text-secondary">
            Choosing a paved path near DC? See our{" "}
            <Link href="/guides/best-paved-ebike-trails-in-maryland" className="link-editorial">
              best paved e-bike trails in Maryland
            </Link>{" "}
            roundup and{" "}
            <Link href="/guides/riding-ebikes-in-bethesda" className="link-editorial">
              Bethesda riding guide
            </Link>
            .
          </p>
        ) : null}
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
