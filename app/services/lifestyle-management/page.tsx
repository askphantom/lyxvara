import PageHeader from "@/components/layout/PageHeader";

export default function Page() {
  return (
    <>
      <PageHeader
        toptext="What We Offer"
        text1="Daily Lifestyle"
        text2="Management"
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
                Effortless Living,{" "}
                <span className="text-primary italic font-serif">
                  Exceptionally Managed
                </span>{" "}
              </h2>
              <div className="space-y-10">
                <div className="group">
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    From rare acquisitions and discreet personal shopping to
                    tailored sourcing of exceptional goods, we handle the
                    details that elevate everyday living. Our team anticipates
                    needs, manages requests with precision, and delivers
                    seamless solutions designed around your lifestyle.
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    We oversee household staffing, complex logistics, and
                    relocation support with absolute discretion, ensuring your
                    home and transitions run effortlessly. Whether coordinating
                    trusted personnel or managing multi-location living, every
                    detail is thoughtfully executed.
                  </p>
                  <p>
                    Our expertise extends to art advisory, private club
                    memberships, and privileged access to the world's most
                    exclusive gyms and wellness sanctuaries. We simplify the
                    exceptional—so you can focus on what truly matters.
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
