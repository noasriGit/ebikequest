import { guides } from "../content/guides";
import { hubPages } from "../content/hubs";
import { jurisdictionLaws } from "../content/laws/jurisdictions";
import { allTrails } from "../content/trails";
import { siteConfig } from "../config/site";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProductSchema,
  buildTrailPlaceSchema,
  toJsonLdDocument,
} from "../lib/seo/structured-data";
import { buildTrailPageTitle, SEO_TITLE_MAX_LENGTH } from "../lib/seo/titles";
import { buildCanonical } from "../lib/seo/metadata";
import { safetyPage } from "../content/research/safety";
import { isHttpUrl, isIsoDate } from "../lib/commerce/publish";

const CANONICAL_PREFIX = "https://www.ebikequest.com";

let hasErrors = false;

function error(message: string) {
  hasErrors = true;
  console.error(`ERROR: ${message}`);
}

function warn(message: string) {
  console.warn(`WARN: ${message}`);
}

function renderedTitleLength(title: string): number {
  return `${title} | eBikeQuest`.length;
}

function validateMetaDescription(description: string, label: string) {
  const length = description.length;
  if (length < 110) {
    warn(`${label}: meta description ${length} chars (target at least 110)`);
  }
  if (length > 160) {
    warn(`${label}: meta description ${length} chars (target at most 160)`);
  }
}

function collectEmptyFields(value: unknown, pathPrefix = ""): string[] {
  if (value == null) {
    return pathPrefix ? [pathPrefix] : [];
  }

  if (typeof value === "string") {
    if (value.trim() === "") return [pathPrefix];
    if (
      (pathPrefix.endsWith("url") ||
        pathPrefix.endsWith("@id") ||
        pathPrefix.endsWith("item") ||
        pathPrefix.endsWith("image") ||
        pathPrefix.endsWith("mainEntityOfPage")) &&
      !value.startsWith("http")
    ) {
      return [`${pathPrefix} (non-absolute URL: ${value})`];
    }
    return [];
  }

  if (Array.isArray(value)) {
    return value.flatMap((entry, index) =>
      collectEmptyFields(entry, `${pathPrefix}[${index}]`),
    );
  }

  if (typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).flatMap(([key, entry]) =>
      collectEmptyFields(entry, pathPrefix ? `${pathPrefix}.${key}` : key),
    );
  }

  return [];
}

function validateJsonLd(label: string, schema: Record<string, unknown>) {
  const issues = collectEmptyFields(schema);
  for (const issue of issues) {
    error(`${label}: JSON-LD has empty/invalid field at ${issue}`);
  }
}

function validatePageGraph(label: string, schemas: Record<string, unknown>[]) {
  validateJsonLd(label, toJsonLdDocument(schemas));
}

function validateCanonical(pathname: string, label: string) {
  const canonical = buildCanonical(pathname);
  if (!canonical.startsWith(CANONICAL_PREFIX)) {
    error(`${label}: canonical URL "${canonical}" must start with ${CANONICAL_PREFIX}`);
  }
}

function validateTrails() {
  for (const trail of allTrails) {
    const label = `Trail "${trail.slug}"`;
    const pageTitle = trail.seo?.title ?? buildTrailPageTitle(trail.title, trail.jurisdiction);
    const rendered = renderedTitleLength(pageTitle);

    if (rendered > SEO_TITLE_MAX_LENGTH) {
      warn(`${label}: rendered title ${rendered} chars "${pageTitle} | eBikeQuest"`);
    }

    validateMetaDescription(trail.description, label);
    validateCanonical(`/trails/${trail.jurisdiction}/${trail.slug}`, label);

    const path = `/trails/${trail.jurisdiction}/${trail.slug}`;
    const pageSchemas: Record<string, unknown>[] = [
      buildTrailPlaceSchema({
        title: trail.title,
        description: trail.description,
        path,
        locationName: trail.location.name,
        lat: trail.location.coordinates?.lat,
        lng: trail.location.coordinates?.lng,
      }),
    ];

    if (trail.sections?.length) {
      pageSchemas.push(
        buildArticleSchema({
          title: trail.title,
          description: trail.description,
          path,
          publishedAt: trail.publishedAt,
          updatedAt: trail.updatedAt,
          author: trail.author,
          reviewedBy: trail.reviewedBy,
          imagePath: trail.images?.[0]?.src,
        }),
      );
    }

    if (trail.faq?.length) {
      pageSchemas.push(buildFaqSchema(trail.faq));
    }

    validatePageGraph(`${label} page graph`, pageSchemas);
  }
}

function validateGuides() {
  for (const guide of guides) {
    const label = `Guide "${guide.slug}"`;
    const rendered = renderedTitleLength(guide.title);
    if (rendered > SEO_TITLE_MAX_LENGTH) {
      warn(`${label}: rendered title ${rendered} chars`);
    }
    validateMetaDescription(guide.description, label);
    validateCanonical(`/guides/${guide.slug}`, label);

    const path = `/guides/${guide.slug}`;
    validatePageGraph(`${label} page graph`, [
      buildArticleSchema({
        title: guide.title,
        description: guide.description,
        path,
        publishedAt: guide.publishedAt,
        updatedAt: guide.updatedAt,
        author: guide.author,
        reviewedBy: guide.reviewedBy,
        imagePath: undefined,
      }),
    ]);
  }
}

function validateLaws() {
  for (const law of jurisdictionLaws) {
    const label = `Law "${law.jurisdiction}"`;
    validateMetaDescription(law.description, label);
    validateCanonical(`/laws/${law.jurisdiction}`, label);

    const path = `/laws/${law.jurisdiction}`;
    validatePageGraph(`${label} page graph`, [
      buildArticleSchema({
        title: law.title,
        description: law.description,
        path,
        publishedAt: law.publishedAt,
        updatedAt: law.updatedAt,
        author: law.author,
        reviewedBy: law.reviewedBy,
      }),
      buildFaqSchema(law.faq),
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Laws", path: "/laws" },
        { name: law.title, path },
      ]),
    ]);
  }
}

function validateHubs() {
  for (const hub of hubPages) {
    validateMetaDescription(hub.description, `Hub "${hub.slug}"`);
    validateCanonical(hub.path, `Hub "${hub.slug}"`);
  }
}

function validateSiteConfig() {
  if (!siteConfig.url.startsWith(CANONICAL_PREFIX)) {
    error(`siteConfig.url must start with ${CANONICAL_PREFIX} (got ${siteConfig.url})`);
  }
}

function validateProductSchemaGuard() {
  const schema = buildProductSchema({
    name: "Example Model",
    description: "A sourced e-bike profile used only to verify structured data rules.",
    path: "/ebikes/example/model",
    brandName: "Example",
    imagePath: "https://m.media-amazon.com/images/example.jpg",
    additionalProperties: [{ name: "Motor", value: "250 W" }],
  });

  if (!schema) {
    error("Product schema helper returned null for a complete model fixture");
    return;
  }

  const serialized = JSON.stringify(schema);
  if (/"@type":"AggregateRating"|"@type":"Review"|aggregateRating|"review":/.test(serialized)) {
    error("Product schema must not include Review or AggregateRating");
  }
  if (serialized.includes('"seller"') || serialized.includes('"offers"')) {
    error("Product schema must not treat eBikeQuest as a seller or invent an offer");
  }
  if (serialized.includes("amazon")) {
    error("Product schema included a remote retailer image");
  }

  const empty = buildProductSchema({
    name: "",
    description: "",
    path: "/ebikes/example/model",
    brandName: "",
  });
  if (empty) error("Product schema helper emitted a type for an empty model");
}

function validateSafetyPageSources() {
  if (!isIsoDate(safetyPage.lastVerifiedAt)) {
    error("Safety page is missing a real lastVerifiedAt date");
  }
  if (safetyPage.sources.length < 4) {
    error("Safety page needs authoritative sources for its regulatory statements");
  }
  for (const source of safetyPage.sources) {
    if (!source.title?.trim() || !isHttpUrl(source.url)) {
      error(`Safety source ${source.id} is missing a title or valid URL`);
    }
  }
  for (const section of safetyPage.sections) {
    for (const sourceId of section.sourceIds ?? []) {
      if (!safetyPage.sources.some((source) => source.id === sourceId)) {
        error(`Safety section ${section.id} cites unresolved source ${sourceId}`);
      }
    }
  }
}

validateSiteConfig();
validateProductSchemaGuard();
validateSafetyPageSources();
validateTrails();
validateGuides();
validateLaws();
validateHubs();

if (hasErrors) {
  console.error("\nSEO validation failed.");
  process.exit(1);
}

console.log("SEO validation passed.");
