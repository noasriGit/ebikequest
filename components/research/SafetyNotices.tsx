import type { SafetyNotice } from "@/types/commerce";

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
}: {
  notices: SafetyNotice[];
  sources: Array<{ id: string; title: string; url: string }>;
  heading?: string;
  headingId?: string;
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
              <p className="mt-1 text-text-primary">{notice.summary}</p>
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
