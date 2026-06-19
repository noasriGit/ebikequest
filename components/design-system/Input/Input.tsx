import { cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils/cn";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ className, invalid, ...props }: InputProps) {
  return (
    <input
      className={cn(styles.input, className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export function Textarea({ className, invalid, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(styles.textarea, className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

export function Label({
  children,
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={cn(styles.label, className)} {...props}>
      {children}
    </label>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  required?: boolean;
}

function mergeDescribedBy(existing: string | undefined, ...ids: (string | undefined)[]) {
  const merged = [...(existing?.split(/\s+/).filter(Boolean) ?? []), ...ids.filter(Boolean)];
  return merged.length ? [...new Set(merged)].join(" ") : undefined;
}

export function FormField({ id, label, error, hint, children, required }: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;

  const control = isValidElement(children)
    ? cloneElement(
        children as React.ReactElement<{
          id?: string;
          "aria-describedby"?: string;
          "aria-required"?: boolean;
        }>,
        {
          id,
          "aria-describedby": mergeDescribedBy(
            (children as React.ReactElement<{ "aria-describedby"?: string }>).props[
              "aria-describedby"
            ],
            errorId,
            hintId,
          ),
          "aria-required": required || undefined,
        },
      )
    : children;

  return (
    <div className={styles.field}>
      <Label htmlFor={id}>
        {label}
        {required ? (
          <>
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> (required)</span>
          </>
        ) : null}
      </Label>
      {control}
      {hint ? (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export { styles as inputStyles };
