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
              src="/images/about-placeholder.jpg" 
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
          <h2 className="text-3xl font-bold text-[#0C1F4A] mb-4">About Lambdatech AI Consults</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            LambdaTech Analytics and Innovation Consulting Limited is a digital technology company dedicated to driving business execution strategies and sustainable reporting through digital transformation. We specialize in delivering transformative solutions with innovative technologies and expert consulting practices. 
          </p>
          <p className="text-gray-700 leading-relaxed">
             Our services also support supply chain demands for IT and cloud infrastructure, helping businesses excel in the digital era and achieve their strategic objectives. Our mission is to empower organizations to navigate the complexities of digital transformation and realize their full potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
