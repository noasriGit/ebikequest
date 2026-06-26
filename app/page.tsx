import Link from "next/link";
import { ContentImage } from "@/components/content/ContentImage";
import { EditorialKicker } from "@/components/editorial/EditorialKicker";
import { PhotoFrame } from "@/components/editorial/PhotoFrame";
import { SectionDivider } from "@/components/editorial/SectionDivider";
import { HomeHero } from "@/components/layout/HomeHero";
import { Container } from "@/components/layout/Container";
import { PlatformCategoryGrid } from "@/components/navigation/PlatformCategoryGrid";
import { GuideCard } from "@/components/guides/GuideCard";
import { LawTeaserSection } from "@/components/laws/LawTeaser";
import { TrailCard } from "@/components/trails/TrailCard";
import { TrailMapDynamic } from "@/components/trails/map/TrailMapDynamic";
import { getTrailMapFeatures } from "@/lib/maps/trail-map-data";
import { Button } from "@/components/design-system/Button/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { ScrollHint } from "@/components/motion/ScrollHint";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { marketingImages } from "@/config/images";
import { siteConfig } from "@/config/site";
import {
  getFeaturedTrails,
  getGuides,
  getNationalLawHub,
  getPublicJurisdictions,
  getTrails,
  getHomeEditorialContent,
} from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHomeHeroImage } from "@/lib/utils/images";

export const metadata = buildPageMetadata({
  title: `${siteConfig.name}, ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default async function HomePage() {
  const [featuredTrails, guides, lawHub, jurisdictions, allTrails, homeContent, trailMapFeatures] =
    await Promise.all([
      getFeaturedTrails(6),
      getGuides(),
      getNationalLawHub(),
      getPublicJurisdictions(),
      getTrails(),
      getHomeEditorialContent(),
      getTrailMapFeatures(),
    ]);

  const featuredGuides = guides.slice(0, 2);
  const heroImage = getHomeHeroImage();

  return (
    <>
      <HomeHero
        image={heroImage}
        trailCount={allTrails.length}
        jurisdictionCount={jurisdictions.length}
      />

      <section className="bg-surface-sunken pb-12 md:pb-16">
        <ScrollHint />
        <Container className="pt-8 md:pt-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeUp>
              <EditorialKicker>Verified &amp; researched</EditorialKicker>
              <h2 className="mt-4 text-display-lg text-text-primary">
                {homeContent.trustHeading}
              </h2>
              <p className="mt-4 text-body-lg text-text-secondary">
                {homeContent.trustBody}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/editorial-standards" variant="outline">
                  Editorial Standards
                </Button>
                <span className="text-body-sm text-text-muted">
                  Questions?{" "}
                  <a href={`mailto:${siteConfig.helpEmail}`} className="link-editorial">
                    {siteConfig.helpEmail}
                  </a>
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <PhotoFrame
                src={marketingImages.hubs.trails}
                alt="E-bike trail through Mid-Atlantic woodland"
                aspect="square"
                caption="Verified against official trail and agency sources"
              />
            </FadeUp>
          </div>
        </Container>
      </section>

      <SectionDivider from="surface-sunken" to="surface-base" />

      <Container className="py-12 md:py-20">
        <FadeUp>
          <EditorialKicker>Explore</EditorialKicker>
          <h2 className="mt-4 text-heading-lg text-text-primary">Start exploring</h2>
          <p className="mt-2 max-w-2xl text-body-md text-text-secondary">
            {homeContent.exploreBody}
          </p>
        </FadeUp>
        <div className="mt-10">
          <PlatformCategoryGrid />
        </div>
      </Container>

      <SectionDivider from="surface-base" to="surface-sunken" />

      <section className="bg-surface-sunken py-12 md:py-20">
        <Container>
          <FadeUp>
            <EditorialKicker>Trail map</EditorialKicker>
            <h2 className="mt-4 text-heading-lg text-text-primary">Explore trails on the map</h2>
            <p className="mt-2 max-w-2xl text-body-md text-text-secondary">
              Select a trail from the list or map to see distance, difficulty, and e-bike policy at a
              glance. Zoom controls and keyboard navigation are available on the map.
            </p>
          </FadeUp>
          <div className="mt-10">
            <TrailMapDynamic trails={trailMapFeatures} mode="explore" height={480} />
          </div>
        </Container>
      </section>

      <SectionDivider from="surface-sunken" to="surface-raised" />

      <section className="bg-surface-raised py-12 md:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <FadeUp>
              <EditorialKicker>Trails</EditorialKicker>
              <h2 className="mt-4 text-heading-lg text-text-primary">Featured trails</h2>
              <p className="mt-2 text-body-md text-text-secondary">
                {homeContent.trailsBody}
              </p>
            </FadeUp>
            <Link href="/trails" className="text-sm font-semibold text-brand-accent-text hover:underline">
              View all trails →
            </Link>
          </div>
          <StaggerChildren className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTrails.map((trail) => (
              <StaggerItem key={trail.id} className="h-full">
                <TrailCard trail={trail} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <SectionDivider from="surface-raised" to="surface-base" />

      <Container className="py-12 md:py-20">
        <FadeUp>
          <EditorialKicker>Laws</EditorialKicker>
          <h2 className="mt-4 text-heading-lg text-text-primary">Know the rules before you ride</h2>
          <p className="mt-2 max-w-2xl text-body-md text-text-secondary">
            {homeContent.lawsBody}
          </p>
        </FadeUp>
        <div className="mt-10">
          <LawTeaserSection rows={lawHub.comparisonMatrix} />
        </div>
      </Container>

      <section className="bg-surface-sunken py-12 md:py-20">
        <Container>
          <FadeUp>
            <EditorialKicker>Guides</EditorialKicker>
            <h2 className="mt-4 text-heading-lg text-text-primary">Reference for riders</h2>
            <p className="mt-2 text-body-md text-text-secondary">
              {homeContent.guidesBody}
            </p>
          </FadeUp>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            {featuredGuides[0] ? (
              <FadeUp>
                <GuideCard guide={featuredGuides[0]} featured large />
              </FadeUp>
            ) : null}
            {featuredGuides[1] ? (
              <FadeUp delay={0.08}>
                <GuideCard guide={featuredGuides[1]} featured />
              </FadeUp>
            ) : null}
          </div>
          <div className="mt-8">
            <Button href="/guides" variant="ghost">
              View all guides →
            </Button>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-12 md:py-20">
        <ContentImage
          src={heroImage.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover brightness-[0.55] saturate-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,25,23,0.85)] to-[rgba(26,25,23,0.6)]" />
        <Container className="relative">
          <FadeUp>
            <EditorialKicker light>Community</EditorialKicker>
            <h2 className="mt-4 max-w-xl text-heading-lg text-white">Know a great e-bike trail?</h2>
            <p className="mt-4 max-w-xl text-body-md text-white/85">
              {homeContent.communityBody}
            </p>
            <Button href="/suggest-trail" className="mt-8" size="lg" variant="accent">
              Suggest a Trail
            </Button>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
