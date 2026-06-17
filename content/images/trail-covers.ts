import { getImageAssetByPath } from "./manifest";

function cover(localPath: string) {
  const asset = getImageAssetByPath(localPath);
  if (!asset) throw new Error(`Missing manifest entry for ${localPath}`);
  return { src: asset.localPath, alt: asset.alt };
}

/** Cover image refs keyed by trail slug */
export const trailCoverImages = {
  "washington-and-old-dominion-trail": cover(
    "/images/trails/virginia/washington-and-old-dominion-trail/cover.jpg",
  ),
  "mount-vernon-trail": cover("/images/trails/virginia/mount-vernon-trail/cover.jpg"),
  "powhatan-state-park-trails": cover(
    "/images/trails/virginia/powhatan-state-park-trails/cover.jpg",
  ),
  "high-bridge-trail": cover("/images/trails/virginia/high-bridge-trail/cover.jpg"),
  "new-river-trail-state-park": cover(
    "/images/trails/virginia/new-river-trail-state-park/cover.jpg",
  ),
  "james-river-park-belle-isle": cover(
    "/images/trails/virginia/james-river-park-belle-isle/cover.jpg",
  ),
  "shenandoah-valley-rail-trail": cover(
    "/images/trails/virginia/shenandoah-valley-rail-trail/cover.jpg",
  ),
  "first-landing-state-park-trails": cover(
    "/images/trails/virginia/first-landing-state-park-trails/cover.jpg",
  ),
  "baltimore-and-ohio-trail": cover("/images/trails/maryland/baltimore-and-ohio-trail/cover.jpg"),
  "capital-crescent-trail": cover("/images/trails/maryland/capital-crescent-trail/cover.jpg"),
  "northeast-branch-trail": cover("/images/trails/maryland/northeast-branch-trail/cover.jpg"),
  "great-allegheny-passage-maryland": cover(
    "/images/trails/maryland/great-allegheny-passage-maryland/cover.jpg",
  ),
  "patapsco-valley-state-park-trails": cover(
    "/images/trails/maryland/patapsco-valley-state-park-trails/cover.jpg",
  ),
  "northern-central-trail": cover("/images/trails/maryland/northern-central-trail/cover.jpg"),
  "indian-head-rail-trail": cover("/images/trails/maryland/indian-head-rail-trail/cover.jpg"),
  "assateague-island-trails": cover("/images/trails/maryland/assateague-island-trails/cover.jpg"),
  "c-and-o-canal-towpath-dc": cover(
    "/images/trails/washington-dc/c-and-o-canal-towpath-dc/cover.jpg",
  ),
  "rock-creek-trail": cover("/images/trails/washington-dc/rock-creek-trail/cover.jpg"),
  "anacostia-riverwalk-trail": cover(
    "/images/trails/washington-dc/anacostia-riverwalk-trail/cover.jpg",
  ),
  "capital-crescent-trail-dc": cover(
    "/images/trails/washington-dc/capital-crescent-trail-dc/cover.jpg",
  ),
  "national-mall-connector-routes": cover(
    "/images/trails/washington-dc/national-mall-connector-routes/cover.jpg",
  ),
  "fort-circle-trail-network": cover(
    "/images/trails/washington-dc/fort-circle-trail-network/cover.jpg",
  ),
} as const;

export type TrailCoverSlug = keyof typeof trailCoverImages;

export function getTrailCoverRef(slug: string) {
  return trailCoverImages[slug as TrailCoverSlug];
}
