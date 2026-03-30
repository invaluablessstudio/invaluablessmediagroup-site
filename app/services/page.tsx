"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0A0F1F] text-white pt-24">

        {/* HERO */}
        <Reveal>
          <section className="px-6 py-24 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-[#D4AF37]">Services</span>
            </h1>
            <p className="text-gray-400">
              We provide high-performance digital marketing solutions designed to grow your brand and increase revenue.
            </p>
          </section>
        </Reveal>

        {/* SERVICES GRID */}
        <Reveal>
          <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Marketing Strategy",
                desc: "We create custom strategies tailored to your brand’s growth goals."
              },
              {
                title: "Social Media Growth",
                desc: "Build authority and engagement across all major platforms."
              },
              {
                title: "Paid Advertising",
                desc: "High-converting ad campaigns that generate consistent leads."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-[#D4AF37] hover:scale-105 transition"
              >
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}

          </section>
        </Reveal>

        {/* PROCESS */}
        <Reveal>
          <section className="px-6 py-20 bg-[#111827]">
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

        {/* CTA */}
        <Reveal>
          <section className="px-6 py-24 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="text-[#D4AF37]">Scale?</span>
            </h2>

            <Link
              href="https://calendly.com/yourname/strategy-call"
target="_blank"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
            >
              Get Started
            </Link>
          </section>
        </Reveal>

      </main>

      <Footer />
    </>
  );
}