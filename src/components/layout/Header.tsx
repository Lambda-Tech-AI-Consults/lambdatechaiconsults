"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Partners", href: "/partners" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo Placeholder */}
        <Link href="/" className="text-2xl font-bold text-[#0C1F4A]">
          <Image
            src="/images/Lamda long logo-dark.png"
            alt="Energy"
            width={150}
            height={50}
            className="object-cover rounded-t-2xl"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#0C1F4A] hover:text-[#00b34d] transition font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 bg-[#1c1f4a] hover:bg-[#0f0f3b] text-white font-semibold rounded transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-[#0C1F4A]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4 shadow-inner animate-slide-down">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[#0C1F4A] hover:text-[#00B2A9] transition font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block mt-2 px-4 py-2 bg-[#1c1f4a] hover:bg-[#0f0f3b] text-white font-semibold rounded transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
