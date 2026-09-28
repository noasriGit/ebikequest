import { ResearchHome } from "@/components/home/ResearchHome";
import { siteConfig } from "@/config/site";
import {
  getFeaturedTrails,
  getGuides,
  getNationalLawHub,
  getPublicJurisdictions,
  getTrails,
} from "@/lib/content";
import { getBrands, getModels } from "@/lib/content/commerce";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getHomeHeroImage } from "@/lib/utils/images";

export const metadata = {
  ...buildPageMetadata({
    title: "Find the right e-bike",
    description: siteConfig.description,
    path: "/",
  }),
  title: { absolute: "Find the right e-bike | eBikeQuest" },
};

export default async function HomePage() {
  const [featuredTrails, guides, lawHub, jurisdictions, trails, brands, models] = await Promise.all([
    getFeaturedTrails(4),
    getGuides(),
    getNationalLawHub(),
    getPublicJurisdictions(),
    getTrails(),
    getBrands(),
    getModels(),
  ]);

  const buyingGuides = guides.filter((guide) => guide.category === "buying-guide");
  const latestGuides = [...guides]
    .sort((a, b) => (b.updatedAt || b.publishedAt).localeCompare(a.updatedAt || a.publishedAt))
    .slice(0, 5);

  return (
    <ResearchHome
      heroImage={getHomeHeroImage()}
      trailCount={trails.length}
      guideCount={guides.length}
      jurisdictionCount={jurisdictions.length}
      modelCount={models.length}
      brandCount={brands.length}
      featuredTrails={featuredTrails}
      lawRows={lawHub.comparisonMatrix}
      buyingGuides={buyingGuides}
      latestGuides={latestGuides}
    />
  );
}
