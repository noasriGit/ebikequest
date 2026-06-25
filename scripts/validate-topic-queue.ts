import fs from "node:fs";
import path from "node:path";
import { guides } from "../content/guides";
import { allTrails } from "../content/trails";
import {
  GUIDE_CATEGORIES,
  PRIMARY_URL_OWNER_LITERALS,
  SEARCH_INTENTS,
  TOPIC_JURISDICTIONS,
  TOPIC_STATUSES,
  type PublishedKeywordsFile,
  type TopicQueueFile,
  type TopicQueueItem,
  type TopicStatus,
} from "../types/seo-topic";

const root = path.join(process.cwd());
const topicQueuePath = path.join(root, "content/seo/topic-queue.json");
const publishedKeywordsPath = path.join(
  root,
  "content/seo/published-keywords.json",
);

let hasErrors = false;

function error(message: string) {
  hasErrors = true;
  console.error(`ERROR: ${message}`);
}

function warn(message: string) {
  console.warn(`WARN: ${message}`);
}

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function normalizeKeyword(value: string): string {
  return value.trim().toLowerCase();
}

function loadJsonFile<T>(filePath: string, label: string): T {
  if (!fs.existsSync(filePath)) {
    error(`Missing ${label} at ${filePath}`);
    process.exit(1);
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
  } catch {
    error(`Invalid JSON in ${label}`);
    process.exit(1);
  }
}

const guideSlugs = new Set(guides.map((guide) => guide.slug));
const trailKeys = new Set(
  allTrails.map((trail) => `${trail.jurisdiction}:${trail.slug}`),
);

function isPrimaryUrlOwnerLiteral(value: string): boolean {
  return PRIMARY_URL_OWNER_LITERALS.includes(
    value as (typeof PRIMARY_URL_OWNER_LITERALS)[number],
  );
}

function validateTopicSchema(topic: TopicQueueItem, label: string) {
  const requiredStringFields: (keyof TopicQueueItem)[] = [
    "id",
    "targetKeyword",
    "searchIntent",
    "proposedTitle",
    "proposedSlug",
    "category",
    "status",
    "rationale",
    "primaryUrlOwner",
    "addedAt",
  ];

  for (const field of requiredStringFields) {
    const value = topic[field];
    if (typeof value !== "string" || value.trim().length === 0) {
      error(`${label}: missing or empty "${field}"`);
    }
  }

  if (!Array.isArray(topic.secondaryKeywords)) {
    error(`${label}: "secondaryKeywords" must be an array`);
  }

  if (!Array.isArray(topic.jurisdictions)) {
    error(`${label}: "jurisdictions" must be an array`);
  } else {
    for (const jurisdiction of topic.jurisdictions) {
      if (!TOPIC_JURISDICTIONS.includes(jurisdiction)) {
        error(
          `${label}: invalid jurisdiction "${jurisdiction}" (expected ${TOPIC_JURISDICTIONS.join(", ")})`,
        );
      }
    }
  }

  if (!GUIDE_CATEGORIES.includes(topic.category)) {
    error(`${label}: invalid category "${topic.category}"`);
  }

  if (!SEARCH_INTENTS.includes(topic.searchIntent)) {
    error(`${label}: invalid searchIntent "${topic.searchIntent}"`);
  }

  if (!TOPIC_STATUSES.includes(topic.status)) {
    error(`${label}: invalid status "${topic.status}"`);
  }

  if (
    typeof topic.priority !== "number" ||
    topic.priority < 1 ||
    topic.priority > 100 ||
    !Number.isInteger(topic.priority)
  ) {
    error(`${label}: priority must be an integer from 1 to 100`);
  }

  if (!isIsoDate(topic.addedAt)) {
    error(`${label}: addedAt must be ISO date YYYY-MM-DD`);
  }

  if (topic.scheduledFor !== null && !isIsoDate(topic.scheduledFor)) {
    error(`${label}: scheduledFor must be null or ISO date YYYY-MM-DD`);
  }

  if (topic.publishedAt !== null && !isIsoDate(topic.publishedAt)) {
    error(`${label}: publishedAt must be null or ISO date YYYY-MM-DD`);
  }

  if (!topic.internalLinks || typeof topic.internalLinks !== "object") {
    error(`${label}: missing internalLinks object`);
    return;
  }

  if (!Array.isArray(topic.internalLinks.guides)) {
    error(`${label}: internalLinks.guides must be an array`);
  }

  if (!Array.isArray(topic.internalLinks.trails)) {
    error(`${label}: internalLinks.trails must be an array`);
  }

  if (!Array.isArray(topic.internalLinks.laws)) {
    error(`${label}: internalLinks.laws must be an array`);
  }

  if (!Array.isArray(topic.competingUrlsOnSite)) {
    error(`${label}: competingUrlsOnSite must be an array`);
  }

  if (!Array.isArray(topic.sourceHints)) {
    error(`${label}: sourceHints must be an array`);
  }

  const rationaleLength = topic.rationale.length;
  if (rationaleLength < 120 || rationaleLength > 160) {
    warn(
      `${label}: rationale length ${rationaleLength} chars (target 120–160)`,
    );
  }
}

function validateInternalLinks(topic: TopicQueueItem, label: string) {
  for (const guideSlug of topic.internalLinks.guides) {
    if (!guideSlugs.has(guideSlug)) {
      error(`${label}: internalLinks.guides references unknown slug "${guideSlug}"`);
    }
  }

  for (const trailLink of topic.internalLinks.trails) {
    if (!trailLink || typeof trailLink !== "object") {
      error(`${label}: invalid trail link entry`);
      continue;
    }
    if (!TOPIC_JURISDICTIONS.includes(trailLink.jurisdiction)) {
      error(
        `${label}: trail link has invalid jurisdiction "${trailLink.jurisdiction}"`,
      );
    }
    const key = `${trailLink.jurisdiction}:${trailLink.slug}`;
    if (!trailKeys.has(key)) {
      error(
        `${label}: internalLinks.trails references unknown trail "${trailLink.jurisdiction}/${trailLink.slug}"`,
      );
    }
  }

  for (const lawJurisdiction of topic.internalLinks.laws) {
    if (!TOPIC_JURISDICTIONS.includes(lawJurisdiction)) {
      error(
        `${label}: internalLinks.laws references invalid jurisdiction "${lawJurisdiction}"`,
      );
    }
  }
}

function validatePrimaryUrlOwner(topic: TopicQueueItem, label: string) {
  const owner = topic.primaryUrlOwner;

  if (owner === "new-guide") {
    return;
  }

  if (owner === "law-page") {
    if (topic.internalLinks.laws.length === 0) {
      error(
        `${label}: primaryUrlOwner "law-page" requires at least one internalLinks.laws entry`,
      );
    }
    return;
  }

  if (owner === "trail-page") {
    if (topic.internalLinks.trails.length === 0) {
      error(
        `${label}: primaryUrlOwner "trail-page" requires at least one internalLinks.trails entry`,
      );
    }
    return;
  }

  if (isPrimaryUrlOwnerLiteral(owner)) {
    error(`${label}: unrecognized primaryUrlOwner literal "${owner}"`);
    return;
  }

  if (!guideSlugs.has(owner)) {
    error(
      `${label}: primaryUrlOwner references unknown guide slug "${owner}"`,
    );
  }
}

function validateStatusConsistency(
  topic: TopicQueueItem,
  label: string,
  publishedKeywordSlugs: Set<string>,
) {
  const activeStatuses: TopicStatus[] = ["queued", "in-progress"];

  if (topic.status === "rejected" && topic.scheduledFor !== null) {
    error(`${label}: rejected topics must have scheduledFor set to null`);
  }

  if (
    topic.scheduledFor !== null &&
    topic.status !== "queued" &&
    topic.status !== "in-progress"
  ) {
    error(
      `${label}: scheduledFor is only allowed when status is queued or in-progress`,
    );
  }

  if (topic.status === "published") {
    if (topic.publishedAt === null) {
      error(`${label}: published topics must have publishedAt set`);
    }
    const isLiveGuide = guideSlugs.has(topic.proposedSlug);
    const isPublishedKeyword = publishedKeywordSlugs.has(topic.proposedSlug);
    if (!isLiveGuide && !isPublishedKeyword) {
      error(
        `${label}: published topics must have proposedSlug in published-keywords.json or live guides`,
      );
    }
  }

  if (
    (topic.status === "queued" ||
      topic.status === "in-progress" ||
      topic.status === "rejected") &&
    topic.publishedAt !== null
  ) {
    error(
      `${label}: publishedAt must be null when status is ${topic.status}`,
    );
  }
}

function validateTopicQueue() {
  const queue = loadJsonFile<TopicQueueFile>(topicQueuePath, "topic-queue.json");
  const published = loadJsonFile<PublishedKeywordsFile>(
    publishedKeywordsPath,
    "published-keywords.json",
  );

  if (queue.version !== 1) {
    error(`topic-queue.json version must be 1 (got ${queue.version})`);
  }

  if (published.version !== 1) {
    error(`published-keywords.json version must be 1 (got ${published.version})`);
  }

  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();
  const activeKeywords = new Map<string, string>();
  const publishedKeywordTargets = new Set(
    published.keywords.map((entry) => normalizeKeyword(entry.targetKeyword)),
  );
  const publishedKeywordSlugs = new Set(
    published.keywords.map((entry) => entry.slug),
  );

  for (const entry of published.keywords) {
    if (!guideSlugs.has(entry.slug)) {
      error(
        `published-keywords.json: slug "${entry.slug}" not found in live guides`,
      );
    }
    if (!GUIDE_CATEGORIES.includes(entry.category)) {
      error(
        `published-keywords.json: invalid category "${entry.category}" for slug "${entry.slug}"`,
      );
    }
    if (!isIsoDate(entry.publishedAt)) {
      error(
        `published-keywords.json: invalid publishedAt for slug "${entry.slug}"`,
      );
    }
  }

  const publishedSlugSet = new Set(published.keywords.map((entry) => entry.slug));
  if (publishedSlugSet.size !== published.keywords.length) {
    error("published-keywords.json: duplicate slugs");
  }

  for (const topic of queue.topics) {
    const label = `Topic "${topic.id}"`;

    validateTopicSchema(topic, label);
    validateInternalLinks(topic, label);
    validatePrimaryUrlOwner(topic, label);
    validateStatusConsistency(topic, label, publishedKeywordSlugs);

    if (seenIds.has(topic.id)) {
      error(`${label}: duplicate id "${topic.id}"`);
    }
    seenIds.add(topic.id);

    if (seenSlugs.has(topic.proposedSlug)) {
      error(`${label}: duplicate proposedSlug "${topic.proposedSlug}"`);
    }
    seenSlugs.add(topic.proposedSlug);

    if (topic.id !== topic.proposedSlug) {
      warn(`${label}: id "${topic.id}" differs from proposedSlug "${topic.proposedSlug}"`);
    }

    if (
      guideSlugs.has(topic.proposedSlug) &&
      topic.status !== "published"
    ) {
      error(
        `${label}: proposedSlug "${topic.proposedSlug}" conflicts with an existing live guide`,
      );
    }

    if (topic.status === "queued" || topic.status === "in-progress") {
      const normalized = normalizeKeyword(topic.targetKeyword);
      if (activeKeywords.has(normalized)) {
        error(
          `${label}: duplicate targetKeyword "${topic.targetKeyword}" among active queue items (also used by "${activeKeywords.get(normalized)}")`,
        );
      }
      activeKeywords.set(normalized, topic.id);

      if (publishedKeywordTargets.has(normalized)) {
        error(
          `${label}: targetKeyword "${topic.targetKeyword}" already published on site`,
        );
      }
    }
  }

  console.log(
    `SEO topic queue: ${queue.topics.length} topics, ${published.keywords.length} published keywords`,
  );
}

validateTopicQueue();

if (hasErrors) {
  console.error("\nSEO topic queue validation failed.");
  process.exit(1);
}

console.log("SEO topic queue validation passed.");
