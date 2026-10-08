import Link from "next/link";
import { ContentImage } from "@/components/content/ContentImage";
import { EditorialImage } from "@/components/editorial/frames";
import { Container } from "@/components/layout/Container";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { LineRise } from "@/components/motion/LineRise";
import { RouteDraw } from "@/components/motion/RouteDraw";
import { ScrollScale } from "@/components/motion/ScrollScale";
import { ClassReferenceTable } from "@/components/research/ClassReferenceTable";
import { siteConfig } from "@/config/site";
import { editorialImage, roleForBikeTypes } from "@/config/editorial-images";
import { homeEditorialContent } from "@/content/static/marketing";
import { GUIDE_CATEGORY_LABELS } from "@/lib/content/guides";
import { getJurisdictionName } from "@/lib/content/jurisdictions";
import type { Guide } from "@/types/guide";
import type { LawComparisonRow } from "@/types/law";
import type { Trail } from "@/types/trail";
import type { Brand } from "@/types/commerce";
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
    <header className="max-w-xl">
      <p className="text-meta text-text-muted">{kicker}</p>
      <h2 id={id} className="mt-3 text-heading-lg text-text-primary">
        {title}
      </h2>
      <p className="mt-4 font-reading text-lg leading-relaxed text-text-secondary">{lede}</p>
    </header>
  );
}

const paths = [
  {
    href: "/ebikes",
    title: "Find a bike",
    note: "Models",
    image: editorialImage("commuter"),
  },
  {
    href: "/laws",
    title: "Know the rules",
    note: "Statutes",
    image: editorialImage("mechanical"),
  },
  {
    href: "/trails",
    title: "Find somewhere to ride",
    note: "Routes",
    image: editorialImage("trail"),
  },
] as const;

export function ResearchHome({
  heroImage,
  trailCount,
  guideCount,
  jurisdictionCount,
  modelCount,
  brandCount,
  brands,
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
  brands: Brand[];
  featuredTrails: Trail[];
  lawRows: LawComparisonRow[];
  buyingGuides: Guide[];
  latestGuides: Guide[];
}) {
  const copy = homeEditorialContent;
  const heroLines = siteConfig.tagline.split(/(?<=\.)\s+/);

  return (
    <>
      <section id="home-hero" className="relative min-h-[100svh] bg-surface-ink text-white">
        <ScrollScale className="absolute inset-0 h-full">
          <div className="relative h-full min-h-[100svh]">
            <ContentImage
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              preset="hero"
              className="object-cover"
            />
          </div>
        </ScrollScale>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(28,27,23,0.62)_0%,rgba(28,27,23,0.18)_32%,rgba(28,27,23,0.28)_58%,rgba(28,27,23,0.88)_100%)]" />
        <Container className="relative flex min-h-[100svh] flex-col justify-end pb-12 pt-28 md:pb-16">
          <p className="text-meta text-white/80">Independent e-bike research</p>
          <h1 className="mt-4 max-w-6xl text-[clamp(3.4rem,7.6vw,7.25rem)] font-display font-semibold uppercase leading-[0.84] tracking-[-0.035em] text-white">
            {heroLines.map((line, index) => (
              <LineRise key={line} delay={index * 0.08}>
                {line}
              </LineRise>
            ))}
          </h1>
          <p className="mt-6 max-w-xl font-reading text-lg leading-relaxed text-white/85">{copy.heroLede}</p>
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/25 pt-5 text-meta text-white/75">
            <div>
              <dt className="sr-only">Models</dt>
              <dd>{modelCount > 0 ? `${modelCount} models` : "Models in research"}</dd>
            </div>
            <div>
              <dt className="sr-only">Brands</dt>
              <dd>{brandCount > 0 ? `${brandCount} brands` : "Brands in research"}</dd>
            </div>
            <div>
              <dt className="sr-only">Trails</dt>
              <dd>{trailCount} trails verified</dd>
            </div>
            <div>
              <dt className="sr-only">Laws</dt>
              <dd>{jurisdictionCount} jurisdictions</dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)]" aria-labelledby="half-decision">
        <Container className="grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-meta text-text-muted">Field note</p>
            <h2 id="half-decision" className="mt-4 text-display-xl text-text-primary">
              <LineRise>The bike</LineRise>
              <LineRise delay={0.06}>is only half</LineRise>
              <LineRise delay={0.12}>the decision.</LineRise>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <RouteDraw className="mb-4 h-6 w-40 text-brand-accent" />
            <p className="font-reading text-xl leading-snug text-text-primary">
              Speed, class, local laws, and trail rules determine where an e-bike actually fits.
            </p>
            <p className="mt-4 text-body-sm text-text-secondary">{copy.heroLede}</p>
          </div>
        </Container>
      </section>

      <section aria-label="Primary paths">
        <div className="grid md:grid-cols-3">
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className="group relative block min-h-[78vh] bg-surface-ink text-white">
              <ClipReveal className="absolute inset-0">
                <div className="editorial-media relative h-full min-h-[78vh]">
                  <ContentImage src={path.image.src} alt={path.image.alt} fill preset="halfWidth" className="object-cover" />
                </div>
              </ClipReveal>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,27,23,0.78)] via-[rgba(28,27,23,0.1)] to-transparent" />
              <div className="relative flex h-full min-h-[78vh] flex-col justify-end p-6 md:p-8">
                <p className="text-meta text-white/75">{path.note}</p>
                <p className="mt-2 font-display text-[clamp(2.5rem,4vw,4.25rem)] uppercase leading-[0.86]">{path.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <Container className="flex flex-wrap gap-x-6 gap-y-2 py-4 text-meta">
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
        </Container>
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)]" aria-labelledby="explore-ebikes">
        <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionIntro id="explore-ebikes" kicker="E-bikes" title="Explore e-bikes" lede={copy.exploreLede} />
            {modelCount === 0 ? (
              <p className="mt-6 text-body-sm text-text-secondary">
                No model profiles are public yet. The class table is the decision that has to come first.{" "}
                <Link href="/guides/ebike-classes-explained" className="link-editorial">
                  Read the class guide
                </Link>
                .
              </p>
            ) : (
              <p className="mt-6 text-body-sm text-text-secondary">
                <Link href="/ebikes" className="link-editorial">
                  {modelCount} model {modelCount === 1 ? "profile" : "profiles"}
                </Link>{" "}
                with sourced specifications.
              </p>
            )}
          </div>
          <div className="lg:col-span-8 lg:pt-16">
            <ClassReferenceTable />
          </div>
        </Container>
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)]" aria-labelledby="browse-brands">
        <Container className="py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionIntro id="browse-brands" kicker="Brands" title="Browse brands" lede={copy.brandsLede} />
            </div>
            <div className="lg:col-span-8">
              {brandCount === 0 ? (
                <p className="text-body-md text-text-secondary">
                  Brand pages are withheld until a manufacturer source is on file.{" "}
                  <Link href="/editorial-standards" className="link-editorial">
                    How verification works
                  </Link>
                  .
                </p>
              ) : (
                <ul>
                  {brands.map((brand, index) => {
                    const image = editorialImage(roleForBikeTypes(brand.categories), brand.name);
                    const categoryLine = brand.categories?.length
                      ? brand.categories.join(" · ")
                      : brand.suitedFor;
                    return (
                      <li key={brand.id} className="border-t border-[color-mix(in_srgb,var(--text-primary)_14%,transparent)]">
                        <Link href={`/brands/${brand.slug}`} className="group grid items-center gap-4 py-6 md:grid-cols-[4rem_1fr_auto]">
                          <span className="text-meta text-text-muted">{String(index + 1).padStart(2, "0")}</span>
                          <span>
                            <span className="block font-display text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.86] text-text-primary">
                              {brand.name}
                            </span>
                            {categoryLine ? (
                              <span className="mt-2 block max-w-xl text-body-sm text-text-secondary">{categoryLine}</span>
                            ) : null}
                          </span>
                          <span className="editorial-media relative hidden h-24 w-36 md:block">
                            <ContentImage src={image.src} alt="" preset="cardGrid" fill className="object-cover" />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
              {brandCount > 0 ? (
                <p className="mt-4 text-body-sm">
                  <Link href="/brands" className="link-editorial">
                    All {brandCount} {brandCount === 1 ? "brand" : "brands"}
                  </Link>
                </p>
              ) : null}
              <p className="mt-6 text-body-sm text-text-muted">
                {guideCount} rider guides remain available while the catalog is built, including class, maintenance, and local riding.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)]" aria-labelledby="buying-guides">
        <Container className="grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <SectionIntro id="buying-guides" kicker="Buying guides" title="Buying guides" lede={copy.buyingLede} />
          </div>
          <ul className="md:col-span-7 md:col-start-6">
            {buyingGuides.map((guide) => (
              <li key={guide.id} className="border-t border-[color-mix(in_srgb,var(--text-primary)_14%,transparent)]">
                <Link href={`/guides/${guide.slug}`} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="font-display text-3xl uppercase leading-none text-text-primary">{guide.title}</span>
                  <span className="text-meta text-text-muted">Rider guide · {formatDate(guide.publishedAt)}</span>
                </Link>
              </li>
            ))}
            <li className="border-y border-[color-mix(in_srgb,var(--text-primary)_14%,transparent)]">
              <Link href="/guides/ebike-classes-explained" className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-display text-3xl uppercase leading-none text-text-primary">E-bike classes explained</span>
                <span className="text-meta text-text-muted">Decide the class first</span>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      <section className="border-b border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)] bg-surface-sunken" aria-labelledby="why-trust">
        <Container className="py-20 md:py-28">
          <SectionIntro id="why-trust" kicker="Method" title="Why trust eBikeQuest" lede={copy.methodLede} />
          <ol className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {[
              ["Primary sources", "Trail policies, statutes, and manufacturer documents are cited. Ambiguous rules stay ambiguous."],
              ["Class before catalog", "A model is not recommended into a place its class cannot ride."],
              ["No borrowed reviews", "We do not copy retailer ratings, review counts, or customer quotes."],
              ["Testing is literal", "hands-on tested stays false until there is a real ride or measurement."],
            ].map(([title, body], index) => (
              <li key={title} className="border-t border-[color-mix(in_srgb,var(--text-primary)_18%,transparent)] pt-5">
                <p className="text-meta text-text-muted">0{index + 1}</p>
                <h3 className="mt-2 font-display text-3xl uppercase text-text-primary">{title}</h3>
                <p className="mt-3 max-w-md font-reading text-text-secondary">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm">
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

      <section className="border-b border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)]" aria-labelledby="safety-class">
        <Container className="grid items-end gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionIntro id="safety-class" kicker="Safety" title="Safety and e-bike classification" lede={copy.safetyLede} />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <EditorialImage
              src={editorialImage("drivetrain").src}
              alt={editorialImage("drivetrain").alt}
              caption="Mechanical atmosphere. Not a measurement of a listed model."
            />
            <p className="mt-6 font-reading text-lg leading-relaxed text-text-secondary">
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

      <section className="border-b border-[color-mix(in_srgb,var(--text-primary)_12%,transparent)]" aria-labelledby="trails-laws">
        <Container className="py-20 md:py-28">
          <SectionIntro id="trails-laws" kicker="Where you can ride" title="Trails and laws" lede={copy.rideLede} />
          <div className="mt-12 grid gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl uppercase text-text-primary">Laws</h3>
                <Link href="/laws" className="text-meta link-editorial">
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
                          <Link href={`/laws/${row.jurisdiction}`} className="link-editorial normal-case tracking-normal">
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
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl uppercase text-text-primary">Trails</h3>
                <Link href="/trails" className="text-meta link-editorial">
                  All trails
                </Link>
              </div>
              <ul>
                {featuredTrails.map((trail) => (
                  <li key={trail.id} className="border-t border-[color-mix(in_srgb,var(--text-primary)_14%,transparent)]">
                    <Link
                      href={`/trails/${trail.jurisdiction}/${trail.slug}`}
                      className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <span className="text-text-primary">{trail.title}</span>
                      <span className="text-meta text-text-muted">
                        {getJurisdictionName(trail.jurisdiction)}
                        {trail.stats.distanceMiles ? ` / ${trail.stats.distanceMiles} mi` : ""}
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
        <Container className="py-20 md:py-28">
          <SectionIntro id="latest-research" kicker="Library" title="Latest useful research" lede={copy.latestLede} />
          <ol className="mt-10 max-w-3xl">
            {latestGuides.map((guide, index) => (
              <li key={guide.id} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-[color-mix(in_srgb,var(--text-primary)_14%,transparent)] py-6">
                <span className="text-meta text-text-muted">0{index + 1}</span>
                <div>
                  <p className="text-meta text-text-muted">
                    {GUIDE_CATEGORY_LABELS[guide.category]} / {formatDate(guide.updatedAt || guide.publishedAt)}
                  </p>
                  <Link href={`/guides/${guide.slug}`} className="mt-2 block font-display text-4xl uppercase leading-[0.9] text-text-primary">
                    {guide.title}
                  </Link>
                  <p className="mt-3 font-reading text-text-secondary">{guide.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            <Link href="/guides" className="link-editorial">
              All guides
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
