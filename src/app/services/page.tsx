"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCogs, FaGlobe, FaProjectDiagram } from "react-icons/fa";

const services = [
  {
    title: "Digital Transformation",
    description:
      "Empowering businesses to adapt and thrive through advanced technologies and innovative strategies.",
    image: "/images/services/digital-transformation.jpg",
    link: "/services/digital-transformation",
  },
  {
    title: "Application Services",
    description:
      "Modernizing and managing enterprise applications for agility, efficiency, and future readiness.",
    image: "/images/services/application-services.jpg",
    link: "/services/application-services",
  },
  {
    title: "Business Process Automation",
    description:
      "Optimizing business operations with AI-enabled platforms and human–machine collaboration.",
    image: "/images/services/process-automation.jpg",
    link: "/services/business-process-automation",
  },
  {
    title: "Cloud Solutions",
    description:
      "Designing, integrating, and managing cloud strategies that fuel innovation and growth.",
    image: "/images/services/cloud.jpg",
    link: "/services/cloud-solutions",
  },
  {
    title: "Consulting Services",
    description:
      "Reimagining organizations with enterprise process, technology, and sourcing expertise.",
    image: "/images/services/consulting.jpg",
    link: "/services/consulting-services",
  },
  {
    title: "Data & AI",
    description:
      "Transforming data into insights and enabling automation with AI-driven strategies.",
    image: "/images/services/data-ai.jpg",
    link: "/services/data-and-ai",
  },
  {
    title: "Software Development & Modernization",
    description:
      "Engineering, optimizing, and scaling digital platforms for tomorrow’s users.",
    image: "/images/services/software-dev.jpg",
    link: "/services/software-development-and-modernization",
  },
  {
    title: "IT Infrastructure & Operations",
    description:
      "Maximizing performance and value across IT assets, costs, and business operations.",
    image: "/images/services/it-infrastructure.jpg",
    link: "/services/it-infrastructure-and-operations",
  },
  {
    title: "Architecture & Modernization",
    description:
      "Building resilient architectures, modernizing legacy systems, and enabling APIs & microservices.",
    image: "/images/services/architecture.jpg",
    link: "/services/architecture-and-modernization",
  },
  {
    title: "Sustainability Services",
    description:
      "Helping organizations reduce environmental footprint and achieve ESG compliance.",
    image: "/images/services/sustainability.png",
    link: "/services/sustainability-services",
  },
  {
    title: "IT Training",
    description:
      "Upskilling teams with practical, future-focused IT training programs.",
    image: "/images/services/training.jpg",
    link: "/services/it-training",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative bg-[#0C1F4A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-services.jpg"
            alt="Our Services"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C1F4A]/90 to-[#0C1F4A] opacity-50" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            From digital transformation to AI-driven solutions, LAMBDATECH helps
            organizations innovate, modernize, and thrive in today’s
            fast-changing landscape.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0C1F4A] mb-4">
          Driving Impact Through Innovation
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At LAMBDATECH, we don’t just deliver services — we partner with you to
          transform ideas into scalable, sustainable solutions. Our end-to-end
          approach ensures strategy, design, engineering, and change management
          all work seamlessly together to drive real business outcomes.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0C1F4A] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <Link href={service.link}>
                  <button className="border-2 border-[#0C1F4A] text-[#0C1F4A] font-semibold px-5 py-2 rounded-full hover:bg-[#0C1F4A] hover:text-white transition">
                    Explore More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0C1F4A] mb-12">
            Why Choose LAMBDATECH?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            {/* Domain Expertise */}
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex justify-center mb-4 text-[#00B34D] text-4xl">
                <FaCogs />
              </div>
              <h3 className="font-semibold text-lg mb-2">Domain Expertise</h3>
              <p>
                Years of experience across industries with deep technical
                understanding.
              </p>
            </div>

            {/* Global Partnerships */}
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex justify-center mb-4 text-[#00B34D] text-4xl">
                <FaGlobe />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Global Partnerships
              </h3>
              <p>
                Strategic alliances with leading technology providers ensure
                world-class delivery.
              </p>
            </div>

            {/* End-to-End Delivery */}
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex justify-center mb-4 text-[#00B34D] text-4xl">
                <FaProjectDiagram />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                End-to-End Delivery
              </h3>
              <p>
                From strategy to execution, we ensure every solution is
                actionable, scalable, and sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
