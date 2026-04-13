import type { CSSProperties } from "react";

type CircuitTraceProps = {
  /** Extra classes on the positioned wrapper (expected to be absolute-positioned by caller). */
  className?: string;
  /** Stroke/glow tint. Defaults to Blueprint Precision's secondary-container blue. */
  tint?: string;
  /** Overall opacity of the layer. Keep low so copy stays readable. Defaults to 0.55. */
  opacity?: number;
};

/**
 * Animated PCB-style circuit trace overlay.
 *
 * Traces are stroked with a dash pattern, and `stroke-dashoffset` is
 * animated to produce a continuous "current flowing along the trace"
 * effect. Solder-point circles at branch/terminal nodes pulse with
 * an electric-blue glow. The whole layer is non-interactive and
 * must be placed over a dark surface (hero, CTA band).
 *
 * Animations are pure CSS keyframes so `prefers-reduced-motion` is
 * honored via the global override in `globals.css`.
 */
export function CircuitTrace({
  className = "",
  tint = "#d0e1fb",
  opacity = 0.55,
}: CircuitTraceProps) {
  // Inline style so consumers can tune without wiring Tailwind theme values.
  const style: CSSProperties = {
    // Pass tint and opacity down as CSS custom props the nested SVG reads.
    ["--circuit-tint" as string]: tint,
    ["--circuit-opacity" as string]: String(opacity),
  };

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={style}
    >
      <svg
        className="circuit-trace-svg absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="circuit-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="circuit-glow-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static base traces — low opacity so they read as a PCB. */}
        <g className="circuit-traces" stroke="var(--circuit-tint)" strokeWidth="1.5" strokeLinecap="round">
          {/* Trunk across the top */}
          <path
            className="circuit-path circuit-path--slow"
            d="M -20 140 L 420 140 L 460 180 L 760 180 L 800 140 L 1200 140 L 1240 180 L 1620 180"
          />
          {/* Descending fork */}
          <path
            className="circuit-path circuit-path--med"
            d="M 460 180 L 460 320 L 500 360 L 720 360 L 760 400 L 760 520"
          />
          {/* Long right-side bus */}
          <path
            className="circuit-path circuit-path--fast"
            d="M 1240 180 L 1240 420 L 1280 460 L 1520 460 L 1560 500 L 1560 720"
          />
          {/* Lower horizontal rail */}
          <path
            className="circuit-path circuit-path--slow"
            d="M -20 720 L 260 720 L 300 680 L 580 680 L 620 720 L 940 720 L 980 760 L 1620 760"
          />
          {/* Vertical riser left */}
          <path
            className="circuit-path circuit-path--med"
            d="M 160 720 L 160 500 L 200 460 L 360 460"
          />
          {/* Short spur, mid */}
          <path
            className="circuit-path circuit-path--fast"
            d="M 760 520 L 760 600 L 800 640 L 940 640"
          />
          {/* Stub across hero center */}
          <path
            className="circuit-path circuit-path--med"
            d="M 620 720 L 620 560 L 660 520 L 720 520"
          />
        </g>

        {/* Solder-point nodes at junctions */}
        <g className="circuit-nodes" fill="var(--circuit-tint)" filter="url(#circuit-glow)">
          <circle className="circuit-node" cx="460" cy="180" r="3.5" />
          <circle className="circuit-node circuit-node--delay-1" cx="760" cy="180" r="3.5" />
          <circle className="circuit-node circuit-node--delay-2" cx="1240" cy="180" r="3.5" />
          <circle className="circuit-node circuit-node--delay-1" cx="760" cy="400" r="3.5" />
          <circle className="circuit-node circuit-node--delay-3" cx="760" cy="520" r="3.5" />
          <circle className="circuit-node circuit-node--delay-2" cx="1560" cy="500" r="3.5" />
          <circle className="circuit-node" cx="160" cy="500" r="3.5" />
          <circle className="circuit-node circuit-node--delay-3" cx="620" cy="720" r="3.5" />
          <circle className="circuit-node circuit-node--delay-1" cx="980" cy="760" r="3.5" />
          <circle className="circuit-node circuit-node--delay-2" cx="940" cy="640" r="3.5" />
        </g>

        {/* Bright terminal endpoints */}
        <g className="circuit-terminals" fill="var(--circuit-tint)" filter="url(#circuit-glow)">
          <circle className="circuit-terminal" cx="-20" cy="140" r="5" />
          <circle className="circuit-terminal circuit-terminal--delay-1" cx="1620" cy="760" r="5" />
          <circle className="circuit-terminal circuit-terminal--delay-2" cx="1560" cy="720" r="5" />
        </g>
      </svg>
    </div>
  );
}
