"use client";

import { motion } from "framer-motion";

export default function AudioWaveform() {
  const bars = Array.from({ length: 40 });

  return (
    <div className="flex items-center justify-center gap-1 h-32">
      {bars.map((_, index) => (
        <motion.div
          key={index}
          className="w-1 bg-linear-to-t from-emerald-500 to-emerald-300 rounded-full"
          initial={{ height: "20%" }}
          animate={{
            height: ["20%", "100%", "40%", "80%", "30%", "20%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
