export function SectionSources({
  sourceIds,
  sources,
}: {
  sourceIds?: string[];
  sources: Array<{ id: string; title: string; url: string }>;
}) {
  const cited = (sourceIds ?? [])
    .map((sourceId) => sources.find((source) => source.id === sourceId))
    .filter((source): source is { id: string; title: string; url: string } => Boolean(source));
  if (cited.length === 0) return null;

  return (
    <div className="mt-3 text-sm leading-6 text-text-muted">
      Sources:{" "}
      {cited.map((source, index) => (
        <span key={source.id}>
          {index > 0 ? " · " : null}
          <a href={source.url} className="link-editorial" target="_blank" rel="noopener noreferrer">
            {source.title}
          </a>
        </span>
      ))}
    </div>
  );
}
