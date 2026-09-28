import type { Brand } from "@/types/commerce";
import { qlife } from "./brands/qlife";
import { wallke } from "./brands/wallke";
import { yozma } from "./brands/yozma";

/** Published brand records. A brand stays out of this list until its sources pass the publication gate. */
export const brands: Brand[] = [qlife, yozma, wallke];
