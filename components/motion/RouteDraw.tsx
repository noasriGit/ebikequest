"use client";

import { motion, useReducedMotion } from "framer-motion";

/** A short field-note route stroke. Decorative; the adjacent text carries the meaning. */
export function RouteDraw({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 160 24" className={className} aria-hidden="true" fill="none">
      <motion.path
        d="M2 16 C 28 16, 36 6, 58 8 S 96 20, 120 10 S 148 4, 158 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
