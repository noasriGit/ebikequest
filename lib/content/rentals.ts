import type { Rental, RentalFilter } from "@/types/rental";

export async function getRentals(_filter?: RentalFilter): Promise<Rental[]> {
  void _filter;
  return [];
}

export async function getRental(
  _jurisdiction: string,
  _slug: string,
): Promise<Rental | null> {
  void _jurisdiction;
  void _slug;
  return null;
}
