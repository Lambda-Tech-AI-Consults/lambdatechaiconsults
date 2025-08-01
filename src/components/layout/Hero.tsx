'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-black text-white flex items-center">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg" // Replace with your actual image path
        alt="Hero background"
        fill
        className="object-cover object-center opacity-80 z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00b34d]/40 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-20 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-4"
        >
          Transforming Ideas into Intelligent Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg max-w-xl text-white/90 mb-6"
        >
          We bridge the gap between strategy and execution through smart innovation and expert consulting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#1c1f4a] hover:bg-[#0f0f3b] text-white font-semibold rounded transition"
          >
            Book a Consultation
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black font-semibold rounded transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
