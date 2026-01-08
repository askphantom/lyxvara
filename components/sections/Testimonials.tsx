"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    title: "CEO, Okonkwo Holdings",
    content:
      "Lyxvara transformed our anniversary celebration into an unforgettable experience. From the private yacht to the live orchestra at sunset, every detail was perfection.",
    rating: 5,
  },
  {
    name: "Chidi Emenike",
    title: "Managing Partner, Lagos Ventures",
    content:
      "Their ability to secure last-minute reservations and VIP access to exclusive events has made them indispensable. The team truly understands luxury.",
    rating: 5,
  },
  {
    name: "Ngozi Abiodun",
    title: "Fashion Industry Executive",
    content:
      "When I needed access to Paris Fashion Week on short notice, Lyxvara made it happen within hours. Front row seats, backstage access, everything.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 text-primary/5">
        <Quote className="w-64 h-64" />
      </div>

      <div className="container-luxury relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">
              Testimonials
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="text-display-sm text-foreground">
            Trusted by{" "}
            <span className="text-elegant text-primary">Nigeria's Elite</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="luxury-card p-12 md:p-16 text-center relative">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-10">
              "{current.content}"
            </blockquote>

            {/* Author */}
            <div>
              <div className="font-display text-xl text-primary mb-1">
                {current.name}
              </div>
              <div className="text-sm text-muted-foreground tracking-wider uppercase">
                {current.title}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 border border-border hover:border-primary flex items-center justify-center transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 border border-border hover:border-primary flex items-center justify-center transition-colors group"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
