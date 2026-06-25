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
        "flex min-h-[5.75rem] flex-col items-center justify-center gap-3 bg-[#1a1917] px-4 py-8 md:min-h-[6.25rem] md:py-9",
        className,
      )}
      aria-hidden={!visible}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-3"
        initial={false}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: duration.base, ease: easing }}
      >
        <div
          className="flex h-5 items-center justify-center overflow-hidden"
          aria-live={visible ? "polite" : undefined}
          aria-atomic="true"
        >
        {shouldReduce ? (
          <p className="text-label text-white/75">{MESSAGES[0]}</p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.p
              key={message}
              className="text-label text-white/75"
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
        className="inline-flex text-white/70"
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
