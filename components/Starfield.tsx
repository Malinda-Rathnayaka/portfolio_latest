"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";

export default function Starfield({ density = 140 }: { density?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: density }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        layer: Math.random() > 0.85 ? 2 : 1,
      })),
    [density]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.layer === 2 ? s.size * 1.8 : s.size,
            height: s.layer === 2 ? s.size * 1.8 : s.size,
            boxShadow: s.layer === 2 ? "0 0 6px 1px rgba(255,255,255,0.8)" : "none",
          }}
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
