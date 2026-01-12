import PageHeader from "@/components/layout/PageHeader";

export default function Page() {
  return (
    <>
      <PageHeader
        toptext="What We Offer"
        text1="Private Event"
        text2="Orchestration"
      />
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3 relative">
              <div className="relative z-10 border border-white/10 p-2">
                <img
                  alt="Luxury Interior"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="/assets/wedding.jpg"
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
                Where Extraordinary Moments Are{" "}
                <span className="text-primary italic font-serif">
                  Meticulously Curated
                </span>{" "}
              </h2>
              <div className="space-y-10">
                <div className="group">
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    From milestone celebrations and intimate private dinners to
                    destination weddings and high-level corporate summits, we
                    curate events defined by elegance, discretion, and flawless
                    execution. Every occasion is thoughtfully designed to
                    reflect your vision while exceeding expectations at every
                    touchpoint.
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    Our team manages every detail—from exclusive venue sourcing
                    and world-class culinary experiences to bespoke event
                    design, celebrity talent, and seamless guest logistics. With
                    access to exceptional partners worldwide and an
                    uncompromising eye for detail, we transform moments into
                    unforgettable experiences—effortlessly, impeccably, and on
                    your terms.
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
