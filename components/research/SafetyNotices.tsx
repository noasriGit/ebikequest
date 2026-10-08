import type { SafetyNotice, SafetyReview } from "@/types/commerce";

const SEVERITY_LABEL: Record<SafetyNotice["severity"], string> = {
  info: "Note",
  caution: "Caution",
  warning: "Warning",
  "stop-use": "Stop use",
};

function noticeClass(severity: SafetyNotice["severity"]): string {
  if (severity === "stop-use") {
    return "border-[color-mix(in_srgb,var(--text-primary)_55%,transparent)] bg-surface-ink text-[#f4efe6]";
  }
  if (severity === "warning" || severity === "caution") {
    return "border-[color-mix(in_srgb,var(--text-primary)_20%,transparent)] bg-surface-base";
  }
  return "border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)]";
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
      <ul className="mt-6 space-y-4">
        {notices.map((notice) => {
          const source = sources.find((entry) => entry.id === notice.sourceId);
          const stop = notice.severity === "stop-use";
          return (
            <li key={notice.id} className={`border-t-2 border-t-brand-accent px-5 py-6 text-body-sm ${noticeClass(notice.severity)}`}>
              <p className={`text-meta ${stop ? "text-[#d6f04a]" : "text-text-muted"}`}>
                {stop ? "Stop use" : "Read before buying"}
                {" / "}
                {SEVERITY_LABEL[notice.severity]}
                {notice.effectiveDate ? ` / ${notice.effectiveDate}` : ""}
              </p>
              <p className={`mt-3 font-reading text-lg leading-snug ${stop ? "text-[#f4efe6]" : "text-text-primary"}`}>
                {compact && notice.headline ? notice.headline : notice.summary}
              </p>
              {!compact && (notice.agency || notice.affectedModels?.length || notice.hazard || notice.recommendation) ? (
                <dl className={`mt-3 space-y-1 ${stop ? "text-[#d9d3c7]" : "text-text-secondary"}`}>
                  {notice.agency ? (
                    <div>
                      <dt className={`inline font-medium ${stop ? "text-[#f4efe6]" : "text-text-primary"}`}>Agency: </dt>
                      <dd className="inline">{notice.agency}</dd>
                    </div>
                  ) : null}
                  {notice.affectedModels?.length ? (
                    <div>
                      <dt className={`inline font-medium ${stop ? "text-[#f4efe6]" : "text-text-primary"}`}>Affected models: </dt>
                      <dd className="inline">{notice.affectedModels.join(", ")}</dd>
                    </div>
                  ) : null}
                  {notice.hazard ? (
                    <div>
                      <dt className={`inline font-medium ${stop ? "text-[#f4efe6]" : "text-text-primary"}`}>Hazard: </dt>
                      <dd className="inline">{notice.hazard}</dd>
                    </div>
                  ) : null}
                  {notice.recommendation ? (
                    <div>
                      <dt className={`inline font-medium ${stop ? "text-[#f4efe6]" : "text-text-primary"}`}>Current recommendation: </dt>
                      <dd className="inline">{notice.recommendation}</dd>
                    </div>
                  ) : null}
                  {notice.lastVerifiedAt ? (
                    <div>
                      <dt className={`inline font-medium ${stop ? "text-[#f4efe6]" : "text-text-primary"}`}>Record checked: </dt>
                      <dd className="inline">{notice.lastVerifiedAt}</dd>
                    </div>
                  ) : null}
                </dl>
              ) : null}
              {source ? (
                <a
                  href={source.url}
                  className={`mt-3 inline-block underline decoration-brand-accent underline-offset-4 ${stop ? "text-[#f4efe6]" : "link-editorial"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
