// components/layout/services/ServiceTemplate.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ApproachItem = {
  icon: string;
  title: string;
  detail: string;
};

type CapabilityItem = {
  title: string;
  description: string;
  image: string;
  icon?: string;
};

type ServiceTemplateProps = {
  title: string;
  description: string;
  heroImage: string;
  overview: string;
  approach: ApproachItem[];
  capabilities: CapabilityItem[];
};

export default function ServiceTemplate({
  title,
  description,
  heroImage,
  overview,
  approach,
  capabilities,
}: ServiceTemplateProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#0C1F4A] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200">{description}</p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-80 md:h-[420px]"
          >
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white mx-auto p-20 text-center w-full">
        <h2 className="text-3xl font-semibold text-[#0C1F4A] mb-6">
          Service Overview
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">{overview}</p>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-14 text-[#0C1F4A]">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {approach.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center border border-gray-100"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#0C1F4A]">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-3xl font-semibold text-center mb-10 text-[#0C1F4A]">
            Our Capabilities
          </h2>

          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full h-72 md:h-[400px] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#0C1F4A] flex items-center gap-2">
                  {cap.icon && <span className="text-2xl">{cap.icon}</span>}
                  {cap.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
