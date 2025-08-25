// components/layout/industries/IndustryTemplate.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface IndustryTemplateProps {
  name: string;
  tagline: string;
  context: string;
  approach: string;
  relevantServices: string[];
}

export default function IndustryTemplate({
  name,
  tagline,
  context,
  approach,
  relevantServices,
}: IndustryTemplateProps) {
  return (
    <section className="bg-[#F9FAFB] text-gray-700">
      {/* Hero */}
      <div className="relative bg-[#0C1F4A] text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {name}
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          {tagline}
        </p>
      </div>

      {/* Industry Context */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-2xl font-bold text-[#0C1F4A]">Industry Context</h2>
        <p className="text-gray-700 leading-relaxed">{context}</p>
      </div>

      {/* Our Approach */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-2xl font-bold text-[#0C1F4A]">Our Approach</h2>
        <p className="text-gray-700 leading-relaxed">{approach}</p>
      </div>

      {/* Relevant Services */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#0C1F4A] mb-8">
          Services for {name}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relevantServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[#0C1F4A]">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-16">
        <Link
          href="/contact"
          className="px-6 py-3 bg-[#0C1F4A] hover:bg-[#1c2d6b] text-white font-semibold rounded transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
