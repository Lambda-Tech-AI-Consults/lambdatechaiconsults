"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";


const services = [
  {
    icon: "🔄",
    title: "Digital Transformation & Business Automation",
    description: "Modernize workflows and drive efficiency with intelligent automation.",
  },
  {
    icon: "🧠",
    title: "Innovation Strategy Consulting",
    description: "Fuel business growth through expert strategic planning and market innovation.",
  },
  {
    icon: "☁️",
    title: "Software Development & Cloud Solutions",
    description: "Build scalable apps and embrace the cloud with confidence.",
  },
  {
    icon: "📊",
    title: "Data & AI",
    description: "Leverage data-driven insights and AI tools to gain a competitive edge.",
  },
];

const ServiceList = () => {
  const pathname = usePathname();
  const showLink = pathname === "/";

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0C1F4A] mb-12 text-center">
          Our Services
        </h2>
        <p className="text-gray-600 mb-6Z">
          Explore our range of AI-powered and data-driven solutions designed to
          empower businesses across all industries.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#F9FAFB] p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#0C1F4A] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
        {showLink && (
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-6">
            <Link
              href="/services"
              className="px-6 py-3 bg-[#1c1f4a] hover:bg-[#0f0f3b] text-white font-semibold rounded transition"
            >
              Learn More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceList;
