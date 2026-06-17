import { buildSearchIndex } from "@/lib/search/index";
import { SearchDialog } from "./SearchDialog";

export async function SiteSearch() {
  const documents = await buildSearchIndex();
  return <SearchDialog documents={documents} />;
}
