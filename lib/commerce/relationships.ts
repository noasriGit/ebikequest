import type { Guide } from "@/types/guide";
import type { Trail } from "@/types/trail";
import { getGuides } from "@/lib/content/guides";
import { getBrand, getBuyingGuides, getModels, getModelsForBrand } from "@/lib/content/commerce";
import { classificationStatement, publicClassDesignation } from "@/lib/commerce/publish";
import type { EbikeModel } from "@/types/commerce";

export interface DiscoveryLink {
  href: string;
  label: string;
  note?: string;
}

const CLASS_GUIDE_SLUGS = new Set([
  "ebike-classes-explained",
  "are-class-3-ebikes-allowed-on-trails",
  "ebike-regulations-overview",
]);

function dedupe(links: DiscoveryLink[]): DiscoveryLink[] {
  const seen = new Set<string>();
  const unique: DiscoveryLink[] = [];
  for (const link of links) {
    if (seen.has(link.href)) continue;
    seen.add(link.href);
    unique.push(link);
  }
  return unique;
}

function modelHref(model: EbikeModel): string {
  return `/ebikes/${model.brandSlug}/${model.slug}`;
}

export async function getBrandModelLinks(brandSlug: string): Promise<DiscoveryLink[]> {
  const models = await getModelsForBrand(brandSlug);
  return models.map((model) => ({
    href: modelHref(model),
    label: model.name,
    note: classificationStatement(model),
  }));
}

export async function getModelBrandLink(model: EbikeModel): Promise<DiscoveryLink | null> {
  const brand = await getBrand(model.brandSlug);
  if (!brand) return null;
  return { href: `/brands/${brand.slug}`, label: brand.name };
}

export function getModelRegulatoryLinks(model: EbikeModel): DiscoveryLink[] {
  const links: DiscoveryLink[] = [
    {
      href: "/safety",
      label: "Safety and classification",
      note: "How class is assigned, and what stays unverified",
    },
    {
      href: "/laws",
      label: "E-bike laws",
      note: "Virginia, Maryland, and Washington DC",
    },
  ];

  const designation = publicClassDesignation(model);
  if (designation === "class-3" || designation === "out-of-class") {
    links.push({
      href: "/guides/are-class-3-ebikes-allowed-on-trails",
      label: "Are Class 3 e-bikes allowed on trails?",
    });
  } else {
    links.push({
      href: "/guides/ebike-classes-explained",
      label: "E-bike classes explained",
    });
  }

  links.push({ href: "/trails", label: "Trail directory", note: "Where a class can change access" });
  return links;
}

export async function getGuideDiscoveryLinks(guide: Guide): Promise<DiscoveryLink[]> {
  const [models, buyingGuides] = await Promise.all([getModels(), getBuyingGuides()]);
  const links: DiscoveryLink[] = [];

  for (const buyingGuide of buyingGuides) {
    if (buyingGuide.relatedGuideSlugs?.includes(guide.slug)) {
      links.push({
        href: `/buying-guides/${buyingGuide.slug}`,
        label: buyingGuide.title,
        note: "Buying guide",
      });
    }
  }

  for (const model of models) {
    if (model.relatedGuideSlugs?.includes(guide.slug)) {
      links.push({
        href: modelHref(model),
        label: model.name,
        note: "Model profile",
      });
    }
  }

  if (CLASS_GUIDE_SLUGS.has(guide.slug)) {
    links.push(
      {
        href: "/guides/buying-your-first-ebike",
        label: "Buying Your First E-Bike",
        note: "Choose a class before a brand",
      },
      {
        href: "/safety",
        label: "Safety and classification",
        note: "What a model page is allowed to claim",
      },
      {
        href: "/laws",
        label: "E-bike laws",
        note: "Rules already documented for VA, MD, and DC",
      },
    );
  }

  if (guide.slug === "buying-your-first-ebike") {
    links.push(
      {
        href: "/guides/ebike-classes-explained",
        label: "E-bike classes explained",
      },
      {
        href: "/safety",
        label: "Safety and classification",
      },
      {
        href: "/laws",
        label: "E-bike laws",
      },
    );
  }

  return dedupe(links.filter((link) => link.href !== `/guides/${guide.slug}`)).slice(0, 8);
}

export async function getTrailDiscoveryLinks(trail: Trail): Promise<DiscoveryLink[]> {
  const models = await getModels();
  return dedupe(
    models
      .filter((model) => model.relatedTrailIds?.includes(trail.id))
      .map((model) => ({
        href: modelHref(model),
        label: model.name,
        note: "Relevant model",
      })),
  ).slice(0, 4);
}

export async function getLawDiscoveryLinks(jurisdiction: string): Promise<DiscoveryLink[]> {
  const buyingGuides = await getBuyingGuides();
  const links: DiscoveryLink[] = [];

  for (const guide of buyingGuides) {
    if (guide.jurisdictions?.includes(jurisdiction)) {
      links.push({
        href: `/buying-guides/${guide.slug}`,
        label: guide.title,
        note: "Buying guide that cites this jurisdiction",
      });
    }
  }

  return dedupe(links).slice(0, 4);
}

export async function getBuyingGuideDiscoveryLinks(guide: {
  slug: string;
  relatedGuideSlugs?: string[];
  relatedBrandSlugs?: string[];
  relatedModelIds?: string[];
}): Promise<DiscoveryLink[]> {
  const models = await getModels();
  const guides = await getGuides();
  const links: DiscoveryLink[] = [];

  for (const slug of guide.relatedGuideSlugs ?? []) {
    const related = guides.find((entry) => entry.slug === slug);
    if (!related) continue;
    links.push({ href: `/guides/${related.slug}`, label: related.title, note: "Rider guide" });
  }

  for (const brandSlug of guide.relatedBrandSlugs ?? []) {
    const brand = await getBrand(brandSlug);
    if (!brand) continue;
    links.push({ href: `/brands/${brand.slug}`, label: brand.name, note: "Brand" });
  }

  for (const model of models) {
    if (guide.relatedModelIds?.includes(model.id)) {
      links.push({ href: modelHref(model), label: model.name, note: "Model profile" });
    }
  }

  return dedupe(links);
}
