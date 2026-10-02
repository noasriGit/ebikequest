"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils/cn";

export function ScrollScale({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ scale }} className="h-full w-full origin-center">
        {children}
      </motion.div>
    </div>
  );
}
