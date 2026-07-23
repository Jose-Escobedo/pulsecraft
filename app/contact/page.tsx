import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, Clock, MapPin, Instagram, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: "Contact | Pulsecraft Web",
  description:
    "Let's build something great. Reach out to Pulsecraft for a free consultation on your next website.",
};

const socials = [
  { href: 'https://instagram.com/pulsecraftweb', Icon: Instagram, label: 'Instagram' },
  { href: 'https://linkedin.com/company/pulsecraft', Icon: Linkedin, label: 'LinkedIn' },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-bg pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6">
            Get in Touch
          </span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Let&apos;s build something great
          </h1>
          <p className="text-muted font-body text-xl max-w-xl mx-auto leading-relaxed">
            Tell us about your project. We&apos;ll get back to you within 24 hours to talk next steps.
          </p>
        </div>
      </section>

      {/* Form + info panel */}
      <section className="bg-bg pb-32 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-start">

            {/* Form card */}
            <div className="bg-surface border border-white/[0.07] rounded-2xl p-8 lg:p-10">
              <h2 className="text-2xl font-display font-bold text-primary mb-2">
                Send us a message
              </h2>
              <p className="text-muted font-body text-sm mb-8 leading-relaxed">
                Fill out the form and we&apos;ll reach out within one business day.
              </p>
              <ContactForm />
            </div>

            {/* Side info */}
            <div className="space-y-5">

              {/* Contact details */}
              <div className="bg-surface border border-white/[0.07] rounded-2xl p-7">
                <h3 className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted mb-5">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={15} className="text-accent" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-body text-muted mb-1">Email</p>
                      <a
                        href="mailto:support@pulsecraftweb.com"
                        className="text-sm font-body text-primary hover:text-accent transition-colors duration-200"
                      >
                        support@pulsecraftweb.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={15} className="text-accent" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-body text-muted mb-1">Phone</p>
                      <a
                        href="tel:+12139156556"
                        className="text-sm font-body text-primary hover:text-accent transition-colors duration-200"
                      >
                        (213) 915-6556
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={15} className="text-accent" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-body text-muted mb-1">Response time</p>
                      <p className="text-sm font-body text-primary">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={15} className="text-accent" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-body text-muted mb-1">Based in</p>
                      <p className="text-sm font-body text-primary">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service area */}
              <div className="bg-surface border border-white/[0.07] rounded-2xl p-7">
                <h3 className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted mb-5">
                  Areas We Serve
                </h3>
                <ul className="flex flex-wrap gap-2" aria-label="Cities served">
                  {locations.map((location) => (
                    <li key={location.slug}>
                      <Link
                        href={`/web-design/${location.slug}`}
                        className="inline-block text-xs font-body text-muted bg-elevated border border-white/[0.07] rounded-full px-3 py-1.5 hover:text-accent hover:border-accent/30 transition-all duration-200"
                      >
                        {location.city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social links */}
              <div className="bg-surface border border-white/[0.07] rounded-2xl p-7">
                <h3 className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted mb-5">
                  Follow Along
                </h3>
                <div className="flex gap-3">
                  {socials.map(({ href, Icon, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-elevated border border-white/[0.07] flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                    >
                      <Icon size={16} aria-hidden />
                    </a>
                  ))}
                </div>
              </div>

              {/* Calendly nudge */}
              <div className="bg-surface border border-accent/20 rounded-2xl p-7">
                <p className="text-sm font-body text-primary/80 leading-relaxed">
                  Prefer a quick call?{' '}
                  <a
                    href="https://calendly.com/therapysitestudio-support/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:brightness-110 transition-all duration-200 font-semibold"
                  >
                    Book a 30-minute intro call
                  </a>{' '}
                  directly on our calendar.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
