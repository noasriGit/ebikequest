import type { BikeType } from "@/types/commerce";

export type EditorialRole =
  | "landscape"
  | "rider"
  | "commuter"
  | "trail"
  | "mechanical"
  | "drivetrain"
  | "texture"
  | "surface"
  | "map"
  | "atmosphere";

export interface EditorialImage {
  src: string;
  alt: string;
}

/** Licensed stand-ins. None of these are a specific eBikeQuest model. */
export const editorialImages: Record<EditorialRole, EditorialImage> = {
  landscape: {
    src: "/images/editorial/urban.jpg",
    alt: "Loaded bicycle overlooking a canyon at dusk. Not a listed e-bike model.",
  },
  rider: {
    src: "/images/editorial/road-rider.jpg",
    alt: "Two riders on road bicycles along a coastal road. Not listed e-bike models.",
  },
  commuter: {
    src: "/images/editorial/singletrack.jpg",
    alt: "Black city bicycle against a concrete wall. Not a listed e-bike model.",
  },
  trail: {
    src: "/images/editorial/forest.jpg",
    alt: "Sunlit forest path, representative trail environment rather than a specific listed trail.",
  },
  mechanical: {
    src: "/images/editorial/workshop.jpg",
    alt: "Gravel bicycle showing a disc brake rotor and rear drivetrain. Not a listed e-bike model.",
  },
  drivetrain: {
    src: "/images/editorial/component.jpg",
    alt: "Road bicycle showing the chain, cassette, and crank. Not a listed e-bike model.",
  },
  texture: {
    src: "/images/editorial/wheel.jpg",
    alt: "Conventional city bicycle against a dark wall. Not an e-bike and not a listed model.",
  },
  surface: {
    src: "/images/trails/_placeholders/cover.jpg",
    alt: "Paved multi-use trail with mile marker on the W&OD Trail",
  },
  map: {
    src: "/images/marketing/hubs/trails.jpg",
    alt: "Great Allegheny Passage bike path overlooking the Youghiogheny River gorge",
  },
  atmosphere: {
    src: "/images/hero.jpg",
    alt: "Cyclist on a paved path through trees, representative of Mid-Atlantic trail riding",
  },
};

const roleByBikeType: Partial<Record<BikeType, EditorialRole>> = {
  commuter: "commuter",
  city: "commuter",
  cargo: "commuter",
  folding: "commuter",
  cruiser: "commuter",
  mountain: "trail",
  gravel: "trail",
  road: "rider",
  hybrid: "atmosphere",
  other: "atmosphere",
};

export function roleForBikeTypes(types?: BikeType[]): EditorialRole {
  if (!types?.length) return "atmosphere";
  for (const type of types) {
    const role = roleByBikeType[type];
    if (role) return role;
  }
  return "atmosphere";
}

/** Atmosphere beside a research subject. Never claims the photo is that product. */
export function editorialImage(role: EditorialRole, subject?: string): EditorialImage {
  const image = editorialImages[role];
  if (!subject) return image;
  return {
    src: image.src,
    alt: `${image.alt} Shown with ${subject} as atmosphere, not as a photograph of that product.`,
  };
}

const rotation: EditorialRole[] = ["landscape", "mechanical", "trail", "drivetrain", "rider", "surface"];

export function editorialImageAt(index: number, subject?: string): EditorialImage {
  const role = rotation[index % rotation.length] ?? "atmosphere";
  return editorialImage(role, subject);
}
