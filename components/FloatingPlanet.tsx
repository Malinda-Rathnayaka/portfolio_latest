"use client";
import { motion, useTransform, MotionValue } from "framer-motion";

export default function FloatingPlanet({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <motion.div
      style={{ y, rotate }}
      className="absolute right-[6%] top-[14%] md:right-[10%] md:top-[16%] pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-40 h-40 md:w-56 md:h-56"
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at 32% 28%, #C4B5FD 0%, #8B5CF6 42%, #4C1D95 75%, #1E0B3B 100%)",
            boxShadow: "0 0 60px 10px rgba(139,92,246,0.45), inset -18px -18px 40px rgba(0,0,0,0.5)",
          }}
        />
        <motion.div
          className="absolute -inset-6 rounded-full border border-cyan-300/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
}
