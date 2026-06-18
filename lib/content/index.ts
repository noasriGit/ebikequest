import type { ContentRepository } from "./repository";
import * as trails from "./trails";
import * as guides from "./guides";
import * as laws from "./laws";
import * as shops from "./shops";
import * as rentals from "./rentals";
import * as repairs from "./repairs";
import { getPublicJurisdictions } from "./jurisdictions";

class FileContentRepository implements ContentRepository {
  getTrails = trails.getTrails;
  getTrail = trails.getTrail;
  getGuides = guides.getGuides;
  getGuide = guides.getGuide;
  getLaw = laws.getLaw;
  getNationalLawHub = laws.getNationalLawHub;
  getPublicJurisdictions = getPublicJurisdictions;
  getShops = shops.getShops;
  getShop = shops.getShop;
  getRentals = rentals.getRentals;
  getRental = rentals.getRental;
  getRepairs = repairs.getRepairs;
  getRepair = repairs.getRepair;
}

export const contentRepository: ContentRepository = new FileContentRepository();

export {
  getTrails,
  getTrail,
  getFeaturedTrails,
  getTrailStaticParams,
  getJurisdictionTrailParams,
} from "./trails";
export {
  getGuides,
  getGuide,
  getGuideStaticParams,
  GUIDE_CATEGORY_LABELS,
} from "./guides";
export {
  getLaw,
  getNationalLawHub,
  getLawStaticParams,
  getPublishedLaws,
} from "./laws";
export {
  getPublicJurisdictions,
  getJurisdiction,
  isPublicJurisdiction,
  assertPublicJurisdiction,
  getJurisdictionName,
} from "./jurisdictions";
export {
  getHub,
  getJurisdictionTrailHub,
  getAllHubs,
} from "./hubs";
export {
  getAboutPageContent,
  getSuggestTrailPageContent,
  getHomeEditorialContent,
} from "./static";
