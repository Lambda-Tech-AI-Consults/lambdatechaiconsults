// components/layout/how-we-serve/HowWeServeHero.tsx
"use client";

import { motion } from "framer-motion";

export default function HowWeServeHero() {
  return (
    <section className="relative bg-[#0C1F4A] text-white py-24 overflow-hidden w-full">
      {/* Subtle abstract background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/patterns/digital-wave.png')] opacity-60 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1F4A]/80 via-[#0C1F4A]/90 to-[#0C1F4A]/95 opacity-40" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          How We Serve
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          From discovery to implementation, we partner end-to-end across
          strategy, design, engineering, and change enablement.
        </motion.p>
      </div>
    </section>
  );
}
