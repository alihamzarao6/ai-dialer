"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Phone,
  Bot,
  Users,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import FloatingCards from "@/components/animations/FloatingCards";

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Lead Generated",
      description: "New inbound lead enters LeadProsper through your campaigns and marketing channels",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Presence Dial",
      description:
        "CallTools automatically dials using local area code for higher answer rates",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Qualification",
      description:
        "AI voice agent qualifies the lead in 20-30 seconds with natural conversation",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Live Transfer",
      description:
        "Qualified leads are instantly transferred to your available sales reps for closing",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Pay for Success",
      description:
        "Premium pricing charged only if transfer successful with 60+ seconds talk time",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 relative overflow-hidden"
    >
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-emerald-400">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Automated lead qualification in 5 simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mb-8">
            {steps.slice(0, 3).map((step, index) => (
              <FloatingCards key={index} delay={index * 0.1}>
                <div className="relative">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                    {index + 1}
                  </div>

                  <div className="glass rounded-2xl p-6 h-full border border-emerald-900/20 hover:border-emerald-500/50 transition-all duration-300 group">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-linear-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </FloatingCards>
            ))}
          </div>

          {/* Bottom row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full relative z-10">
              {steps.slice(3).map((step, index) => (
                <FloatingCards key={index + 3} delay={(index + 3) * 0.1}>
                  <div className="relative">
                    {/* Step number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                      {index + 4}
                    </div>

                    <div className="glass rounded-2xl p-6 h-full border border-emerald-900/20 hover:border-emerald-500/50 transition-all duration-300 group">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-linear-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {step.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                </FloatingCards>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Complete setup in under 15 minutes
          </p>
          <button className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-2 mx-auto">
            Watch Setup Guide <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
