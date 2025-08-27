"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EnergyHero() {
  return (
    <section className="relative bg-[#0C1F4A] text-white py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/industries/energy-banner.jpg"
          alt="Energy Sector"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1F4A]/80 to-[#0C1F4A]" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Energy Sector Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Bridging innovation and execution in upstream oil & gas — delivering
          smart, scalable strategies that improve asset performance, reduce
          operational risk, and accelerate value delivery.
        </motion.p>
      </div>
    </section>
  );
}
