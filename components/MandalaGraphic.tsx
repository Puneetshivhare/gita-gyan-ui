"use client";

import { motion } from "framer-motion";

const CENTER = 200;

function ringDots(radius: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    return {
      x: CENTER + radius * Math.cos(angle),
      y: CENTER + radius * Math.sin(angle),
    };
  });
}

const rings = [
  { radius: 175, count: 16, duration: 50, direction: 1 },
  { radius: 128, count: 12, duration: 36, direction: -1 },
  { radius: 82, count: 8, duration: 24, direction: 1 },
];

export default function MandalaGraphic() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-canvasAlt p-4">
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        role="img"
        aria-label="Concentric rings representing chapters and verses radiating from a central source"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b45309" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft ambient glow */}
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={90}
          fill="url(#glow)"
          initial={{ opacity: 0.4, scale: 1 }}
          animate={{ opacity: 0.8, scale: 1.15 }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        />

        {/* Faint ring outlines */}
        {rings.map((r) => (
          <circle
            key={`outline-${r.radius}`}
            cx={CENTER}
            cy={CENTER}
            r={r.radius}
            fill="none"
            stroke="#9a3412"
            strokeOpacity={0.15}
            strokeWidth={1}
          />
        ))}

        {/* Rotating dot rings */}
        {rings.map((r) => (
          <motion.g
            key={`ring-${r.radius}`}
            style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
            animate={{ rotate: 360 * r.direction }}
            transition={{ duration: r.duration, repeat: Infinity, ease: "linear" }}
          >
            {ringDots(r.radius, r.count).map((d, i) => (
              <circle
                key={i}
                cx={d.x}
                cy={d.y}
                r={i % 4 === 0 ? 4 : 2.5}
                fill={i % 4 === 0 ? "#9a3412" : "#b45309"}
                fillOpacity={i % 4 === 0 ? 0.9 : 0.6}
              />
            ))}
          </motion.g>
        ))}

        {/* Center mark */}
        <circle cx={CENTER} cy={CENTER} r={26} fill="#9a3412" />
        <text
          x={CENTER}
          y={CENTER + 8}
          textAnchor="middle"
          fontSize={22}
          fill="#fbf5e9"
        >
          ॐ
        </text>
      </svg>
    </div>
  );
}
