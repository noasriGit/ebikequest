export function SourceList({
  sources,
  heading = "Sources",
  headingId = "sources",
}: {
  sources: Array<{ id: string; title: string; url: string; accessedAt?: string }>;
  heading?: string;
  headingId?: string;
}) {
  if (sources.length === 0) return null;

  return (
    <section className="mt-10" aria-labelledby={headingId}>
      <h2 id={headingId} className="text-heading-md text-text-primary">
        {heading}
      </h2>
      <ul className="mt-4 space-y-2 text-body-sm">
        {sources.map((source) => (
          <li key={source.id}>
            <a href={source.url} className="link-editorial" target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
            {source.accessedAt ? <span className="text-text-muted"> · accessed {source.accessedAt}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
