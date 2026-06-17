import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { imageAssets } from "@/content/images/manifest";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Image Credits",
  description: "Photo attributions and licenses for images used on eBikeQuest.",
  path: "/image-credits",
});

export default function ImageCreditsPage() {
  const sorted = [...imageAssets].sort((a, b) => a.id.localeCompare(b.id));

  return (
    <>
      <PageHero
        title="Image Credits"
        description="Photo attributions and licenses for images used across eBikeQuest."
        kicker="Attribution"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Image Credits" }]}
      />
      <Container className="max-w-3xl py-10">
        <p className="prose-editorial text-body-md text-text-secondary">
          eBikeQuest uses copyright-free and Creative Commons images. We self-host all photos below.
          Attribution is provided where required by license.
        </p>

        <ul className="mt-10 space-y-6">
          {sorted.map((asset) => (
            <li
              key={asset.id}
              className="rounded-[var(--radius-md)] border border-[color-mix(in_srgb,var(--text-muted)_18%,transparent)] bg-surface-raised p-5 shadow-[var(--shadow-xs)]"
            >
              <p className="font-display text-lg text-text-primary">{asset.alt}</p>
              <dl className="mt-3 space-y-1 text-sm text-text-secondary">
                <div>
                  <dt className="inline font-medium text-text-primary">File: </dt>
                  <dd className="inline font-mono text-text-muted">{asset.localPath}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-text-primary">License: </dt>
                  <dd className="inline">{asset.license}</dd>
                </div>
                {asset.author ? (
                  <div>
                    <dt className="inline font-medium text-text-primary">Author: </dt>
                    <dd className="inline">{asset.author}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className="inline font-medium text-text-primary">Source: </dt>
                  <dd className="inline">
                    <a
                      href={asset.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-editorial"
                    >
                      {asset.sourceSite === "wikimedia" ? "Wikimedia Commons" : asset.sourceSite}
                    </a>
                  </dd>
                </div>
                {asset.notes ? (
                  <div>
                    <dt className="inline font-medium text-text-primary">Note: </dt>
                    <dd className="inline">{asset.notes}</dd>
                  </div>
                ) : null}
              </dl>
            </li>
          ))}
        </ul>

        <Link href="/" className="mt-10 inline-block link-editorial">
          ← Back to home
        </Link>
      </Container>
    </>
  );
}
