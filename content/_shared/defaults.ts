import { EDITORIAL_TEAM, withReviewDate } from "@/config/authors";

export const EDITORIAL_DEFAULTS = {
  author: EDITORIAL_TEAM,
  reviewedBy: withReviewDate("2026-06-01"),
  publishedAt: "2026-06-01",
  updatedAt: "2026-06-01",
  status: "published" as const,
};
