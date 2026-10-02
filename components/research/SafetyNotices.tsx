import type { SafetyNotice, SafetyReview } from "@/types/commerce";

const SEVERITY_LABEL: Record<SafetyNotice["severity"], string> = {
  info: "Note",
  caution: "Caution",
  warning: "Warning",
  "stop-use": "Stop use",
};

function noticeClass(severity: SafetyNotice["severity"]): string {
  if (severity === "stop-use" || severity === "warning") {
    return "border-[color-mix(in_srgb,var(--text-primary)_35%,transparent)] bg-surface-sunken";
  }
  if (severity === "caution") {
    return "border-[color-mix(in_srgb,var(--text-muted)_35%,transparent)] bg-surface-raised";
  }
  return "border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]";
}

export function SafetyNotices({
  notices,
  sources,
  heading = "Safety notices",
  headingId = "safety-notices",
  compact = false,
}: {
  notices: SafetyNotice[];
  sources: Array<{ id: string; title: string; url: string }>;
  heading?: string;
  headingId?: string;
  /** Early banner. Uses headline so the full summary can appear once later. */
  compact?: boolean;
}) {
  if (notices.length === 0) return null;

  return (
    <section className="mt-10" aria-labelledby={headingId}>
      <h2 id={headingId} className="text-heading-md text-text-primary">
        {heading}
      </h2>
      <ul className="mt-4 space-y-3">
        {notices.map((notice) => {
          const source = sources.find((entry) => entry.id === notice.sourceId);
          return (
            <li key={notice.id} className={`border px-4 py-3 text-body-sm ${noticeClass(notice.severity)}`}>
              <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                {SEVERITY_LABEL[notice.severity]}
                {notice.effectiveDate ? ` · ${notice.effectiveDate}` : ""}
              </p>
              <p className="mt-1 text-text-primary">{compact && notice.headline ? notice.headline : notice.summary}</p>
              {!compact && (notice.agency || notice.affectedModels?.length || notice.hazard || notice.recommendation) ? (
                <dl className="mt-3 space-y-1 text-text-secondary">
                  {notice.agency ? (
                    <div>
                      <dt className="inline font-medium text-text-primary">Agency: </dt>
                      <dd className="inline">{notice.agency}</dd>
                    </div>
                  ) : null}
                  {notice.affectedModels?.length ? (
                    <div>
                      <dt className="inline font-medium text-text-primary">Affected models: </dt>
                      <dd className="inline">{notice.affectedModels.join(", ")}</dd>
                    </div>
                  ) : null}
                  {notice.hazard ? (
                    <div>
                      <dt className="inline font-medium text-text-primary">Hazard: </dt>
                      <dd className="inline">{notice.hazard}</dd>
                    </div>
                  ) : null}
                  {notice.recommendation ? (
                    <div>
                      <dt className="inline font-medium text-text-primary">Current recommendation: </dt>
                      <dd className="inline">{notice.recommendation}</dd>
                    </div>
                  ) : null}
                  {notice.lastVerifiedAt ? (
                    <div>
                      <dt className="inline font-medium text-text-primary">Record checked: </dt>
                      <dd className="inline">{notice.lastVerifiedAt}</dd>
                    </div>
                  ) : null}
                </dl>
              ) : null}
              {source ? (
                <a href={source.url} className="link-editorial mt-2 inline-block" target="_blank" rel="noopener noreferrer">
                  {source.title}
                </a>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function SafetyReviewNote({
  review,
  sources,
}: {
  review?: SafetyReview;
  sources: Array<{ id: string; title: string; url: string }>;
}) {
  if (!review?.finding && !review?.checkedAt) return null;
  const cited = (review.sourceIds ?? [])
    .map((sourceId) => sources.find((source) => source.id === sourceId))
    .filter((source): source is { id: string; title: string; url: string } => Boolean(source));

  return (
    <section className="mt-10" aria-labelledby="safety-review">
      <h2 id="safety-review" className="text-heading-md text-text-primary">
        Regulator check
      </h2>
      <p className="mt-3 max-w-3xl text-body-sm text-text-secondary">
        {review.finding ?? `Checked ${review.checkedAt}. This check is dated and is not a clearance.`}
      </p>
      {cited.length ? (
        <ul className="mt-3 space-y-1 text-body-sm">
          {cited.map((source) => (
            <li key={source.id}>
              <a href={source.url} className="link-editorial" target="_blank" rel="noopener noreferrer">
                {source.title}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
