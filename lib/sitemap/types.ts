export type SitemapContentType =
  | "home"
  | "hub"
  | "trail"
  | "guide"
  | "law"
  | "static";

export interface SitemapEntry {
  id: string;
  title: string;
  path: string;
  description?: string;
  contentType: SitemapContentType;
  category?: string;
  subcategory?: string;
  publishedAt?: string;
  updatedAt?: string;
  indexable: boolean;
  featured?: boolean;
  parentPath?: string;
  sortPriority: number;
}

export interface SitemapSubsection {
  id: string;
  title: string;
  hubPath?: string;
  entries: SitemapEntry[];
}

export interface SitemapSection {
  id: string;
  title: string;
  description?: string;
  hubPath?: string;
  entries?: SitemapEntry[];
  subsections?: SitemapSubsection[];
}

export interface SitemapPageData {
  entries: SitemapEntry[];
  sections: SitemapSection[];
  recentEntries: SitemapEntry[];
  featuredEntries: SitemapEntry[];
  totalIndexablePages: number;
}
