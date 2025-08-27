"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

type Active = "Who We Are" | "What We Do" | null;

const SERVICES = [
  "Digital Transformation",
  "Application Services",
  "Business Process Automation",
  "Cloud Solutions",
  "Consulting Services",
  "Data and AI",
  "Software Development and Modernization",
  "IT Infrastructure and Operations",
  "Architecture and Modernization",
  "Sustainability Services",
  "IT Training",
];

const INDUSTRIES = [
  "Energy",
  "Finance",
  "Healthcare",
  "Manufacturing",
  "Public Sector",
  "Retail",
  "Government and Civil Services",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<Active>(null);

  return (
    <header className="sticky top-0 z-50 bg-[#0c1f4a] text-white">
      {/* WRAPPER catches mouse leave so the menu doesn't collapse when moving to the panel */}
      <div
        className="border-b border-white/10"
        onMouseLeave={() => setActive(null)}
      >
        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/Lamda long logo-dark.png"
              alt="LambdaTech"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Who We Are */}
            <button
              className="flex items-center gap-1 font-medium hover:text-[#00b34d] transition"
              onMouseEnter={() => setActive("Who We Are")}
            >
              Who We Are
              <HiChevronDown
                className={`transition-transform ${active === "Who We Are" ? "rotate-180" : ""}`}
              />
            </button>

            {/* What We Do */}
            <button
              className="flex items-center gap-1 font-medium hover:text-[#00b34d] transition"
              onMouseEnter={() => setActive("What We Do")}
            >
              What We Do
              <HiChevronDown
                className={`transition-transform ${active === "What We Do" ? "rotate-180" : ""}`}
              />
            </button>

            {/* Our Partners (fix applied) */}
            <Link
              href="/partners"
              className="font-medium hover:text-[#00b34d] transition"
              onMouseEnter={() => setActive(null)} // ✅ closes dropdown
            >
              Our Partners
            </Link>

            {/* Get in Touch (fix applied) */}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 bg-[#00b34d] hover:bg-[#009e40] text-white font-semibold rounded transition"
              onMouseEnter={() => setActive(null)} // ✅ closes dropdown
            >
              Get in Touch
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* MEGA AREA (expands header height) */}
        <AnimatePresence initial={false}>
          {active && (
            <motion.div
              key={active}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#0c1f4a]"
            >
              <div className="max-w-7xl mx-auto px-6 py-10">
                {active === "Who We Are" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-[#00b34d] font-semibold mb-3">About Us</h4>
                      <p className="text-white/80 leading-relaxed mb-4">
                        Learn who we are, our purpose, and how we help organizations
                        transform with technology, strategy, and execution.
                      </p>
                      <Link
                        href="/about"
                        className="inline-block text-sm font-semibold hover:text-[#00b34d] transition"
                      >
                        Explore About Us →
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-[#00b34d] font-semibold mb-3">How We Serve</h4>
                      <p className="text-white/80 leading-relaxed mb-4">
                        From discovery to implementation, we partner end-to-end across
                        strategy, design, engineering, and change enablement.
                      </p>
                      <Link
                        href="/how-we-serve"
                        className="inline-block text-sm font-semibold hover:text-[#00b34d] transition"
                      >
                        See Our Approach →
                      </Link>
                    </div>
                  </div>
                )}

                {active === "What We Do" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Services */}
                    <div>
                      <h4 className="text-[#00b34d] font-semibold mb-4">Services</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {SERVICES.map((s) => (
                          <li key={s}>
                            <Link
                              href={`/services/${encodeURIComponent(s.toLowerCase().replace(/\s+/g, "-"))}`}
                              className="block text-white/90 hover:text-[#00b34d] transition"
                            >
                              {s}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Industries */}
                    <div>
                      <h4 className="text-[#00b34d] font-semibold mb-4">Industries</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {INDUSTRIES.map((i) => (
                          <li key={i}>
                            <Link
                              href={`/industries/${encodeURIComponent(i.toLowerCase().replace(/\s+/g, "-"))}`}
                              className="block text-white/90 hover:text-[#00b34d] transition"
                            >
                              {i}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Products & Platforms */}
                    <div>
                      <h4 className="text-[#00b34d] font-semibold mb-4">Products & Platforms</h4>
                      <p className="text-white/80 leading-relaxed mb-4">
                        Explore our partner solutions and in-house accelerators that
                        speed up delivery and de-risk transformation programs.
                      </p>
                      <Link
                        href="/products-platforms"
                        className="inline-block text-sm font-semibold hover:text-[#00b34d] transition"
                      >
                        View Products & Platforms →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0c1f4a] px-6 py-4 space-y-4 border-t border-white/10">
          <details>
            <summary className="cursor-pointer font-medium">Who We Are</summary>
            <div className="ml-4 mt-2 space-y-1">
              <Link href="/about" className="block text-white/80 hover:text-[#00b34d]">About Us</Link>
              <Link href="/how-we-serve" className="block text-white/80 hover:text-[#00b34d]">How We Serve</Link>
            </div>
          </details>

          <details>
            <summary className="cursor-pointer font-medium">What We Do</summary>
            <div className="ml-4 mt-2 space-y-3">
              <div>
                <p className="text-[#00b34d] font-semibold">Services</p>
                {SERVICES.map((s) => (
                  <Link key={s} href={`/services/${encodeURIComponent(s.toLowerCase().replace(/\s+/g, "-"))}`} className="block text-white/80 hover:text-[#00b34d]">
                    {s}
                  </Link>
                ))}
              </div>
              <div>
                <p className="text-[#00b34d] font-semibold">Industries</p>
                {INDUSTRIES.map((i) => (
                  <Link key={i} href={`/industries/${encodeURIComponent(i.toLowerCase().replace(/\s+/g, "-"))}`} className="block text-white/80 hover:text-[#00b34d]">
                    {i}
                  </Link>
                ))}
              </div>
              <Link href="/products-platforms" className="block text-white/80 hover:text-[#00b34d]">
                Products & Platforms
              </Link>
            </div>
          </details>

          <Link href="/partners" className="block font-medium hover:text-[#00b34d]">
            Our Partners
          </Link>

          <Link
            href="/contact"
            className="inline-block mt-2 px-5 py-2 bg-[#00b34d] hover:bg-[#009e40] text-white font-semibold rounded transition"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
