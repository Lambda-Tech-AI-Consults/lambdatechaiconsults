"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineRefresh,
  HiOutlineCloud,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
} from "react-icons/hi";

const services = [
  {
    icon: HiOutlineRefresh,
    title: "Digital Transformation",
    description:
      "Reimagine your business with innovative, digital-first strategies.",
    href: "/services/digital-transformation",
  },
  {
    icon: HiOutlineCloud,
    title: "Cloud Solutions",
    description:
      "Leverage the cloud for agility, scalability, and secure operations.",
    href: "/services/cloud-solutions",
  },
  {
    icon: HiOutlineChartBar,
    title: "Data & AI",
    description:
      "Unlock insights and intelligence with advanced analytics and AI.",
    href: "/services/data-and-ai",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Business Process Automation",
    description:
      "Automate workflows and boost efficiency across critical operations.",
    href: "/services/business-process-automation",
  },
];

export default function ServiceList() {
  const pathname = usePathname();
  const showLink = pathname === "/";

  return (
    <section className="bg-[#0c1f4a] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#00b34d] font-semibold uppercase tracking-wide">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Driving Innovation Through Technology
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-12">
          Explore our top services designed to help industries transform and
          scale in a digital-first world.
        </p>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white text-[#0c1f4a] rounded-xl shadow-md hover:shadow-lg p-6 transition relative group"
              >
                <div className="text-[#00b34d] text-4xl mb-4 flex justify-center">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-sm font-semibold text-[#00b34d] opacity-0 group-hover:opacity-100 transition"
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA for all services */}
        {showLink && (
          <div className="mt-10">
            <Link
              href="/services"
              className="px-6 py-3 bg-[#00b34d] hover:bg-[#009e40] text-white font-semibold rounded-lg transition"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
