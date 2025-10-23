"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function GlowingOrb() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-emerald-500/20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-emerald-500/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.3, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      {/* Core orb */}
      <motion.div
        className="absolute inset-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-2xl flex items-center justify-center"
        animate={{
          boxShadow: [
            "0 0 20px rgba(16, 185, 129, 0.5)",
            "0 0 40px rgba(16, 185, 129, 0.8)",
            "0 0 20px rgba(16, 185, 129, 0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Phone className="w-8 h-8 text-white" />
      </motion.div>
    </div>
  );
}
