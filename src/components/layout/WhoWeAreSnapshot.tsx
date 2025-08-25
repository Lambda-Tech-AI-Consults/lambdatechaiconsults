"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhoWeAreSnapshot() {
  return (
    <section className="relative bg-[#0c1f4a] text-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-[#00b34d] font-semibold uppercase tracking-wide">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Driving Transformation with Technology & Consulting
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            We are a consulting and technology services company helping industries
            transform with digital-first solutions. By bridging innovation and
            execution, we deliver strategies that accelerate growth, improve
            performance, and create long-term value.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-[#00b34d] hover:bg-[#009e40] rounded-md font-semibold transition"
          >
            Learn More About Us
          </Link>
        </motion.div>

        {/* RIGHT: VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <Image
            src="/images/about-placeholder.jpg" 
            alt="Who We Are"
            width={500}
            height={400}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
