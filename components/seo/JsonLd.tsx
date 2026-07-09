import { toJsonLdDocument } from "@/lib/seo/structured-data";

export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const document = toJsonLdDocument(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(document) }}
    />
  );
}
