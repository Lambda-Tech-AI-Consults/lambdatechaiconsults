'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Industries = () => {
  return (
    <section className="bg-[#F5F9FB] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C1F4A] mb-4">
            Tailored Solutions for Every Sector
          </h2>
          <p className="text-gray-700 text-base">
            We work across multiple industries to deliver intelligent systems that solve real-world problems — from finance to healthcare, and beyond.
          </p>
        </motion.div>

        {/* Right - Featured Industry Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden md:w-1/2 max-w-md"
        >
          <div className="relative h-48 w-full bg-[#E0F7F5]">
            <Image
              src="/images/industries/energy.jpg"
              alt="Energy"
              fill
              className="object-cover rounded-t-2xl"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#0C1F4A] mb-2">Energy</h3>
            <p className="text-gray-600 mb-4 text-sm">
              We provide intelligent energy solutions using predictive analytics and real-time monitoring to optimize production, efficiency, and sustainability.
            </p>
            <Link href="/industries">
              <button className="border-2 border-[#1c1f4a] text-[#1c1f4a] font-semibold px-5 py-2 rounded-full hover:bg-[#1c1f4a] hover:text-white transition">
                Explore More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
