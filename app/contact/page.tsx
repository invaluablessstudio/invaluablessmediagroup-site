"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#0A0F1F] text-white pt-24">

        <Reveal>
          <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Let’s Build Something{" "}
                <span className="text-[#D4AF37]">Great</span>
              </h1>

              <p className="text-gray-400 mb-8">
                Book a free strategy call or send us a message — we’ll help you figure out the next steps to grow your brand.
              </p>

              <div className="space-y-4 text-gray-400 text-sm mb-8">
                <p>📧 contact@invaluablessmediagroup.com</p>
                <p>📍 San Antonio, Texas</p>
                <p>⏱ Response within 24 hours</p>
              </div>

              {/* MINI TRUST */}
              <div className="text-sm text-gray-500 space-y-2">
                <p>✔ No pressure consultation</p>
                <p>✔ Custom strategy for your business</p>
                <p>✔ Focused on real growth</p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">

              {/* CALENDLY BOOKING */}
<div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-gray-800">
  <p className="text-sm text-gray-400 mb-4">
    Pick a time that works for you. No pressure — just a quick strategy session to see how we can help you grow.
  </p>
  
  <div className="overflow-hidden rounded-2xl border border-gray-800 bg-white/5 backdrop-blur-md">
    <iframe
      src="https://calendly.com/invaluablessmediagroup/free-strategy-call"
      width="100%"
      height="650"
      className="rounded-2xl"
    ></iframe>
  </div>
</div>

{/* CONTACT FORM */}
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-gray-800 space-y-6"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
                />

                <textarea
                  placeholder="Your Message"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none h-32"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#D4AF37] text-black py-3 rounded-lg font-semibold hover:scale-105 transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className="text-green-500 text-sm">
                    Message sent successfully!
                  </p>
                )}
              </form>

            </div>

          </section>
        </Reveal>

      </main>

      <Footer />
    </>
  );
}