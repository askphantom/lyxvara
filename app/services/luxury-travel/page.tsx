import PageHeader from "@/components/layout/PageHeader";

export default function LuxuryTravelPage() {
  return (
    <>
      <PageHeader
        toptext="What We Offer"
        text1="Luxury Travel &"
        text2="Experiences"
      />
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3 relative">
              <div className="relative z-10 border border-white/10 p-2">
                <img
                  alt="Luxury Interior"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="/assets/private-jet.jpg"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border border-primary/20 z-0"></div>
              <div className="absolute -top-10 -left-10 w-2/3 h-2/3 bg-[#0a182e] z-0"></div>
            </div>
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  Our Service
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-10 leading-tight">
                Extraordinary Travel, Effortlessly{" "}
                <span className="text-primary italic font-serif">Curated</span>{" "}
              </h2>
              <div className="space-y-10">
                <div className="group">
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    We create tailor-made journeys to the world’s most coveted
                    destinations, designed entirely around the way you wish to
                    travel. From private jet charters and discreet aviation
                    services to overwater villas in the Maldives and secluded
                    safari lodges in Africa, every detail is curated with
                    precision and care.
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    Our travel experiences extend beyond reservations, offering
                    privileged access and insider itineraries unavailable to the
                    public. Private guides, exclusive cultural encounters, and
                    once-in-a-lifetime moments are thoughtfully woven into each
                    journey, ensuring every experience feels both effortless and
                    extraordinary.
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3">
                    With priority upgrades, comprehensive visa assistance, and
                    24/7 global concierge support, we manage every element of
                    your travel from departure to return. Whether travelling for
                    leisure, celebration, or exploration, our luxury travel and
                    experiences are designed to inspire, indulge, and exceed
                    expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
