import PageHeader from "@/components/layout/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChampagneGlasses,
  faPlane,
  faShoppingBag,
  faHouseChimneyWindow,
  faArrowRight,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function page() {
  return (
    <>
      <PageHeader toptext="What We Offer" text1="Curated" text2="Experiences" />
      <section className="py-20 bg-background-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Bespoke Solutions for the{" "}
            <span className="italic text-primary">Discerning</span> Few
          </h2>
          <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
            From the tarmac to the red carpet, Lyxvara ensures that every aspect
            of your life is managed with precision and elegance. Explore our
            suite of premium services designed for the elite.
          </p>
        </div>
      </section>
      <section className="pb-24 bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Link
              className="group relative block bg-[#0a182e] border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              href="/services/luxury-travel"
            >
              <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                <img
                  alt="Private Aviation"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD2ClLeVQQrpn7FZoYQB_ew9ILtQzHb90_X99RttXs_BLnoWyDx59GYGTjtZ4InTbVCNHk14YIgXAcmnZlSvkbuQwyABt92365iauTj3LEqtnvs1J7TDUkXxebpmVQtXAzSLre-0DGKczFnckcRs7GfSRhMtbixRqmsIsglHpeE329H9wA2lCT_b8DePR-JJIiGY7BDjINltTcmwsjSSk5xaHV2irbyW1mhW_MTcMP7jybEyQz35J7He4s13mZ21iV-5yeJMt-anua"
                />
                <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-sm p-3 border border-white/10 rounded-full">
                  <FontAwesomeIcon
                    icon={faPlane}
                    className=" text-white w-6 h-6"
                  />
                  <span className="material-symbols-outlined text-white text-2xl"></span>
                </div>
              </div>
              <div className="p-8 md:p-10 relative">
                <h3 className="font-display text-3xl text-white mb-4 group-hover:text-primary transition-colors flex items-center justify-between">
                  Luxury Travel & Experiences
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 pr-4">
                  Seamless global mobility. Whether it's a heavy jet for
                  transcontinental travel or a helicopter for inner-city
                  transfers, we manage all logistics, ensuring privacy, safety,
                  and luxury at 40,000 feet.
                </p>
                <div className="flex items-center text-primary text-xs font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                  View Details{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ms-5 w-6" />
                  <span className="material-icons ml-2 text-sm"></span>
                </div>
              </div>
            </Link>
            <Link
              className="group relative block bg-[#0a182e] border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              href="/services/event-access"
            >
              <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                <img
                  alt="Exclusive Events"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjOPNy3fbumox0p-l3fHUHCrQc8kl3FVePxzKP_XaMe3A4E3Xv9xcJOS1DYKrBjGpJWOJva43kYR26B2IfGMlF89wqXroiZPoEI-FyaqWTvfw4A1cQ9FGGdSuKGIJVKFLIXhe5TjtyMil95ZmuwXKXRw0OiqMDppb3x4wX8qKqtvap0W9SnswVOo7R5SEkUdbICg7vMIXwyruv-bEUccF5OVWynUTJKACawL32au_GA7WqarfRi8k7WkC4N2PXXD-VxDPSl7D_j6op"
                />
                <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-sm p-3 border border-white/10 rounded-full">
                  <FontAwesomeIcon
                    icon={faChampagneGlasses}
                    className=" text-white w-6 h-6"
                  />
                  <span className="material-symbols-outlined text-white text-2xl"></span>
                </div>
              </div>
              <div className="p-8 md:p-10 relative">
                <h3 className="font-display text-3xl text-white mb-4 group-hover:text-primary transition-colors">
                  VIP Event Access
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 pr-4">
                  Access the inaccessible. From VIP boxes at major sporting
                  events to front-row seats at fashion weeks and private galas,
                  we secure your place at the world's most coveted gatherings.
                </p>
                <div className="flex items-center text-primary text-xs font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                  View Details{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ms-5 w-6" />
                  <span className="material-icons ml-2 text-sm"></span>
                </div>
              </div>
            </Link>
            <Link
              className="group relative block bg-[#0a182e] border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              href="/services/lifestyle-management"
            >
              <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                <img
                  alt="Personal Shopping"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaHhSLV49ea65IJj1JEaOMAhMEw1Nb2CoulQP15q9TMTvrqO2cW8iD_HziadKg5dCcxI4kEret0JNT0lfQU_vroPmAn4GF9lBerI3nFi_JHQm1kU7zwU-jQcb60cXcojC-rwlALyFTOg2OjaDDDlcWkBUF1ybgVn91I9rm3oMICpYLOkoFN79lfpLB3l0bBjoRzenGjAaLiYy6XnlR678w3Pr1OufoUZiyhlrlCfsCfVVZzpDiruyzW05Coc_2WyNkLEZuS6uADGyO"
                />
                <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-sm p-3 border border-white/10 rounded-full">
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className=" text-white w-6 h-6"
                  />
                  <span className="material-symbols-outlined text-white text-2xl"></span>
                </div>
              </div>
              <div className="p-8 md:p-10 relative">
                <h3 className="font-display text-3xl text-white mb-4 group-hover:text-primary transition-colors">
                  Daily Lifestyle Management
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 pr-4">
                  Curating your lifestyle with rare finds. Our stylists source
                  limited-edition timepieces, haute couture, and fine jewelry
                  from around the globe, delivered discreetly to your doorstep.
                </p>
                <div className="flex items-center text-primary text-xs font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                  View Details{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ms-5 w-6" />
                  <span className="material-icons ml-2 text-sm"></span>
                </div>
              </div>
            </Link>
            {/* <Link
              className="group relative block bg-[#0a182e] border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              href="#"
            >
              <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                <img
                  alt="Luxury Properties"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-24aM87pFgYfUGRCVIJOz8qQrAF9jFY1TA55F3njJcK0QH1DZKJCph-5hX31mmpNmLMVDLjYdW9dxBE7qiVM75IhpZS75dAPvqb5UktwTwCZKHVMcU8u-5gaw3LHKB7S2AvH0C9qU4s6BJx2ppeebQD0XflhIzj3lEfLYjeGGbP75oj2DLHk2oqgNrVbkhqFRt7D4fqDVsFlX1hgAglnUq4nA0A3nTGIoAFtP5vdvDK1tUcASE08ENUW_0-JEOTpx-8zrHTwkjvNm"
                />
                <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-sm p-3 border border-white/10 rounded-full">
                  <FontAwesomeIcon
                    icon={faHouseChimneyWindow}
                    className=" text-white w-6 h-6"
                  />
                  <span className="material-symbols-outlined text-white text-2xl"></span>
                </div>
              </div>
              <div className="p-8 md:p-10 relative">
                <h3 className="font-display text-3xl text-white mb-4 group-hover:text-primary transition-colors">
                  Corporate & Employee Programmes
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 pr-4">
                  Extraordinary spaces for extraordinary lives. We facilitate
                  the acquisition, rental, and management of prime real estate
                  in Lagos, London, Dubai, and beyond.
                </p>
                <div className="flex items-center text-primary text-xs font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                  View Details{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ms-5 w-6" />
                  <span className="material-icons ml-2 text-sm"></span>
                </div>
              </div>
            </Link> */}
            <Link
              className="group relative block bg-[#0a182e] border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              href="/services/corporate-programmes"
            >
              <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                <img
                  alt="Luxury Properties"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  src="/assets/employee-programmes.png"
                />
                <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-sm p-3 border border-white/10 rounded-full">
                  <FontAwesomeIcon
                    icon={faGift}
                    className=" text-white w-6 h-6"
                  />
                  <span className="material-symbols-outlined text-white text-2xl"></span>
                </div>
              </div>
              <div className="p-8 md:p-10 relative">
                <h3 className="font-display text-3xl text-white mb-4 group-hover:text-primary transition-colors">
                  Corporate & Employee Programmes
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 pr-4">
                  Thoughtfully curated concierge programmes that elevate the
                  corporate experience—gifting, travel, and exclusive events
                  designed to reflect your brand's lifestyle and distinction.
                </p>
                <div className="flex items-center text-primary text-xs font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                  View Details{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ms-5 w-6" />
                  <span className="material-icons ml-2 text-sm"></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#08101f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                Our Method
              </span>
              <h2 className="font-display text-4xl text-white mt-4 mb-8">
                Seamless <span className="italic text-primary">Execution</span>
              </h2>
              <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-10">
                We understand that your time is your most valuable asset. Our
                service model is built on three pillars to ensure you receive
                the highest standard of care without disruption to your daily
                life.
              </p>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-display text-xl">
                      01
                    </span>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-white font-display text-xl mb-2">
                      Consultation
                    </h4>
                    <p className="text-gray-500 text-sm">
                      We begin with a deep dive into your preferences,
                      understanding your unique taste and requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-display text-xl">
                      02
                    </span>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-white font-display text-xl mb-2">
                      Curation
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Our team leverages global networks to present you with
                      options that are often unavailable to the public.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-primary font-display text-xl">
                      03
                    </span>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-white font-display text-xl mb-2">
                      Realization
                    </h4>
                    <p className="text-gray-500 text-sm">
                      We handle every detail of the booking and logistics,
                      providing you with a flawless final experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-125">
              <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4"></div>
              <img
                alt="Concierge Service"
                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK1IEy6Od4kCHkIqMQ4OTAIxtq80sO8hNtjiN8AUBD6CS-4xgHr1DoXJwa5JGkPSj4a2ZkFVQ5uqXHOppsnkK1ktmgn5pINugpPQdj-Ukruv1CvmD1sSuxAxkoAG4mdfIoLTnljykn1QTSEQPcuZ3mbp4EhZ2t2PPAAPf0VBdNAguGX7E55LGWf7Acm1B-fE5APlhjudV8-WAQbFDrfKWS2Ki0Lt0j0f5rR1mt8CJR7uV5Stoh7TnJVjIbVL_rsiZdBQsQHSYd4j04"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
