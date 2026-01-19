import PageHeader from "@/components/layout/PageHeader";

export default function Page() {
  return (
    <>
      <PageHeader
        toptext="What We Offer"
        text1="Corporate Employee and"
        text2="Customer programs"
      />
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/3 relative">
              <div className="relative z-10 border border-white/10 p-2">
                <img
                  alt="Luxury Interior"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="/assets/events.webp"
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
                Corporate & Employee Programmes{" "}
                <span className="text-primary italic font-serif">
                  Crafted for
                </span>{" "}
                Exceptional Brands
              </h2>
              <div className="space-y-10">
                <div className="group">
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    Elevate talent retention, strengthen client relationships,
                    and reinforce your brand’s prestige through bespoke
                    concierge-led programmes. We partner with forward-thinking
                    organisations to deliver thoughtfully curated benefits—from
                    luxury gifting and executive travel management to private
                    event access and premium hosting experiences.
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    Each programme is designed to seamlessly integrate with your
                    corporate culture, rewarding excellence, inspiring loyalty,
                    and leaving a lasting impression on employees, clients, and
                    stakeholders alike. Whether supporting leadership teams or
                    recognising top performers, our solutions reflect the
                    distinction and discretion your brand demands.
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
