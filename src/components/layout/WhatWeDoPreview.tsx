"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineCog, HiOutlineOfficeBuilding, HiOutlineCube } from "react-icons/hi";

const items = [
  {
    title: "Services",
    description: "End-to-end digital, consulting, and IT solutions.",
    href: "/services",
    icon: HiOutlineCog,
  },
  {
    title: "Industries",
    description: "Driving innovation across energy, finance, healthcare, and more.",
    href: "/industries",
    icon: HiOutlineOfficeBuilding,
  },
  {
    title: "Products & Platforms",
    description: "Accelerators, digital platforms, and partner technologies.",
    href: "/products-platforms",
    icon: HiOutlineCube,
  },
];

export default function WhatWeDoPreview() {
  return (
    <section className="bg-[#f9fafb] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#00b34d] font-semibold uppercase tracking-wide">
          What We Do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0c1f4a] mb-12">
          Empowering Industries Through Technology
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-8 transition cursor-pointer"
              >
                <div className="flex justify-center mb-4 text-[#00b34d] text-4xl">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-[#0c1f4a] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-block mt-4 text-[#00b34d] font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
