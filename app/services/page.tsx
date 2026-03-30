"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    icon: "📡",
    title: "Google Business Profile Optimization",
    tagline: "Own your local market.",
    desc: "Most businesses in San Antonio are invisible on Google Maps. We change that. We fully optimize your GBP so you rank in the Map Pack when customers are actively searching for what you offer.",
    includes: [
      "Full profile audit and setup",
      "Category and attribute optimization",
      "Weekly Google Posts",
      "Review generation strategy",
      "Photo and branding updates",
      "Local keyword targeting",
    ],
    tags: ["Local SEO", "Map Pack", "Reviews", "Google Posts"],
  },
  {
    num: "02",
    icon: "🎯",
    title: "Paid Ads (Meta & Google)",
    tagline: "Targeted spend. Real returns.",
    desc: "We don't run ads to burn your budget. Every campaign is built with a clear objective — lead generation, brand awareness, or direct conversions. We handle creative, targeting, split testing, and ongoing optimization.",
    includes: [
      "Facebook & Instagram ad campaigns",
      "Google Search and Display ads",
      "Ad creative design and copywriting",
      "Audience research and targeting",
      "A/B split testing",
      "Weekly performance reporting",
    ],
    tags: ["Facebook Ads", "Instagram Ads", "Google Ads", "Retargeting"],
  },
  {
    num: "03",
    icon: "📲",
    title: "Social Media Management",
    tagline: "Stay top of mind, every day.",
    desc: "Inconsistent posting kills momentum. We build and execute a content calendar that keeps your brand active, consistent, and on-brand — so your audience grows even when you're focused on the work.",
    includes: [
      "Monthly content calendar",
      "Branded Reels and Stories",
      "Captions, hashtags, and scheduling",
      "Community management and replies",
      "Platform analytics and insights",
      "Bilingual content (EN/ES) available",
    ],
    tags: ["Instagram", "Facebook", "TikTok", "Content Calendar"],
  },
  {
    num: "04",
    icon: "🧠",
    title: "Marketing Strategy & Consulting",
    tagline: "Clarity before execution.",
    desc: "Before we touch a single platform, we build the strategy. We audit your current digital presence, identify gaps, define your positioning, and create a roadmap aligned with your revenue goals.",
    includes: [
      "Full digital presence audit",
      "Competitor analysis",
      "Brand positioning and messaging",
      "Custom marketing roadmap",
      "Platform and channel recommendations",
      "90-day growth plan",
    ],
    tags: ["Strategy", "Audit", "Roadmap", "Positioning"],
  },
  {
    num: "05",
    icon: "✍️",
    title: "Content & Creative Production",
    tagline: "Content that actually converts.",
    desc: "Generic content gets ignored. We create branded video scripts, graphics, copy, and storytelling that speaks directly to your target customer — in a voice that feels authentic and drives action.",
    includes: [
      "Video scripts and Reels concepts",
      "Branded graphic templates",
      "Website and ad copywriting",
      "Brand voice and tone guidelines",
      "Story and feed post design",
      "Bilingual copy (EN/ES) available",
    ],
    tags: ["Copywriting", "Video Scripts", "Graphics", "Branding"],
  },
  {
    num: "06",
    icon: "📈",
    title: "Lead Generation Systems",
    tagline: "Your pipeline on autopilot.",
    desc: "We build systems that capture, qualify, and follow up with leads automatically — so you're not chasing every inquiry manually. From landing pages to automated email and SMS sequences.",
    includes: [
      "Landing page design and copy",
      "Lead capture forms and funnels",
      "Email and SMS automation setup",
      "CRM integration",
      "Lead qualification flows",
      "Performance tracking and reporting",
    ],
    tags: ["Funnels", "Automation", "Email", "SMS"],
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0A0F1F] text-white pt-24">

        {/* ── HERO ── */}
        <section className="relative px-6 py-28 max-w-6xl mx-auto overflow-hidden">
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

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">
                What We Offer
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-6"
            >
              Services That<br />
              <span className="text-[#D4AF37]">Actually</span> Move<br />
              <span
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                  color: "transparent",
                }}
              >
                The Needle.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-400 text-lg font-light max-w-lg leading-relaxed"
            >
              Every service is built for measurable growth — not vanity metrics, not busy work.
            </motion.p>
          </div>
        </section>

        {/* ── SERVICES LIST ── */}
        <Reveal>
          <section className="px-6 pb-24 max-w-6xl mx-auto space-y-px">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="group border border-white/[0.06] rounded-sm bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#D4AF37]/25 transition-all overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">

                    {/* Left: number + icon */}
                    <div className="flex-shrink-0 flex items-center gap-4 md:flex-col md:items-start md:w-24">
                      <span className="text-[#D4AF37]/40 text-xs font-bold tracking-widest">{s.num}</span>
                      <div className="w-12 h-12 rounded-sm border border-[#D4AF37]/20 bg-[#D4AF37]/[0.07] flex items-center justify-center text-xl">
                        {s.icon}
                      </div>
                    </div>

                    {/* Middle: main content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[#D4AF37] text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">
                        {s.tagline}
                      </p>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">{s.title}</h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xl">{s.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span key={t} className="text-[10px] uppercase tracking-widest text-gray-500 border border-white/[0.08] px-2 py-1 rounded-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: what's included */}
                    <div className="md:w-64 flex-shrink-0">
                      <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-3 font-semibold">
                        What&apos;s Included
                      </p>
                      <ul className="space-y-2">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
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
                <span className="text-[#D4AF37] text-[11px] font-semibold tracking-[0.2em] uppercase">Ready to Start?</span>
                <span className="w-5 h-px bg-[#D4AF37]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Not Sure Which Service<br />Is Right for You?
              </h2>
              <p className="text-gray-400 mb-10 text-sm leading-relaxed">
                Book a free strategy call. We&apos;ll look at your business, identify the biggest growth opportunity, and tell you exactly where to start.
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