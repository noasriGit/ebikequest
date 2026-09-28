import fs from "node:fs";
import path from "node:path";
import { AFFILIATE_LINK_REL } from "../lib/affiliate/constants";
import { brands, buyingGuides, comparisons, ebikeModels } from "../content/commerce";
import { assertPublicationFixtures } from "../lib/commerce/publication-fixtures";
import {
  getBrandPublicationIssues,
  getBuyingGuidePublicationIssues,
  getComparisonPublicationIssues,
  getModelPublicationIssues,
} from "../lib/commerce/publish";

const root = path.join(process.cwd());
const gearDirs = [
  path.join(root, "content", "gear"),
  path.join(root, "content", "products"),
  path.join(root, "content", "commerce"),
];

let hasErrors = false;

function error(message: string) {
  hasErrors = true;
  console.error(`ERROR: ${message}`);
}

function warn(message: string) {
  console.warn(`WARN: ${message}`);
}

function collectContentFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectContentFiles(fullPath));
    } else if (/\.(ts|tsx|yaml|yml|json|mdx?)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

const SCRAPED_DATA_PATTERNS: { pattern: RegExp; message: string }[] = [
  { pattern: /\b(starRating|reviewCount|customerReviews)\s*:/i, message: "hardcoded Amazon-style rating or review count field" },
  { pattern: /\bamazonPrice\s*:/i, message: "hardcoded Amazon price field" },
  { pattern: /"\$[0-9]+(\.[0-9]{2})?"/, message: "hardcoded dollar price string (verify this is not scraped retailer pricing)" },
  { pattern: /\b(rating|reviews)\s*:\s*[0-9]/i, message: "hardcoded rating or review count" },
];

const TESTING_CLAIM_PATTERNS = [
  /\bhands-on\b/i,
  /\bwe tested\b/i,
  /\bour review\b/i,
  /\blab tested\b/i,
  /\btested this (bike|e-bike|model|product)\b/i,
];

function validateAffiliateLinksInFile(relativePath: string, content: string) {
  if (!content.includes("isAffiliate")) return;

  const affiliateTrue = /isAffiliate\s*:\s*true/.test(content);
  if (affiliateTrue && !content.includes("handsOnTested") && !content.includes("AffiliateDisclosure")) {
    warn(`${relativePath}: affiliate content should document disclosure usage or link support near publish time`);
  }

  if (affiliateTrue && content.includes('rel="noopener noreferrer"') && !content.includes("sponsored")) {
    error(`${relativePath}: affiliate links must use rel="${AFFILIATE_LINK_REL}"`);
  }
}

function validateTestingClaims(relativePath: string, content: string) {
  const claimsTesting = TESTING_CLAIM_PATTERNS.some((pattern) => pattern.test(content));
  const hasTestingField = /handsOnTested\s*:\s*true/.test(content);

  if (claimsTesting && !hasTestingField) {
    error(
      `${relativePath}: content appears to claim testing or hands-on review without handsOnTested: true`,
    );
  }
}

function validateScrapedRetailerData(relativePath: string, content: string) {
  for (const { pattern, message } of SCRAPED_DATA_PATTERNS) {
    if (pattern.test(content)) {
      warn(`${relativePath}: possible ${message}`);
    }
  }

  if (/customer review/i.test(content) && /"[^"]{80,}"/.test(content)) {
    warn(`${relativePath}: long quoted text may be copied customer review content`);
  }
}

function validateGearContent() {
  const files = gearDirs.flatMap((dir) => collectContentFiles(dir));

  if (files.length === 0) {
    console.log("No gear/product content files yet — affiliate safeguards ready for future content.");
    return;
  }

  for (const filePath of files) {
    const relativePath = path.relative(root, filePath);
    const content = fs.readFileSync(filePath, "utf8");

    validateAffiliateLinksInFile(relativePath, content);
    validateTestingClaims(relativePath, content);
    validateScrapedRetailerData(relativePath, content);
  }
}

function isCloakedHref(href: string): boolean {
  if (href.startsWith("/")) return true;
  try {
    const url = new URL(href);
    const host = url.hostname.toLowerCase();
    if (host === "amzn.to" || host.endsWith(".amzn.to")) return true;
    if (url.pathname.startsWith("/go/") || url.pathname.startsWith("/out/")) return true;
    return false;
  } catch {
    return true;
  }
}

function validateCommerceRecords() {
  for (const model of ebikeModels) {
    if (model.handsOnTested && model.researchStatus !== "hands-on-tested") {
      error(`${model.id}: handsOnTested is true without researchStatus "hands-on-tested"`);
    }
    if (!model.handsOnTested && model.researchStatus === "hands-on-tested") {
      error(`${model.id}: researchStatus is hands-on-tested while handsOnTested is false`);
    }
    const links = [...(model.retailerLinks ?? [])];
    if (model.amazonLink) links.push(model.amazonLink);
    for (const link of links) {
      if (isCloakedHref(link.href)) {
        error(`${model.id}: retailer link must be a direct outbound URL (${link.href})`);
      }
      if (link.isAffiliate && !link.href.startsWith("https://")) {
        error(`${model.id}: affiliate links must be absolute https URLs`);
      }
    }
    if (model.imagePath && /amazon|amzn\.to/i.test(model.imagePath)) {
      error(`${model.id}: do not store Amazon-hosted product images`);
    }
  }

  for (const guide of [...buyingGuides, ...comparisons]) {
    if (guide.handsOnTested && guide.researchStatus !== "hands-on-tested") {
      error(`${guide.id}: hands-on claim without researchStatus "hands-on-tested"`);
    }
  }

  for (const brand of brands) {
    if (brand.website && isCloakedHref(brand.website)) {
      error(`${brand.id}: brand website must be a direct URL`);
    }
    for (const link of brand.retailerLinks ?? []) {
      if (isCloakedHref(link.href)) {
        error(`${brand.id}: retailer link must be a direct outbound URL (${link.href})`);
      }
      if (link.isAffiliate && !link.href.startsWith("https://")) {
        error(`${brand.id}: affiliate links must be absolute https URLs`);
      }
    }
  }
}

function reportIssues(id: string, issues: string[]) {
  if (issues.length === 0) return;
  error(`${id}:\n- ${issues.join("\n- ")}`);
}

function validatePublicationGates() {
  for (const brand of brands) {
    if (brand.status !== "published" || brand.seo?.noIndex) continue;
    reportIssues(brand.id, getBrandPublicationIssues(brand));
  }

  for (const model of ebikeModels) {
    if (model.status !== "published" || model.seo?.noIndex) continue;
    reportIssues(model.id, getModelPublicationIssues(model, brands));
  }

  for (const guide of buyingGuides) {
    if (guide.status !== "published" || guide.seo?.noIndex) continue;
    reportIssues(guide.id, getBuyingGuidePublicationIssues(guide));
  }

  for (const comparison of comparisons) {
    if (comparison.status !== "published" || comparison.seo?.noIndex) continue;
    reportIssues(comparison.id, getComparisonPublicationIssues(comparison, ebikeModels, brands));
  }

  for (const message of assertPublicationFixtures()) {
    error(message);
  }
}

function validateAffiliateInfrastructure() {
  const disclosurePage = path.join(root, "app", "(site)", "affiliate-disclosure", "page.tsx");
  if (!fs.existsSync(disclosurePage)) {
    error("Missing /affiliate-disclosure page");
  }

  const outboundLink = path.join(root, "components", "affiliate", "OutboundRetailerLink.tsx");
  if (!fs.existsSync(outboundLink)) {
    error("Missing OutboundRetailerLink component");
  } else {
    const source = fs.readFileSync(outboundLink, "utf8");
    if (!source.includes("sponsored noopener noreferrer")) {
      error("OutboundRetailerLink must support rel=\"sponsored noopener noreferrer\" for affiliate links");
    }
  }
}

validateAffiliateInfrastructure();
validateGearContent();
validateCommerceRecords();
validatePublicationGates();

if (hasErrors) {
  console.error("\nAffiliate validation failed.");
  process.exit(1);
}

console.log("Affiliate validation passed.");
