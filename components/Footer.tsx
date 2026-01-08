import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <h3 className="mb-4 text-xl font-serif text-[#CBB67A]">
              Lyxvara Concierge
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-gray-300">
              World-class luxury concierge services delivering bespoke
              lifestyle, travel, and corporate solutions with exceptional
              attention to detail.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="mb-4 text-sm uppercase tracking-widest text-[#CBB67A]">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="/corporate-concierge"
                  className="hover:text-white transition"
                >
                  Corporate Concierge
                </a>
              </li>
              <li>
                <a
                  href="/travel-lifestyle"
                  className="hover:text-white transition"
                >
                  Travel & Lifestyle
                </a>
              </li>
              <li>
                <a href="/vip-access" className="hover:text-white transition">
                  VIP Access
                </a>
              </li>
              <li>
                <a
                  href="/personal-concierge"
                  className="hover:text-white transition"
                >
                  Personal Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="mb-4 text-sm uppercase tracking-widest text-[#CBB67A]">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <span className="block">Email</span>
                <a
                  href="mailto:info@lyxvaraconcierge.com"
                  className="hover:text-white transition"
                >
                  info@lyxvaraconcierge.com
                </a>
              </li>
              <li>
                <span className="block">Phone</span>
                <a
                  href="tel:+2340000000000"
                  className="hover:text-white transition"
                >
                  +234 XXX XXX XXXX
                </a>
              </li>
              <li>
                <span className="block">Location</span>
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Lyxvara Concierge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
