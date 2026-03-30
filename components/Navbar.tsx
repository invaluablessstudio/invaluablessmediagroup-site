"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F1F]/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_original.png"
            alt="InvaluaBless Media Group"
            width={160}
            height={60}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-white transition tracking-wide ${
                pathname === l.href ? "text-white" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://calendly.com/invaluablessmediagroup/free-strategy-call"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#D4AF37] text-black px-5 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase hover:-translate-y-0.5 transition-transform"
        >
          Book a Call
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 border-t border-white/[0.06]" : "max-h-0"
        } bg-[#0A0F1F]/95 backdrop-blur-xl`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide hover:text-white transition ${
                pathname === l.href ? "text-white" : "text-gray-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/invaluablessmediagroup/free-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-[#D4AF37] text-black px-5 py-3 rounded-sm text-xs font-bold tracking-widest uppercase"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}