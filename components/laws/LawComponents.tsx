import Link from "next/link";
import type { LawComparisonRow } from "@/types/law";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import type { FAQItem } from "@/types/content";

export function LawComparisonMatrix({ rows }: { rows: LawComparisonRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200">
      <table className="min-w-full divide-y divide-zinc-200 text-left text-sm">
        <thead className="bg-zinc-50">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold text-zinc-900">
              Jurisdiction
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-zinc-900">
              Class 1
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-zinc-900">
              Class 2
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-zinc-900">
              Class 3
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-zinc-900">
              Helmet
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-zinc-900">
              Registration
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-zinc-900">
              Trail access
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 bg-white">
          {rows.map((row) => (
            <tr key={row.jurisdiction}>
              <td className="px-4 py-3 font-medium text-zinc-900">
                <Link
                  href={`/laws/${row.jurisdiction}`}
                  className="text-emerald-700 hover:underline"
                >
                  {row.jurisdictionName}
                </Link>
              </td>
              <td className="px-4 py-3 text-zinc-600">{row.class1Allowed}</td>
              <td className="px-4 py-3 text-zinc-600">{row.class2Allowed}</td>
              <td className="px-4 py-3 text-zinc-600">{row.class3Allowed}</td>
              <td className="px-4 py-3 text-zinc-600">{row.helmetRequired}</td>
              <td className="px-4 py-3 text-zinc-600">{row.registrationRequired}</td>
              <td className="px-4 py-3 text-zinc-600">{row.trailAccessSummary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function NationalLawFaq({ faq }: { faq: FAQItem[] }) {
  return <FAQAccordion items={faq} />;
}

export function JurisdictionLawFaq({ faq }: { faq: FAQItem[] }) {
  return <FAQAccordion items={faq} />;
}

export function ClassRulesGrid({
  classifications,
}: {
  classifications: import("@/types/law").JurisdictionLaw["classifications"];
}) {
  const entries = [
    { label: "Class 1", rules: classifications.class1 },
    { label: "Class 2", rules: classifications.class2 },
    { label: "Class 3", rules: classifications.class3 },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {entries.map(({ label, rules }) => (
        <div key={label} className="rounded-xl border border-zinc-200 bg-white p-5">
          <h3 className="font-semibold text-zinc-900">{label}</h3>
          <p className="mt-2 text-sm text-zinc-600">{rules.definition}</p>
          <dl className="mt-4 space-y-2 text-sm">
            <div>
              <dt className="font-medium text-zinc-700">Roads</dt>
              <dd className="text-zinc-600">
                {rules.allowedOnRoads ? "Allowed" : "Restricted"}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-700">Trails</dt>
              <dd className="text-zinc-600">{rules.allowedOnTrails}</dd>
            </div>
            {rules.maxSpeedMph ? (
              <div>
                <dt className="font-medium text-zinc-700">Max assist</dt>
                <dd className="text-zinc-600">{rules.maxSpeedMph} mph</dd>
              </div>
            ) : null}
          </dl>
        </div>
      ))}
    </div>
  );
}

export function LegalDisclaimer() {
  return (
    <aside className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
      <strong>Disclaimer:</strong> This page provides general information only and is not legal
      advice. Verify current laws with official sources or a qualified attorney.
    </aside>
  );
}

export function EditorialStandardsCallout() {
  return (
    <aside className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
      How we verify this information:{" "}
      <Link href="/editorial-standards" className="font-semibold underline">
        Read our Editorial Standards
      </Link>
    </aside>
  );
}

export function LawMethodologyBanner({ methodology }: { methodology: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
      <h2 className="font-semibold text-zinc-900">Methodology</h2>
      <p className="mt-2 text-zinc-600">{methodology}</p>
      <p className="mt-3">
        <Link href="/editorial-standards" className="text-sm font-semibold text-emerald-700 hover:underline">
          View full Editorial Standards →
        </Link>
      </p>
    </div>
  );
}

export function SourceCitationList({
  sources,
}: {
  sources: { label: string; url: string; accessedAt?: string }[];
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-zinc-900">Sources</h2>
      <ul className="mt-3 space-y-2">
        {sources.map((source) => (
          <li key={source.url} className="text-sm">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:underline"
            >
              {source.label}
            </a>
            {source.accessedAt ? (
              <span className="text-zinc-500"> (accessed {source.accessedAt})</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
