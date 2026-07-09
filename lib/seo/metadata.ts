import type { Metadata } from "next";
import { marketingImages } from "@/config/images";
import { siteConfig } from "@/config/site";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}

const DEFAULT_OG_IMAGE = marketingImages.hero;

export function buildCanonical(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function buildAbsoluteAssetUrl(assetPath: string): string {
  if (assetPath.startsWith("http")) return assetPath;
  return buildCanonical(assetPath);
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage,
  ogImageAlt,
  noIndex = false,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const canonical = buildCanonical(path);
  const ogImageUrl = buildAbsoluteAssetUrl(ogImage ?? DEFAULT_OG_IMAGE);
  const images = [{ url: ogImageUrl, alt: ogImageAlt ?? title }];

  return {
    title,
    description,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
