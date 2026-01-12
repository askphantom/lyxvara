import PageHeader from "@/components/layout/PageHeader";

export default function Page() {
  return (
    <>
      <PageHeader toptext="What We Offer" text1="VIP Event" text2="Access" />
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
                Inside the World's Most{" "}
                <span className="text-primary italic font-serif">
                  Exclusive
                </span>{" "}
                Events
              </h2>
              <div className="space-y-10">
                <div className="group">
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    We provide privileged access to the world's most
                    sought-after cultural, sporting, and entertainment events,
                    opening doors typically closed to the public. From front-row
                    seats at global fashion weeks and private invitations to Art
                    Basel to Formula 1 paddock club access, Grammy
                    after-parties, and intimate live performances, every
                    experience is curated with discretion and care.
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    Beyond tickets, we arrange seamless end-to-end experiences,
                    including VIP hospitality, private transfers, and
                    behind-the-scenes access where available. Our global network
                    allows us to secure opportunities others cannot, ensuring
                    each event feels effortless, elevated, and entirely tailored
                    to you.
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3">
                    Whether attending for celebration, networking, or pure
                    enjoyment, our VIP event access transforms the extraordinary
                    into the expected—delivering moments that are rare, refined,
                    and unforgettable.
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
