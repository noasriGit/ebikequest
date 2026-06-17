import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  accent?: boolean;
  photo?: boolean;
}

export function Card({ children, className, href, accent, photo }: CardProps) {
  const classes = cn(
    styles.card,
    accent && styles.accent,
    photo && styles.photo,
    href && styles.cardLink,
    href && "group",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(styles.photoContent, className)}>{children}</div>;
}
