"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Innovateq",
    subtitle: "Pioneering AI-Driven Solutions",
    description:
      "Innovateq is a key partner in our mission to deliver cutting-edge AI solutions. Their expertise in machine learning and data science complements our consulting services, enabling us to provide comprehensive and innovative solutions to our clients.",
    image: "/images/partners/innovateq.png",
  },
  {
    name: "ADAGA e-Digital Solutions",
    subtitle: "Real-Time Drilling Optimization & Planning",
    description:
      "ADAGA’s suite of tools (ePerform, eStream, eSteering, etc.) enables real-time performance analysis and well planning. Through our partnership, LambdaTech delivers cost-efficient drilling workflows and accelerated decision-making for clients.",
    image: "/images/partners/adaga-logo.png",
  },
  {
    name: "Elite Energy",
    subtitle: "Hydrocarbon Accounting & Operational Risk",
    description:
      "Elite Energy supports hydrocarbon tracking, emissions modeling, and QRA/HSE compliance. LambdaTech integrates these tools into energy operations for enhanced transparency, safety, and regulatory alignment.",
    image: "/images/partners/elite-energy-logo.png",
  },
  {
    name: "ZNEXX Technologies",
    subtitle: "3D Virtualization & Operator Training Simulators",
    description:
      "Together with ZNEXX, we deliver high-fidelity virtual environments, OTS, and digital twins that simulate real-time operational scenarios. These platforms enhance training, planning, and performance reliability.",
    image: "/images/partners/znexx-logo.png",
  },
];

const PartnerHighlight = () => {
  return (
    <section className="py-20 px-4 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto space-y-20">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="flex-1 space-y-2">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Partnership Highlight
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0C1F4A]">
                {partner.name}: {partner.subtitle}
              </h2>
              <p className="text-gray-700 leading-relaxed">{partner.description}</p>
            </div>

            <div className="flex-1">
              <Image
                src={partner.image}
                alt={partner.name + " logo"}
                width={400}
                height={250}
                className="rounded-md shadow-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PartnerHighlight;
