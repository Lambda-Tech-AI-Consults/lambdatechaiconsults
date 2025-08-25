// components/layout/how-we-serve/StrategicFramework.tsx
"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: "🤝",
    title: "Consultation",
    description:
      "We begin by understanding your business challenges, needs, and goals. This discovery phase helps us align our expertise with your unique context.",
  },
  {
    icon: "🧭",
    title: "Strategy",
    description:
      "We design a tailored roadmap, aligning business objectives with scalable digital and data-driven strategies.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "We apply cutting-edge technologies — AI, automation, analytics, cloud, and modern platforms — to engineer impactful, future-ready solutions.",
  },
  {
    icon: "🚀",
    title: "Implementation",
    description:
      "With speed, precision, and agility, we deploy, integrate, and operationalize solutions — ensuring change readiness, knowledge transfer, and long-term impact.",
  },
];

export default function StrategicFramework() {
  return (
    <section className="bg-[#F9FAFB] py-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#0C1F4A] mb-6"
        >
          Our Strategic Delivery Framework
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-16"
        >
          From discovery to implementation, our framework ensures your
          transformation journey is structured, scalable, and sustainable.
        </motion.p>

        {/* Timeline / Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-[#0C1F4A] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
