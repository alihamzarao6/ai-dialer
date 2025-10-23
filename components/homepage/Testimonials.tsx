"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import FloatingCards from "@/components/animations/FloatingCards";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John P.",
      role: "HR Manager, TechCorp",
      image: "👤",
      content:
        "Avuvo has completely streamlined our recruitment process. The AI voices feel so natural - candidates can't tell the difference. Saved us countless hours.",
      rating: 5,
    },
    {
      name: "Jenny Wilson",
      role: "CEO, Eduino",
      image: "👤",
      content:
        "Our candidate screening has never been more efficient. 24/7 assistance at an unbeatable cost. Best hiring investment we've made.",
      rating: 5,
    },
    {
      name: "Wade Warren",
      role: "Marketing Lead, GrowthBoost",
      image: "👤",
      content:
        "The promotional capabilities allowed us to expand into new markets effortlessly. Response rates have never been better!",
      rating: 5,
    },
    {
      name: "Esther Howard",
      role: "Freelance Content Creator",
      image: "👤",
      content:
        "I'm amazed at how easy it is to create and optimize voice campaigns. The analytics dashboard gave me insights we never thought possible.",
      rating: 5,
    },
    {
      name: "Jane Cooper",
      role: "Operations Head, ThriveUP",
      image: "👤",
      content:
        "The analytics dashboard gave us insights we never thought possible. Data-driven decisions have transformed our operations.",
      rating: 5,
    },
    {
      name: "Darlene Robertson",
      role: "Founder, HealthConnect",
      image: "👤",
      content:
        "Avuvo helped us cut costs while improving customer satisfaction. The AI voices are incredibly natural and effective.",
      rating: 5,
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
            What People Say <span className="text-emerald-400">About Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See What Our Users Are Saying About Their Experience with AI Voice
            Campaigns!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FloatingCards key={index} delay={index * 0.1}>
              <div className="glass rounded-2xl p-6 h-full border border-emerald-900/20 hover:border-emerald-500/30 transition-all duration-300">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-emerald-400 text-emerald-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-emerald-900/20">
                  <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCards>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 glass rounded-3xl p-8 border border-emerald-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            The future of AI speech is here
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unlike other voice-based systems, Avuvo integrates speech
            recognition directly, without relying on transforming speech into
            text. This makes Avuvo faster, more accurate, and more natural than
            ever before.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
