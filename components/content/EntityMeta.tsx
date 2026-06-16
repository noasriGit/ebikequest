import type { Author, Reviewer } from "@/types/content";
import { AuthorByline, ReviewerByline } from "@/components/seo/AuthorByline";
import { ContentFreshness } from "@/components/seo/ContentFreshness";

export function EntityMeta({
  author,
  reviewedBy,
  publishedAt,
  updatedAt,
  lastVerified,
}: {
  author: Author;
  reviewedBy: Reviewer;
  publishedAt: string;
  updatedAt: string;
  lastVerified?: string;
}) {
  return (
    <div className="space-y-2 border-b border-zinc-200 pb-6">
      <AuthorByline author={author} />
      <ReviewerByline reviewer={reviewedBy} />
      <ContentFreshness
        publishedAt={publishedAt}
        updatedAt={updatedAt}
        reviewedAt={reviewedBy.reviewedAt}
        lastVerified={lastVerified}
      />
    </div>
  );
}
