"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import AudioWaveform from "@/components/animations/AudioWaveform";
import GlowingOrb from "@/components/animations/GlowingOrb";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-linear-to-b from-emerald-950/20 to-[#001a0a]" />
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block"
        >
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            AI-Powered Lead Qualification
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Voice AI for{" "}
          <span className="bg-linear-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Businesses
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
        >
          Automatically call, qualify, and transfer leads with AI voice agents.
          Local presence dialing with pay-per-success pricing.
        </motion.p>

        {/* Audio Waveform */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <AudioWaveform />
        </motion.div>

        {/* Glowing Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <GlowingOrb />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-full glow-green"
          >
            Try for Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-6 text-lg rounded-full"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "10x", label: "Faster Response" },
            { value: "85%", label: "Contact Rate" },
            { value: "60s", label: "Avg. Qualification" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Smooth visible green gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none">
        {/* Visible light green to transparent gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-emerald-500/0 via-emerald-600/15 to-emerald-600/30" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-500/10 to-emerald-400/20" />

        {/* Additional glow layer */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-b from-transparent via-emerald-500/15 to-emerald-600/25" />
      </div>
    </section>
  );
}
