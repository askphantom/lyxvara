import PageHeader from "@/components/layout/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faMapLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function page() {
  return (
    <>
      <PageHeader toptext="Contact Us" text1="Get In Touch" text2="With Us" />
      <section className="py-24 bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-primary"></div>
                  <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                    Contact Details
                  </span>
                </div>
                <h2 className="font-display text-4xl text-white mb-8">
                  We Await{" "}
                  <span className="text-primary italic font-serif">
                    Your Call
                  </span>
                </h2>
                <p className="text-gray-400 font-light leading-relaxed text-sm mb-10">
                  Our dedicated concierge team is available 24/7 to assist with
                  your inquiries. Whether you are planning a complex itinerary
                  or require immediate assistance, we are at your service.
                </p>
              </div>
              <div className="space-y-10">
                <div className="group flex items-start">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mr-6 group-hover:border-primary/50 transition-colors">
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faMapLocationDot}
                    />
                    <span className="material-symbols-outlined text-primary font-light"></span>
                  </div>
                  <div>
                    <h3 className="text-white font-display text-lg mb-2">
                      Our Office
                    </h3>
                    <p className="text-gray-400 text-sm font-light">
                      13, Olosa Street, Victoria Island,
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
                <div className="group flex items-start">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mr-6 group-hover:border-primary/50 transition-colors">
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faPhoneVolume}
                    />
                    <span className="material-symbols-outlined text-primary font-light"></span>
                  </div>
                  <div>
                    <h3 className="text-white font-display text-lg mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-400 text-sm font-light mb-1">
                      ++234 801 2345 678
                    </p>
                  </div>
                </div>
                <div className="group flex items-start">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mr-6 group-hover:border-primary/50 transition-colors">
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faEnvelopeOpenText}
                    />
                    <span className="material-symbols-outlined text-primary font-light"></span>
                  </div>
                  <div>
                    <h3 className="text-white font-display text-lg mb-2">
                      Email
                    </h3>
                    <p className="text-gray-400 text-sm font-light mb-1">
                      services@lyxvaraconcierge.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-16 pt-10 border-t border-white/10">
                <h4 className="text-white font-display text-lg mb-6">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <Link href="#">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="w-6 h-6 bg-white/5 hover:text-primary text-gray-400 flex items-center justify-center transition-all duration-300"
                    />
                  </Link>

                  <Link href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="w-6 h-6 bg-white/5 hover:text-primary text-gray-400 flex items-center justify-center transition-all duration-300"
                    />
                  </Link>
                  <Link href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="w-6 h-6 bg-white/5 hover:text-primary text-gray-400 flex items-center justify-center transition-all duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 bg-[#08101f] border border-white/5 relative">
              <div className="absolute inset-0 bg-[#0c1a30] flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7365510732884!2d3.4252868741316!3d6.427882524268897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53025b73fdd%3A0xc34e0f8761fc9ae0!2s13%20Olosa%20St%2C%20Victoria%20Island%2C%20Lagos%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1767870834320!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
                {/* <div className="absolute inset-0 bg-[#051326]/40 pointer-events-none"></div>
                <div className="absolute z-10 bg-secondary p-6 shadow-2xl border border-primary/20 max-w-xs text-center">
                  <div className="w-12 h-1 bg-primary mx-auto mb-4"></div>
                  <h4 className="text-white font-display text-xl mb-2">
                    Lyxvara HQ
                  </h4>
                  <p className="text-gray-300 text-xs mb-4">
                    Victoria Island, Lagos
                  </p>
                  <a
                    className="text-primary text-xs font-bold tracking-widest hover:text-white transition-colors"
                    href="#"
                  >
                    GET DIRECTIONS
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
