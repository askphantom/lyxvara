import {
  Plane,
  CalendarHeart,
  ShoppingBag,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import serviceTravel from "@/assets/service-travel.jpg";
import serviceEvents from "@/assets/service-events.jpg";
import serviceShopping from "@/assets/service-shopping.jpg";
import serviceProperty from "@/assets/service-property.jpg";

const services = [
  {
    icon: Plane,
    title: "Private Aviation",
    description:
      "Charter private jets, helicopters, and luxury ground transportation. Experience seamless travel with our exclusive partnerships.",
    image: "assets/service-travel.jpg",
  },
  {
    icon: CalendarHeart,
    title: "Exclusive Events",
    description:
      "Access the most coveted events, private parties, and VIP experiences. From fashion weeks to exclusive galas.",
    image: "assets/service-events.jpg",
  },
  {
    icon: ShoppingBag,
    title: "Personal Shopping",
    description:
      "Bespoke shopping experiences with access to rare collections, personal stylists, and luxury boutiques worldwide.",
    image: "assets/service-shopping.jpg",
  },
  {
    icon: Building2,
    title: "Luxury Properties",
    description:
      "Discover extraordinary villas, penthouses, and estates. Whether for vacation or acquisition, we source the exceptional.",
    image: "assets/service-property.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-charcoal">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">
              Our Services
            </span>
            <div className="divider-gold" />
          </div>
          <h2 className="text-display-sm text-foreground mb-6">
            Curated <span className="text-elegant text-primary">Luxury</span>{" "}
            Experiences
          </h2>
          <p className="text-muted-foreground">
            We specialize in transforming your most ambitious aspirations into
            reality. Every detail meticulously crafted, every experience
            unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden luxury-card"
            >
              {/* Image */}
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="w-12 h-12 border border-primary/50 flex items-center justify-center mb-4 bg-background/80 backdrop-blur-sm">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      {service.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 bg-primary/10 backdrop-blur-sm">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Looking for something specific? Our bespoke services extend far
            beyond this list.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary tracking-widest uppercase text-sm hover:gap-4 transition-all duration-300"
          >
            Request Custom Service
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
