// app/industries/energy/page.tsx
"use client";

import CaseStudy from "@/components/layout/services/CaseStudy";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaCheckCircle, FaBolt, FaLayerGroup } from "react-icons/fa";

const differentiators = [
  {
    icon: <FaGlobe className="w-6 h-6 text-[#1c1f4a]" />,
    title: "Local + Global Expertise",
    description:
      "Fusion of Nigerian market insight with international best practices.",
  },
  {
    icon: <FaLayerGroup className="w-6 h-6 text-[#1c1f4a]" />,
    title: "OEM Partnerships",
    description:
      "Backed by collaborations with globally respected technology providers.",
  },
  {
    icon: <FaCheckCircle className="w-6 h-6 text-[#1c1f4a]" />,
    title: "Proven Methodology",
    description:
      "Specialized models for WRFM optimization and energy digitalization.",
  },
  {
    icon: <FaBolt className="w-6 h-6 text-[#1c1f4a]" />,
    title: "Agile Delivery",
    description: "Rapid, scalable solutions with measurable business outcomes.",
  },
];

export default function EnergyPage() {
  return (
    <main className="bg-[#F9FAFB] text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#0C1F4A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/industries/energy.jpg"
            alt="Energy sector"
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
            Energy Innovation & Digital Transformation
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Driving performance, reducing risk, and accelerating value for the
            energy sector with smart, scalable strategies.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-[#0C1F4A]">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          We provide tailored digital and technical solutions to the energy sector,
          with a focus on upstream oil & gas operations. We bridge innovation and
          execution, offering smart, scalable strategies that improve asset
          performance, reduce operational risk, and accelerate value delivery.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Backed by strategic partnerships with globally respected OEMs, our
          consulting and delivery model fuses local market insight with
          international standards. Whether navigating technical challenges,
          deploying digital twins, or optimizing WRFM performance, LambdaTech
          ensures you’re equipped to lead with precision and efficiency.
        </p>
      </section>

      {/* Offerings */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0C1F4A] mb-10">
            Our Specialized Energy Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrated Production Modelling",
                desc: "Advanced IPM for optimizing field performance and production forecasting.",
                img: "/images/industries/lambdatech OTS.png",
              },
              {
                title: "Reservoir Engineering",
                desc: "Supporting full-field development planning, dynamic modeling, and performance forecasting.",
                img: "/images/industries/energy4.jpg",
              },
              {
                title: "Subsurface & Geoscience",
                desc: "High-value interpretation and modeling to improve drilling, completions, and production optimization.",
                img: "/images/industries/lambdatech subsurface.png",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-[#F9FAFB] rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0C1F4A] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Outsourcing */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0C1F4A] mb-6">
          Specialized Outsourcing Services
        </h2>
        <p className="text-gray-700 mb-8 max-w-3xl">
          We act as your offsite technical arm — responsive, reliable, and
          results-driven. Our outsourcing services cover IPM, PVT Studies,
          Reservoir Engineering, Subsurface Interpretation, and more —
          delivering agility and cost-efficiency.
        </p>
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            "Integrated Production Modelling (IPM) & PVT Studies",
            "Reservoir Engineering & Subsurface Support",
            "Field Development Planning & Advisory",
            "Multidisciplinary Technical Teams",
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 bg-white p-5 rounded-lg shadow"
            >
              <span className="text-[#1c1f4a] text-lg">✔</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Deep-Dive Capabilities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0C1F4A] mb-6">
            Deep-Dive Capabilities
          </h2>
          <p className="text-gray-700 mb-8">
            From discovery to decline, we conduct integrated field studies,
            reservoir characterization, and economic screening that align
            subsurface analysis with operational planning and long-term value.
          </p>
        </div>
      </section>

      {/* Advantage */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-[#F9FAFB] to-[#E8F1FF]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0C1F4A] mb-10 text-center">
            Our Advantage
          </h2>

            {/* Differentiators */}
            <div className="space-y-6">
              {differentiators.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white shadow-sm rounded-xl p-5 hover:shadow-md transition"
                >
                  <div className="p-3 rounded-lg bg-[#E8F1FF] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0C1F4A]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudy />

      {/* CTA */}
      <section className="py-20 bg-[#0C1F4A] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Energy Operations?
        </h2>
        <p className="mb-6 text-gray-300">
          Partner with LambdaTech to unlock efficiency, scalability, and
          resilience in the energy sector.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-[#0C1F4A] font-semibold rounded hover:bg-gray-200 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
