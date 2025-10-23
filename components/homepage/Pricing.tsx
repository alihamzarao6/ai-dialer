"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import FloatingCards from "@/components/animations/FloatingCards";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  const plans = [
    {
      name: "Pay-as-you-Go",
      price: "Free",
      description: "Perfect for testing and small campaigns",
      features: [
        "Full access to public models",
        "Generate speech in 14 languages",
        "Unlimited pre-made AI agents",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "For agencies and high-volume operations",
      features: [
        "Include all Pro features",
        "Dedicated account manager",
        "Volume discounts",
        "Custom integrations and configuration support",
      ],
      cta: "Contact for a quote",
      popular: true,
    },
  ];

  return (
    <section
      id="pricing"
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
            Simple <span className="text-emerald-400">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pay only for successful transfers. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <FloatingCards key={index} delay={index * 0.2}>
              <div
                className={`glass rounded-3xl p-8 h-full border ${
                  plan.popular
                    ? "border-emerald-500/50 bg-linear-to-b from-emerald-950/30 to-transparent"
                    : "border-emerald-900/20"
                } relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-emerald-500 text-white">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-emerald-950/50 hover:bg-emerald-950/70 text-emerald-400 border border-emerald-500/30"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </FloatingCards>
          ))}
        </div>

        {/* Pricing details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12 border border-emerald-500/20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Pay-Per-Success Pricing Model
            </h3>
            <p className="text-gray-400">
              You only pay when we deliver qualified, engaged leads
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-emerald-950/20 rounded-xl">
              <div className="text-2xl font-bold text-emerald-400 mb-2">
                Base Rate
              </div>
              <p className="text-gray-400 text-sm">For answered calls</p>
            </div>
            <div className="text-center p-6 bg-emerald-950/20 rounded-xl">
              <div className="text-2xl font-bold text-emerald-400 mb-2">
                Premium Rate
              </div>
              <p className="text-gray-400 text-sm">
                Successful transfer (60s+ talk time)
              </p>
            </div>
            <div className="text-center p-6 bg-emerald-950/20 rounded-xl">
              <div className="text-2xl font-bold text-emerald-400 mb-2">
                No Charge
              </div>
              <p className="text-gray-400 text-sm">Failed calls or no answer</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">Have questions about pricing?</p>
          <button className="mt-2 text-emerald-400 hover:text-emerald-300 font-semibold">
            View FAQ →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
