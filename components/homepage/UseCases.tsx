"use client";

import { motion } from "framer-motion";
import { Sun, Users2, Phone, Briefcase } from "lucide-react";
import FloatingCards from "@/components/animations/FloatingCards";
import { Badge } from "@/components/ui/badge";

export default function UseCases() {
  const useCases = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Companies",
      description:
        "Automate initial candidate screening calls, gather basic information, verify qualifications, and schedule interviews with hiring managers.",
      stats: ["85% answer rate", "30s avg qualification", "10x more transfers"],
      badge: "Most Popular",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Lead Gen Agencies",
      description:
        "Conduct outbound, consistent, and scalable first-round interviews with AI voice agents trained on your questions and evaluation criteria.",
      stats: ["50% cost reduction", "24/7 availability", "Real-time reporting"],
      badge: "Best ROI",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Promotional Campaigns",
      description:
        "Deliver personalized marketing calls that engage users and drive conversions with natural-sounding AI conversations.",
      stats: ["2x engagement", "Personalized calls", "Higher conversion"],
      badge: "High Volume",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Use <span className="text-emerald-400">Cases</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Perfect for any industry that needs intelligent call automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <FloatingCards key={index} delay={index * 0.15}>
              <div className="glass rounded-3xl p-8 h-full border border-emerald-900/20 hover:border-emerald-500/50 transition-all duration-300 group relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                    {useCase.badge}
                  </Badge>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>

                {/* Stats */}
                <div className="space-y-2">
                  {useCase.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex items-center gap-2 text-emerald-400"
                    >
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span className="text-sm">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FloatingCards>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Not sure if AI Dialer is right for you?
          </p>
          <button className="mt-4 text-emerald-400 hover:text-emerald-300 font-semibold">
            Schedule a consultation →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
