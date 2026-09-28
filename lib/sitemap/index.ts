export type {
  SitemapContentType,
  SitemapEntry,
  SitemapGroup,
  SitemapPageData,
  SitemapSection,
  SitemapSubsection,
} from "./types";

export { STATIC_SITEMAP_PAGES } from "./static-pages";
export {
  buildSitemapEntries,
  buildPublishedSitemapGroups,
  getFeaturedEntries,
  getRecentEntries,
  getGuideCategoryLabel,
  getGuideCategoryOrder,
} from "./build";
export { buildSitemapPageData } from "./sections";
export {
  assignSitemapGroup,
  buildSitemapIndexXml,
  buildUrlSetXml,
  canonicalLoc,
  groupSitemapEntries,
  resolveLastMod,
  SITEMAP_GROUP_ORDER,
} from "./xml";
export type { SitemapGroupDocument } from "./xml";
