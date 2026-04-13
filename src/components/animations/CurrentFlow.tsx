type CurrentFlowProps = {
  className?: string;
  /** Flow direction along the x-axis. Defaults to right. */
  direction?: "right" | "left";
  /** Stroke tint. Defaults to Blueprint Precision's secondary-container. */
  color?: string;
  /** Strip height in pixels. Defaults to 18. */
  height?: number;
};

/**
 * Horizontal animated "current-flow" strip: a thin line with glowing
 * beads traveling along it and pulsing terminals at each end. Intended
 * as a section divider or in-between-steps connector. Fills the width
 * of its container.
 *
 * Motion is CSS-driven (stroke-dashoffset on the line, independent
 * pulse on the terminal nodes) so prefers-reduced-motion is honored
 * via the global override.
 */
export function CurrentFlow({
  className = "",
  direction = "right",
  color = "#d0e1fb",
  height = 18,
}: CurrentFlowProps) {
  const reverse = direction === "left";

  return (
    <div
      aria-hidden
      className={`relative w-full ${className}`}
      style={{ height }}
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 1000 18"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="current-flow-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint rail so the beads feel tethered to a wire */}
        <line
          x1="0"
          y1="9"
          x2="1000"
          y2="9"
          stroke={color}
          strokeWidth="1"
          opacity="0.22"
        />

        {/* The live beads — a stroke-dasharray pattern chased via CSS */}
        <line
          className={`current-flow-line ${reverse ? "current-flow-line--reverse" : ""}`}
          x1="0"
          y1="9"
          x2="1000"
          y2="9"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#current-flow-glow)"
        />

        {/* Terminals at both ends, pulsing alternately */}
        <circle
          className="circuit-terminal"
          cx="4"
          cy="9"
          r="4"
          fill={color}
          filter="url(#current-flow-glow)"
        />
        <circle
          className="circuit-terminal circuit-terminal--delay-1"
          cx="996"
          cy="9"
          r="4"
          fill={color}
          filter="url(#current-flow-glow)"
        />
      </svg>
    </div>
  );
}
