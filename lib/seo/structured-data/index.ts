import { siteConfig } from "@/config/site";
import type { Author, FAQItem, Reviewer } from "@/types/content";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publishingPrinciples: `${siteConfig.url}/editorial-standards`,
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
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
      item: `${siteConfig.url}${item.path}`,
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    url: `${siteConfig.url}${options.path}`,
    datePublished: options.publishedAt,
    dateModified: options.updatedAt,
    author: buildPersonSchema(options.author),
    reviewedBy: buildPersonSchema(options.reviewedBy),
    publisher: buildOrganizationSchema(),
  };
}

export function buildTrailSchema(options: {
  title: string;
  description: string;
  path: string;
  lat?: number;
  lng?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: options.title,
    description: options.description,
    url: `${siteConfig.url}${options.path}`,
    ...(options.lat && options.lng
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
    url: `${siteConfig.url}${options.path}`,
    dateModified: options.lastUpdated,
    creator: buildOrganizationSchema(),
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
      url: `${siteConfig.url}${item.path}`,
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
    url: `${siteConfig.url}${options.path}`,
    publisher: buildOrganizationSchema(),
  };
}
