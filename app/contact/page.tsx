"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useState } from "react";
import { motion } from "framer-motion";

const INFO = [
  { icon: "📧", label: "Email", value: "info@invaluablessmediagroup.com", href: "mailto:info@invaluablessmediagroup.com" },
  { icon: "📍", label: "Location", value: "San Antonio, Texas", href: null },
  { icon: "⏱", label: "Response Time", value: "Within 24 hours", href: null },
];

const TRUST = [
  "No pressure consultation",
  "Custom strategy for your business",
  "Bilingual support (EN/ES)",
  "Focused on real, measurable growth",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", business: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#0A0F1F] text-white pt-24">

        {/* ── HERO ── */}
        <section className="relative px-6 py-24 max-w-6xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">Get In Touch</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]"
            >
              Let&apos;s Build<br />
              Something <span className="text-[#D4AF37]">Great</span>
            </motion.h1>
          </div>
        </section>

        {/* ── MAIN GRID ── */}
        <Reveal>
          <section className="px-6 pb-32 max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">

            {/* ── LEFT: info ── */}
            <div className="md:sticky md:top-32">
              <p className="text-gray-400 text-sm leading-relaxed mb-10">
                Book a free strategy call or send us a message. We&apos;ll figure out the best next steps to grow your brand — no pressure, no fluff.
              </p>

              {/* Contact info */}
              <div className="space-y-4 mb-10">
                {INFO.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 border border-white/[0.06] rounded-sm bg-white/[0.02]">
                    <span className="text-lg w-8 text-center flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-gray-300 hover:text-[#D4AF37] transition">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm text-gray-300">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust list */}
              <div className="border-t border-white/[0.06] pt-8">
                <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-4 font-semibold">What to Expect</p>
                <ul className="space-y-3">
                  {TRUST.map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── RIGHT: booking + form ── */}
            <div className="space-y-6">

              {/* Calendly embed */}
              <div className="border border-white/[0.06] rounded-sm bg-white/[0.02] overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-px bg-[#D4AF37]" />
                    <p className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">Book a Free Strategy Call</p>
                  </div>
                  <p className="text-gray-500 text-xs mt-1 pl-7">
                    Pick a time that works — no commitment required.
                  </p>
                </div>
                <div className="overflow-hidden">
                  <iframe
                    src="https://calendly.com/invaluablessmediagroup/free-strategy-call"
                    width="100%"
                    height="600"
                    frameBorder="0"
                  />
                </div>
              </div>

              {/* Contact form */}
              <div className="border border-white/[0.06] rounded-sm bg-white/[0.02]">
                <div className="px-6 py-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-px bg-[#D4AF37]" />
                    <p className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">Send Us a Message</p>
                  </div>
                  <p className="text-gray-500 text-xs mt-1 pl-7">
                    Prefer email? Fill this out and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-600 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-black/40 border border-white/[0.08] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/40 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-600 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Business"
                        value={form.business}
                        onChange={(e) => setForm({ ...form, business: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-black/40 border border-white/[0.08] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/40 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-600 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@yourbusiness.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-black/40 border border-white/[0.08] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/40 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-600 mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us about your business and what you're looking to achieve..."
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-black/40 border border-white/[0.08] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/40 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-black py-4 rounded-sm font-semibold text-sm tracking-widest uppercase hover:-translate-y-0.5 transition-transform disabled:opacity-60"
                  >
                    {loading ? "Sending..." : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </>
                    )}
                  </button>

                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 border border-green-500/20 bg-green-500/[0.06] rounded-sm"
                    >
                      <span className="text-green-400 text-sm">✓</span>
                      <p className="text-green-400 text-sm">Message sent! We&apos;ll be in touch within 24 hours.</p>
                    </motion.div>
                  )}
                </form>
              </div>

            </div>
          </section>
        </Reveal>

      </main>

      <Footer />
    </>
  );
}