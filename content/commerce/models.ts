import type { EbikeModel } from "@/types/commerce";

/**
 * Published model records only. handsOnTested must be false unless the
 * bike was actually ridden or measured. Every factual spec should point
 * at a source id. Do not add placeholder models.
 */
export const ebikeModels: EbikeModel[] = [];
