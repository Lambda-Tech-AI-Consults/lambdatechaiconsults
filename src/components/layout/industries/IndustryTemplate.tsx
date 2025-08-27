// components/layout/industries/IndustryTemplate.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Challenge {
  title: string;
  description: string;
  icon?: string; // optional for styling
}

interface Service {
  id: string; // slug to link
  title: string;
  description: string;
  image: string;
}

interface IndustryTemplateProps {
  industryName: string;
  tagline: string;
  overview: string;
  heroImage: string;
  challenges: Challenge[];
  services: Service[];
}

export default function IndustryTemplate({
  industryName,
  tagline,
  overview,
  heroImage,
  challenges,
  services,
}: IndustryTemplateProps) {
  return (
    <div className="bg-[#F9FAFB] text-gray-700">
      {/* Hero Section */}
      <section className="relative bg-[#0C1F4A] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {industryName}
            </h1>
            <p className="text-lg md:text-xl text-gray-200">{tagline}</p>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={heroImage}
              alt={industryName}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-[#0C1F4A]">Overview</h2>
        <p className="text-gray-700 text-lg leading-relaxed">{overview}</p>
      </section>

      {/* Challenges We Solve */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-[#0C1F4A] text-center mb-12">
          Challenges We Solve
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">
                {challenge.icon || "✨"}
              </div>
              <h3 className="text-lg font-semibold text-[#0C1F4A] mb-2">
                {challenge.title}
              </h3>
              <p className="text-gray-600">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Solutions */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-[#0C1F4A] text-center mb-12">
          Our Solutions in {industryName}
        </h2>
        <div className="flex flex-col gap-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center bg-white rounded-2xl shadow-md overflow-hidden`}
            >
              {/* Image */}
              <div className="relative h-56 md:h-72 w-full md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text */}
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-semibold text-[#0C1F4A] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={`/services/${service.id}`}>
                  <button className="border-2 border-[#1c1f4a] text-[#1c1f4a] font-semibold px-5 py-2 rounded-full hover:bg-[#1c1f4a] hover:text-white transition">
                    Explore More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C1F4A] text-white py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to transform your {industryName.toLowerCase()}?
        </h2>
        <p className="mb-6 text-gray-200">
          Let’s explore how our expertise can create lasting impact.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-[#0C1F4A] rounded-lg font-semibold shadow hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
