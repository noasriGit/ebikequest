"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true",
  );
}

export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  active: boolean,
  options?: {
    onEscape?: () => void;
    restoreFocus?: boolean;
  },
) {
  const onEscape = options?.onEscape;
  const restoreFocus = options?.restoreFocus ?? true;

  useEffect(() => {
    if (!active || !containerRef.current) return;

    const container = containerRef.current;
    const previouslyFocused =
      restoreFocus && document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const focusFirst = () => {
      const focusable = getFocusableElements(container);
      (focusable[0] ?? container).focus();
    };

    const frame = window.requestAnimationFrame(focusFirst);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onEscape?.();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusableElements(container);
      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [active, containerRef, onEscape, restoreFocus]);
}
