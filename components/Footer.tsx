import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#process', label: 'Process' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/accessibility', label: 'Accessibility' },
];

const socials = [
  { href: 'https://instagram.com/pulsecraftweb', Icon: Instagram, label: 'Instagram' },
  { href: 'https://linkedin.com/company/pulsecraft', Icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/[0.07]" aria-label="Site footer">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1 space-y-4">
            <Logo white />
            <p className="text-sm font-body text-muted leading-relaxed max-w-[220px]">
              Custom hand-coded websites for small businesses across the US.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-elevated border border-white/[0.07] flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted mb-5">
              Navigate
            </h3>
            <ul className="space-y-3" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-body text-muted hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted mb-5">
              Legal
            </h3>
            <ul className="space-y-3" role="list">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-body text-muted hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm font-body" role="list">
              <li>
                <a
                  href="mailto:support@pulsecraftweb.com"
                  className="text-muted hover:text-primary transition-colors duration-200"
                >
                  support@pulsecraftweb.com
                </a>
              </li>
              <li className="text-muted">Los Angeles, CA</li>
              <li>
                <Link
                  href="/contact"
                  className="text-accent font-medium hover:brightness-110 transition-all duration-200"
                >
                  Book a Free Call →
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-muted">
            © {new Date().getFullYear()} Pulsecraft Web. All rights reserved.
          </p>
          <p className="text-xs font-body text-muted">
            Custom Websites That Convert
          </p>
        </div>
      </div>
    </footer>
  );
}
