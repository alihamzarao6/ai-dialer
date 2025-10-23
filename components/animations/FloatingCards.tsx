"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardsProps {
  children: ReactNode;
  delay?: number;
}

export default function FloatingCards({
  children,
  delay = 0,
}: FloatingCardsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
}
