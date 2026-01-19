import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      {
        label: "Luxury Travels & Experiences",
        href: "/services/luxury-travels",
      },
      { label: "VIP Events and Access", href: "/services/event-access" },
      {
        label: "Corporate Employee and Customer programs",
        href: "/services/corporate-programmes",
      },
      { label: "Private Events", href: "/services/private-events" },
      { label: "Lifestyle Management", href: "/services/lifestyle-management" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    support: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-luxury py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Link href="#home" className="flex items-center gap-3 group">
                <img
                  src="/assets/lyxvara-logo-white.png"
                  alt="Lyxvara Concierge Logo"
                  className="w-36 transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Nigeria's premier luxury concierge service, dedicated to
              transforming your extraordinary visions into reality.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/lyxvaraconcierge"
                target="_blank"
                className="w-10 h-10 border border-border hover:border-primary flex items-center justify-center transition-colors group"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                />
              </Link>

              <Link
                href="https://facebook.com/lyxvaraconcierge"
                target="_blank"
                className="w-10 h-10 border border-border hover:border-primary flex items-center justify-center transition-colors group"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                />
              </Link>
              <Link
                href="https://twitter.com/lyxvaraconcierge"
                target="_blank"
                className="w-10 h-10 border border-border hover:border-primary flex items-center justify-center transition-colors group"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                />
              </Link>
              <Link
                href="https://linkedin.com/company/lyxvara-concierge"
                target="_blank"
                className="w-10 h-10 border border-border hover:border-primary flex items-center justify-center transition-colors group"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"
                />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-primary mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-primary mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          {/* <div>
            <h4 className="text-xs tracking-widest uppercase text-primary mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Lyxvara Concierge. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafting extraordinary experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
