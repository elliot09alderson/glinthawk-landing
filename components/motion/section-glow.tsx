"use client";

type GlowColor = "indigo" | "violet" | "blue" | "cyan";

const palette: Record<GlowColor, { main: string; mid: string }> = {
  indigo: { main: "99,102,241", mid: "79,70,229" },
  violet: { main: "139,92,246", mid: "124,58,237" },
  blue: { main: "59,130,246", mid: "37,99,235" },
  cyan: { main: "34,211,238", mid: "6,182,212" },
};

interface SectionGlowProps {
  color?: GlowColor;
  /** Tailwind positioning classes e.g. "-top-40 left-1/2 -translate-x-1/2" */
  className?: string;
  /** pixel size of the square container */
  size?: number;
  /** degree rotation applied to the whole element */
  rotate?: number;
  /** 0–1 overall intensity multiplier */
  intensity?: number;
  /** show the concentric arc lines (default true) */
  showArcs?: boolean;
}

/**
 * Decorative atmospheric element: radial color glow + soft concentric arcs.
 * Pointer-events disabled and aria-hidden, purely visual.
 */
export default function SectionGlow({
  color = "indigo",
  className = "",
  size = 600,
  rotate = 0,
  intensity = 1,
  showArcs = true,
}: SectionGlowProps) {
  const c = palette[color];
  const uid = `sg-${color}-${size}-${rotate}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        width: size,
        height: size,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    >
      {/* radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 40%, rgba(${c.main},${
            0.28 * intensity
          }) 0%, rgba(${c.mid},${0.12 * intensity}) 30%, transparent 65%)`,
          filter: "blur(30px)",
        }}
      />

      {showArcs && (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id={`${uid}-grad`}
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
            >
              <stop offset="0%" stopColor={`rgba(${c.main},0)`} />
              <stop
                offset="50%"
                stopColor={`rgba(${c.main},${0.35 * intensity})`}
              />
              <stop offset="100%" stopColor={`rgba(${c.main},0)`} />
            </linearGradient>
          </defs>
          <g opacity="0.55">
            {Array.from({ length: 14 }).map((_, i) => {
              const r = 60 + i * 22;
              const fade = 1 - i * 0.055;
              return (
                <path
                  key={i}
                  d={`M ${300 - r} 280 Q 300 ${280 - r * 0.85} ${300 + r} 280`}
                  stroke={`url(#${uid}-grad)`}
                  strokeWidth="0.8"
                  strokeOpacity={fade}
                  fill="none"
                />
              );
            })}
          </g>
        </svg>
      )}
    </div>
  );
}
