"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pageTransition } from "@/lib/motion/variants";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className="min-h-0"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
}
