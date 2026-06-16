export interface Author {
  id: string;
  name: string;
  role?: "staff" | "contributor" | "guest" | "expert";
  title?: string;
  url?: string;
  image?: string;
}

export interface Reviewer {
  id: string;
  name: string;
  credentials?: string;
  reviewedAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentBase {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: "draft" | "published";
  author: Author;
  reviewedBy: Reviewer;
  publishedAt: string;
  updatedAt: string;
  seo?: {
    title?: string;
    noIndex?: boolean;
  };
}

export interface SearchDocument {
  entityType: "trail" | "guide" | "law" | "shop" | "rental" | "repair";
  id: string;
  slug: string;
  title: string;
  description: string;
  jurisdiction?: string;
  tags?: string[];
  coordinates?: { lat: number; lng: number };
}
