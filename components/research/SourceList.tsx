function sourceRoleLabel(role?: string): string | null {
  if (!role) return null;
  if (role === "regulator") return "Regulator";
  if (role === "government") return "Government";
  if (role === "manufacturer") return "Manufacturer";
  if (role === "certification") return "Certification";
  if (role === "editorial") return "Editorial";
  if (role === "retailer") return "Retailer";
  return role;
}

export function SourceList({
  sources,
  heading = "Research sources",
  headingId = "sources",
}: {
  sources: Array<{ id: string; title: string; url: string; accessedAt?: string; role?: string; kind?: string }>;
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
        {sources.map((source) => {
          const role = sourceRoleLabel(source.role ?? source.kind);
          return (
            <li key={source.id}>
              {role ? <span className="text-text-muted">{role} · </span> : null}
              <a href={source.url} className="link-editorial" target="_blank" rel="noopener noreferrer">
                {source.title}
              </a>
              {source.accessedAt ? <span className="text-text-muted"> · accessed {source.accessedAt}</span> : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
