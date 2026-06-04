'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-bg py-28 lg:py-40 px-6 lg:px-8" aria-label="Call to action">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative bg-surface border border-white/[0.07] rounded-3xl px-8 py-16 lg:px-20 lg:py-20 text-center overflow-hidden"
        >
          {/* Background glows */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(0,216,255,0.08) 0%, transparent 70%)' }}
            aria-hidden
          />
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[200px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(0,216,255,0.05) 0%, transparent 70%)' }}
            aria-hidden
          />

          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6">
              Ready to get started?
            </span>

            <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Ready to grow your<br className="hidden sm:block" />{' '}
              <span className="text-accent drop-shadow-[0_0_20px_rgba(0,216,255,0.3)]">
                business online?
              </span>
            </h2>

            <p className="text-muted font-body text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Join small businesses across the US who replaced their outdated sites with fast,
              hand-coded websites that actually convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-accent text-bg font-body font-semibold text-base px-8 py-4 rounded-xl hover:brightness-110 hover:shadow-[0_0_32px_var(--accent-glow)] transition-all duration-200"
              >
                <Calendar size={18} aria-hidden />
                Book a Free Call
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                  aria-hidden
                />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 border border-white/[0.12] text-primary font-body font-medium text-base px-8 py-4 rounded-xl hover:border-accent/30 hover:text-accent transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
