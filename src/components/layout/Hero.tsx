"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0c1f4a] text-white overflow-hidden">
      {/* Background pattern / gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1f4a] via-[#0c1f4a] to-[#00b34d]/30" />
      {/* Optional: digital globe / abstract pattern as background */}
      <div className="absolute inset-0 bg-[url('/images/digital-globe.png')] bg-cover bg-center opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        {/* Animated tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Reimagining Business Through <br />
          <span className="text-[#00b34d]">Technology, Innovation</span>, <br />
          and Human Ingenuity
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
        >
          We help organizations transform, innovate, and thrive in a
          technology-driven world.
        </motion.p>

        {/* Call-to-actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/services"
            className="px-6 py-3 bg-[#00b34d] hover:bg-[#009e40] text-white font-semibold rounded-lg shadow transition"
          >
            Explore Our Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg shadow transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
