import type { Metadata } from 'next';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';
import FAQSection, { type FAQItem } from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Pricing | Pulsecraft Web',
  description:
    'Simple, transparent pricing for custom website development. Plans starting at $99/mo with hosting included.',
};

const pricingTiers = [
  {
    name: 'Lump Sum',
    price: '$2,400',
    cadence: 'one-time',
    tagline: 'Own your site outright. Pay once.',
    highlight: false,
    badge: null as string | null,
    features: [
      'Full custom design & development',
      'Up to 5 pages',
      '$25/mo hosting (separate)',
      'Add ongoing maintenance: +$50/mo',
      'Add a blog: +$250',
      'Additional pages: +$100 each',
    ],
    cta: 'Request Project Start',
  },
  {
    name: 'Monthly Plan',
    price: '$99',
    cadence: '/mo',
    tagline: 'Everything included — design, dev, hosting, and support.',
    highlight: true,
    badge: 'Most Popular' as string | null,
    features: [
      'Full custom design & development',
      'Hosting included',
      'Up to 5 pages (add more: +$100/page)',
      'Ongoing maintenance & updates',
      '24/7 support',
      'Lifetime updates',
      'Add a blog: +$250',
    ],
    cta: 'Get Started',
  },
  {
    name: 'SEO Growth Add-On',
    price: '+$99',
    cadence: '/mo',
    tagline: 'Add monthly SEO services to any plan.',
    highlight: false,
    badge: null as string | null,
    features: [
      'In-depth keyword targeting',
      'Meta tags & SEO copy improvements',
      'Google Search Console setup',
      'Blog strategy & monthly articles',
      'Monthly performance reporting',
    ],
    cta: 'Add to My Plan',
  },
];

const comparisonRows = [
  ['Tailored to Your Business', '❌ Generic templates', '✅ Built around your brand'],
  ['Setup & Edits', '❌ DIY or limited edits', '✅ Fully managed'],
  ['Security', '❌ Often neglected', '✅ Built with best practices'],
  ['SEO Optimization', '⚠️ Basic or skipped', '✅ SEO baked in from day one'],
  ['Page Speed', '❌ Slow due to plugins', '✅ Next.js — blazing fast'],
  ['Mobile Optimization', '⚠️ Often buggy', '✅ Mobile-first by default'],
  ['Support', '❌ Chatbots & call centers', '✅ Direct from our founder'],
];

const faqs: FAQItem[] = [
  {
    question: 'Is there a setup fee?',
    answer:
      'No setup fees. Your first invoice is just the plan price. We cover the design, build, and launch — no surprise charges.',
  },
  {
    question: 'Can I cancel the monthly plan anytime?',
    answer:
      "Yes — month-to-month, no contracts. Cancel before your next billing date and we'll close things out cleanly.",
  },
  {
    question: 'Is hosting really included in the $99/mo?',
    answer:
      'Yes. Fast, secure hosting with SSL, daily backups, and uptime monitoring is included. No separate Vercel or hosting bills.',
  },
  {
    question: 'Do I own my website?',
    answer:
      "With the Lump Sum plan, you own everything after full payment. With the monthly plan, the site is managed by us — if you ever want to migrate, we'll handle the handoff.",
  },
  {
    question: 'How long does the build take?',
    answer:
      'Most sites are delivered in 2–4 weeks, depending on complexity and how quickly you can provide content and feedback.',
  },
  {
    question: 'Can I add more pages later?',
    answer:
      "Absolutely. Additional pages are $100 each on both plans and can be added whenever you're ready.",
  },
  {
    question: 'What if I need something custom — a booking system, e-commerce, etc.?',
    answer:
      'We handle custom integrations. Reach out via our contact page and we\'ll scope it for you. Most common integrations (Calendly, Stripe, booking tools) are included in the base build.',
  },
  {
    question: 'Can I combine plans?',
    answer:
      'Yes. Many clients pair the Monthly Plan with the SEO Growth Add-On for a complete web presence. We can also build custom bundles.',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6">
            Pricing
          </span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-muted font-body text-xl max-w-2xl mx-auto leading-relaxed">
            No surprise invoices. No hidden fees. Honest pricing for hand-coded websites
            that grow your business.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-bg pb-28 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map(({ name, price, cadence, tagline, highlight, badge, features, cta }) => (
              <div
                key={name}
                className={`relative bg-surface rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                  highlight
                    ? 'border-accent/40 shadow-[0_0_50px_rgba(0,216,255,0.12)]'
                    : 'border-white/[0.07]'
                }`}
              >
                {badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-accent text-bg text-[10px] font-body font-bold px-3.5 py-1.5 rounded-full tracking-wide">
                    <Star size={10} className="fill-bg" aria-hidden />
                    {badge}
                  </span>
                )}

                <div className="mb-8">
                  <p className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-muted mb-3">
                    {name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span
                      className={`text-5xl font-display font-bold ${
                        highlight ? 'text-accent' : 'text-primary'
                      }`}
                    >
                      {price}
                    </span>
                    <span className="text-muted font-body text-sm">{cadence}</span>
                  </div>
                  <p className="text-muted font-body text-sm leading-relaxed">{tagline}</p>
                </div>

                <ul className="space-y-3.5 mb-10 flex-1" aria-label={`${name} features`}>
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-body">
                      <Check size={15} className="text-accent flex-shrink-0 mt-0.5" aria-hidden />
                      <span className="text-primary/80 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center font-body font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 ${
                    highlight
                      ? 'bg-accent text-bg hover:brightness-110 hover:shadow-[0_0_24px_var(--accent-glow)]'
                      : 'border border-white/[0.12] text-primary hover:border-accent/30 hover:text-accent'
                  }`}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm font-body text-muted">
            Need help choosing?{' '}
            <Link
              href="/contact"
              className="text-accent hover:brightness-110 transition-all duration-200"
            >
              Contact us
            </Link>{' '}
            and we&apos;ll walk you through it.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-surface border-y border-white/[0.07] py-28 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Why businesses choose us over Wix &amp; Squarespace
            </h2>
            <p className="text-muted font-body text-lg">
              Feature for feature, hand-coded wins.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block rounded-2xl overflow-hidden border border-white/[0.07]">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-elevated">
                  <th className="py-4 px-6 text-left font-semibold text-primary">Feature</th>
                  <th className="py-4 px-6 text-left font-semibold text-muted">Wix / Squarespace</th>
                  <th className="py-4 px-6 text-left font-semibold text-accent bg-accent/[0.04]">
                    Pulsecraft
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, wix, us], i) => (
                  <tr
                    key={i}
                    className="border-t border-white/[0.07] hover:bg-elevated/60 transition-colors duration-150"
                  >
                    <td className="py-4 px-6 font-medium text-primary">{feature}</td>
                    <td className="py-4 px-6 text-muted">{wix}</td>
                    <td className="py-4 px-6 font-medium text-primary bg-accent/[0.02]">{us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden flex flex-col gap-4">
            {comparisonRows.map(([feature, wix, us], i) => (
              <div
                key={i}
                className="bg-elevated rounded-xl border border-white/[0.07] p-5"
              >
                <h4 className="font-display font-semibold text-primary mb-3 text-sm">{feature}</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-muted text-xs font-body font-semibold tracking-wide uppercase mb-1">
                      Wix / Squarespace
                    </p>
                    <p className="text-muted font-body">{wix}</p>
                  </div>
                  <div>
                    <p className="text-accent text-xs font-body font-semibold tracking-wide uppercase mb-1">
                      Pulsecraft
                    </p>
                    <p className="text-primary font-body font-medium">{us}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-bg font-body font-semibold text-base px-8 py-4 rounded-xl hover:brightness-110 hover:shadow-[0_0_28px_var(--accent-glow)] transition-all duration-200"
            >
              I&apos;m Ready to Launch My New Website
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Pricing Questions, Answered" />

      {/* Bottom CTA */}
      <section className="bg-surface border-t border-white/[0.07] py-20 px-6 lg:px-8 text-center">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Still have questions?
          </h2>
          <p className="text-muted font-body text-lg mb-8 leading-relaxed">
            Let&apos;s talk. We&apos;ll help you figure out the right fit for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-bg font-body font-semibold text-base px-8 py-4 rounded-xl hover:brightness-110 hover:shadow-[0_0_28px_var(--accent-glow)] transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
