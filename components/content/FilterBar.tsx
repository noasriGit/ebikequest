"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Jurisdiction } from "@/types/jurisdiction";
import { Chip, ChipBar, ChipClear, FilterCount } from "@/components/design-system/Chip/Chip";

interface FilterBarProps {
  jurisdictions: Jurisdiction[];
  basePath: string;
}

const DIFFICULTIES = [
  { value: "", label: "All difficulties" },
  { value: "easy", label: "Easy" },
  { value: "moderate", label: "Moderate" },
  { value: "hard", label: "Hard" },
] as const;

const CLASSES = [
  { value: "", label: "All classes" },
  { value: "class1", label: "Class 1" },
  { value: "class2", label: "Class 2" },
  { value: "class3", label: "Class 3" },
] as const;

export function FilterBar({ jurisdictions, basePath }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const jurisdiction = searchParams.get("jurisdiction") ?? "";
  const difficulty = searchParams.get("difficulty") ?? "";
  const ebikeClass = searchParams.get("class") ?? "";

  const activeCount = [jurisdiction, difficulty, ebikeClass].filter(Boolean).length;

  const update = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    const query = params.toString();
    router.push(query ? `${basePath}?${query}` : basePath);
  };

  const clearAll = () => router.push(basePath);

  return (
    <ChipBar sticky aria-label="Trail filters">
      <span className="mr-1 text-sm font-medium text-text-secondary">Filters</span>
      <FilterCount count={activeCount} />

      <span className="hidden h-4 w-px bg-[color-mix(in_srgb,var(--text-muted)_25%,transparent)] sm:block" />

      <div className="flex flex-wrap items-center gap-1.5">
        <Chip active={!jurisdiction} onClick={() => update("jurisdiction", "")}>
          All regions
        </Chip>
        {jurisdictions.map((j) => (
          <Chip
            key={j.slug}
            active={jurisdiction === j.slug}
            onClick={() => update("jurisdiction", j.slug)}
          >
            {j.name}
          </Chip>
        ))}
      </div>

      <span className="hidden h-4 w-px bg-[color-mix(in_srgb,var(--text-muted)_25%,transparent)] sm:block" />

      <div className="flex flex-wrap items-center gap-1.5">
        {DIFFICULTIES.filter((d) => d.value).map((d) => (
          <Chip
            key={d.value}
            active={difficulty === d.value}
            onClick={() => update("difficulty", difficulty === d.value ? "" : d.value)}
          >
            {d.label}
          </Chip>
        ))}
      </div>

      <span className="hidden h-4 w-px bg-[color-mix(in_srgb,var(--text-muted)_25%,transparent)] sm:block" />

      <div className="flex flex-wrap items-center gap-1.5">
        {CLASSES.filter((c) => c.value).map((c) => (
          <Chip
            key={c.value}
            active={ebikeClass === c.value}
            onClick={() => update("class", ebikeClass === c.value ? "" : c.value)}
          >
            {c.label}
          </Chip>
        ))}
      </div>

      {activeCount > 0 ? <ChipClear onClick={clearAll}>Clear all</ChipClear> : null}
    </ChipBar>
  );
}
