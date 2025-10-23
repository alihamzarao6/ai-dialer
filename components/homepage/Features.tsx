"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Clock,
  PhoneCall,
  Target,
  TrendingUp,
} from "lucide-react";
import FloatingCards from "@/components/animations/FloatingCards";

export default function Features() {
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Local Presence Dialing",
      description:
        "Automatically dial leads using their local area code to maximize answer rates by up to 85%",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Voice Qualification",
      description:
        "Natural-sounding AI agents qualify leads in 20-30 seconds with human-like conversations",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Live Transfer",
      description:
        "Seamlessly transfer qualified leads to your sales team in real-time with zero delays",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Pay-Per-Success Model",
      description:
        "Only pay premium pricing for successful transfers with 60+ seconds talk time",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "TCPA/DNC Compliance",
      description:
        "Built-in compliance checks ensure all calls meet regulatory requirements",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Analytics",
      description:
        "Track call performance, conversion rates, and ROI with live dashboards",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Automation",
      description:
        "Never miss a lead with round-the-clock automated calling and qualification",
    },
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "Multi-Campaign Support",
      description:
        "Manage multiple campaigns with custom AI agents for different verticals",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Smart Routing",
      description:
        "Intelligently route leads to the best available rep based on performance and availability",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
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
            Powerful <span className="text-emerald-400">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to automate and scale your lead qualification
            process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FloatingCards key={index} delay={index * 0.05}>
              <div className="glass rounded-2xl p-6 h-full border border-emerald-900/20 hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </FloatingCards>
          ))}
        </div>

        {/* Advanced Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            And all the <span className="text-emerald-400">best functions</span> like:
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Communicate with the world",
              "Order Lookup",
              "Create Support Case",
              "Transfer Call to Humans",
              "IVR Call",
              "Model fine-tunable",
              "24/7 Available",
              "AI-Powered Call Scoring",
              "Call Scheduling",
              "Self-learning Agents",
              "Crystal-clear Audio",
              "Office Background Sound",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 border border-emerald-900/20 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 group-hover:scale-150 transition-transform" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
