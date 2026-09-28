import type { EbikeModel } from "@/types/commerce";
import { qlifeModels } from "./models/qlife";
import { yozmaModels } from "./models/yozma";

/**
 * Published model records. A model is added only when its own spec sheet
 * is specific enough for a page. handsOnTested stays false.
 */
export const ebikeModels: EbikeModel[] = [...qlifeModels, ...yozmaModels];
