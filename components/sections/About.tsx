import { Award, Users, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Award, value: "10+", label: "Years of Excellence" },
  { icon: Users, value: "500+", label: "Elite Clients" },
  { icon: Clock, value: "24/7", label: "Availability" },
  { icon: Globe, value: "50+", label: "Global Partners" },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-linear-to-l from-primary to-transparent" />
      </div>

      <div className="container-luxury relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">
                About Us
              </span>
            </div>

            <h2 className="text-display-sm text-foreground mb-6">
              Redefining{" "}
              <span className="text-elegant text-primary">Luxury</span> in Lagos
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p>
                Founded with a vision to bring world-class concierge services to
                Nigeria's elite, Lyxvara Concierge has become the trusted
                partner for those who demand nothing but the extraordinary.
              </p>
              <p>
                Our team of experienced lifestyle managers understands that true
                luxury lies in the details. We don't just fulfill requests – we
                anticipate needs, exceed expectations, and create moments that
                transcend the ordinary.
              </p>
              <p>
                From securing reservations at fully-booked restaurants to
                arranging private island getaways, our network spans continents
                and our commitment knows no bounds.
              </p>
            </div>

            <Button variant="luxury" size="luxury" className="mt-8">
              Our Story
            </Button>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            {/* Decorative Border */}
            <div className="absolute -inset-4 border border-primary/20 hidden lg:block" />

            <div className="grid grid-cols-2 gap-6 relative bg-background p-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group p-6 border border-border hover:border-primary/50 transition-all duration-500"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="font-display text-4xl text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
