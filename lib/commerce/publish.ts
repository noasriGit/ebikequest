import type {
  Brand,
  BuyingGuide,
  Comparison,
  EbikeClassDesignation,
  EbikeModel,
  EvidenceSource,
  ModelClassification,
  ProductSource,
  SafetyNotice,
  Specification,
} from "@/types/commerce";

const DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;

export const MIN_BRAND_DESCRIPTION = 120;
export const MIN_BRAND_SOURCES = 2;
export const MIN_BRAND_SECTIONS = 2;
export const MIN_MODEL_DESCRIPTION = 160;
export const MIN_MODEL_SPECS = 4;
export const MIN_GUIDE_DESCRIPTION = 120;
export const MIN_GUIDE_SECTIONS = 2;
export const MIN_GUIDE_SECTION_WORDS = 80;
export const MIN_GUIDE_WORDS = 400;
export const MIN_COMPARISON_MODELS = 2;

const AUTHORITATIVE_ROLES = new Set(["manufacturer", "regulator", "certification", "government"]);
const DEFINITE_CLASSES = new Set<EbikeClassDesignation>(["class-1", "class-2", "class-3", "out-of-class"]);

const NON_AUTHORITATIVE_HOST =
  /(^|\.)amazon\.[a-z.]+$|(^|\.)amzn\.to$|(^|\.)reddit\.com$|(^|\.)facebook\.com$|(^|\.)instagram\.com$|(^|\.)tiktok\.com$|(^|\.)ebay\.com$|(^|\.)yelp\.com$/i;

export type CitedSource = EvidenceSource | ProductSource;

export function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

export function isIsoDate(value: string | undefined): boolean {
  if (!value) return false;
  const match = DATE_RE.exec(value.trim());
  if (!match) return false;
  const [, year, month, day] = match;
  const iso = `${year}-${month}-${day}T00:00:00.000Z`;
  const date = new Date(iso);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === `${year}-${month}-${day}`;
}

export function isHttpUrl(value: string | undefined): boolean {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function sourceRole(source: CitedSource): string | undefined {
  return "kind" in source ? source.kind : source.role;
}

export function isAuthoritativeSource(source: CitedSource, listedAsOfficial = false): boolean {
  const role = sourceRole(source);
  if (role && AUTHORITATIVE_ROLES.has(role)) return true;
  if (role === "editorial" || role === "retailer") return false;
  return listedAsOfficial && !("kind" in source);
}

export function isNonAuthoritativeHost(url: string): boolean {
  try {
    return NON_AUTHORITATIVE_HOST.test(new URL(url).hostname);
  } catch {
    return true;
  }
}

export function collectModelSources(model: EbikeModel): CitedSource[] {
  return [...(model.officialSources ?? []), ...(model.productSources ?? [])];
}

export function sourceById(model: EbikeModel, sourceId: string): CitedSource | undefined {
  return collectModelSources(model).find((source) => source.id === sourceId);
}

function duplicateIds(ids: string[]): string[] {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) dupes.add(id);
    seen.add(id);
  }
  return [...dupes];
}

function sourceIssues(sources: CitedSource[]): string[] {
  const issues: string[] = [];
  const dupes = duplicateIds(sources.map((source) => source.id));
  if (dupes.length) issues.push(`duplicate source ids: ${dupes.join(", ")}`);
  for (const source of sources) {
    if (!source.title?.trim()) issues.push(`source ${source.id} is missing a title`);
    if (!isHttpUrl(source.url)) issues.push(`source ${source.id} has an invalid URL`);
  }
  return issues;
}

function resolvingSource(sources: CitedSource[], sourceId: string | undefined): CitedSource | undefined {
  if (!sourceId) return undefined;
  return sources.find((source) => source.id === sourceId);
}

export function formatClassDesignation(value: EbikeClassDesignation): string {
  switch (value) {
    case "class-1":
      return "Class 1";
    case "class-2":
      return "Class 2";
    case "class-3":
      return "Class 3";
    case "out-of-class":
      return "Out of class";
    case "unclassified":
      return "Class not determined from available sources";
  }
}

export const UNDETERMINED_CLASS_LABEL = "Class not determined from available sources";

function classificationSourcesResolve(model: EbikeModel, classification: ModelClassification): boolean {
  if (classification.sourceIds.length === 0) return false;
  return classification.sourceIds.every((sourceId) => {
    const source = sourceById(model, sourceId);
    return Boolean(source && source.title?.trim() && isHttpUrl(source.url) && isAuthoritativeSource(source, true));
  });
}

/** A class label that is safe to show as a determined fact. */
export function publicClassDesignation(model: EbikeModel): EbikeClassDesignation | null {
  const classification = model.classification;
  if (!classification?.determinable || !classification.designation) return null;
  if (!DEFINITE_CLASSES.has(classification.designation)) return null;
  if (!classificationSourcesResolve(model, classification)) return null;
  return classification.designation;
}

export function classificationStatement(model: EbikeModel): string {
  const designation = publicClassDesignation(model);
  return designation ? formatClassDesignation(designation) : UNDETERMINED_CLASS_LABEL;
}

export function visibleSpecifications(
  model: EbikeModel,
): Array<{ spec: Specification; source: CitedSource }> {
  const rows: Array<{ spec: Specification; source: CitedSource }> = [];
  for (const spec of model.specifications ?? []) {
    if (!spec.label?.trim() || !spec.value?.trim() || !spec.sourceId) continue;
    const source = sourceById(model, spec.sourceId);
    if (!source || !source.title?.trim() || !isHttpUrl(source.url)) continue;
    rows.push({ spec, source });
  }
  return rows;
}

export function formatSpecValue(spec: Specification): string {
  return spec.unit ? `${spec.value} ${spec.unit}` : spec.value;
}

export type PurchaseLinkPolicy = "allow" | "caution" | "suppress";

export function purchaseLinkPolicy(model: EbikeModel): PurchaseLinkPolicy {
  const notices = model.safetyNotices ?? [];
  const suppress = notices.some(
    (notice) => notice.severity === "stop-use" || notice.commerceRestriction === "do-not-promote",
  );
  if (suppress) return "suppress";
  const caution = notices.some(
    (notice) =>
      notice.commerceRestriction === "caution" ||
      notice.severity === "warning" ||
      notice.severity === "caution",
  );
  return caution ? "caution" : "allow";
}

export function retailerLinksForDisplay(model: EbikeModel) {
  if (purchaseLinkPolicy(model) === "suppress") return [];
  const links = [...(model.retailerLinks ?? [])];
  if (model.amazonLink && !links.some((link) => link.href === model.amazonLink?.href)) {
    links.unshift(model.amazonLink);
  }
  return links;
}

function safetyNoticeIssues(notices: SafetyNotice[] | undefined, sources: CitedSource[]): string[] {
  const issues: string[] = [];
  for (const notice of notices ?? []) {
    if (!notice.summary?.trim()) issues.push(`safety notice ${notice.id} is missing a summary`);
    if (!notice.severity) issues.push(`safety notice ${notice.id} is missing a severity`);
    if (notice.effectiveDate && !isIsoDate(notice.effectiveDate)) {
      issues.push(`safety notice ${notice.id} has an invalid effective date`);
    }
    const source = resolvingSource(sources, notice.sourceId);
    if (!notice.sourceId || !source) {
      issues.push(`safety notice ${notice.id} has no resolving source`);
      continue;
    }
    if (!source.title?.trim() || !isHttpUrl(source.url)) {
      issues.push(`safety notice ${notice.id} source is missing a title or valid URL`);
      continue;
    }
    if (!isAuthoritativeSource(source, true) || isNonAuthoritativeHost(source.url)) {
      issues.push(`safety notice ${notice.id} source is not an authoritative regulator or manufacturer source`);
    }
  }
  return issues;
}

function classificationIssues(model: EbikeModel): string[] {
  const classification = model.classification;
  if (!classification) return ["missing verified classification"];

  if (!classification.determinable) {
    if (classification.designation && DEFINITE_CLASSES.has(classification.designation)) {
      return ["unsupported class assignment on an undetermined classification"];
    }
    return [];
  }

  if (!classification.designation || !DEFINITE_CLASSES.has(classification.designation)) {
    return ["class is marked determinable without a definite designation"];
  }

  if (classification.sourceIds.length === 0) {
    return ["definite class without source evidence"];
  }

  const issues: string[] = [];
  for (const sourceId of classification.sourceIds) {
    const source = sourceById(model, sourceId);
    if (!source) {
      issues.push(`classification source ${sourceId} does not resolve`);
      continue;
    }
    if (!isHttpUrl(source.url)) issues.push(`classification source ${sourceId} has an invalid URL`);
    if (!isAuthoritativeSource(source, true) || isNonAuthoritativeHost(source.url)) {
      issues.push(`classification source ${sourceId} is not authoritative`);
    }
  }
  return issues;
}

export function getBrandPublicationIssues(brand: Brand): string[] {
  const issues: string[] = [];
  if (brand.status !== "published") issues.push("status is not published");
  if (brand.seo?.noIndex) issues.push("marked noindex");
  if (!brand.slug?.trim() || !brand.name?.trim()) issues.push("missing name or slug");
  if (brand.researchStatus !== "source-checked" && brand.researchStatus !== "editorially-reviewed") {
    issues.push("research status is not source-checked or editorially-reviewed");
  }
  if (!isIsoDate(brand.lastVerifiedAt)) issues.push("no lastVerifiedAt");
  if (!isHttpUrl(brand.website)) issues.push("missing first-party website");
  if ((brand.description?.trim().length ?? 0) < MIN_BRAND_DESCRIPTION) {
    issues.push("overview is too thin for a brand page");
  }

  const sources = brand.officialSources ?? [];
  issues.push(...sourceIssues(sources));
  const usableSources = sources.filter((source) => source.title?.trim() && isHttpUrl(source.url));
  if (usableSources.length < MIN_BRAND_SOURCES) {
    issues.push(`only ${usableSources.length} credible sources`);
  }
  if (!usableSources.some((source) => isAuthoritativeSource(source, true))) {
    issues.push("missing first-party or official source");
  }

  const sections = brand.sections ?? [];
  const completeSections = sections.filter(
    (section) =>
      section.heading?.trim() &&
      section.paragraphs.some((paragraph) => paragraph.trim().length >= 40),
  );
  if (completeSections.length < MIN_BRAND_SECTIONS) {
    issues.push(`only ${completeSections.length} editorial sections`);
  }
  for (const section of sections) {
    for (const sourceId of section.sourceIds ?? []) {
      if (!sources.some((source) => source.id === sourceId)) {
        issues.push(`section ${section.id} source ${sourceId} does not resolve`);
      }
    }
  }

  const hasResearchAngle = Boolean(
    brand.suitedFor?.trim() || brand.classConsiderations?.trim() || (brand.limitations?.length ?? 0) > 0,
  );
  if (!hasResearchAngle) issues.push("missing rider fit, class context, or known limitations");

  if (brand.warrantySourceId && !sources.some((source) => source.id === brand.warrantySourceId)) {
    issues.push("warranty source does not resolve");
  }

  issues.push(...safetyNoticeIssues(brand.safetyNotices, sources));
  return issues;
}

export function isPublicBrand(brand: Brand): boolean {
  return getBrandPublicationIssues(brand).length === 0;
}

export function getModelPublicationIssues(model: EbikeModel, brands: Brand[]): string[] {
  const issues: string[] = [];
  if (model.status !== "published") issues.push("status is not published");
  if (model.seo?.noIndex) issues.push("marked noindex");
  if (!model.slug?.trim() || !model.brandSlug?.trim() || !model.name?.trim()) {
    issues.push("missing name, slug, or brand");
  }

  const parent = brands.find((brand) => brand.slug === model.brandSlug);
  if (!parent || !isPublicBrand(parent)) issues.push("parent brand is not public");

  if (model.handsOnTested && model.researchStatus !== "hands-on-tested") {
    issues.push("hands-on claim without hands-on research status");
  }
  if (!model.handsOnTested && model.researchStatus === "hands-on-tested") {
    issues.push("hands-on research status without a hands-on claim");
  }
  if (model.researchStatus === "unverified") issues.push("research status is unverified");
  if ((model.description?.trim().length ?? 0) < MIN_MODEL_DESCRIPTION) {
    issues.push("editorial summary is too thin");
  }
  if (!isIsoDate(model.lastVerifiedAt)) issues.push("no lastVerifiedAt");
  if (model.safetyReviewed !== true) issues.push("safety review not completed");

  const sources = collectModelSources(model);
  issues.push(...sourceIssues(sources));
  const authoritative = [
    ...(model.officialSources ?? []).filter((source) => isAuthoritativeSource(source, true) && isHttpUrl(source.url)),
    ...(model.productSources ?? []).filter((source) => isAuthoritativeSource(source) && isHttpUrl(source.url)),
  ];
  if (authoritative.length === 0) issues.push("no authoritative primary source");

  const specIds = (model.specifications ?? []).map((spec) => spec.id);
  const specDupes = duplicateIds(specIds);
  if (specDupes.length) issues.push(`duplicate specification ids: ${specDupes.join(", ")}`);

  let sourcedCount = 0;
  for (const spec of model.specifications ?? []) {
    if (!spec.value?.trim() || !spec.label?.trim()) {
      issues.push(`specification ${spec.id} is missing a label or value`);
      continue;
    }
    const source = sourceById(model, spec.sourceId);
    if (!spec.sourceId || !source) {
      issues.push(`specification ${spec.id} has no resolving source`);
      continue;
    }
    if (!isHttpUrl(source.url)) {
      issues.push(`specification ${spec.id} source URL is invalid`);
      continue;
    }
    sourcedCount += 1;
  }
  if (sourcedCount < MIN_MODEL_SPECS) issues.push(`only ${sourcedCount} sourced specifications`);

  issues.push(...classificationIssues(model));
  issues.push(...safetyNoticeIssues(model.safetyNotices, sources));

  const storedLinks = [...(model.retailerLinks ?? [])];
  if (model.amazonLink) storedLinks.push(model.amazonLink);
  if (purchaseLinkPolicy(model) === "suppress" && storedLinks.length > 0) {
    issues.push("purchase links conflict with a do-not-promote safety state");
  }

  return issues;
}

export function isPublicModel(model: EbikeModel, brands: Brand[]): boolean {
  return getModelPublicationIssues(model, brands).length === 0;
}

function guideSources(guide: BuyingGuide): EvidenceSource[] {
  return guide.sources ?? [];
}

export function getBuyingGuidePublicationIssues(guide: BuyingGuide): string[] {
  const issues: string[] = [];
  if (guide.status !== "published") issues.push("status is not published");
  if (guide.seo?.noIndex) issues.push("marked noindex");
  if (!guide.slug?.trim() || !guide.title?.trim()) issues.push("missing title or slug");
  if (guide.description.trim().length < MIN_GUIDE_DESCRIPTION) issues.push("description is too thin");
  if (!guide.decision?.trim() || guide.decision.trim().length < 40) {
    issues.push("missing the buyer decision this guide answers");
  }
  if (guide.researchStatus === "unverified") issues.push("research status is unverified");
  if (guide.handsOnTested && guide.researchStatus !== "hands-on-tested") {
    issues.push("hands-on claim without hands-on research status");
  }
  if (!guide.handsOnTested && guide.researchStatus === "hands-on-tested") {
    issues.push("hands-on research status without a hands-on claim");
  }
  const dated = [guide.updatedAt, guide.publishedAt, guide.lastVerifiedAt].some((value) => isIsoDate(value));
  if (!dated) issues.push("no research date");

  const sections = guide.sections ?? [];
  if (sections.length < MIN_GUIDE_SECTIONS) issues.push(`only ${sections.length} sections`);
  let totalWords = 0;
  for (const section of sections) {
    if (!section.heading?.trim()) issues.push(`section ${section.id} is missing a heading`);
    const words = section.paragraphs.reduce((sum, paragraph) => sum + wordCount(paragraph), 0);
    totalWords += words;
    if (words < MIN_GUIDE_SECTION_WORDS) issues.push(`section ${section.id} is too thin`);
  }
  if (totalWords < MIN_GUIDE_WORDS) issues.push(`only ${totalWords} words of guidance`);

  const sources = guideSources(guide);
  issues.push(...sourceIssues(sources));
  const anchored = Boolean(
    sources.length ||
      guide.relatedGuideSlugs?.length ||
      guide.relatedBrandSlugs?.length ||
      guide.relatedModelIds?.length,
  );
  if (!anchored) issues.push("not anchored to sources or existing research");

  if ((guide.relatedModelIds?.length ?? 0) > 0 && (guide.productClaims?.length ?? 0) === 0) {
    issues.push("model-specific guide has no source-backed product claims");
  }
  for (const claim of guide.productClaims ?? []) {
    const source = sources.find((entry) => entry.id === claim.sourceId);
    if (!claim.statement?.trim() || !source || !isHttpUrl(source.url)) {
      issues.push(`product claim ${claim.id} is not source-backed`);
    }
  }

  return issues;
}

export function isPublicBuyingGuide(guide: BuyingGuide): boolean {
  return getBuyingGuidePublicationIssues(guide).length === 0;
}

/**
 * Public models are those that pass isPublicModel against the same brand list.
 * A comparison cannot publish from raw model records whose brands are withheld.
 */
export function publicModelsIn(models: EbikeModel[], brands: Brand[]): EbikeModel[] {
  return models.filter((model) => isPublicModel(model, brands));
}

export function getComparisonPublicationIssues(
  comparison: Comparison,
  models: EbikeModel[],
  brands: Brand[],
): string[] {
  const issues: string[] = [];
  if (comparison.status !== "published") issues.push("status is not published");
  if (comparison.seo?.noIndex) issues.push("marked noindex");
  if (!comparison.slug?.trim() || !comparison.title?.trim()) issues.push("missing title or slug");
  if (comparison.description.trim().length < MIN_GUIDE_DESCRIPTION) issues.push("description is too thin");
  if (!comparison.intent?.trim() || comparison.intent.trim().length < 40) {
    issues.push("missing a comparison question");
  }
  if (comparison.researchStatus === "unverified") issues.push("research status is unverified");
  if (comparison.handsOnTested && comparison.researchStatus !== "hands-on-tested") {
    issues.push("hands-on claim without hands-on research status");
  }
  if (!comparison.handsOnTested && comparison.researchStatus === "hands-on-tested") {
    issues.push("hands-on research status without a hands-on claim");
  }
  if (!isIsoDate(comparison.lastVerifiedAt) && !isIsoDate(comparison.updatedAt)) {
    issues.push("no research date");
  }
  if ((comparison.summary?.trim().length ?? 0) < 80) issues.push("missing a comparison summary");
  if ((comparison.dimensions?.length ?? 0) < 2) issues.push("missing shared comparison dimensions");
  if ((comparison.buyerFit?.trim().length ?? 0) < 80) issues.push("missing a buyer-fit conclusion");
  if (/\bbest overall\b/i.test(`${comparison.title} ${comparison.summary ?? ""} ${comparison.buyerFit ?? ""}`)) {
    issues.push("comparison declares a best overall winner");
  }

  const sections = comparison.sections ?? [];
  const completeSections = sections.filter(
    (section) =>
      section.heading?.trim() &&
      section.paragraphs.reduce((sum, paragraph) => sum + wordCount(paragraph), 0) >= 40,
  );
  if (completeSections.length < 2) issues.push("comparison is a spec table without analysis");

  const differences = (comparison.differences ?? []).filter((item) => item.trim().length >= 20);
  const tradeoffs = (comparison.tradeoffs ?? []).filter((item) => item.trim().length >= 20);
  if (differences.length < 2) issues.push("missing substantive differences");
  if (tradeoffs.length < 1) issues.push("missing tradeoffs");

  if (new Set(comparison.modelIds).size !== comparison.modelIds.length) {
    issues.push("duplicate model ids");
  }

  const publicIds = new Set(publicModelsIn(models, brands).map((model) => model.id));
  const missing = comparison.modelIds.filter((id) => !publicIds.has(id));
  const publicMatches = comparison.modelIds.filter((id) => publicIds.has(id));
  if (missing.length > 0 || new Set(publicMatches).size < MIN_COMPARISON_MODELS) {
    issues.push(
      missing.length
        ? `referenced models are not public: ${missing.join(", ")}`
        : "fewer than two public models",
    );
  }

  return issues;
}

export function isPublicComparison(
  comparison: Comparison,
  models: EbikeModel[],
  brands: Brand[],
): boolean {
  return getComparisonPublicationIssues(comparison, models, brands).length === 0;
}
