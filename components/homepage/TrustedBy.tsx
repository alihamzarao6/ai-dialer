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
    <section className="py-24 relative overflow-hidden">
      {/* Top corner glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12),transparent_70%)]" />
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.12),transparent_70%)]" />
      </div>

      {/* Bottom corner glows */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(52,211,153,0.12),transparent_70%)]" />
      </div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.12),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
