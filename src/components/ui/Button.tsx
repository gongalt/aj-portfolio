import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
type ButtonVariant = "primary" | "filled";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  /** If provided, renders as <a> (external) or Next.js <Link> (internal) */
  href?: string;
  /** When href is provided, marks the link as opening in a new tab */
  external?: boolean;
  /** Accessible label — use when button text alone isn't descriptive */
  "aria-label"?: string;
}

// When href is provided, the component renders an anchor element
type AsAnchor = BaseButtonProps & {
  href: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  disabled?: never;
  type?: never;
};

// When href is omitted, it renders a <button>
type AsButton = BaseButtonProps & {
  href?: never;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

type ButtonProps = AsAnchor | AsButton;

// ── Style maps ────────────────────────────────────────────────────────────────
const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  /** Outlined — transparent bg, green border + text. Default "hire me" style. */
  primary: [
    "bg-transparent",
    "border border-green-accent/70",
    "text-green-accent",
    "hover:bg-green-accent/10",
    "hover:border-green-accent",
    "focus-visible:ring-green-accent",
  ].join(" "),

  /** Filled — solid green bg, navy text. Use for the most prominent CTA. */
  filled: [
    "bg-green-accent",
    "border border-green-accent",
    "text-navy",
    "font-semibold",
    "hover:bg-green-accent/90",
    "hover:shadow-[0_0_20px_rgba(100,255,218,0.25)]",
    "focus-visible:ring-green-accent",
  ].join(" "),
};

const BASE_CLASSES = [
  "inline-flex items-center justify-center gap-2",
  "font-mono rounded",
  "transition-all duration-200 ease-out",
  "hover:-translate-y-0.5",
  "active:translate-y-0",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  "select-none",
].join(" ");

// ── Component ─────────────────────────────────────────────────────────────────
/**
 * Button
 *
 * Polymorphic button component that renders as:
 *   - Next.js `<Link>` for internal hrefs
 *   - `<a target="_blank">` for external hrefs
 *   - `<button>` when no href is provided
 *
 * @example
 * // Primary outlined (default)
 * <Button href="/contact">Hire Me</Button>
 *
 * // Filled CTA
 * <Button href="/work" variant="filled" size="lg">View Work</Button>
 *
 * // External link
 * <Button href="https://github.com/gongalt" external>GitHub</Button>
 *
 * // Submit button
 * <Button type="submit" variant="filled">Send Message</Button>
 */
export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  external = false,
  "aria-label": ariaLabel,
  ...rest
}: ButtonProps) {
  const classes = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ].join(" ");

  // ── External anchor ────────────────────────────────────────────────────
  if (href && external) {
    const { onClick } = rest as AsAnchor;
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // ── Internal Next.js Link ──────────────────────────────────────────────
  if (href) {
    const { onClick } = rest as AsAnchor;
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  // ── Native button ──────────────────────────────────────────────────────
  const { onClick, disabled, type = "button" } = rest as AsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
