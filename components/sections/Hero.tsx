import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-bg.webp"
          alt="Luxury lifestyle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/20 to-background/50" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold">
              Bespoke Luxury Services
            </span>
          </div>

          {/* Title */}
          <h1 className="text-display text-foreground mb-6 animate-fade-up delay-100">
            Your Exclusive
            <span className="block text-elegant gold-gradient-text bg-white">
              Gateway to Luxury
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white max-w-xl mb-10 animate-fade-up delay-200">
            {/* Experience unparalleled concierge services tailored to your every
            desire. From private jet charters to exclusive events, we transform
            your vision into reality. */}
            Lyxvara Concierge curates seamless, bespoke experiences for
            Nigeria's most discerning individuals and enterprises—mastering your
            most precious commodity: time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up delay-300">
            <Button variant="luxury" size="luxuryLg" className="group">
              <Link href="/services" className="flex items-center">
                Explore Services{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="luxuryOutline" size="luxuryLg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 animate-fade-up delay-400">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                5.0 Rating
              </span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">500+</span>{" "}
              Satisfied Clients
            </div>
            <div className="h-6 w-px bg-border hidden md:block" />
            <div className="text-sm text-muted-foreground hidden md:block">
              <span className="text-foreground font-medium">24/7</span>{" "}
              Concierge Support
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
