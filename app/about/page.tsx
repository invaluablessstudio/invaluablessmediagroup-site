"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { motion } from "framer-motion";

const VALUES = [
  {
    num: "01",
    title: "Results Over Noise",
    desc: "We don't celebrate impressions, likes, or follower counts. We celebrate leads, revenue, and growth. If it doesn't move your business forward, we cut it.",
  },
  {
    num: "02",
    title: "Clarity Before Execution",
    desc: "Strategy comes first — always. We refuse to run a single ad or post a single piece of content without a clear plan behind it. Clarity is what separates growth from guesswork.",
  },
  {
    num: "03",
    title: "Built Different",
    desc: "We didn't learn this in a classroom. We built it by doing — running our own brands, testing our own strategies, and learning what actually works in the real world.",
  },
  {
    num: "04",
    title: "Partners, Not Vendors",
    desc: "We don't take your money and disappear. We communicate, we report, we adapt. Your success is tied to ours — and we treat it that way.",
  },
];

const MILESTONES = [
  { year: "2020", label: "InvaluaBless Productions founded in San Antonio, TX" },
  { year: "2022", label: "Expanded into full digital branding and content strategy" },
  { year: "2024", label: "Launched bilingual marketing systems for EN/ES audiences" },
  { year: "2026", label: "InvaluaBless Media Group — the agency is born" },
];

export default function About() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0A0F1F] text-white pt-24 overflow-hidden">

        {/* ── HERO ── */}
        <section className="relative px-6 py-28 max-w-6xl mx-auto">

          {/* Grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,175,55,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.07) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse 70% 60% at 20% 50%, black 0%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 20% 50%, black 0%, transparent 100%)",
            }}
          />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">
                Our Story
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-8"
            >
              We Didn&apos;t Wait<br />
              for an <span className="text-[#D4AF37]">Opportunity.</span><br />
              <span
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                  color: "transparent",
                }}
              >
                We Built One.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-400 text-lg font-light max-w-xl leading-relaxed"
            >
              InvaluaBless Media Group wasn&apos;t born in a boardroom. It was built in the
              studio — through real work, real brands, and real results.
            </motion.p>
          </div>
        </section>

        {/* ── STORY ── */}
        <Reveal>
          <section className="px-6 py-24 border-y border-white/[0.06] bg-white/[0.02]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

              {/* Left: visual */}
              <div className="relative">
                <div
                  className="aspect-square max-w-md mx-auto bg-white/[0.03] border border-white/[0.06] rounded-sm flex items-center justify-center overflow-hidden"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "linear-gradient(rgba(212,175,55,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.06) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Decorative brand block */}
                  <div className="relative text-center px-8">
                    <div className="text-5xl font-bold tracking-tight leading-none mb-3">
                      Invalua<span className="text-[#D4AF37]">Bless</span>
                    </div>
                    <div className="w-12 h-px bg-[#D4AF37] mx-auto mb-3" />
                    <div className="text-[11px] tracking-[0.22em] uppercase text-gray-500">
                      Media Group
                    </div>
                    <div className="text-[10px] tracking-widest uppercase text-gray-700 mt-2">
                      San Antonio, TX · Est. 2026
                    </div>
                  </div>
                </div>

                {/* Floating stat */}
                <div className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-8 bg-[#D4AF37] text-black px-5 py-4 rounded-sm">
                  <div className="text-2xl font-bold tracking-tight leading-none">6+</div>
                  <div className="text-[10px] uppercase tracking-widest font-semibold mt-1">Years Building</div>
                </div>
              </div>

              {/* Right: story copy */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-5 h-px bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">How It Started</span>
                </div>

                <div className="space-y-5 text-gray-400 text-sm leading-relaxed">
                  <p>
                    It started with a recording studio. InvaluaBless Productions was built from the ground up in San Antonio — a space for reggaeton, rap, trap, and urban artists to create real music. But building the studio was only half the work.
                  </p>
                  <p>
                    To grow the brand, we had to learn digital marketing — not from a course, but from doing it ourselves. We built the website, ran the ads, created the content strategy, developed the social media presence, and figured out what actually worked in the real world for a local business trying to compete online.
                  </p>
                  <p>
                    What we built worked. And other businesses started asking how we did it.
                  </p>
                  <p>
                    That&apos;s when InvaluaBless Media Group was born — a full digital marketing agency built on the same systems and strategies we used to grow our own brand. No theory. No fluff. Just proven execution from a team that has been in the trenches.
                  </p>
                  <p className="text-white font-medium">
                    We know what it takes to build something from zero. And now we help other businesses do the same.
                  </p>
                </div>
              </div>

            </div>
          </section>
        </Reveal>

        {/* ── TIMELINE ── */}
        <Reveal>
          <section className="px-6 py-24 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">The Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
              Where We&apos;ve Been.<br />Where We&apos;re Going.
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

              <div className="space-y-8">
                {MILESTONES.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-8"
                  >
                    {/* Year bubble */}
                    <div className="flex-shrink-0 w-[6.5rem] text-right">
                      <span className="inline-block text-[#D4AF37] text-sm font-bold tracking-wider">
                        {m.year}
                      </span>
                    </div>

                    {/* Dot */}
                    <div className="relative flex-shrink-0 mt-1.5 hidden md:block">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                    </div>

                    {/* Label */}
                    <div className="flex-1 pb-8 border-b border-white/[0.04] last:border-0">
                      <p className="text-white text-sm leading-relaxed">{m.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── MISSION & VISION ── */}
        <Reveal>
          <section className="px-6 py-24 border-y border-white/[0.06] bg-white/[0.02]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

              <div className="p-10 border border-white/[0.06] rounded-sm bg-[#0A0F1F] hover:border-[#D4AF37]/30 transition">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-5 h-px bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">Our Mission</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">
                  Help Every Business We Touch Grow Faster Than They Could Alone.
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We exist to close the gap between great businesses and the digital presence they deserve. Too many talented operators are invisible online — we change that with strategy, execution, and relentless focus on results.
                </p>
              </div>

              <div className="p-10 border border-white/[0.06] rounded-sm bg-[#0A0F1F] hover:border-[#D4AF37]/30 transition">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-5 h-px bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">Our Vision</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">
                  To Be the Most Trusted Growth Partner for Brands in San Antonio and Beyond.
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We&apos;re building a track record one brand at a time. Every client we work with is a long-term partner — and their growth is the proof of concept we stake our reputation on.
                </p>
              </div>

            </div>
          </section>
        </Reveal>

        {/* ── VALUES ── */}
        <Reveal>
          <section className="px-6 py-24 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">What We Stand For</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Our Values</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-white/[0.06] rounded-sm bg-white/[0.02] hover:border-[#D4AF37]/40 hover:-translate-y-1 transition-all"
                >
                  <div className="text-[#D4AF37] text-xs font-bold tracking-widest mb-4">{v.num}</div>
                  <h3 className="text-lg font-bold tracking-tight mb-3">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ── CTA ── */}
        <Reveal>
          <section className="relative px-6 py-32 text-center overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-[600px] h-[300px] bg-[#D4AF37] opacity-[0.07] blur-[100px] rounded-full" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-5 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">Work With Us</span>
                <span className="w-5 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to Build<br />Something Real?
              </h2>
              <p className="text-gray-400 mb-10 text-sm leading-relaxed">
                Book a free strategy call. We&apos;ll learn your business, identify your biggest opportunity, and tell you exactly how we can help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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
                  href="/contact"
                  className="border border-white/10 text-white px-8 py-4 rounded-sm text-sm tracking-widest uppercase hover:border-white/30 transition"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

      </main>

      <Footer />
    </>
  );
}