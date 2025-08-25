"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-[#0c1f4a] text-white py-24 overflow-hidden">
      {/* Background Pattern / Globe */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/digital-globe.png" // use the transparent globe/pattern
          alt="Digital Globe Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <p className="uppercase text-[#00b34d] font-semibold tracking-wider mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Driving Transformation Through{" "}
            <span className="text-[#00b34d]">Technology & Strategy</span>
          </h1>
          <p className="text-white/80 mb-8 text-lg">
            We are a consulting and technology services company helping industries
            transform with digital-first solutions, data-driven insights, and
            scalable innovation.
          </p>
          <Link
            href="#mission-vision"
            className="inline-block px-6 py-3 bg-[#00b34d] hover:bg-[#009e40] text-white font-semibold rounded-lg transition"
          >
            Learn More About Us
          </Link>
        </motion.div>

        {/* RIGHT: Globe Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/digital-globe.png"
            alt="Digital Globe"
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
