import Link from "next/link";
import clsx from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
    size === "sm" && "h-9 px-4 text-sm",
    size === "md" && "h-11 px-5 text-sm",
    size === "lg" && "h-12 px-7 text-base",
    variant === "primary" && "bg-brand text-white hover:bg-brand-hover",
    variant === "secondary" &&
      "bg-white text-brand border border-brand hover:bg-brand/5",
    variant === "outline" &&
      "border border-border bg-card text-ink hover:border-brand hover:text-brand",
    variant === "ghost" && "text-ink hover:text-brand",
    className,
  );
  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold tracking-wide uppercase text-brand">
      <span className="size-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "rounded-[12px] bg-card border border-border shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CheckerBox({ className }: { className?: string }) {
  return (
    <div className={clsx("checker-pattern rounded-[12px]", className)} />
  );
}
