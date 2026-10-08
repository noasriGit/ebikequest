import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { getComparisons, isCompareHubIndexable } from "@/lib/content/commerce";
import { buildPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  const indexable = await isCompareHubIndexable();
  return buildPageMetadata({
    title: "E-Bike Comparisons",
    description:
      "Side-by-side e-bike comparisons published only when two or more verified models share sourced attributes.",
    path: "/compare",
    noIndex: !indexable,
    follow: true,
  });
}

export default async function ComparePage() {
  const comparisons = await getComparisons();

  return (
    <>
      <PageHero
        kicker="Compare"
        title="Comparisons"
        description="A comparison is published when at least two model profiles can be lined up on the same sourced attributes. We do not compare bikes we have not researched."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Compare" },
        ]}
      />
      <Container className="py-10 md:py-14">
        {comparisons.length === 0 ? (
          <p className="max-w-2xl text-body-md text-text-secondary">
            No comparisons are public yet.{" "}
            <Link href="/ebikes" className="link-editorial">
              E-bike research
            </Link>{" "}
            and{" "}
            <Link href="/guides/ebike-classes-explained" className="link-editorial">
              class rules
            </Link>{" "}
            are the useful starting points.
          </p>
        ) : (
          <ul className="max-w-3xl border-t border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)]">
            {comparisons.map((comparison) => (
              <li key={comparison.id} className="border-b border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] py-4">
                <Link href={`/compare/${comparison.slug}`} className="font-display text-3xl uppercase leading-none text-text-primary">
                  {comparison.title}
                </Link>
                <p className="mt-1 text-body-sm text-text-secondary">{comparison.description}</p>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
