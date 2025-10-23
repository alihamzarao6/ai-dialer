"use client";

import { motion } from "framer-motion";
import FloatingCards from "@/components/animations/FloatingCards";
import { CheckCircle2 } from "lucide-react";

export default function Integrations() {
  const integrations = [
    {
      name: "LeadProsper",
      description: "Lead management & dynamic pricing",
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
      className="py-32 bg-gradient-to-b from-emerald-950/10 to-[#001a0a] relative overflow-hidden"
    >
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <FloatingCards key={index} delay={index * 0.1}>
              <div className="glass rounded-2xl p-6 border border-emerald-900/20 hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}
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

        {/* Integration flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12 border border-emerald-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            How Everything Connects
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              "LeadProsper",
              "→",
              "CallTools",
              "→",
              "AI Agent",
              "→",
              "Your CRM",
            ].map((item, index) => (
              <div
                key={index}
                className={`${
                  item === "→"
                    ? "text-emerald-400 text-2xl"
                    : "px-6 py-3 bg-emerald-950/30 rounded-lg text-white font-semibold border border-emerald-900/30"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
