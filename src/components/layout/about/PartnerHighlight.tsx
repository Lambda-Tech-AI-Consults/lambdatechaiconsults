"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PartnerHighlight() {
  return (
    <section className="relative bg-white text-[#0C1F4A] py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-4"
        >
          <p className="text-sm uppercase tracking-wider text-[#00b34d]">
            Partnership Highlight
          </p>
          <h2 className="text-3xl font-bold leading-tight">
            iNNOVATEQ: Pioneering AI-Driven Solutions
          </h2>
          <p className="text-[#0C1F4A]/90 leading-relaxed">
            iNNOVATEQ is a key partner in our mission to deliver cutting-edge AI
            solutions. Their expertise in machine learning and data science
            complements our consulting services, enabling us to provide
            comprehensive and innovative solutions to our clients.
          </p>

          <Link
            href="/partners"
            className="inline-block mt-4 px-6 py-3 bg-[#00b34d] hover:bg-[#009e40] text-white font-semibold rounded-lg transition"
          >
            See All Partners
          </Link>
        </motion.div>

        {/* Right Logo / Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center w-[320px] h-[220px]">
            <Image
              src="/images/partners/iNNOVATEQ.png"
              alt="iNNOVATEQ logo"
              width={220}
              height={120}
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Abstract Circle */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#00b34d]/10 rounded-full blur-2xl pointer-events-none" />
    </section>
  );
}
