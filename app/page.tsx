"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0A0F1F] text-white overflow-hidden pt-24">

        {/* HERO */}
        <Reveal>
          <section className="px-6 py-28 text-center max-w-5xl mx-auto relative">

            {/* Glow */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-96 h-96 bg-[#D4AF37] opacity-10 blur-3xl rounded-full"></div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6 relative z-10"
            >
              We Help Brands{" "}
              <span className="text-[#D4AF37]">Grow, Scale</span> & Dominate Online
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto mb-8 relative z-10"
            >
              Digital marketing strategies designed to increase visibility, drive traffic, and convert leads into paying clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4 relative z-10"
            >
              <Link
                href="https://calendly.com/yourname/strategy-call"
target="_blank"
                className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Get Started
              </Link>

              <Link
                href="/services"
                className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                View Services
              </Link>
            </motion.div>

            {/* TRUST BAR */}
            <div className="mt-8 text-sm text-gray-400 flex flex-wrap justify-center gap-6 relative z-10">
              <span>⚡ Results-Driven Strategies</span>
              <span>🚀 Growth Focused</span>
              <span>🎯 Performance Marketing</span>
            </div>

          </section>
        </Reveal>

        {/* AUTHORITY STATS */}
        <Reveal>
          <section className="px-6 py-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {[
              { value: "100%", label: "Focused on Growth" },
              { value: "24h", label: "Response Time" },
              { value: "Custom", label: "Strategies" },
              { value: "ROI", label: "Driven Approach" },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold text-[#D4AF37]">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}

          </section>
        </Reveal>

        {/* SERVICES */}
        <Reveal>
          <section className="px-6 py-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What We <span className="text-[#D4AF37]">Do</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                { title: "Marketing Strategy", desc: "Custom strategies built to grow your brand." },
                { title: "Social Media Growth", desc: "Build authority and scale your presence." },
                { title: "Paid Ads", desc: "High-converting campaigns that generate leads." }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:scale-105 hover:border-[#D4AF37] transition"
                >
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </motion.div>
              ))}

            </div>
          </section>
        </Reveal>

        {/* PROCESS */}
        <Reveal>
          <section className="px-6 py-20 bg-transparent">
            <div className="max-w-6xl mx-auto text-center">

              <h2 className="text-3xl font-bold mb-12">
                Our <span className="text-[#D4AF37]">Process</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">

                {["Strategy", "Execution", "Growth"].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {i + 1}. {step}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      We focus on delivering measurable results at every stage.
                    </p>
                  </motion.div>
                ))}

              </div>

            </div>
          </section>
        </Reveal>

        {/* FEATURED WORK */}
        <Reveal>
          <section className="px-6 py-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured <span className="text-[#D4AF37]">Work</span>
            </h2>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-gray-800 p-8 hover:border-[#D4AF37] transition">
              <h3 className="text-xl font-semibold mb-4">
                InvaluaBless Productions
              </h3>

              <p className="text-gray-400 mb-4">
                Developed and managed a full digital presence including branding, content strategy, and audience growth.
              </p>

              <ul className="text-gray-400 text-sm mb-6 space-y-2">
                <li>• Brand identity development</li>
                <li>• Social media content strategy</li>
                <li>• Visual production & storytelling</li>
              </ul>

              <a href="#" className="text-[#D4AF37] hover:underline text-sm">
                View Project →
              </a>
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              More case studies coming soon as we scale with our partners.
            </p>

          </section>
        </Reveal>

        {/* WHY CHOOSE US */}
        <Reveal>
          <section className="px-6 py-20 bg-transparent">
            <div className="max-w-6xl mx-auto text-center">

              <h2 className="text-3xl font-bold mb-12">
                Why Choose <span className="text-[#D4AF37]">Us</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">

                <div className="p-6 border border-gray-800 rounded-2xl hover:border-[#D4AF37] transition">
                  <h3 className="text-lg font-semibold mb-3">
                    Results-Driven Approach
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Every strategy is built for measurable growth and real business impact.
                  </p>
                </div>

                <div className="p-6 border border-gray-800 rounded-2xl hover:border-[#D4AF37] transition">
                  <h3 className="text-lg font-semibold mb-3">
                    Built From Real Experience
                  </h3>
                  <p className="text-gray-400 text-sm">
                    We apply what we do daily through our own projects and brands.
                  </p>
                </div>

                <div className="p-6 border border-gray-800 rounded-2xl hover:border-[#D4AF37] transition">
                  <h3 className="text-lg font-semibold mb-3">
                    Focused on Your Growth
                  </h3>
                  <p className="text-gray-400 text-sm">
                    We treat every client like a partner, focused on long-term success.
                  </p>
                </div>

              </div>

            </div>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <section className="px-6 py-24 text-center relative">

            <div className="absolute inset-0 flex justify-center">
              <div className="w-80 h-80 bg-[#D4AF37] opacity-10 blur-3xl rounded-full"></div>
            </div>

            <h2 className="text-4xl font-bold mb-4 relative z-10">
              Ready to <span className="text-[#D4AF37]">Scale Your Brand?</span>
            </h2>

            <p className="text-gray-400 mb-8 relative z-10">
              Let’s build a strategy that drives real results for your business.
            </p>

            <Link
              href="https://calendly.com/yourname/strategy-call"
target="_blank"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition relative z-10"
            >
              Book Your Free Strategy Call
            </Link>

            <p className="text-xs text-gray-500 mt-4 relative z-10">
              No commitment. Just clarity on your growth.
            </p>

          </section>
        </Reveal>

      </main>

      <Footer />
    </>
  );
}