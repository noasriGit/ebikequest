"use client";

import { useState } from "react";
import type { FAQItem } from "@/types/content";
import { cn } from "@/lib/utils/cn";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="pr-4 font-medium text-zinc-900">{item.question}</span>
              <span className="text-emerald-600">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className={cn(
                "overflow-hidden px-5 transition-all",
                isOpen ? "max-h-96 pb-4" : "max-h-0",
              )}
            >
              <p className="text-zinc-600">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
