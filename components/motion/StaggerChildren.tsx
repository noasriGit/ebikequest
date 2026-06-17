"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion/variants";
import { cn } from "@/lib/utils/cn";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
}

export function StaggerChildren({ children, className, as = "div" }: StaggerChildrenProps) {
  const shouldReduce = useReducedMotion();
  const Component = motion[as];

  if (shouldReduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainer}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
