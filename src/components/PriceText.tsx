import type { ReactNode } from "react";

/**
 * Renders price strings so PEN stays prominent and USD is smaller / quieter.
 * Works for "70 PEN / 20 USD" and longer lines that contain that pattern.
 */
export function PriceText({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const parts: ReactNode[] = [];
  const re = /(\d[\d\s.,]*)\s*PEN\s*\/\s*(\d[\d\s.,]*)\s*USD/gi;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = re.exec(value)) !== null) {
    if (match.index > last) {
      parts.push(value.slice(last, match.index));
    }
    parts.push(
      <span key={`p-${key++}`} className="whitespace-nowrap">
        <span className="font-semibold text-[var(--ink)]">
          {match[1].trim()} PEN
        </span>
        <span className="text-[0.72em] font-normal text-[var(--ink-muted)]">
          {" / "}
          {match[2].trim()} USD
        </span>
      </span>,
    );
    last = match.index + match[0].length;
  }

  if (parts.length === 0) {
    return <span className={className}>{value}</span>;
  }

  if (last < value.length) {
    parts.push(value.slice(last));
  }

  return <span className={className}>{parts}</span>;
}
