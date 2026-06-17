import Link from "next/link";
import type { LawComparisonRow } from "@/types/law";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LawTeaserCards } from "@/components/laws/LawTeaser";
import type { FAQItem } from "@/types/content";
import { Check, X } from "lucide-react";

function AllowIcon({ value }: { value: string }) {
  const allowed =
    value.toLowerCase().includes("yes") ||
    value.toLowerCase().includes("allow") ||
    value.toLowerCase().includes("permitted");
  const restricted =
    value.toLowerCase().includes("no") ||
    value.toLowerCase().includes("restrict") ||
    value.toLowerCase().includes("prohibit");

  if (allowed) return <Check size={14} className="text-semantic-allow" strokeWidth={2} />;
  if (restricted) return <X size={14} className="text-semantic-restrict" strokeWidth={2} />;
  return null;
}

export function LawComparisonMatrix({ rows }: { rows: LawComparisonRow[] }) {
  return (
    <>
      <div className="md:hidden">
        <LawTeaserCards rows={rows} />
      </div>

      <div className="hidden overflow-x-auto rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] md:block">
        <table className="min-w-full divide-y divide-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] text-left text-sm">
          <thead className="border-b-2 border-brand-accent bg-surface-sunken">
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-10 bg-surface-sunken px-4 py-3 font-semibold text-text-primary"
              >
                Jurisdiction
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-text-primary">
                Class 1
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-text-primary">
                Class 2
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-text-primary">
                Class 3
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-text-primary">
                Helmet
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-text-primary">
                Registration
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-text-primary">
                Trail access
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] bg-surface-raised">
            {rows.map((row) => (
              <tr key={row.jurisdiction} className="group hover:bg-surface-sunken/50">
                <td className="sticky left-0 z-10 bg-surface-raised px-4 py-3 font-medium text-text-primary group-hover:bg-surface-sunken/50">
                  <Link href={`/laws/${row.jurisdiction}`} className="text-brand hover:underline">
                    {row.jurisdictionName}
                  </Link>
                </td>
                {[row.class1Allowed, row.class2Allowed, row.class3Allowed].map((val, i) => (
                  <td key={i} className="px-4 py-3 text-text-secondary">
                    <span className="inline-flex items-center gap-1.5">
                      <AllowIcon value={val} />
                      {val}
                    </span>
                  </td>
                ))}
                <td className="px-4 py-3 text-text-secondary">{row.helmetRequired}</td>
                <td className="px-4 py-3 text-text-secondary">{row.registrationRequired}</td>
                <td className="px-4 py-3 text-text-secondary">{row.trailAccessSummary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
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
        <div
          key={label}
          className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-5 shadow-[var(--shadow-xs)]"
        >
          <h3 className="font-display text-lg text-text-primary">{label}</h3>
          <p className="mt-2 text-sm text-text-secondary">{rules.definition}</p>
          <dl className="mt-4 space-y-2 text-sm">
            <div>
              <dt className="font-medium text-text-primary">Roads</dt>
              <dd className="text-text-secondary">
                {rules.allowedOnRoads ? "Allowed" : "Restricted"}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-text-primary">Trails</dt>
              <dd className="text-text-secondary">{rules.allowedOnTrails}</dd>
            </div>
            {rules.maxSpeedMph ? (
              <div>
                <dt className="font-medium text-text-primary">Max assist</dt>
                <dd className="font-mono text-text-secondary">{rules.maxSpeedMph} mph</dd>
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
    <aside className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--semantic-restrict)_30%,transparent)] bg-[color-mix(in_srgb,var(--semantic-restrict)_8%,white)] p-4 text-sm text-text-primary">
      <strong>Disclaimer:</strong> This page provides general information only and is not legal
      advice. Verify current laws with official sources or a qualified attorney.
    </aside>
  );
}

export function EditorialStandardsCallout() {
  return (
    <aside className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--brand)_25%,transparent)] bg-brand-light p-4 text-sm text-text-primary">
      How we verify this information:{" "}
      <Link href="/editorial-standards" className="font-semibold text-brand underline">
        Read our Editorial Standards
      </Link>
    </aside>
  );
}

export function LawMethodologyBanner({ methodology }: { methodology: string }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-sunken p-5">
      <h2 className="font-semibold text-text-primary">Methodology</h2>
      <p className="mt-2 text-text-secondary">{methodology}</p>
      <p className="mt-3">
        <Link href="/editorial-standards" className="text-sm font-semibold text-brand hover:underline">
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
      <h2 className="text-lg font-semibold text-text-primary">Sources</h2>
      <ul className="mt-3 space-y-2">
        {sources.map((source) => (
          <li key={source.url} className="text-sm">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              {source.label}
            </a>
            {source.accessedAt ? (
              <span className="text-text-muted"> (accessed {source.accessedAt})</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
