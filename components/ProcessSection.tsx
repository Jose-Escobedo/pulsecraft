'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    Icon: MessageSquare,
    title: 'Discovery',
    desc: 'We learn about your business, goals, competitors, and what success looks like for your new site.',
  },
  {
    number: '02',
    Icon: Palette,
    title: 'Design',
    desc: 'We build a custom layout and visual design matched to your brand and optimized for conversions.',
  },
  {
    number: '03',
    Icon: Code2,
    title: 'Build',
    desc: 'We hand-code your site in Next.js — fast, accessible, SEO-ready, and mobile-first from line one.',
  },
  {
    number: '04',
    Icon: Rocket,
    title: 'Launch',
    desc: 'We deploy, test thoroughly, and hand over the keys — with hosting and ongoing support included.',
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-surface border-y border-white/[0.07] py-28 lg:py-40 px-6 lg:px-8 scroll-mt-24"
    >
      <div className="max-w-[1200px] mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-5">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
            From idea to live site in weeks,<br className="hidden sm:block" /> not months
          </h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-9 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent)' }}
            aria-hidden
          />

          {steps.map(({ number, Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon container with step badge */}
              <div className="relative mb-6">
                <div className="w-[72px] h-[72px] rounded-2xl bg-elevated border border-white/[0.07] flex items-center justify-center hover:border-accent/30 transition-colors duration-300">
                  <Icon size={28} className="text-accent" aria-hidden />
                </div>
                <span
                  className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-accent text-bg text-[10px] font-display font-bold flex items-center justify-center"
                  aria-hidden
                >
                  {i + 1}
                </span>
              </div>

              <p className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-muted mb-1.5">
                Step {number}
              </p>
              <h3 className="text-lg font-display font-semibold text-primary mb-3">{title}</h3>
              <p className="text-muted font-body text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
