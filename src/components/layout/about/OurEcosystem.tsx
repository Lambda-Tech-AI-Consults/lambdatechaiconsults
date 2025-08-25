"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const partners = [
  { name: "iNNOVATEQ", logo: "/images/partners/iNNOVATEQ.png" },
  { name: "Microsoft", logo: "/images/partners/microsoft.png" },
  { name: "AWS", logo: "/images/partners/aws.png" },
  { name: "Google Cloud", logo: "/images/partners/google.png" },
  { name: "Oracle", logo: "/images/partners/oracle.png" },
  { name: "SAP", logo: "/images/partners/sap.png" },
];

export default function OurEcosystem() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0C1F4A] mb-4">
          Our Partners & Ecosystem
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We collaborate with global leaders to deliver innovative solutions.
        </p>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/partners"
            className="inline-block px-6 py-3 bg-[#0c1f4a] text-white rounded font-semibold hover:bg-[#00b34d] transition"
          >
            See Our Partners
          </Link>
        </div>
      </div>
    </section>
  );
}
