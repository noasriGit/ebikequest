import { formatDate } from "@/lib/utils/cn";

interface ContentFreshnessProps {
  publishedAt: string;
  updatedAt: string;
  reviewedAt?: string;
  lastVerified?: string;
}

export function ContentFreshness({
  publishedAt,
  updatedAt,
  reviewedAt,
  lastVerified,
}: ContentFreshnessProps) {
  return (
    <dl className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-secondary">
      <div>
        <dt className="inline">Published: </dt>
        <dd className="inline font-medium text-text-primary">{formatDate(publishedAt)}</dd>
      </div>
      <div>
        <dt className="inline">Updated: </dt>
        <dd className="inline font-medium text-text-primary">{formatDate(updatedAt)}</dd>
      </div>
      {reviewedAt ? (
        <div>
          <dt className="inline">Reviewed: </dt>
          <dd className="inline font-medium text-text-primary">{formatDate(reviewedAt)}</dd>
        </div>
      ) : null}
      {lastVerified ? (
        <div>
          <dt className="inline">Policy verified: </dt>
          <dd className="inline font-medium text-text-primary">{formatDate(lastVerified)}</dd>
        </div>
      ) : null}
    </dl>
  );
}
