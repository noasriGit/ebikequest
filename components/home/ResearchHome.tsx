import Link from "next/link";
import { PhotoFrame } from "@/components/editorial/PhotoFrame";
import { Container } from "@/components/layout/Container";
import { ClassReferenceTable } from "@/components/research/ClassReferenceTable";
import { siteConfig } from "@/config/site";
import { homeEditorialContent } from "@/content/static/marketing";
import { GUIDE_CATEGORY_LABELS } from "@/lib/content/guides";
import { getJurisdictionName } from "@/lib/content/jurisdictions";
import type { Guide } from "@/types/guide";
import type { LawComparisonRow } from "@/types/law";
import type { Trail } from "@/types/trail";
import type { ContentImageRef } from "@/lib/utils/images";

function formatDate(iso: string): string {
  const day = iso.slice(0, 10);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${day}T00:00:00.000Z`));
}

function SectionIntro({
  id,
  kicker,
  title,
  lede,
}: {
  id: string;
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="max-w-2xl">
      <p className="text-kicker">{kicker}</p>
      <h2 id={id} className="mt-4 text-heading-lg text-text-primary">
        {title}
      </h2>
      <p className="mt-3 text-body-md text-text-secondary">{lede}</p>
    </header>
  );
}

export function ResearchHome({
  heroImage,
  trailCount,
  guideCount,
  jurisdictionCount,
  modelCount,
  brandCount,
  featuredTrails,
  lawRows,
  buyingGuides,
  latestGuides,
}: {
  heroImage: ContentImageRef;
  trailCount: number;
  guideCount: number;
  jurisdictionCount: number;
  modelCount: number;
  brandCount: number;
  featuredTrails: Trail[];
  lawRows: LawComparisonRow[];
  buyingGuides: Guide[];
  latestGuides: Guide[];
}) {
  const copy = homeEditorialContent;

  return (
    <>
      <section className="border-b border-[color-mix(in_srgb,var(--text-muted)_16%,transparent)]">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-kicker">Independent e-bike research</p>
            <h1 className="mt-4 max-w-xl text-display-xl text-text-primary">{siteConfig.tagline}</h1>
            <p className="mt-5 max-w-xl text-body-lg text-text-secondary">{copy.heroLede}</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              <Link href="/ebikes" className="link-editorial">
                Explore e-bikes
              </Link>
              <Link href="/safety" className="link-editorial">
                Class and safety
              </Link>
              <Link href="/trails" className="link-editorial">
                Trails
              </Link>
              <Link href="/laws" className="link-editorial">
                Laws
              </Link>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-t border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] pt-6 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-text-muted">Models</dt>
                <dd className="mt-1 font-medium text-text-primary">
                  {modelCount > 0 ? modelCount : "In research"}
                </dd>
              </div>
              <div>
                <dt className="text-text-muted">Brands</dt>
                <dd className="mt-1 font-medium text-text-primary">
                  {brandCount > 0 ? brandCount : "In research"}
                </dd>
              </div>
              <div>
                <dt className="text-text-muted">Trails</dt>
                <dd className="mt-1 font-medium text-text-primary">{trailCount} verified</dd>
              </div>
              <div>
                <dt className="text-text-muted">Laws</dt>
                <dd className="mt-1 font-medium text-text-primary">{jurisdictionCount} jurisdictions</dd>
              </div>
            </dl>
          </div>
          <PhotoFrame
            src={heroImage.src}
            alt={heroImage.alt}
            priority
            aspect="square"
            caption="Trail access still depends on the bike's class and the land manager."
          />
        </Container>
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--text-muted)_16%,transparent)]" aria-labelledby="explore-ebikes">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <SectionIntro id="explore-ebikes" kicker="E-bikes" title="Explore e-bikes" lede={copy.exploreLede} />
          <div>
            {modelCount === 0 ? (
              <p className="mb-6 text-body-sm text-text-secondary">
                No model profiles are public yet. The class table is the decision that has to come first.{" "}
                <Link href="/guides/ebike-classes-explained" className="link-editorial">
                  Read the class guide
                </Link>
                .
              </p>
            ) : (
              <p className="mb-6 text-body-sm text-text-secondary">
                <Link href="/ebikes" className="link-editorial">
                  {modelCount} model {modelCount === 1 ? "profile" : "profiles"}
                </Link>{" "}
                with sourced specifications.
              </p>
            )}
            <ClassReferenceTable />
          </div>
        </Container>
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--text-muted)_16%,transparent)] bg-surface-raised" aria-labelledby="browse-brands">
        <Container className="grid gap-8 py-12 md:grid-cols-2 md:py-16">
          <SectionIntro id="browse-brands" kicker="Brands" title="Browse brands" lede={copy.brandsLede} />
          <div className="md:pt-10">
            {brandCount === 0 ? (
              <p className="text-body-md text-text-secondary">
                Brand pages are withheld until a manufacturer source is on file.{" "}
                <Link href="/editorial-standards" className="link-editorial">
                  How verification works
                </Link>
                .
              </p>
            ) : (
              <p className="text-body-md text-text-secondary">
                <Link href="/brands" className="link-editorial">
                  Browse {brandCount} {brandCount === 1 ? "brand" : "brands"}
                </Link>
                .
              </p>
            )}
            <p className="mt-6 text-body-sm text-text-muted">
              {guideCount} rider guides remain available while the catalog is built, including class, maintenance, and local riding.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--text-muted)_16%,transparent)]" aria-labelledby="buying-guides">
        <Container className="py-12 md:py-16">
          <SectionIntro id="buying-guides" kicker="Buying guides" title="Buying guides" lede={copy.buyingLede} />
          <ul className="mt-8 max-w-3xl border-t border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
            {buyingGuides.map((guide) => (
              <li key={guide.id} className="border-b border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
                <Link href={`/guides/${guide.slug}`} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="font-medium text-text-primary">{guide.title}</span>
                  <span className="text-sm text-text-muted">Rider guide · {formatDate(guide.publishedAt)}</span>
                </Link>
              </li>
            ))}
            <li className="border-b border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
              <Link href="/guides/ebike-classes-explained" className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-medium text-text-primary">E-bike classes explained</span>
                <span className="text-sm text-text-muted">Decide the class first</span>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--text-muted)_16%,transparent)] bg-surface-sunken" aria-labelledby="why-trust">
        <Container className="py-12 md:py-16">
          <SectionIntro id="why-trust" kicker="Method" title="Why trust eBikeQuest" lede={copy.methodLede} />
          <ol className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              ["Primary sources", "Trail policies, statutes, and manufacturer documents are cited. Ambiguous rules stay ambiguous."],
              ["Class before catalog", "A model is not recommended into a place its class cannot ride."],
              ["No borrowed reviews", "We do not copy retailer ratings, review counts, or customer quotes."],
              ["Testing is literal", "hands-on tested stays false until there is a real ride or measurement."],
            ].map(([title, body], index) => (
              <li key={title} className="border-t border-[color-mix(in_srgb,var(--text-muted)_22%,transparent)] pt-4">
                <p className="text-sm text-text-muted">0{index + 1}</p>
                <h3 className="mt-1 font-display text-xl text-text-primary">{title}</h3>
                <p className="mt-2 text-body-sm text-text-secondary">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm">
            <Link href="/editorial-standards" className="link-editorial">
              Editorial standards
            </Link>
            <span className="mx-3 text-text-muted" aria-hidden>
              /
            </span>
            <Link href="/affiliate-disclosure" className="link-editorial">
              Affiliate disclosure
            </Link>
          </p>
        </Container>
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--text-muted)_16%,transparent)]" aria-labelledby="safety-class">
        <Container className="grid gap-8 py-12 md:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionIntro id="safety-class" kicker="Safety" title="Safety and e-bike classification" lede={copy.safetyLede} />
          <div className="lg:pt-2">
            <p className="text-body-md text-text-secondary">
              Class 1 and Class 2 assist stops at 20 mph. Class 3 pedal-assist continues to 28 mph and is the one most often limited on shared paths. DC does not use those labels.
            </p>
            <p className="mt-6">
              <Link href="/safety" className="link-editorial">
                How we assign a class
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--text-muted)_16%,transparent)]" aria-labelledby="trails-laws">
        <Container className="py-12 md:py-16">
          <SectionIntro id="trails-laws" kicker="Where you can ride" title="Trails and laws" lede={copy.rideLede} />
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-3 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl text-text-primary">Laws</h3>
                <Link href="/laws" className="text-sm link-editorial">
                  Full comparison
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="research-table">
                  <caption className="sr-only">E-bike law snapshot for published jurisdictions</caption>
                  <thead>
                    <tr>
                      <th scope="col">Jurisdiction</th>
                      <th scope="col">Helmet</th>
                      <th scope="col">Registration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lawRows.map((row) => (
                      <tr key={row.jurisdiction}>
                        <th scope="row">
                          <Link href={`/laws/${row.jurisdiction}`} className="link-editorial">
                            {row.jurisdictionName}
                          </Link>
                        </th>
                        <td>{row.helmetRequired}</td>
                        <td>{row.registrationRequired}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="mb-3 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl text-text-primary">Trails</h3>
                <Link href="/trails" className="text-sm link-editorial">
                  All trails
                </Link>
              </div>
              <ul className="border-t border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
                {featuredTrails.map((trail) => (
                  <li key={trail.id} className="border-b border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
                    <Link
                      href={`/trails/${trail.jurisdiction}/${trail.slug}`}
                      className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <span className="font-medium text-text-primary">{trail.title}</span>
                      <span className="text-sm text-text-muted">
                        {getJurisdictionName(trail.jurisdiction)}
                        {trail.stats.distanceMiles ? ` · ${trail.stats.distanceMiles} mi` : ""}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="latest-research">
        <Container className="py-12 md:py-16">
          <SectionIntro id="latest-research" kicker="Library" title="Latest useful research" lede={copy.latestLede} />
          <ol className="mt-8 max-w-3xl">
            {latestGuides.map((guide, index) => (
              <li key={guide.id} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] py-4">
                <span className="pt-1 text-sm text-text-muted">0{index + 1}</span>
                <div>
                  <p className="text-sm text-text-muted">
                    {GUIDE_CATEGORY_LABELS[guide.category]} · {formatDate(guide.updatedAt || guide.publishedAt)}
                  </p>
                  <Link href={`/guides/${guide.slug}`} className="mt-1 block font-display text-2xl text-text-primary hover:text-brand">
                    {guide.title}
                  </Link>
                  <p className="mt-2 text-body-sm text-text-secondary">{guide.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <Link href="/guides" className="link-editorial">
              All guides
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
