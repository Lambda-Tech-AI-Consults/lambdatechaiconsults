"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const partners = [
  { name: "Adaga Solutions", logo: "/images/partners/adaga-logo.png" },
  { name: "InnovateQ", logo: "/images/partners/innovateq.png" },
  { name: "Elite Energy", logo: "/images/partners/elite-energy.png" },
  { name: "Shell", logo: "/images/partners/shell.svg" },
  { name: "EnergySys", logo: "/images/partners/energysys.webp" },
  { name: "Nibras", logo: "/images/partners/nibras.webp" },
  { name: "Seplat Energy", logo: "/images/partners/seplatenergy.png" },
];

const Partners = () => {
  const pathname = usePathname();
  const showLink = pathname == "/";
  const controls = useAnimation();

  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        await controls.start({
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          },
        });
      }
    };

    loopAnimation();
  }, [controls]);

  return (
    <section className="py-20 px-4 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-[#0C1F4A] mb-6"
        >
          Our Trusted Partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-10"
        >
          Collaborating with visionary brands across industries
        </motion.p>

        <div className="relative overflow-x-auto scrollbar-hide cursor-grab">
          <motion.div
            animate={controls}
            className="flex gap-10 min-w-max"
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() =>
              controls.start({
                x: ["0%", "-100%"],
                transition: {
                  ease: "linear",
                  duration: 30,
                  repeat: Infinity,
                },
              })
            }
          >
            {/* Duplicate logos for seamless infinite scroll */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="relative h-16 w-32 flex-shrink-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
        {showLink && (
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-6">
            <Link
              href="/partners"
              className="px-6 py-3 bg-[#1c1f4a] hover:bg-[#0f0f3b] text-white font-semibold rounded transition"
            >
              Learn More
            </Link>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm mt-4">
            Interested in partnering with us?{" "}
            <Link href="/contact" className="text-[#1c1f4a] hover:underline">
              Contact us
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
