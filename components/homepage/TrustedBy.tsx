"use client";

import { motion } from "framer-motion";
import MarqueeScroll from "@/components/animations/MarqueeScroll";

export default function TrustedBy() {
  const companies = [
    "LeadProsper",
    "CallTools",
    "Synthflow",
    "GoHighLevel",
    "Twilio",
    "11Labs",
    "Retell AI",
    "OpenAI",
  ];

  return (
    <section className="py-20 bg-[#001a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-lg mb-8">
            Trusted by companies big and small
          </p>
        </motion.div>

        <MarqueeScroll>
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-8 py-4 bg-emerald-950/20 rounded-lg border border-emerald-900/20 min-w-[200px]"
            >
              <span className="text-xl font-semibold text-gray-300">
                {company}
              </span>
            </div>
          ))}
        </MarqueeScroll>
      </div>
    </section>
  );
}
