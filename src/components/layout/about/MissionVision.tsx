"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#0c1f4a] via-[#14295c] to-[#0c1f4a] text-white py-20 overflow-hidden">
      {/* Subtle abstract background */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
        <FaBullseye className="w-72 h-72 text-white/20 -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start space-y-4"
        >
          <div className="flex items-center gap-3">
            <FaBullseye className="w-8 h-8 text-[#00b34d]" />
            <h2 className="text-3xl font-bold">Our Mission</h2>
          </div>
          <p className="text-white/80 leading-relaxed text-lg">
            To empower organizations with transformative AI, cloud, and analytics capabilities,
            enabling them to make data-driven decisions, optimize operations, and achieve
            sustainable competitive advantage.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start space-y-4"
        >
          <div className="flex items-center gap-3">
            <FaEye className="w-8 h-8 text-[#00b34d]" />
            <h2 className="text-3xl font-bold">Our Vision</h2>
          </div>
          <p className="text-white/80 leading-relaxed text-lg">
            To be the trusted partner for businesses seeking to leverage AI and digital
            technologies to shape the future—driving positive change across industries
            and communities worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
