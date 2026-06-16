import type { Shop, ShopFilter } from "@/types/shop";

export async function getShops(_filter?: ShopFilter): Promise<Shop[]> {
  void _filter;
  return [];
}

export async function getShop(
  _jurisdiction: string,
  _slug: string,
): Promise<Shop | null> {
  void _jurisdiction;
  void _slug;
  return null;
}
