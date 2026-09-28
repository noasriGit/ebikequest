import type { Brand, BuyingGuide, Comparison, EbikeModel } from "@/types/commerce";
import {
  getBrandPublicationIssues,
  getBuyingGuidePublicationIssues,
  getComparisonPublicationIssues,
  getModelPublicationIssues,
  isPublicBrand,
  isPublicComparison,
  isPublicModel,
} from "@/lib/commerce/publish";

function words(count: number): string {
  return Array.from({ length: count }, () => "fixture").join(" ");
}

const withheldBrand: Brand = {
  id: "withheld-brand",
  slug: "withheld-brand",
  name: "Withheld Brand",
  description: words(30),
  website: "https://example.com",
  status: "published",
  researchStatus: "source-checked",
  officialSources: [{ id: "site", title: "Manufacturer site", url: "https://example.com/withheld" }],
  lastVerifiedAt: "2026-09-28",
};

function otherwiseQualifyingModel(id: string): EbikeModel {
  return {
    id,
    brandSlug: withheldBrand.slug,
    slug: id,
    name: id,
    description: words(40),
    status: "published",
    researchStatus: "source-checked",
    handsOnTested: false,
    safetyReviewed: true,
    lastVerifiedAt: "2026-09-28",
    classification: { determinable: false, designation: "unclassified", sourceIds: [] },
    officialSources: [{ id: "manual", title: "Owner manual", url: "https://example.com/manual", role: "manufacturer" }],
    specifications: [
      { id: "motor", key: "motor", label: "Motor", value: "250 W nominal", sourceId: "manual" },
      { id: "battery", key: "battery", label: "Battery", value: "360", unit: "Wh", sourceId: "manual" },
      { id: "speed", key: "assisted-speed", label: "Assisted speed", value: "20", unit: "mph", sourceId: "manual" },
      { id: "brakes", key: "brakes", label: "Brakes", value: "Hydraulic disc", sourceId: "manual" },
    ],
  };
}

const publicBrand: Brand = {
  id: "public-brand",
  slug: "public-brand",
  name: "Public Brand",
  description: words(30),
  website: "https://example.com",
  status: "published",
  researchStatus: "editorially-reviewed",
  suitedFor: "Riders comparing sourced commuter bikes.",
  lastVerifiedAt: "2026-09-28",
  officialSources: [
    { id: "site", title: "Manufacturer site", url: "https://example.com", role: "manufacturer" },
    { id: "manual", title: "Owner manual", url: "https://example.com/manual", role: "manufacturer" },
  ],
  sections: [
    { id: "overview", heading: "Overview", paragraphs: [words(40)] },
    { id: "limits", heading: "Known limits", paragraphs: [words(40)] },
  ],
};

function publicModel(id: string): EbikeModel {
  return {
    ...otherwiseQualifyingModel(id),
    brandSlug: publicBrand.slug,
    classification: {
      determinable: true,
      designation: "class-2",
      sourceIds: ["manual"],
      reasoning: "The manual lists a throttle and a 20 mph assist cutoff, which matches a Class 2 definition.",
    },
  };
}

const substantiveComparison = (modelIds: string[]): Comparison => ({
  id: "fixture-comparison",
  slug: "fixture-comparison",
  title: "Fixture comparison",
  description: words(30),
  intent: "Which of these bikes fits a rider who needs a throttle and a 20 mph assist cutoff?",
  status: "published",
  researchStatus: "source-checked",
  modelIds,
  lastVerifiedAt: "2026-09-28",
  summary: words(20),
  dimensions: ["Throttle", "Assisted speed"],
  sections: [
    { id: "difference", heading: "What actually differs", paragraphs: [words(50)] },
    { id: "use", heading: "Where that matters", paragraphs: [words(50)] },
  ],
  differences: [
    "One manual lists a throttle and the other lists pedal assist only.",
    "Both manuals list a 20 mph assist cutoff, so speed alone does not separate them.",
  ],
  tradeoffs: ["A throttle helps starting from a stop and can change which class definition applies."],
  buyerFit: words(20),
});

/**
 * In-memory fixtures. These records are not site content and must not be imported
 * into the public catalogs.
 */
export function assertPublicationFixtures(): string[] {
  const errors: string[] = [];
  const modelA = otherwiseQualifyingModel("fixture-a");
  const modelB = otherwiseQualifyingModel("fixture-b");
  const comparison = substantiveComparison([modelA.id, modelB.id]);

  if (isPublicBrand(withheldBrand)) {
    errors.push("fixture: thin brand with one source was treated as public");
  }
  if (!getBrandPublicationIssues(withheldBrand).some((issue) => /sources|sections/i.test(issue))) {
    errors.push("fixture: thin brand diagnostics did not explain the missing structure");
  }

  const modelIssues = getModelPublicationIssues(modelA, [withheldBrand]);
  if (isPublicModel(modelA, [withheldBrand])) {
    errors.push("fixture: model with a non-public brand was treated as public");
  }
  if (!modelIssues.some((issue) => issue === "parent brand is not public")) {
    errors.push("fixture: model diagnostics did not cite the parent brand");
  }

  if (isPublicComparison(comparison, [modelA, modelB], [withheldBrand])) {
    errors.push("fixture: comparison of models with non-public brands was treated as public");
  }
  const comparisonIssues = getComparisonPublicationIssues(comparison, [modelA, modelB], [withheldBrand]);
  if (!comparisonIssues.some((issue) => issue.includes("referenced models are not public"))) {
    errors.push("fixture: comparison failure did not cite public-model eligibility");
  }

  const unsourced: EbikeModel = {
    ...publicModel("unsourced-spec"),
    specifications: [
      { id: "motor", key: "motor", label: "Motor", value: "250 W", sourceId: "missing-source" },
      { id: "battery", key: "battery", label: "Battery", value: "360 Wh", sourceId: "manual" },
      { id: "speed", key: "assisted-speed", label: "Assisted speed", value: "20 mph", sourceId: "manual" },
      { id: "brakes", key: "brakes", label: "Brakes", value: "Disc", sourceId: "manual" },
    ],
  };
  if (isPublicModel(unsourced, [publicBrand])) {
    errors.push("fixture: model with an unresolved specification source was treated as public");
  }

  const unsourcedClass: EbikeModel = {
    ...publicModel("unsourced-class"),
    classification: { determinable: true, designation: "class-2", sourceIds: [] },
  };
  if (isPublicModel(unsourcedClass, [publicBrand])) {
    errors.push("fixture: definite class without a source was treated as public");
  }
  if (!getModelPublicationIssues(unsourcedClass, [publicBrand]).some((issue) => /definite class/i.test(issue))) {
    errors.push("fixture: class diagnostics did not require source evidence");
  }

  const unsafe: EbikeModel = {
    ...publicModel("unsafe-notice"),
    safetyNotices: [
      { id: "notice", summary: "Stop using this bike until the regulator says otherwise.", severity: "stop-use", sourceId: "missing" },
    ],
  };
  if (isPublicModel(unsafe, [publicBrand])) {
    errors.push("fixture: safety notice without a source was treated as public");
  }

  const promoted: EbikeModel = {
    ...publicModel("do-not-promote"),
    safetyNotices: [
      {
        id: "recall",
        summary: "The manufacturer told owners to stop riding this model.",
        severity: "stop-use",
        sourceId: "manual",
        commerceRestriction: "do-not-promote",
      },
    ],
    amazonLink: {
      id: "amazon",
      retailer: "amazon",
      retailerName: "Amazon",
      href: "https://www.amazon.com/dp/EXAMPLE",
      isAffiliate: false,
    },
  };
  if (isPublicModel(promoted, [publicBrand])) {
    errors.push("fixture: stop-use notice with a retailer link was treated as public");
  }

  const thinSpecs: EbikeModel = {
    ...publicModel("thin-specs"),
    specifications: publicModel("thin-specs").specifications?.slice(0, 2),
  };
  if (!getModelPublicationIssues(thinSpecs, [publicBrand]).some((issue) => issue === "only 2 sourced specifications")) {
    errors.push("fixture: two sourced specifications were enough to publish a model");
  }

  if (!isPublicBrand(publicBrand) || !isPublicModel(publicModel("kept"), [publicBrand])) {
    errors.push(
      `fixture: a complete brand and model failed publication (${getBrandPublicationIssues(publicBrand).join("; ")}; ${getModelPublicationIssues(publicModel("kept"), [publicBrand]).join("; ")})`,
    );
  }

  const keptA = publicModel("kept-a");
  const keptB = publicModel("kept-b");
  if (!isPublicComparison(substantiveComparison([keptA.id, keptB.id]), [keptA, keptB], [publicBrand])) {
    errors.push(
      `fixture: a sourced comparison of public models failed (${getComparisonPublicationIssues(substantiveComparison([keptA.id, keptB.id]), [keptA, keptB], [publicBrand]).join("; ")})`,
    );
  }

  const duplicated = substantiveComparison([keptA.id, keptA.id, keptB.id]);
  if (isPublicComparison(duplicated, [keptA, keptB], [publicBrand])) {
    errors.push("fixture: duplicate model ids were allowed on a comparison");
  }

  const guide: BuyingGuide = {
    id: "thin-guide",
    slug: "thin-guide",
    title: "Thin guide",
    description: words(30),
    status: "published",
    researchStatus: "source-checked",
    sections: [
      { id: "a", heading: "One", paragraphs: [words(200)] },
      { id: "b", heading: "Two", paragraphs: [words(200)] },
    ],
  };
  if (getBuyingGuidePublicationIssues(guide).length === 0) {
    errors.push("fixture: a word-count-only buying guide was treated as public");
  }

  return errors;
}
