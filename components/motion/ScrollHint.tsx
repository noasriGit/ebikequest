"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { duration, easing } from "@/lib/motion/tokens";
import { cn } from "@/lib/utils/cn";

const MESSAGES = [
  "Scroll to explore",
  "Trails, laws, and guides below",
  "Verified information ahead",
] as const;

const CYCLE_MS = 3200;
const HIDE_AFTER_SCROLL = 96;

interface ScrollHintProps {
  className?: string;
}

export function ScrollHint({ className }: ScrollHintProps) {
  const shouldReduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (shouldReduce || !visible) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % MESSAGES.length);
    }, CYCLE_MS);

    return () => window.clearInterval(interval);
  }, [shouldReduce, visible]);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY < HIDE_AFTER_SCROLL);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const message = MESSAGES[index];

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 px-4 pb-8 pt-5 md:pb-10 md:pt-6",
        className,
      )}
      aria-hidden={!visible}
    >
      <motion.div
        className="flex flex-col items-center gap-3"
        initial={false}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: duration.base, ease: easing }}
      >
        <div className="relative h-5 overflow-hidden" aria-live={visible ? "polite" : undefined} aria-atomic="true">
        {shouldReduce ? (
          <p className="text-label text-text-muted">{MESSAGES[0]}</p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.p
              key={message}
              className="text-label text-text-muted"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: duration.base, ease: easing }}
            >
              {message}
            </motion.p>
          </AnimatePresence>
        )}
      </div>

      <motion.span
        className="text-brand-accent"
        aria-hidden
        animate={shouldReduce ? undefined : { y: [0, 5, 0] }}
        transition={
          shouldReduce
            ? undefined
            : {
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
      </motion.div>
    </div>
  );
}
