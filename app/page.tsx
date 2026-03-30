"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "📡",
    title: "Google Business Profile",
    desc: "Dominate local search so San Antonio customers find you first — before your competitors.",
    tags: ["Local SEO", "Map Pack", "Reviews"],
  },
  {
    icon: "🎯",
    title: "Paid Ads (Meta & Google)",
    desc: "High-converting campaigns engineered to generate leads and revenue — not just clicks.",
    tags: ["Facebook Ads", "Google Ads", "Retargeting"],
  },
  {
    icon: "📲",
    title: "Social Media Management",
    desc: "Consistent, branded content that builds authority and keeps your business top of mind.",
    tags: ["Reels", "Content Calendar", "Stories"],
  },
  {
    icon: "🧠",
    title: "Marketing Strategy",
    desc: "Custom roadmaps built around your actual revenue goals — no templates, no guesswork.",
    tags: ["Audit", "Roadmap", "Positioning"],
  },
  {
    icon: "✍️",
    title: "Content & Creative",
    desc: "Branded scripts, graphics, and copy that speak directly to your ideal customer.",
    tags: ["Copywriting", "Video", "Graphics"],
  },
  {
    icon: "📈",
    title: "Lead Generation Systems",
    desc: "Automated funnels that capture, qualify, and follow up with leads while you focus on the work.",
    tags: ["Funnels", "Automation", "Email/SMS"],
  },
];

const STATS = [
  { value: "100%", label: "Growth Focused" },
  { value: "24h", label: "Response Time" },
  { value: "Custom", label: "Every Strategy" },
  { value: "ROI", label: "Driven Approach" },
];

const PROCESS = [
  {
    num: "01",
    title: "Strategy Session",
    desc: "We deep-dive into your business, identify gaps, and build a custom roadmap — no templates, no cookie-cutter plans.",
  },
  {
    num: "02",
    title: "Execution & Launch",
    desc: "We set up, optimize, and launch your campaigns and content systems. Every move is intentional and built for the result.",
  },
  {
    num: "03",
    title: "Scale & Optimize",
    desc: "We track real metrics, cut what doesn't work, and double down on what does. Growth is an ongoing system.",
  },
];

const WHY = [
  {
    title: "Results-Driven, Always",
    desc: "We don't chase vanity metrics. Every strategy is measured against real business outcomes — leads, revenue, and growth.",
  },
  {
    title: "Built From Real Experience",
    desc: "We apply everything we do daily through our own brands. Our strategies are tested in the real world, not just in theory.",
  },
  {
    title: "We Treat You Like a Partner",
    desc: "No black-box reporting. No ghosting. We stay focused on your long-term success — not just the contract.",
  },
];

const MARQUEE_ITEMS = [
  "Brand Strategy", "Social Media Growth", "Paid Ads",
  "GBP Optimization", "Content Creation", "Lead Generation",
  "Brand Identity", "Performance Marketing",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0A0F1F] text-white overflow-hidden pt-24">

        {/* ── HERO ── */}
        <section className="relative px-6 py-32 max-w-6xl mx-auto">

          {/* Grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,175,55,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
            }}
          />

          {/* Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] opacity-[0.07] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl">

            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-7 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">
                Digital Marketing Agency · San Antonio, TX
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-8"
            >
              We Make Brands<br />
              <span className="text-[#D4AF37]">Grow.</span>{" "}
              <span
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                  color: "transparent",
                }}
              >
                Scale.
              </span>
              <br />
              Dominate.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-gray-400 text-lg font-light max-w-xl mb-10 leading-relaxed"
            >
              Performance-driven marketing strategies designed to increase visibility,
              drive qualified traffic, and turn leads into paying clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://calendly.com/invaluablessmediagroup/free-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-4 rounded-sm font-semibold text-sm tracking-widest uppercase hover:-translate-y-1 transition-transform"
              >
                Book Free Strategy Call
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <Link
                href="/services"
                className="border border-white/10 text-white px-8 py-4 rounded-sm text-sm tracking-widest uppercase hover:border-white/30 transition"
              >
                View Services
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="relative z-10 mt-20 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1 text-[#D4AF37]">
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 tracking-widest uppercase">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="bg-[#D4AF37] py-3 overflow-hidden whitespace-nowrap">
          <div className="inline-flex" style={{ animation: "marquee 22s linear infinite" }}>
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 px-10 text-black text-[11px] font-bold tracking-[0.18em] uppercase"
              >
                {item}
                <span className="opacity-40">✦</span>
              </span>
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

        {/* ── SERVICES ── */}
        <Reveal>
          <section className="px-6 py-24 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-5 h-px bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">What We Do</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Services Built<br />for Real Results
                </h2>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
                Every service we offer is built to drive measurable growth — not vanity metrics.
              </p>
            </div>

            <div className="grid md:grid-cols-3 divide-x divide-y divide-white/[0.06] border border-white/[0.06] rounded-sm overflow-hidden">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative p-10 bg-white/[0.02] hover:bg-white/[0.05] transition overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="text-xl mb-6 w-12 h-12 rounded-sm border border-[#D4AF37]/25 bg-[#D4AF37]/[0.08] flex items-center justify-center">
                    {s.icon}
                  </div>
                  <h3 className="font-semibold text-base mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-widest text-gray-500 border border-white/[0.08] px-2 py-1 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ── PROCESS ── */}
        <Reveal>
          <section className="px-6 py-24 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Our Process</h2>

            <div className="grid md:grid-cols-3 gap-12">
              {PROCESS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="text-6xl font-bold text-white/[0.06] tracking-tighter mb-4 leading-none">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ── FEATURED WORK ── */}
        <Reveal>
          <section className="px-6 py-24 border-y border-white/[0.06] bg-white/[0.02]">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-5 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">Featured Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
                Built From<br />Real Experience
              </h2>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="inline-block text-[10px] uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1.5 rounded-sm mb-6">
                    Case Study
                  </span>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">InvaluaBless Productions</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Built and managed a full digital presence for San Antonio's premier reggaeton and urban music recording studio — from zero to a recognized brand in the local music industry.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Full brand identity design and visual system",
                      "Social media content strategy and weekly calendar",
                      "Bilingual content for English and Spanish audiences",
                      "Custom website with beat store and booking system",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://invaluablessproduction.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm border border-white/10 px-6 py-3 rounded-sm hover:border-[#D4AF37]/40 transition"
                  >
                    View Studio Site
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </a>
                </div>

                <div>
                  <div
                    className="relative aspect-[4/3] bg-white/[0.03] border border-white/[0.06] rounded-sm flex items-center justify-center overflow-hidden mb-4"
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: "linear-gradient(rgba(212,175,55,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.06) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                    <div className="relative text-center">
                      <div className="text-2xl font-bold tracking-tight mb-1">
                        Invalua<span className="text-[#D4AF37]">Bless</span>
                      </div>
                      <div className="text-[11px] tracking-widest uppercase text-gray-500">
                        Productions · San Antonio, TX
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 divide-x divide-white/[0.06] border border-white/[0.06] rounded-sm overflow-hidden">
                    {[
                      { v: "100%", l: "Custom" },
                      { v: "EN/ES", l: "Bilingual" },
                      { v: "6+", l: "Services" },
                      { v: "Live", l: "Growing" },
                    ].map((m) => (
                      <div key={m.l} className="py-4 text-center bg-white/[0.02]">
                        <div className="text-[#D4AF37] font-bold text-base">{m.v}</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-600 text-xs mt-10 tracking-widest uppercase">
                More case studies coming as we scale with our partners.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ── WHY US ── */}
        <Reveal>
          <section className="px-6 py-24 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
              What Makes Us<br />Different
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {WHY.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  className="p-8 border border-white/[0.06] rounded-sm bg-white/[0.02] hover:border-[#D4AF37]/40 hover:-translate-y-1 transition-all"
                >
                  <div className="text-[#D4AF37] text-xs font-bold tracking-widest mb-5">0{i + 1}</div>
                  <h3 className="font-semibold text-base mb-3 tracking-tight">{w.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ── CTA ── */}
        <Reveal>
          <section className="relative px-6 py-32 text-center overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-[600px] h-[300px] bg-[#D4AF37] opacity-[0.08] blur-[100px] rounded-full" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-5 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">Ready to Scale?</span>
                <span className="w-5 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Let&apos;s Build Something<br />That Actually Works
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed text-sm">
                Book a free 30-minute strategy call. We&apos;ll audit your digital presence and give you a clear path forward — no pressure, no fluff.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://calendly.com/invaluablessmediagroup/free-strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-4 rounded-sm font-semibold text-sm tracking-widest uppercase hover:-translate-y-1 transition-transform"
                >
                  Book Free Strategy Call
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </a>
                <Link
                  href="/contact"
                  className="border border-white/10 text-white px-8 py-4 rounded-sm text-sm tracking-widest uppercase hover:border-white/30 transition"
                >
                  Send a Message
                </Link>
              </div>
              <p className="text-xs text-gray-600 mt-6 tracking-widest uppercase">
                No commitment. Just clarity on your growth.
              </p>
            </div>
          </section>
        </Reveal>

      </main>

      <Footer />
    </>
  );
}