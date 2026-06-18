export function HubIntro({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="prose-editorial mb-10 max-w-3xl space-y-4 border-b border-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] pb-10">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="text-body-md text-text-secondary">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
