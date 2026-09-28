import type { EbikeModel } from "@/types/commerce";
import { qlifeModels } from "./models/qlife";
import { yozmaModels } from "./models/yozma";

/**
 * Public e-bike model records. A model is added only when its own spec sheet
 * is specific enough for a page and the bike belongs in the e-bike catalog.
 * handsOnTested stays false.
 */
export const ebikeModels: EbikeModel[] = [...qlifeModels];

/**
 * Kept for a later vehicle taxonomy. Not part of /ebikes.
 * Yozma's brand guide still publishes the lineup from manufacturer sources.
 */
export const withheldModelResearch: EbikeModel[] = [...yozmaModels];
