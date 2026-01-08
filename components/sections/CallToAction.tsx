import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <section className="py-20 md:py-28 relative bg-cta-pattern bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute inset-4 md:inset-8 border border-primary/20 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-primary"></div>
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
            Ready to Begin?
          </span>
          <div className="w-8 h-px bg-primary"></div>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-white mb-8 leading-tight">
          Elevate Your Lifestyle <br />
          <span className="italic text-primary font-serif">Today</span>
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto font-light">
          Whether you desire a last-minute jet charter or a curated evening of
          fine dining, our team is standing by to make the impossible, possible.
          Experience the Lyxvara difference.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            className="bg-primary text-secondary px-10 py-5 text-xs font-bold tracking-widest hover:bg-white transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(207,185,129,0.3)] hover:shadow-[0_0_30px_rgba(207,185,129,0.5)]"
            href="#"
          >
            BOOK A CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  );
}
