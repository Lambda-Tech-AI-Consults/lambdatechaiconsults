"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const industries = [
  {
    title: "Energy",
    image: "/images/industries/energy.jpg",
    href: "/industries/energy",
  },
  {
    title: "Finance",
    image: "/images/industries/finance.jpg",
    href: "/industries/finance",
  },
  {
    title: "Healthcare",
    image: "/images/industries/healthcare.jpg",
    href: "/industries/healthcare",
  },
  {
    title: "Manufacturing",
    image: "/images/industries/manufacturing.jpg",
    href: "/industries/manufacturing",
  },
  {
    title: "Public Sector",
    image: "/images/industries/public-sector.jpg",
    href: "/industries/public-sector",
  },
  {
    title: "Retail",
    image: "/images/industries/retail.jpg",
    href: "/industries/retail",
  },
  {
    title: "Government & Civil Services",
    image: "/images/industries/government.jpg",
    href: "/industries/government",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#0c1f4a] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[#00b34d] font-semibold uppercase tracking-wide text-center">
          Industries We Serve
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Empowering Transformation Across Sectors
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${ind.image})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              {/* Text */}
              <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                <p className="text-xs font-semibold uppercase text-[#00b34d] mb-1">
                  Industry
                </p>
                <h3 className="text-xl font-bold mb-2">{ind.title}</h3>
                <Link
                  href={ind.href}
                  className="text-sm font-semibold text-[#00b34d] opacity-0 group-hover:opacity-100 transition"
                >
                  Explore →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
