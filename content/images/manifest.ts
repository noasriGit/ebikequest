export type ImageSourceSite = "wikimedia" | "nps" | "unsplash" | "pexels" | "other";

export interface ImageAsset {
  id: string;
  localPath: string;
  downloadUrl: string;
  sourceUrl: string;
  sourceSite: ImageSourceSite;
  license: string;
  author?: string;
  alt: string;
  notes?: string;
}

/** Approved source policy — see plan Phase 1 */
export const IMAGE_SOURCE_POLICY = {
  priority: ["wikimedia", "nps", "unsplash", "pexels"] as const,
  rejected: ["google-images", "pinterest", "alltrails-user", "flickr-without-cc"],
} as const;

export const imageAssets: ImageAsset[] = [
  // Marketing
  {
    id: "marketing-hero",
    localPath: "/images/hero.jpg",
    downloadUrl:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=2400&q=85&auto=format&fit=crop",
    sourceUrl: "https://unsplash.com/photos/person-riding-bicycle-on-path-during-daytime-384716",
    sourceSite: "unsplash",
    license: "Unsplash License",
    author: "Kristina Deliu",
    alt: "Cyclist on a paved path through trees, representative of Mid-Atlantic trail riding",
    notes: "Generic hero; not a specific listed trail",
  },
  {
    id: "marketing-trails-hub",
    localPath: "/images/marketing/hubs/trails.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Youghiogheny_River_gorge_from_great_allegheny_passage.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Youghiogheny_River_gorge_from_great_allegheny_passage.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 4.0",
    author: "Jacob Brown",
    alt: "Great Allegheny Passage bike path overlooking the Youghiogheny River gorge",
    notes: "Trails directory hub banner",
  },

  // Jurisdiction fallbacks
  {
    id: "jurisdiction-virginia",
    localPath: "/images/trails/_placeholders/virginia.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Biking_New_River_Trail_%2827545299335%29.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Biking_New_River_Trail_(27545299335).jpg",
    sourceSite: "wikimedia",
    license: "CC BY 2.0",
    author: "Virginia State Parks",
    alt: "Cyclists on the New River Trail in southwestern Virginia",
  },
  {
    id: "jurisdiction-maryland",
    localPath: "/images/trails/_placeholders/maryland.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Patapsco_Valley_State_Park.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Patapsco_Valley_State_Park.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Acroterion",
    alt: "Wooded valley scenery in Patapsco Valley State Park, Maryland",
  },
  {
    id: "jurisdiction-washington-dc",
    localPath: "/images/trails/_placeholders/washington-dc.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/C%26O_Canal_-_Georgetown.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:C%26O_Canal_-_Georgetown.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Aude",
    alt: "C&O Canal towpath in Georgetown, Washington DC",
  },

  // Generic fallbacks
  {
    id: "fallback-cover",
    localPath: "/images/trails/_placeholders/cover.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/16_Mile_Marker_on_W%26OD_Trail_-_panoramio.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:16_Mile_Marker_on_W%26OD_Trail_-_panoramio.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "dvdmon",
    alt: "Paved multi-use trail with mile marker on the W&OD Trail",
    notes: "Generic cover fallback only",
  },
  {
    id: "fallback-gallery",
    localPath: "/images/trails/_placeholders/gallery.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/High_Bridge_at_High_Bridge_Trail_State_Park.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:High_Bridge_at_High_Bridge_Trail_State_Park.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Ben Schumin",
    alt: "High Bridge Trail State Park trestle crossing in Virginia",
    notes: "Generic gallery fallback only",
  },

  // Virginia trails
  {
    id: "trail-va-w-and-o-cover",
    localPath: "/images/trails/virginia/washington-and-old-dominion-trail/cover.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/66/W%26OD_Trail_-_An_overlook_of_the_Luck_Stone_Quarry_1.JPG",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:W%26OD_Trail_-_An_overlook_of_the_Luck_Stone_Quarry_1.JPG",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Billy Hathorn",
    alt: "Washington and Old Dominion Trail overlook near Luck Stone Quarry, Northern Virginia",
  },
  {
    id: "trail-va-mount-vernon-cover",
    localPath: "/images/trails/virginia/mount-vernon-trail/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/MountVernonTrail_GravellyPoint.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:MountVernonTrail_GravellyPoint.jpg",
    sourceSite: "wikimedia",
    license: "Public Domain",
    author: "U.S. National Park Service",
    alt: "Mount Vernon Trail at Gravelly Point along the Potomac River, Virginia",
  },
  {
    id: "trail-va-powhatan-cover",
    localPath: "/images/trails/virginia/powhatan-state-park-trails/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d1/New_River_Trail_%2815821330296%29.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:New_River_Trail_(15821330296).jpg",
    sourceSite: "wikimedia",
    license: "CC BY 2.0",
    author: "Virginia State Parks",
    alt: "River corridor trail scenery representative of Virginia state park riding near the James River region",
    notes: "Represents Virginia river-corridor park trails; not Powhatan State Park specifically",
  },
  {
    id: "trail-va-high-bridge-cover",
    localPath: "/images/trails/virginia/high-bridge-trail/cover.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/High_Bridge_at_High_Bridge_Trail_State_Park.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:High_Bridge_at_High_Bridge_Trail_State_Park.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Ben Schumin",
    alt: "High Bridge over the Appomattox River on High Bridge Trail State Park, Virginia",
  },
  {
    id: "trail-va-new-river-cover",
    localPath: "/images/trails/virginia/new-river-trail-state-park/cover.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Biking_New_River_Trail_%2827545299335%29.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Biking_New_River_Trail_(27545299335).jpg",
    sourceSite: "wikimedia",
    license: "CC BY 2.0",
    author: "Virginia State Parks",
    alt: "Cyclists on the New River Trail State Park, Virginia",
  },
  {
    id: "trail-va-belle-isle-cover",
    localPath: "/images/trails/virginia/james-river-park-belle-isle/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Mount_Vernon_Trail.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mount_Vernon_Trail.jpg",
    sourceSite: "wikimedia",
    license: "CC BY 2.0",
    author: "Timothy Wildey",
    alt: "Paved Potomac riverfront multi-use trail in the Northern Virginia and DC river corridor",
    notes: "Represents urban riverfront trail riding near Richmond's James River Park context",
  },
  {
    id: "trail-va-shenandoah-valley-cover",
    localPath: "/images/trails/virginia/shenandoah-valley-rail-trail/cover.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/16_Mile_Marker_on_W%26OD_Trail_-_panoramio.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:16_Mile_Marker_on_W%26OD_Trail_-_panoramio.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "dvdmon",
    alt: "Paved rail-trail with mile marker on a Virginia multi-use path",
    notes: "Representative Virginia rail-trail segment",
  },
  {
    id: "trail-va-first-landing-cover",
    localPath: "/images/trails/virginia/first-landing-state-park-trails/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/Assateague_Island_Maryland.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Assateague_Island_Maryland.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Dough4872",
    alt: "Coastal dunes and maritime forest representative of Virginia Beach area park trails",
    notes: "Coastal Virginia proxy; not First Landing State Park specifically",
  },

  // Maryland trails
  {
    id: "trail-md-b-and-a-cover",
    localPath: "/images/trails/maryland/baltimore-and-ohio-trail/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Capital_Crescent_Trail_-_Bethesda.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Capital_Crescent_Trail_-_Bethesda.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Ben Schumin",
    alt: "Paved rail-trail through wooded corridor in the Maryland suburbs",
    notes: "Representative Maryland paved rail-trail; not B&A Trail specifically",
  },
  {
    id: "trail-md-capital-crescent-cover",
    localPath: "/images/trails/maryland/capital-crescent-trail/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Capital_Crescent_Trail_-_Bethesda.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Capital_Crescent_Trail_-_Bethesda.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Ben Schumin",
    alt: "Capital Crescent Trail in Bethesda, Maryland",
  },
  {
    id: "trail-md-northeast-branch-cover",
    localPath: "/images/trails/maryland/northeast-branch-trail/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Lake_Artemesia.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lake_Artemesia.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Ben Schumin",
    alt: "Lake Artemesia along the Anacostia Tributary Trail System in Prince George's County, Maryland",
  },
  {
    id: "trail-md-gap-cover",
    localPath: "/images/trails/maryland/great-allegheny-passage-maryland/cover.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/GAP_Brush_Tunnel_-_East_enterance_%2850213875813%29.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:GAP_Brush_Tunnel_-_East_enterance_(50213875813).jpg",
    sourceSite: "wikimedia",
    license: "CC BY 2.0",
    author: "daveynin",
    alt: "Great Allegheny Passage rail-trail entering Brush Tunnel near Mount Savage, Maryland",
  },
  {
    id: "trail-md-patapsco-cover",
    localPath: "/images/trails/maryland/patapsco-valley-state-park-trails/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/5/52/Patapsco_Valley_State_Park.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Patapsco_Valley_State_Park.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Acroterion",
    alt: "Patapsco Valley State Park near Baltimore, Maryland",
  },
  {
    id: "trail-md-ncr-cover",
    localPath: "/images/trails/maryland/northern-central-trail/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d1/New_River_Trail_%2815821330296%29.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:New_River_Trail_(15821330296).jpg",
    sourceSite: "wikimedia",
    license: "CC BY 2.0",
    author: "Virginia State Parks",
    alt: "Crushed-stone rail-trail corridor representative of the Northern Central Rail Trail surface",
    notes: "Representative rail-trail surface; not NCR Trail specifically",
  },
  {
    id: "trail-md-indian-head-cover",
    localPath: "/images/trails/maryland/indian-head-rail-trail/cover.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/GAP_Brush_Tunnel_-_East_enterance_%2850213875813%29.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:GAP_Brush_Tunnel_-_East_enterance_(50213875813).jpg",
    sourceSite: "wikimedia",
    license: "CC BY 2.0",
    author: "daveynin",
    alt: "Paved rail-trail entering a tunnel on a Maryland multi-use path",
    notes: "Representative Maryland rail-trail; not Indian Head Rail Trail specifically",
  },
  {
    id: "trail-md-assateague-cover",
    localPath: "/images/trails/maryland/assateague-island-trails/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/Assateague_Island_Maryland.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Assateague_Island_Maryland.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Dough4872",
    alt: "Assateague Island National Seashore dunes and maritime forest, Maryland",
  },

  // Washington DC trails
  {
    id: "trail-dc-c-and-o-cover",
    localPath: "/images/trails/washington-dc/c-and-o-canal-towpath-dc/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/C%26O_Canal_-_Georgetown.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:C%26O_Canal_-_Georgetown.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Aude",
    alt: "C&O Canal towpath in Georgetown, Washington DC",
  },
  {
    id: "trail-dc-rock-creek-cover",
    localPath: "/images/trails/washington-dc/rock-creek-trail/cover.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Western_Ridge_Trail_%2848377535372%29.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Western_Ridge_Trail_(48377535372).jpg",
    sourceSite: "wikimedia",
    license: "CC BY 2.0",
    author: "Katja Schulz",
    alt: "Western Ridge Trail in Rock Creek Park, Washington DC",
  },
  {
    id: "trail-dc-anacostia-cover",
    localPath: "/images/trails/washington-dc/anacostia-riverwalk-trail/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Lake_Artemesia.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lake_Artemesia.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Ben Schumin",
    alt: "Paved riverwalk-style trail along a lake in the DC metro area",
    notes: "Representative paved riverwalk; Anacostia Riverwalk-specific photo unavailable",
  },
  {
    id: "trail-dc-capital-crescent-cover",
    localPath: "/images/trails/washington-dc/capital-crescent-trail-dc/cover.jpg",
    downloadUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/C%26O_Canal_-_Georgetown.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:C%26O_Canal_-_Georgetown.jpg",
    sourceSite: "wikimedia",
    license: "CC BY-SA 3.0",
    author: "Aude",
    alt: "Georgetown waterfront trail corridor connecting to the Capital Crescent Trail, Washington DC",
  },
  {
    id: "trail-dc-national-mall-cover",
    localPath: "/images/trails/washington-dc/national-mall-connector-routes/cover.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Washington_Monument_from_Constitution_Gardens.jpg",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Washington_Monument_from_Constitution_Gardens.jpg",
    sourceSite: "wikimedia",
    license: "Public Domain",
    author: "U.S. National Park Service",
    alt: "Washington Monument and Constitution Gardens, a designated bike connector area in Washington DC",
  },
  {
    id: "trail-dc-fort-circle-cover",
    localPath: "/images/trails/washington-dc/fort-circle-trail-network/cover.jpg",
    downloadUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Western_Ridge_Trail_%2848377535372%29.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Western_Ridge_Trail_(48377535372).jpg",
    sourceSite: "wikimedia",
    license: "CC BY 2.0",
    author: "Katja Schulz",
    alt: "Wooded trail in Rock Creek Park representative of DC fort circle trail networks",
    notes: "Representative wooded DC park trail",
  },
];

const byLocalPath = new Map(imageAssets.map((a) => [a.localPath, a]));

export function getImageAssetByPath(localPath: string): ImageAsset | undefined {
  return byLocalPath.get(localPath);
}

export function getAttributionRequiredAssets(): ImageAsset[] {
  return imageAssets.filter(
    (a) =>
      a.license.includes("CC BY") ||
      a.license.includes("CC BY-SA") ||
      a.license.includes("Attribution"),
  );
}

export function getAllImageLocalPaths(): string[] {
  return imageAssets.map((a) => a.localPath);
}
