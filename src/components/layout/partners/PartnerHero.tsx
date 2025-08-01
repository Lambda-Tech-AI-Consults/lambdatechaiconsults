'use client'

import { motion } from 'framer-motion'

const PartnerHero = () => (
  <section className="bg-[#F0F4F9] py-20 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold mb-4">Strategic Partnerships Powering Innovation</h2>
      <p className="text-lg text-gray-600">
        At LamdaTech, we collaborate with leading organizations to build energy solutions that transform industries and drive sustainable progress.
      </p>
    </motion.div>
  </section>
)

export default PartnerHero