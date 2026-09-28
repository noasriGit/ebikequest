import { brands } from "@/content/commerce/brands";
import { buyingGuides } from "@/content/commerce/buying-guides";
import { comparisons } from "@/content/commerce/comparisons";
import { ebikeModels } from "@/content/commerce/models";
import {
  isPublicBrand,
  isPublicBuyingGuide,
  isPublicComparison,
  isPublicModel,
} from "@/lib/commerce/publish";
import type { Brand, BuyingGuide, Comparison, EbikeModel } from "@/types/commerce";

export async function getBrands(): Promise<Brand[]> {
  return brands.filter(isPublicBrand);
}

export async function getBrand(slug: string): Promise<Brand | null> {
  return brands.find((brand) => brand.slug === slug && isPublicBrand(brand)) ?? null;
}

export async function getModels(): Promise<EbikeModel[]> {
  const publicBrands = new Set((await getBrands()).map((brand) => brand.slug));
  return ebikeModels.filter((model) => isPublicModel(model) && publicBrands.has(model.brandSlug));
}

export async function getModel(brandSlug: string, slug: string): Promise<EbikeModel | null> {
  const model = ebikeModels.find(
    (entry) => entry.brandSlug === brandSlug && entry.slug === slug && isPublicModel(entry),
  );
  if (!model) return null;
  const brand = await getBrand(brandSlug);
  return brand ? model : null;
}

export async function getModelsForBrand(brandSlug: string): Promise<EbikeModel[]> {
  const models = await getModels();
  return models.filter((model) => model.brandSlug === brandSlug);
}

export async function getBuyingGuides(): Promise<BuyingGuide[]> {
  return buyingGuides.filter(isPublicBuyingGuide);
}

export async function getBuyingGuide(slug: string): Promise<BuyingGuide | null> {
  return buyingGuides.find((guide) => guide.slug === slug && isPublicBuyingGuide(guide)) ?? null;
}

export async function getComparisons(): Promise<Comparison[]> {
  const models = ebikeModels;
  return comparisons.filter((comparison) => isPublicComparison(comparison, models));
}

export async function getComparison(slug: string): Promise<Comparison | null> {
  const models = ebikeModels;
  return (
    comparisons.find(
      (comparison) => comparison.slug === slug && isPublicComparison(comparison, models),
    ) ?? null
  );
}

export async function isBrandHubIndexable(): Promise<boolean> {
  return (await getBrands()).length > 0;
}

export async function isModelHubIndexable(): Promise<boolean> {
  return (await getModels()).length > 0;
}

export async function isBuyingGuideHubIndexable(): Promise<boolean> {
  return (await getBuyingGuides()).length > 0;
}

export async function isCompareHubIndexable(): Promise<boolean> {
  return (await getComparisons()).length > 0;
}
