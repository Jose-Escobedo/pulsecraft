'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const proofPoints = [
  'No page builders — every line of code written by hand',
  'Next.js stack: blazing fast, SEO-optimized by default',
  'Sites delivered in 2–4 weeks, not 3 months',
  'Long-term partner: updates, support, and growth included',
  'Direct line to the developer — no account managers or middlemen',
];

const stats = [
  { value: '100', label: 'PageSpeed Score' },
  { value: '5/5', label: 'Google Reviews' },
  { value: '2–4 wks', label: 'Avg. Delivery' },
];

export default function WhyPulsecraft() {
  return (
    <section id="why-us" className="bg-bg py-28 lg:py-40 px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: bold statement + stats */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6">
              Why Pulsecraft
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              Why small businesses choose us over{' '}
              <span className="text-accent">Wix, every time</span>
            </h2>
            <p className="text-muted font-body text-lg leading-relaxed mb-10">
              Page builders are designed for everyone — which means they&apos;re optimized for no one.
              We build sites specifically around your business, your customers, and your goals.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4" aria-label="Key metrics">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-surface border border-white/[0.07] rounded-xl p-4 text-center"
                >
                  <div className="text-2xl lg:text-3xl font-display font-bold text-accent mb-1">
                    {value}
                  </div>
                  <div className="text-xs font-body text-muted leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: proof points */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            className="space-y-3"
          >
            {proofPoints.map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
                className="flex items-start gap-4 bg-surface border border-white/[0.07] rounded-xl p-5 hover:border-accent/20 transition-colors duration-300"
              >
                <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-accent" aria-hidden />
                </div>
                <p className="text-primary font-body text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
