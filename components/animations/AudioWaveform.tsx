"use client";

import { motion } from "framer-motion";

export default function AudioWaveform() {
  const bars = Array.from({ length: 40 });

  return (
    <div className="flex items-center justify-center gap-1 h-16">
      {bars.map((_, index) => (
        <motion.div
          key={index}
          className="w-1 bg-linear-to-t from-emerald-500 to-emerald-300 rounded-full"
          initial={{ height: "30%" }}
          animate={{
            height: ["20%", "100%", "40%", "80%", "30%", "20%"],
          }}
          transition={{
            duration: 2.3,
            repeat: Infinity,
            delay: index * 0.14,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
