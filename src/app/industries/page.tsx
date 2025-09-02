"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CTA from "@/components/layout/Cta";

const industries = [
  {
    name: "Energy",
    image: "/images/industries/energy.jpg",
    description:
      "We empower upstream oil & gas and renewable players with advanced digital solutions — from predictive analytics to field optimization — enabling efficiency, resilience, and sustainability.",
    link: "/industries/energy",
  },
  {
    name: "Finance",
    image: "/images/industries/finance.jpg",
    description:
      "Helping banks and financial institutions navigate disruption by leveraging data-driven strategies, compliance automation, and scalable digital platforms.",
    link: "/industries/finance",
  },
  {
    name: "Healthcare",
    image: "/images/industries/healthcare.jpg",
    description:
      "Transforming healthcare delivery through data intelligence, smarter operational models, and digital platforms that enhance patient outcomes.",
    link: "/industries/healthcare",
  },
  {
    name: "Manufacturing",
    image: "/images/industries/manufacturing.jpg",
    description:
      "Driving process improvement and efficiency through IoT, automation, and data-driven insights that streamline production and reduce waste.",
    link: "/industries/manufacturing",
  },
  {
    name: "Public Sector",
    image: "/images/industries/public-sector.jpg",
    description:
      "Partnering with governments and agencies to deliver transparency, accountability, and digital transformation that meets citizen expectations.",
    link: "/industries/public-sector",
  },
  {
    name: "Retail",
    image: "/images/industries/retail.jpg",
    description:
      "Helping retailers adapt to evolving consumer expectations by deploying intelligent systems, personalization, and agile platforms.",
    link: "/industries/retail",
  },
  {
    name: "Government & Civil Services",
    image: "/images/industries/government.jpg",
    description:
      "Enabling policy-driven innovation and seamless digital experiences that modernize government operations and service delivery.",
    link: "/industries/government-and-civil-services",
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#0C1F4A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
                  <Image
                    src="/images/hero-industries.jpg"
                    alt="Our Services"
                    fill
                    className="object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0C1F4A]/90 to-[#0C1F4A] opacity-50" />
                </div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            We bring intelligence, efficiency, and innovation across key sectors
            — from energy to healthcare and beyond.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-6">
          At LAMBDATECH AI, we bridge cross-industry insights with sector-specific expertise.
          Lessons from energy, finance, and healthcare feed into one another — enabling
          innovative, scalable, and sustainable transformation across industries.
        </p>
        <p className="text-lg text-gray-600">
          Whether modernizing operations, unlocking data-driven decisions, or driving digital adoption,
          our solutions adapt to the unique challenges of each sector.
        </p>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0C1F4A] mb-12">
            Key Industries
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0C1F4A] mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {industry.description}
                  </p>
                  <Link href={industry.link}>
                    <button className="border-2 border-[#0C1F4A] text-[#0C1F4A] font-medium px-5 py-2 rounded-full hover:bg-[#0C1F4A] hover:text-white transition">
                      Explore More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
