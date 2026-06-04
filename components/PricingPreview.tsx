'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const tiers = [
  {
    name: 'Lump Sum',
    price: '$2,400',
    cadence: 'one-time',
    tagline: 'Own it outright. Pay once, host for $25/mo.',
    highlight: false,
    features: ['Full custom design & dev', 'Up to 5 pages', '$25/mo hosting', 'Optional maintenance add-on'],
    cta: 'Get a Quote',
  },
  {
    name: 'Monthly',
    price: '$99',
    cadence: '/mo',
    tagline: 'Design, dev, hosting, and support — all in.',
    highlight: true,
    badge: 'Most Popular',
    features: ['Full custom design & dev', 'Hosting included', 'Ongoing maintenance', '24/7 support'],
    cta: 'Get Started',
  },
  {
    name: 'SEO Add-On',
    price: '+$99',
    cadence: '/mo',
    tagline: 'Add monthly SEO services to any plan.',
    highlight: false,
    features: ['Keyword targeting', 'Monthly blog articles', 'Google Search Console', 'Performance reports'],
    cta: 'Add to My Plan',
  },
] as const;

export default function PricingPreview() {
  return (
    <section
      id="pricing"
      className="bg-surface border-y border-white/[0.07] py-28 lg:py-40 px-6 lg:px-8 scroll-mt-24"
    >
      <div className="max-w-[1200px] mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-5">
            Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-5">
            Simple, transparent pricing
          </h2>
          <p className="text-muted font-body text-lg max-w-xl mx-auto leading-relaxed">
            No hidden fees. No surprise invoices. Straightforward plans built around your budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map(({ name, price, cadence, tagline, highlight, features, cta, ...rest }, i) => {
            const badge = 'badge' in rest ? rest.badge : undefined;
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative bg-elevated rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                  highlight
                    ? 'border-accent/40 shadow-[0_0_40px_rgba(0,216,255,0.12)]'
                    : 'border-white/[0.07] hover:border-accent/20'
                }`}
              >
                {badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-bg text-[10px] font-body font-bold px-3.5 py-1.5 rounded-full tracking-wide">
                    {badge}
                  </span>
                )}

                <div className="mb-6">
                  <p className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted mb-3">
                    {name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-4xl font-display font-bold ${highlight ? 'text-accent' : 'text-primary'}`}>
                      {price}
                    </span>
                    <span className="text-muted font-body text-sm">{cadence}</span>
                  </div>
                  <p className="text-muted font-body text-sm leading-relaxed">{tagline}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1" aria-label={`${name} features`}>
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm font-body text-primary/80">
                      <Check size={14} className="text-accent flex-shrink-0" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center font-body font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 ${
                    highlight
                      ? 'bg-accent text-bg hover:brightness-110 hover:shadow-[0_0_20px_var(--accent-glow)]'
                      : 'border border-white/[0.12] text-primary hover:border-accent/30 hover:text-accent'
                  }`}
                >
                  {cta}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm hover:brightness-110 transition-all duration-200"
          >
            See full pricing details <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

      </div>
    </section>
  );
}
