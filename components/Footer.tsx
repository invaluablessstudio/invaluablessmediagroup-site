import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1F] border-t border-white/[0.06] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-5">
            <Image
              src="/logo_original.png"
              alt="InvaluaBless Media Group"
              width={160}
              height={60}
              className="h-40 w-auto object-contain"
            />
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Digital marketing strategies designed to help brands grow, scale, and dominate online. Based in San Antonio, TX.
          </p>
          <p className="text-gray-700 text-xs tracking-widest uppercase mt-6">
            Digital · Media · Innovation
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h5 className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-5">
            Navigate
          </h5>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-5">
            Services
          </h5>
          <ul className="space-y-3">
            {[
              "Google Business Profile",
              "Paid Ads",
              "Social Media",
              "Lead Generation",
            ].map((s) => (
              <li key={s}>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-5">
            Contact
          </h5>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:info@invaluablessmediagroup.com"
                className="text-sm text-gray-400 hover:text-white transition break-all"
              >
                info@invaluablessmediagroup.com
              </a>
            </li>
            <li>
              <a
                href="https://calendly.com/invaluablessmediagroup/free-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Book a Call
              </a>
            </li>
            <li>
              <span className="text-sm text-gray-500">San Antonio, TX</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} InvaluaBless Media Group. All rights reserved.
          </p>
          <a
            href="https://calendly.com/invaluablessmediagroup/free-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] text-xs tracking-widest uppercase hover:opacity-70 transition"
          >
            Book Free Strategy Call →
          </a>
        </div>
      </div>
    </footer>
  );
}