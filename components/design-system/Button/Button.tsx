"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import styles from "./Button.module.css";

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
  outline: styles.outline,
  dark: styles.dark,
  accent: styles.accent,
} as const;

const sizes = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
  disabled,
  loading,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    styles.button,
    variants[variant],
    sizes[size],
    loading && styles.loading,
    className,
  );

  const content = (
    <>
      {loading ? <span className={styles.spinner} aria-hidden /> : null}
      {children}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        aria-disabled={disabled || loading || undefined}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
    >
      {content}
    </button>
  );
}
