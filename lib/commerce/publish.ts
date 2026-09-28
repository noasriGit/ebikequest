import type {
  Brand,
  BuyingGuide,
  Comparison,
  EbikeModel,
  EvidenceSource,
  ProductSource,
} from "@/types/commerce";

const MIN_DESCRIPTION = 120;

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

export function isPublicBrand(brand: Brand): boolean {
  if (brand.status !== "published" || brand.seo?.noIndex) return false;
  if (!brand.slug || !brand.name) return false;
  if (!brand.description || brand.description.trim().length < MIN_DESCRIPTION) return false;
  if (!brand.officialSources?.some((source) => source.url.startsWith("http"))) return false;
  return brand.researchStatus === "source-checked" || brand.researchStatus === "editorially-reviewed";
}

function hasCitedSource(model: EbikeModel): boolean {
  const sources = [...(model.officialSources ?? []), ...(model.productSources ?? [])];
  return sources.some((source) => source.url.startsWith("http"));
}

export function isPublicModel(model: EbikeModel): boolean {
  if (model.status !== "published" || model.seo?.noIndex) return false;
  if (!model.slug || !model.brandSlug || !model.name) return false;
  if (model.handsOnTested && model.researchStatus !== "hands-on-tested") return false;
  if (!model.handsOnTested && model.researchStatus === "hands-on-tested") return false;
  if (!model.description || model.description.trim().length < MIN_DESCRIPTION) return false;
  if (!hasCitedSource(model)) return false;
  const sourcedSpecs = (model.specifications ?? []).filter((spec) => spec.sourceId && spec.value.trim());
  return sourcedSpecs.length > 0;
}

export function isPublicBuyingGuide(guide: BuyingGuide): boolean {
  if (guide.status !== "published" || guide.seo?.noIndex) return false;
  if (!guide.slug || !guide.title || !guide.description) return false;
  if (guide.description.trim().length < MIN_DESCRIPTION) return false;
  if (guide.handsOnTested && guide.researchStatus !== "hands-on-tested") return false;
  const sections = guide.sections ?? [];
  const words = sections.reduce(
    (total, section) => total + section.paragraphs.reduce((sum, paragraph) => sum + wordCount(paragraph), 0),
    0,
  );
  return sections.length >= 2 && words >= 400;
}

export function isPublicComparison(
  comparison: Comparison,
  models: EbikeModel[],
): boolean {
  if (comparison.status !== "published" || comparison.seo?.noIndex) return false;
  if (!comparison.description || comparison.description.trim().length < MIN_DESCRIPTION) return false;
  if (comparison.handsOnTested && comparison.researchStatus !== "hands-on-tested") return false;
  const publicIds = new Set(models.filter(isPublicModel).map((model) => model.id));
  const matched = comparison.modelIds.filter((id) => publicIds.has(id));
  return new Set(matched).size >= 2;
}

export function collectModelSources(model: EbikeModel): Array<EvidenceSource | ProductSource> {
  return [...(model.officialSources ?? []), ...(model.productSources ?? [])];
}

export function sourceById(
  model: EbikeModel,
  sourceId: string,
): EvidenceSource | ProductSource | undefined {
  return collectModelSources(model).find((source) => source.id === sourceId);
}
