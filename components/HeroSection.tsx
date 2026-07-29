'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-bg overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03] hero-grid" />

      {/* Ambient glow — smaller blur radius on mobile: large blur filters are
          expensive to rasterize on throttled low-end mobile CPUs and were
          competing with the LCP text for paint time */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[500px] rounded-full bg-accent/5 blur-[60px] lg:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[50px] lg:blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.span
              variants={item}
              className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6"
            >
              Los Angeles Web Agency
            </motion.span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-display font-bold leading-[1.04] tracking-tight mb-6">
              Custom Websites<br />
              That{' '}
              {/* text-shadow instead of the drop-shadow filter utility: filter-based
                  drop-shadow requires rasterizing this element to an offscreen buffer
                  before it can paint, which is costly on throttled mobile CPUs and
                  was delaying LCP (this span is the mobile LCP element). */}
              <span className="text-accent [text-shadow:0_0_28px_rgba(0,216,255,0.45)]">
                Convert
              </span>
            </h1>

            <motion.p
              variants={item}
              className="text-muted font-body text-lg lg:text-xl leading-relaxed mb-8 max-w-[480px]"
            >
              Hand-coded, high-performance websites built specifically for small businesses.
              No page builders. No shortcuts. Just results.
            </motion.p>

            <motion.ul
              variants={item}
              className="flex flex-col gap-2.5 mb-10 text-sm font-body"
              aria-label="Key benefits"
            >
              {[
                'Fully custom — no Wix, Squarespace, or WordPress',
                'Mobile-first, sub-1s load times guaranteed',
                'Starting at $99/mo — hosting included',
              ].map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-primary/80">
                  <span className="text-accent flex-shrink-0 font-bold" aria-hidden>✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-accent text-bg font-body font-semibold text-base px-7 py-3.5 rounded-xl hover:brightness-110 hover:shadow-[0_0_28px_var(--accent-glow)] transition-all duration-200"
              >
                Book a Free Consultation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                  aria-hidden
                />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 border border-white/[0.12] text-primary font-body font-medium text-base px-7 py-3.5 rounded-xl hover:border-accent/30 hover:text-accent transition-all duration-200"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>

          {/* Device mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, ease: 'easeOut', delay: 0.25 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-[-20px] bg-accent/8 rounded-3xl blur-[60px]" />
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/devicebgremove.png?alt=media&token=e5e5f73a-bed3-463a-9d7c-313a3f5590be"
                alt="Device mockups showing sample websites built by Pulsecraft"
                width={580}
                height={460}
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 460px, 90vw"
                className="relative z-10 w-full max-w-[460px] lg:max-w-[520px] h-auto object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
