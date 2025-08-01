'use client';
import Image from 'next/image'
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <div className="w-full h-[300px] bg-[#E0F7F5] rounded-xl shadow-md relative" >
            <Image
              src="/images/about-placeholder.jpg" // Replace with your actual image path
              alt="About Us"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-[#0C1F4A] mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            LambdaTech AI is a future-forward consulting agency helping businesses embrace the power of artificial intelligence, automation, and digital transformation. 
          </p>
          <p className="text-gray-700 leading-relaxed">
            We combine strategy, design, and cutting-edge tech to deliver scalable solutions and real impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
