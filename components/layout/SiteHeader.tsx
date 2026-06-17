import { SiteHeaderClient } from "@/components/layout/SiteHeaderClient";
import { SiteSearch } from "@/components/navigation/SiteSearch";

export async function SiteHeader() {
  return <SiteHeaderClient searchSlot={<SiteSearch />} />;
}
