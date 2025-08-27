"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#F3F4F6] text-[#0C1F4A] py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            <Link href="/" className="text-2xl font-bold text-[#0C1F4A]">
              <Image
                src="/images/Lamda long logo-light.png"
                alt="Energy"
                width={150}
                height={50}
                className="object-cover rounded-t-2xl"
              />
            </Link>
          </h3>
          <p className="text-sm text-gray-700">
            Delivering tailored solutions for growth and efficiency across
            industries.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-t mt-10 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
