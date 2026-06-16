import type { Repair, RepairFilter } from "@/types/repair";

export async function getRepairs(_filter?: RepairFilter): Promise<Repair[]> {
  void _filter;
  return [];
}

export async function getRepair(
  _jurisdiction: string,
  _slug: string,
): Promise<Repair | null> {
  void _jurisdiction;
  void _slug;
  return null;
}
