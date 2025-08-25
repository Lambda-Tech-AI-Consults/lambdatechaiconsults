"use client";

import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";
import { MdVerifiedUser, MdShowChart } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

const values = [
  {
    title: "Innovation",
    icon: <FaLightbulb className="w-10 h-10 text-[#00b34d]" />,
    description:
      "We embrace creativity and continuous learning to develop groundbreaking solutions.",
  },
  {
    title: "Integrity",
    icon: <MdVerifiedUser className="w-10 h-10 text-[#00b34d]" />,
    description:
      "We uphold the highest ethical standards, ensuring transparency and trust in all our interactions.",
  },
  {
    title: "Partnership",
    icon: <HiUserGroup className="w-10 h-10 text-[#00b34d]" />,
    description:
      "We collaborate closely with our clients, building strong relationships based on mutual respect and shared goals.",
  },
  {
    title: "Impact",
    icon: <MdShowChart className="w-10 h-10 text-[#00b34d]" />,
    description:
      "We are committed to delivering measurable results that create lasting value for our clients and society.",
  },
];

export default function CoreValues() {
  return (
    <section className="relative w-full bg-[#0c1f4a] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0, 179, 77, 0.6)",
              }}
              className="bg-[#14295c] rounded-xl p-8 text-center space-y-4 cursor-pointer transition-all duration-300"
            >
              <div className="flex justify-center">{value.icon}</div>
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
