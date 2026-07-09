import { siteConfig } from "@/config/site";
import type { Author, FAQItem, Reviewer } from "@/types/content";

const CANONICAL_SITE_URL = "https://www.ebikequest.com";
const DEFAULT_IMAGE_PATH = "/images/hero.jpg";
const PUBLISHER_LOGO_URL = `${CANONICAL_SITE_URL}/apple-touch-icon.png`;

function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}

function absoluteImageUrl(imagePath: string): string {
  if (imagePath.startsWith("http")) return imagePath;
  return absoluteUrl(imagePath);
}

function toIsoDateTime(date: string): string {
  return date.includes("T") ? date : `${date}T00:00:00.000Z`;
}

function buildImageObject(imagePath: string, caption?: string) {
  return {
    "@type": "ImageObject",
    url: absoluteImageUrl(imagePath),
    ...(caption ? { caption } : {}),
  };
}

function buildWebPageRef(path: string, name?: string) {
  return {
    "@type": "WebPage",
    "@id": absoluteUrl(path),
    ...(name ? { name } : {}),
  };
}

export function buildOrganizationEntity() {
  return {
    "@type": "Organization" as const,
    name: siteConfig.name,
    url: CANONICAL_SITE_URL,
  };
}

function buildPublisherEntity() {
  return {
    "@type": "Organization" as const,
    name: siteConfig.name,
    url: CANONICAL_SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: PUBLISHER_LOGO_URL,
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: CANONICAL_SITE_URL,
    description: siteConfig.description,
    publishingPrinciples: `${CANONICAL_SITE_URL}/editorial-standards`,
    logo: {
      "@type": "ImageObject",
      url: PUBLISHER_LOGO_URL,
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: CANONICAL_SITE_URL,
    description: siteConfig.description,
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildWebPageRef(item.path, item.name),
    })),
  };
}

export function buildFaqSchema(faq: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildPersonSchema(person: Author | Reviewer) {
  return {
    "@type": "Person",
    name: person.name,
    ...("credentials" in person && person.credentials
      ? { jobTitle: person.credentials }
      : {}),
    ...("title" in person && person.title ? { jobTitle: person.title } : {}),
  };
}

export function buildArticleSchema(options: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
  author: Author;
  reviewedBy: Reviewer;
  imagePath?: string;
}) {
  const imagePath = options.imagePath ?? DEFAULT_IMAGE_PATH;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    url: absoluteUrl(options.path),
    datePublished: toIsoDateTime(options.publishedAt),
    dateModified: toIsoDateTime(options.updatedAt),
    author: buildPersonSchema(options.author),
    reviewedBy: buildPersonSchema(options.reviewedBy),
    publisher: buildPublisherEntity(),
    image: buildImageObject(imagePath, options.title),
    mainEntityOfPage: buildWebPageRef(options.path),
  };
}

export function buildTrailPlaceSchema(options: {
  title: string;
  description: string;
  path: string;
  locationName?: string;
  lat?: number;
  lng?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: options.title,
    description: options.description,
    url: absoluteUrl(options.path),
    ...(options.locationName
      ? {
          address: {
            "@type": "PostalAddress",
            addressLocality: options.locationName,
            addressCountry: "US",
          },
        }
      : {}),
    ...(options.lat != null && options.lng != null
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: options.lat,
            longitude: options.lng,
          },
        }
      : {}),
  };
}

/** @deprecated Use buildTrailPlaceSchema */
export const buildTrailSchema = buildTrailPlaceSchema;

export function buildLawDatasetSchema(options: {
  title: string;
  description: string;
  path: string;
  lastUpdated: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: options.title,
    description: options.description,
    url: absoluteUrl(options.path),
    dateModified: toIsoDateTime(options.lastUpdated),
    creator: buildOrganizationEntity(),
  };
}

export function buildItemListSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function buildAboutPageSchema(options: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: options.title,
    description: options.description,
    url: absoluteUrl(options.path),
    publisher: buildPublisherEntity(),
  };
}

export function toJsonLdDocument(
  data: Record<string, unknown> | Record<string, unknown>[],
): Record<string, unknown> {
  if (!Array.isArray(data)) {
    return data;
  }

  return {
    "@context": "https://schema.org",
    "@graph": data.map((entry) => {
      const { "@context": _context, ...rest } = entry;
      return rest;
    }),
  };
}
