"use client";

import { cn } from "@/lib/utils/cn";
import styles from "./Chip.module.css";

interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export function Chip({ children, active, onClick, className, ariaLabel }: ChipProps) {
  return (
    <button
      type="button"
      className={cn(styles.chip, active && styles.active, className)}
      onClick={onClick}
      aria-pressed={active}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export function ChipBar({
  children,
  sticky,
  className,
}: {
  children: React.ReactNode;
  sticky?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(styles.bar, sticky && styles.sticky, className)} role="group">
      {children}
    </div>
  );
}

export function ChipClear({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" className={cn(styles.chip, styles.clear)} onClick={onClick}>
      {children}
    </button>
  );
}

export function FilterCount({ count }: { count: number }) {
  if (count === 0) return null;
  return <span className={styles.count}>{count} active</span>;
}
