import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Victoria Island', 'Lagos, Nigeria'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+234 812 345 6789', '+234 801 234 5678'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@lyxvara.com', 'concierge@lyxvara.com'],
  },
  {
    icon: Clock,
    title: 'Availability',
    details: ['24 Hours / 7 Days', 'Always at your service'],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">Contact</span>
            </div>

            <h2 className="text-display-sm text-foreground mb-6">
              Begin Your <span className="text-elegant text-primary">Journey</span>
            </h2>

            <p className="text-muted-foreground mb-10">
              Ready to experience the extraordinary? Our team is standing by to discuss your 
              needs and craft a bespoke solution that exceeds your expectations.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="group">
                  <div className="w-12 h-12 border border-border group-hover:border-primary flex items-center justify-center mb-4 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-display text-lg text-foreground mb-2">{item.title}</h4>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="luxury-card p-8 md:p-12">
            <h3 className="font-display text-2xl text-foreground mb-8">Send a Message</h3>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-border focus:border-primary px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-border focus:border-primary px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-border focus:border-primary px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border border-border focus:border-primary px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  How can we assist you?
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border border-border focus:border-primary px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button variant="luxury" size="luxury" className="w-full group">
                Send Message
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
