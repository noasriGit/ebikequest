import { virginiaTrails } from "./virginia";
import { marylandTrails } from "./maryland";
import { washingtonDcTrails } from "./washington-dc";
import type { Trail } from "@/types/trail";

export const allTrails: Trail[] = [
  ...virginiaTrails,
  ...marylandTrails,
  ...washingtonDcTrails,
];

export { virginiaTrails, marylandTrails, washingtonDcTrails };
