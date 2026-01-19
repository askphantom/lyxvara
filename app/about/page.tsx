import PageHeader from "@/components/layout/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faHandshake,
  faUserShield,
  faGlobe,
  faLock,
  faStar,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

export default function page() {
  return (
    <>
      <PageHeader toptext="Who Ww Are" text1="Crafting Your" text2="Legacy" />
      {/* <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 border border-white/10 p-2">
                <img
                  alt="Luxury Interior"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7947jXI05go2E89HbKAeaYOv_BYLkakCsPNgAiMNfXzDkTcBeSb58hHQWEuqJYwww5k_a3RN3iZhj0Yjv2Y-olKGJCUREYMvFSqk_VzdubMdo51eZSuVsE3E4gE55aDyPKX2NDQ87SPIpBYYcMnM9sKPcvzBv673mymoDdfJhnFC4szfkjTItupdw50QGIujUIY7R8Nd37OMYh0bQoAc3kdP93CcJ8XWOpxJZLg-CAjvNsTY3KPx7ETPALBP3-4zRwO9I71u7tDYX"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border border-primary/20 z-0"></div>
              <div className="absolute -top-10 -left-10 w-2/3 h-2/3 bg-[#0a182e] z-0"></div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  Our Essence
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-10 leading-tight">
                The Art of{" "}
                <span className="text-primary italic font-serif">
                  Exceptional
                </span>{" "}
                Living
              </h2>
              <div className="space-y-10">
                <div className="group">
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    Lyxvara Concierge is a boutique concierge company that
                    offers premium concierge services that go beyond what the
                    traditional concierge companies offer. We pride ourselves in
                    being a world- class team, that listens to a client's wishes
                    no matter the language in which it is spoken and carry it
                    out with keen attention to detail.
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3 mb-4">
                    Presently headquartered in Lagos Nigeria, our clientele
                    enjoys global reach through our strategic partnerships.
                    Through these partnerships, we also receive quarterly
                    personalized trainings to make us one of the fastest growing
                    and most innovative Concierge Service providers in West
                    Africa.
                  </p>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base pl-10 border-l border-white/5 ml-3">
                    With Lyxvara Concierge, one has access to a super-efficient,
                    multilingual team of luxury lifestyle professionals who
                    provide corporate experiences, outsourced concierge & luxury
                    VIP services to your unique business and individual
                    lifestyle. Our team provides solutions to every legal and
                    ethical request. No request is too big or too small as
                    account managers have been trained to fulfil every request
                    and constantly strive to exceed every expectation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 border border-white/10 p-2">
                <img
                  alt="Luxury Concierge Service"
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7947jXI05go2E89HbKAeaYOv_BYLkakCsPNgAiMNfXzDkTcBeSb58hHQWEuqJYwww5k_a3RN3iZhj0Yjv2Y-olKGJCUREYMvFSqk_VzdubMdo51eZSuVsE3E4gE55aDyPKX2NDQ87SPIpBYYcMnM9sKPcvzBv673mymoDdfJhnFC4szfkjTItupdw50QGIujUIY7R8Nd37OMYh0bQoAc3kdP93CcJ8XWOpxJZLg-CAjvNsTY3KPx7ETPALBP3-4zRwO9I71u7tDYX"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border border-primary/20 -z-0"></div>
              <div className="absolute -top-10 -left-10 w-2/3 h-2/3 bg-[#0a182e] -z-0"></div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-primary"></div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight">
                Your Exclusive Gateway to{" "}
                <span className="text-primary italic font-serif">
                  Effortless Luxury
                </span>{" "}
                in Nigeria and Beyond
              </h2>
              <p className="text-gray-400 font-light leading-relaxed text-lg mb-8">
                At Lyxvara, we master your most precious commodity: time. We
                don't just provide services; we curate a life of absolute
                seamlessness, where every desire is anticipated and every
                logistics hurdle is transformed into a graceful experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="border-l border-primary/30 pl-6">
                  <span className="text-primary font-display text-3xl block mb-2">
                    10+
                  </span>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                    Years of Excellence
                  </p>
                </div>
                <div className="border-l border-primary/30 pl-6">
                  <span className="text-primary font-display text-3xl block mb-2">
                    50+
                  </span>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                    Global Partners
                  </p>
                </div>
                <div className="border-l border-primary/30 pl-6">
                  <span className="text-primary font-display text-3xl block mb-2">
                    500+
                  </span>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                    Elite Members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#08101f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-primary"></div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="font-display text-4xl text-white mb-8">
                Elevating{" "}
                <span className="italic text-primary">Nigeria’s Elite</span>{" "}
                Since Inception
              </h2>
              <div className="space-y-6 text-gray-400 font-light leading-relaxed">
                <p>
                  Lyxvara Concierge was born from a vision to redefine the
                  meaning of luxury service within West Africa. We recognized
                  that for the global citizen based in Lagos, the true luxury is
                  not just access, but the peace of mind that comes with
                  impeccable execution.
                </p>
                <p>
                  Our journey has been one of constant refinement, building a
                  bridge between the best of international luxury standards and
                  the profound cultural depth and entrepreneurial spirit that
                  defines Lagos. Today, we stand as the region's premier
                  lifestyle management firm, trusted by leaders, visionaries,
                  and high-net-worth families.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative p-4 border border-white/5">
                <img
                  alt="Lagos Premier Private Club"
                  className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="/assets/elite.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08101f] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              The Distinction
            </span>
            <h2 className="font-display text-4xl text-white mt-4">
              What Truly{" "}
              <span className="italic text-primary">Sets Lyxvara Apart</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-[#0c1a30] p-8 border border-white/5 hover:border-primary/30 transition-all">
              <FontAwesomeIcon
                icon={faUserShield}
                className="text-primary w-10 mb-6 block"
              />
              <h3 className="text-white font-display text-xl mb-4">
                Hyper-Personalized Service
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We don't just know your name; we understand your preferences,
                anticipate your needs, and curate every detail to your specific
                taste.
              </p>
            </div>
            <div className="group bg-[#0c1a30] p-8 border border-white/5 hover:border-primary/30 transition-all">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-primary w-10 mb-6 block"
              />

              <h3 className="text-white font-display text-xl mb-4">
                Seamless Local-Global Fusion
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Expert navigation of Nigeria's unique landscape combined with an
                elite global network of partners across major world capitals.
              </p>
            </div>
            <div className="group bg-[#0c1a30] p-8 border border-white/5 hover:border-primary/30 transition-all">
              <FontAwesomeIcon
                icon={faLock}
                className="text-primary w-8 mb-6 block"
              />
              <h3 className="text-white font-display text-xl mb-4">
                Uncompromising Discretion &amp; Security
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our commitment to your privacy is absolute. We operate with the
                highest levels of security and confidentiality at every
                touchpoint.
              </p>
            </div>
            <div className="group bg-[#0c1a30] p-8 border border-white/5 hover:border-primary/30 transition-all">
              <FontAwesomeIcon
                icon={faStar}
                className="text-primary w-10 mb-6 block"
              />
              <h3 className="text-white font-display text-xl mb-4">
                24/7 Impeccable Execution
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Excellence never sleeps. Our dedicated lifestyle managers are
                available around the clock to ensure flawless delivery of any
                request.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0c1a30] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-primary"></div>
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Our Promise
            </span>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-10">
            Our Commitment <span className="italic text-primary">To You</span>
          </h2>
          <div className="bg-background-dark/50 p-12 border border-white/10 relative">
            <FontAwesomeIcon
              icon={faQuoteRight}
              className="absolute top-6 left-6 text-primary/20 w-20"
            />
            <p className="text-gray-300 text-xl font-light italic leading-relaxed font-display">
              "Luxury, at its finest, is deeply personal. It is not merely about
              the objects we acquire, but the experiences that enrich us and the
              liberation from the mundane. Our commitment is to return time,
              peace of mind, and extraordinary possibility to your life."
            </p>
          </div>
        </div>
      </section>
      {/*<section className="py-24 bg-[#08101f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Our Principles
            </span>
            <h2 className="font-display text-4xl text-white mt-4">
              Core <span className="italic text-primary">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#051326] p-10 border border-white/5 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FontAwesomeIcon icon={faAward} />
                <span className="material-symbols-outlined text-9xl text-white">
                  lock
                </span>
              </div>
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform block">
                Our Pledge
              </span>
              <h3 className="text-white font-display text-xl mb-4 relative z-10">
                &nbsp;
              </h3>
              <p className="text-gray-200 text-xl leading-relaxed relative z-10">
                To enhance the personal and professional lives of clients and
                employees through the provision of premium concierge services.
              </p>
            </div>
            <div className="bg-[#051326] p-10 border border-white/5 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FontAwesomeIcon icon={faHandshake} />
                <span className="material-symbols-outlined text-9xl text-white">
                  handshake
                </span>
              </div>
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform block">
                Our Promise
              </span>
              <h3 className="text-white font-display text-xl mb-4 relative z-10">
                &nbsp;
              </h3>
              <p className="text-gray-200 text-xl leading-relaxed relative z-10">
                To become Africa’s most preferred Concierge service provider
                across the luxury lifestyle and corporate spectrum, through
                efficiency and attention to details.
              </p>
            </div>
          </div>
        </div>
      </section>
       <section className="py-24 bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                Our Journey
              </span>
              <h2 className="font-display text-4xl text-white mt-4 mb-12">
                A Decade of{" "}
                <span className="italic text-primary">Distinction</span>
              </h2>
              <div className="space-y-12 border-l border-white/10 pl-8 ml-4 relative">
                <div className="relative group">
                  <span className="absolute -left-10.25 top-1 h-5 w-5 rounded-full border border-primary bg-background-dark group-hover:bg-primary transition-colors"></span>
                  <span className="text-white font-display text-2xl block mb-2">
                    2014
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Founded in Lagos as a boutique travel consultancy for
                    executives, focusing on bespoke itineraries and VIP airport
                    services.
                  </p>
                </div>
                <div className="relative group">
                  <span className="absolute -left-10.25 top-1 h-5 w-5 rounded-full border border-primary bg-background-dark group-hover:bg-primary transition-colors"></span>
                  <span className="text-white font-display text-2xl block mb-2">
                    2018
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Expanded services to include real estate acquisition,
                    personal shopping, and exclusive event access, rebranding as
                    Lyxvara Concierge.
                  </p>
                </div>
                <div className="relative group">
                  <span className="absolute -left-10.25 top-1 h-5 w-5 rounded-full border border-primary bg-primary shadow-[0_0_15px_rgba(207,185,129,0.5)]"></span>
                  <span className="text-white font-display text-2xl block mb-2">
                    2024
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Recognized as the premier luxury concierge service in West
                    Africa, serving over 500 elite families and corporate
                    clients globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 h-full min-h-100 relative">
              <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4"></div>
              <img
                alt="History Image"
                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaXfBGDWw-eiDcSrlvd1_ijZ68pmPypw_tlzVpQUkPC5V0IA2Uda9ZDpV4xLNbpcUekUpd1Usc5jWYEkFShm1SgJEVO-3yk9keZJStMFkxUgTArPwUVhB7l0x1vDo2w-peXdbp2dVYcXgQC08aTKlJYZbwFwmfTKv1I-BbMeO7YWyG4HTn07c9Kg4-5idPMmj2SXgihEfLFUJfivzDufGtllPql3BxIKZ_crTYq8021YkC38vVSFrdjQ0HWOZUAOGoKYFeIl7MLxOU"
              />
            </div>
          </div>
        </div>
      </section> 
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
            The Team
          </span>
          <h2 className="font-display text-4xl text-white mt-4">
            Meet The <span className="italic text-primary">Curators</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm font-light">
            Our diverse team of lifestyle managers brings global expertise and
            local insight to every request.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group text-center">
            <div className="relative overflow-hidden mb-8 aspect-3/4 border border-white/5">
              <img
                alt="CEO"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ3kxv2MO_ROEHdODBzMV604esH9H7FZhAwlT5blPEpEGci5VbNQkW5HYOiaZSbqSC2KAm7RonQvoJSnXiHgtjetF_Vhj3CfiiZ4tBF8kbMB4bAr9atO--VlgirlNIZ60ZemAu5EMZiwwdEEWpPwrZ5K_SNnVN2tFIeSA2LpiqWdXQF_WEcU3nfIoAxR-IaUIwnIWo3WG3Scs-1u6kx310lQyySxtmCChHd2KbS_VEBOeyoAPeljcln5ZJ1SJ1iArWxDFjUy7XDYiZ"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-6 left-0 right-0 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-center space-x-4">
                  <a className="text-white hover:text-primary" href="#">
                    <i className="material-icons text-sm">email</i>
                  </a>
                  <a className="text-white hover:text-primary" href="#">
                    <i className="material-icons text-sm">share</i>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-white font-display text-2xl">Amina Adebayo</h3>
            <p className="text-primary text-xs uppercase tracking-widest mt-2 font-medium">
              Founder &amp; CEO
            </p>
          </div>
          <div className="group text-center">
            <div className="relative overflow-hidden mb-8 aspect-3/4 border border-white/5">
              <img
                alt="Head of Concierge"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIbXuPEdbKkCX2enkfolOf86z7F5PcjLPkctcNIS10u56jtspR8zaivlQNcllmexl70KMtTisnl-wLivJGsylScniBW7R7PGIB5RloyJh2bT3L_Uq7KKa8yUISopmtEEyisJrLzPCx1em-_a4CsRr-3LCJyEBzXg5QnT0JEicGX9tUoUJDAbFKGpUTFYvZG-neNjJgiNswGpPvTcXSMylGgviUglMHdn6CGOE0T8ViRGZyzOO1Z_yAgY2p9fDOaTCfB7ERCReAuObq"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-6 left-0 right-0 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-center space-x-4">
                  <a className="text-white hover:text-primary" href="#">
                    <i className="material-icons text-sm">email</i>
                  </a>
                  <a className="text-white hover:text-primary" href="#">
                    <i className="material-icons text-sm">share</i>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-white font-display text-2xl">David Okonjo</h3>
            <p className="text-primary text-xs uppercase tracking-widest mt-2 font-medium">
              Head of Concierge
            </p>
          </div>
          <div className="group text-center">
            <div className="relative overflow-hidden mb-8 aspect-3/4 border border-white/5">
              <img
                alt="Lifestyle Manager"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPd9MjnzG3Lx5n03ZEJVdn8j9ONvY0gWjHhqZNJCAR8IKlFJhAwS7-QMk0UQMSas4ocQ61e2leApewKxzEQp6Kbw2JrevRiz1erf4x4bQ8D8v7dkDfLQIAm0javElXNdw6fAM6BbEAguSy6cCRRq6jgwolwZS4P3DeINLjOAuBPt6Lby8W1JJ4mphGZZwKLTULMp2lOfM1FXqPRhgpt3fKQ2Lqj9nNPa-049gIzd9PxS6sqZ6a1BQUAWTQgtnt7cX7NnHKcFgNQR5U"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-6 left-0 right-0 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-center space-x-4">
                  <a className="text-white hover:text-primary" href="#">
                    <i className="material-icons text-sm">email</i>
                  </a>
                  <a className="text-white hover:text-primary" href="#">
                    <i className="material-icons text-sm">share</i>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-white font-display text-2xl">Sarah Johnson</h3>
            <p className="text-primary text-xs uppercase tracking-widest mt-2 font-medium">
              Lifestyle Manager
            </p>
          </div>
        </div>
      </section>*/}
    </>
  );
}
