'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="bg-[#0C1F4A] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Let’s help you unlock innovation and achieve operational excellence through custom solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#00b34d] hover:bg-[#00bf63] text-[#ffffff] font-semibold px-8 py-4 rounded-xl transition duration-300"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
