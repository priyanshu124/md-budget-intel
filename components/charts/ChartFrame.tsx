"use client";
import { ReactNode } from "react";

interface Props {
  title: string;
  deck?: string;
  source: string;
  children: ReactNode;
  /** Compact mode removes vertical padding — for carousel or tight grids. */
  compact?: boolean;
}

/**
 * Editorial chart frame replicating the NYT/WSJ theme from AArushi.ipynb:
 *   — Georgia serif title (19pt bold)
 *   — Italic deck in #666
 *   — Hairline rule below title
 *   — "Source:" line in #9B9B9B at bottom
 */
export default function ChartFrame({ title, deck, source, children, compact }: Props) {
  return (
    <div style={{ fontFamily: "Georgia, 'DejaVu Serif', 'Times New Roman', serif", background: "white" }}>
      {/* Title */}
      <h3
        style={{
          fontFamily: "Georgia, serif",
          fontSize: compact ? 16 : 19,
          fontWeight: 800,
          color: "#121212",
          letterSpacing: "-0.2px",
          lineHeight: 1.25,
          margin: 0,
          paddingBottom: 6,
        }}
      >
        {title}
      </h3>

      {/* Deck (italic) */}
      {deck && (
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: compact ? 11 : 12,
            color: "#666666",
            lineHeight: 1.45,
            marginBottom: 8,
          }}
        >
          {deck}
        </p>
      )}

      {/* Hairline rule */}
      <div style={{ height: 1, background: "#DDDDDD", marginBottom: 10 }} />

      {/* Chart body */}
      <div>{children}</div>

    </div>
  );
}
