"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F1F]/80 backdrop-blur-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-lg font-bold tracking-wide">
          <span className="text-[#D4AF37]">InvaluaBless</span> Media
        </Link>

        {/* LINKS */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <Link
          href="/contact"
          className="bg-[#D4AF37] text-black px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition"
        >
          Get Started
        </Link>

      </div>
    </header>
  );
}