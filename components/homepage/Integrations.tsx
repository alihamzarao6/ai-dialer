"use client";

import { motion } from "framer-motion";
import FloatingCards from "@/components/animations/FloatingCards";
import { CheckCircle2 } from "lucide-react";

export default function Integrations() {
  const integrations = [
    {
      name: "LeadProsper",
      description: "Lead inflate & dynamic pricing",
      logo: "LP",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "CallTools",
      description: "Local presence dialing system",
      logo: "CT",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Synthflow",
      description: "AI voice agent platform",
      logo: "SF",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      name: "GoHighLevel",
      description: "CRM & marketing automation",
      logo: "GHL",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Twilio",
      description: "Cloud communications platform",
      logo: "TW",
      color: "from-red-500 to-red-600",
    },
    {
      name: "11Labs",
      description: "Advanced AI voice synthesis",
      logo: "11L",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section
      id="integrations"
      className="py-24 relative overflow-hidden"
    >
      {/* Top corner glows - extend above section boundary */}
      <div className="absolute -top-48 left-0 w-[700px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_70%)]" />
      </div>
      <div className="absolute -top-48 right-0 w-[700px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.15),transparent_70%)]" />
      </div>

      {/* Bottom corner glows - extend below section boundary */}
      <div className="absolute -bottom-48 left-0 w-[700px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(52,211,153,0.15),transparent_70%)]" />
      </div>
      <div className="absolute -bottom-48 right-0 w-[700px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.15),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Seamless <span className="text-emerald-400">Integrations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Works with the tools you already use
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <FloatingCards key={index} delay={index * 0.1}>
              <div className="glass rounded-2xl p-6 border border-emerald-900/20 hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 bg-linear-to-br ${integration.color} rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {integration.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {integration.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {integration.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-emerald-400 text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Connected</span>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCards>
          ))}
        </div>
      </div>
    </section>
  );
}
