'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, SearchCheck, Zap, LifeBuoy, Globe } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    Icon: Code2,
    title: 'Custom Development',
    desc: 'Every site is hand-coded in Next.js — no page builders, no bloat. Clean, maintainable code built to last.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'We design for phones first, then scale up. Flawless experience on every screen, every device.',
  },
  {
    Icon: SearchCheck,
    title: 'SEO & Visibility',
    desc: 'Technical SEO, local optimization, and schema markup built into every project from day one.',
  },
  {
    Icon: Zap,
    title: 'Performance Optimization',
    desc: 'Sub-1-second load times. Lighthouse 100 scores. Fast sites rank higher and convert more leads.',
  },
  {
    Icon: LifeBuoy,
    title: 'Ongoing Support',
    desc: 'Updates, edits, and maintenance handled for you. We\'re your long-term partner, not a one-and-done vendor.',
  },
  {
    Icon: Globe,
    title: '100% US-Based',
    desc: 'No outsourcing. Our team is fully US-based — direct communication, clear timelines, real accountability.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="bg-bg py-28 lg:py-40 px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-5">
            What We Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-5">
            Everything your site needs,<br className="hidden sm:block" /> nothing it doesn&apos;t
          </h2>
          <p className="text-muted font-body text-lg max-w-2xl mx-auto leading-relaxed">
            From custom development to ongoing support, we handle every piece of your web presence
            so you can stay focused on your business.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-surface border border-white/[0.07] rounded-2xl p-8 hover:border-accent/25 hover:shadow-[0_0_40px_rgba(0,216,255,0.06)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                <Icon size={22} className="text-accent" aria-hidden />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary mb-3">{title}</h3>
              <p className="text-muted font-body text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-bg font-body font-semibold text-sm px-7 py-3.5 rounded-xl hover:brightness-110 hover:shadow-[0_0_24px_var(--accent-glow)] transition-all duration-200"
          >
            Start Your Project
          </Link>
        </div>

      </div>
    </section>
  );
}
