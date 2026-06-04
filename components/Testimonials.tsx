'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'We needed a restaurant website that showcased our menu and let customers order online. Jose has been awesome to work with. I highly recommend him for your website needs!',
    name: 'Maria C.',
    location: 'Studio City, CA',
    business: 'Restaurant Owner',
  },
  {
    quote:
      'Pulsecraft and Jose made the process of building a website a fun, exciting experience. He is very helpful and answers your questions quickly. I\'ll be using him again.',
    name: 'Diego T.',
    location: 'Los Angeles, CA',
    business: 'Local Business Owner',
  },
  {
    quote:
      'I came to Jose with a very specific vision and he knocked it out of the park. I wanted a clean, original design and a faster site. He absolutely delivered on both.',
    name: 'Robert M.',
    location: 'Los Angeles, CA',
    business: 'Contractor',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-bg py-28 lg:py-40 px-6 lg:px-8" aria-label="Client testimonials">
      <div className="max-w-[1200px] mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-5">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-5">
            Real clients. Real results.
          </h2>
          <p className="text-muted font-body text-lg max-w-2xl mx-auto leading-relaxed">
            When you work with Pulsecraft, you&apos;re not just getting a website — you&apos;re getting
            a dedicated partner invested in your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, location, business }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-surface border border-white/[0.07] rounded-2xl p-8 flex flex-col hover:border-accent/20 hover:shadow-[0_0_32px_rgba(0,216,255,0.05)] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" aria-hidden />
                ))}
              </div>

              <blockquote className="text-primary/85 font-body text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <footer className="border-t border-white/[0.07] pt-5">
                <p className="text-primary font-body font-semibold text-sm">{name}</p>
                <p className="text-muted font-body text-xs mt-0.5">{business} · {location}</p>
              </footer>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
