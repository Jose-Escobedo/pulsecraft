'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#process', label: 'Process' },
  { href: '/pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-bg/90 backdrop-blur-md border-b border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="max-w-[1200px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <Logo />

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-body font-medium" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted hover:text-primary transition-colors duration-200 py-1"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-accent text-bg font-body font-semibold text-sm px-5 py-2.5 rounded-lg hover:brightness-110 hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-200"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-primary p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'menu'}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 top-20 z-40 bg-bg/98 backdrop-blur-md flex flex-col px-6 py-12 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3, ease: 'easeOut' }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-display font-semibold text-primary hover:text-accent transition-colors duration-200 py-3 border-b border-white/[0.05]"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.07, duration: 0.3, ease: 'easeOut' }}
                className="pt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-full bg-accent text-bg font-body font-semibold text-base px-8 py-4 rounded-xl hover:brightness-110 transition-all duration-200"
                >
                  Book a Free Call
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
