// Server Component — purely presentational, no client state needed

interface SectionHeadingProps {
  /** Monospace number prefix, e.g. "01" — rendered as "01." in green */
  number: string;
  /** The heading text rendered in slate-lightest */
  title: string;
  /** Optional extra Tailwind classes on the wrapper */
  className?: string;
}

/**
 * SectionHeading
 *
 * Renders a numbered section heading consistent with the portfolio's
 * Brittany Chiang-inspired design system:
 *
 *   01. About Me  ───────────────────────
 *
 * Props:
 *   - number  e.g. "01"
 *   - title   e.g. "About Me"
 */
export default function SectionHeading({
  number,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex items-center gap-4 mb-12 ${className}`}
      aria-label={`Section: ${title}`}
    >
      {/* Numbered heading */}
      <h2 className="flex items-baseline gap-2.5 text-2xl md:text-3xl font-semibold text-slate-lightest whitespace-nowrap">
        {/* Mono-green number prefix */}
        <span
          className="font-mono text-green-accent text-lg md:text-xl font-normal"
          aria-hidden="true"
        >
          {number}.
        </span>
        {title}
      </h2>

      {/* Decorative horizontal rule */}
      <div
        className="flex-1 h-px bg-navy-lighter max-w-xs"
        aria-hidden="true"
      />
    </div>
  );
}
