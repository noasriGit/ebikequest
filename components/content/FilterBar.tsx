"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Jurisdiction } from "@/types/jurisdiction";

interface FilterBarProps {
  jurisdictions: Jurisdiction[];
  basePath: string;
}

export function FilterBar({ jurisdictions, basePath }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const update = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    const query = params.toString();
    router.push(query ? `${basePath}?${query}` : basePath);
  };

  return (
    <div className="flex flex-wrap gap-4 rounded-xl border border-zinc-200 bg-white p-4">
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-zinc-700">Jurisdiction</span>
        <select
          className="rounded-lg border border-zinc-300 px-3 py-2"
          value={searchParams.get("jurisdiction") ?? ""}
          onChange={(e) => update("jurisdiction", e.target.value)}
        >
          <option value="">All</option>
          {jurisdictions.map((j) => (
            <option key={j.slug} value={j.slug}>
              {j.name}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-zinc-700">Difficulty</span>
        <select
          className="rounded-lg border border-zinc-300 px-3 py-2"
          value={searchParams.get("difficulty") ?? ""}
          onChange={(e) => update("difficulty", e.target.value)}
        >
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-zinc-700">E-bike class</span>
        <select
          className="rounded-lg border border-zinc-300 px-3 py-2"
          value={searchParams.get("class") ?? ""}
          onChange={(e) => update("class", e.target.value)}
        >
          <option value="">All</option>
          <option value="class1">Class 1</option>
          <option value="class2">Class 2</option>
          <option value="class3">Class 3</option>
        </select>
      </label>
    </div>
  );
}
