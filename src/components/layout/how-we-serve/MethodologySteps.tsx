// components/layout/how-we-serve/OurModelMethodology.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MethodologySteps() {
  return (
    <section className="relative bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C1F4A] mb-6">
            Our Model & Methodology
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At LambdaTech AI, we follow a refined methodology designed to
            deliver value at every stage of a client’s transformation journey.
            Our model ensures that innovation is not only insightful but
            actionable, scalable, and sustainable.
          </p>
        </motion.div>

        {/* Right: Visual Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 relative"
        >
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src="/images/patterns/process-diagram.png" 
              alt="Abstract illustration"
              fill
              className="object-contain opacity-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
