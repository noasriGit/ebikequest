import Link from "next/link";
import { HomeHero } from "@/components/layout/HomeHero";
import { Container } from "@/components/layout/Container";
import { PlatformCategoryGrid } from "@/components/navigation/PlatformCategoryGrid";
import { GuideCard } from "@/components/guides/GuideCard";
import { LawComparisonMatrix } from "@/components/laws/LawComponents";
import { DirectoryGrid, TrailCard } from "@/components/trails/TrailCard";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import {
  getFeaturedTrails,
  getGuides,
  getNationalLawHub,
} from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHomeHeroImage } from "@/lib/utils/images";

export const metadata = buildPageMetadata({
  title: `${siteConfig.name}, ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default async function HomePage() {
  const [featuredTrails, guides, lawHub] = await Promise.all([
    getFeaturedTrails(6),
    getGuides(),
    getNationalLawHub(),
  ]);

  const featuredGuides = guides.slice(0, 4);
  const heroImage = getHomeHeroImage();

  return (
    <>
      <HomeHero image={heroImage} />

      <Container className="py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-900">Explore the platform</h2>
          <p className="mt-2 text-zinc-600">
            Trails are live today. Shops, rentals, repairs, events, reviews, and news are on the
            roadmap.
          </p>
        </div>
        <PlatformCategoryGrid />
      </Container>

      <section className="border-y border-zinc-200 bg-white">
        <Container className="py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">Featured trails</h2>
              <p className="mt-2 text-zinc-600">Verified e-bike trail listings in our launch markets</p>
            </div>
            <Link href="/trails" className="text-sm font-semibold text-emerald-700 hover:underline">
              View all trails →
            </Link>
          </div>
          <DirectoryGrid>
            {featuredTrails.map((trail) => (
              <TrailCard key={trail.id} trail={trail} />
            ))}
          </DirectoryGrid>
        </Container>
      </section>

      <Container className="py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-900">Know the rules before you ride</h2>
          <p className="mt-2 text-zinc-600">
            Compare e-bike laws across Virginia, Maryland, and Washington DC
          </p>
        </div>
        <LawComparisonMatrix rows={lawHub.comparisonMatrix} />
        <div className="mt-6">
          <Button href="/laws" variant="ghost">
            View full laws authority hub →
          </Button>
        </div>
      </Container>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <Container className="py-14">
          <h2 className="text-2xl font-bold text-zinc-900">Guides</h2>
          <DirectoryGrid>
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </DirectoryGrid>
        </Container>
      </section>

      <Container className="py-14">
        <div className="rounded-xl border border-zinc-200 bg-white p-8 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Verified sources
            </p>
            <h2 className="mt-2 text-xl font-bold text-zinc-900">
              We document how every listing is researched and reviewed
            </h2>
            <p className="mt-2 text-zinc-600">
              Read our Editorial Standards for verification, update, and correction policies.
            </p>
          </div>
          <Button href="/editorial-standards" className="mt-6 shrink-0 md:mt-0">
            Editorial Standards
          </Button>
        </div>
      </Container>

      <section className="border-t border-zinc-200 bg-emerald-50">
        <Container className="py-14 text-center">
          <h2 className="text-2xl font-bold text-zinc-900">Know a great e-bike trail?</h2>
          <p className="mx-auto mt-2 max-w-xl text-zinc-600">
            Help us expand our directory with community trail suggestions in Virginia, Maryland, and
            DC.
          </p>
          <Button href="/suggest-trail" className="mt-6">
            Suggest a Trail
          </Button>
          <p className="mt-8 text-sm text-zinc-500">
            Launching in Virginia, Maryland &amp; Washington DC
          </p>
        </Container>
      </section>
    </>
  );
}
