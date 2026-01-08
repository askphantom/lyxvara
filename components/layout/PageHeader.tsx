"use client";

import { useState, useEffect } from "react";

interface PageHeaderProps {
  toptext?: string;
  text1?: string;
  text2?: string;
}

const PageHeader = ({ toptext, text1, text2 }: PageHeaderProps) => {
  return (
    <>
      <section
        id="home"
        className="relative flex items-center justify-center overflow-hidden bg-charcoal min-h-125"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/hero-bg.jpg"
            alt="Luxury lifestyle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/20 to-background/50" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 py-32">
          <div className="justify-center text-center">
            {/* Subtitle */}
            <div className="flex justify-center items-center gap-4 mb-6 animate-fade-up">
              <div className="divider-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold">
                {toptext}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-display text-foreground mb-6 animate-fade-up delay-100">
              {text1}
              <span className="text-elegant gold-gradient-text bg-white ms-4">
                {text2}
              </span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
