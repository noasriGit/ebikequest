import type { Brand } from "@/types/commerce";
import { dttzh } from "./brands/dttzh";
import { jasion } from "./brands/jasion";
import { meelod } from "./brands/meelod";
import { qlife } from "./brands/qlife";
import { ridstar } from "./brands/ridstar";
import { wallke } from "./brands/wallke";
import { wired } from "./brands/wired";
import { yozma } from "./brands/yozma";
import { yvy } from "./brands/yvy";

/** Published brand records. A brand stays out of this list until its sources pass the publication gate. */
export const brands: Brand[] = [dttzh, jasion, meelod, qlife, ridstar, wallke, wired, yozma, yvy];
