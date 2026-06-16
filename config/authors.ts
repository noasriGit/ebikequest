import type { Author, Reviewer } from "@/types/content";

export const EDITORIAL_TEAM: Author = {
  id: "ebikequest-editorial-team",
  name: "eBikeQuest Editorial Team",
  role: "staff",
  title: "Platform Research & Verification",
};

export const EDITORIAL_REVIEW: Omit<Reviewer, "reviewedAt"> = {
  id: "ebikequest-editorial-team",
  name: "eBikeQuest Editorial Team",
  credentials: "Internal verification and editorial review",
};

export function withReviewDate(reviewedAt: string): Reviewer {
  return { ...EDITORIAL_REVIEW, reviewedAt };
}

export const AUTHORS: Record<string, Author> = {
  [EDITORIAL_TEAM.id]: EDITORIAL_TEAM,
};
