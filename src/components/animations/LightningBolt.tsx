type LightningBoltProps = {
  className?: string;
  /** Fill color. Defaults to Blueprint Precision's secondary-container blue. */
  color?: string;
  /** Inline size. Defaults to 1em so it scales with surrounding type. */
  size?: number | string;
};

/**
 * Branching lightning-bolt glyph that flashes irregularly via CSS
 * (`lightning-flash` keyframe in globals.css). Purely decorative —
 * attach near kickers or alongside status indicators. Honors
 * prefers-reduced-motion via the global override.
 */
export function LightningBolt({
  className = "",
  color = "#d0e1fb",
  size = "1em",
}: LightningBoltProps) {
  return (
    <svg
      aria-hidden
      className={`lightning-bolt inline-block ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {/* Classic zigzag bolt with a subtle side-branch for realism */}
      <path d="M13.5 1.5 L4 13 L10 13 L7.5 22.5 L19 10 L12.5 10 L15 1.5 Z" />
    </svg>
  );
}
