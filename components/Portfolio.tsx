'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const projects = [
  {
    href: 'https://redaxetreeservices.com/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202026-04-05%20202924.png?alt=media&token=533dd2dd-5643-4914-962b-5cd0305bcf43',
    title: 'Red Axe Tree Services',
    desc: 'Bold branding and strong local call-to-action for a Los Angeles-area tree services company.',
    tag: 'Tree Services',
  },
  {
    href: 'https://sage-oak-therapy.vercel.app/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-07-03%20133048.png?alt=media&token=4e1f352c-78de-467c-a463-00400c8faead',
    title: 'Sage Oak Therapy',
    desc: 'Calm, brand-aligned design with earthy visuals and inviting typography for a therapy practice.',
    tag: 'Therapy & Wellness',
  },
  {
    href: 'https://mern-tortas-frontend.vercel.app/',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202023-06-02%20160504.png?alt=media&token=5602e1d3-d938-461c-bada-20fda88d814f',
    title: 'Tortas Mexico Studio City',
    desc: 'Restaurant site with modern layout, interactive order flow, and strong call-to-action placement.',
    tag: 'Restaurant',
  },
  {
    href: 'https://championandchamp.com',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202026-04-19%20235038.png?alt=media&token=49bb6461-0525-45c8-a221-47f682249617',
    title: 'Champion & Champ',
    desc: 'Clean, minimalist design with a professional feel built for a local LA contractor.',
    tag: 'Contractor',
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-surface border-y border-white/[0.07] py-28 lg:py-40 px-6 lg:px-8 scroll-mt-24"
    >
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-5">
            Our Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight">
            Recent Projects
          </h2>
          <p className="text-muted font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Custom websites built for real businesses across the US. Every one hand-coded,
            every one built to convert.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map(({ href, image, title, desc, tag }, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group"
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-white/[0.07] bg-elevated
                  hover:border-accent/30 hover:shadow-[0_0_40px_rgba(0,216,255,0.08)]
                  transition-all duration-300"
                aria-label={`View ${title} live site`}
              >
                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={image}
                    alt={`Screenshot of ${title}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-bg/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 bg-accent text-bg font-body font-bold text-sm px-6 py-3 rounded-full shadow-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      Visit Live Site <ExternalLink className="w-4 h-4" aria-hidden />
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-bg/70 border border-white/10 flex items-center justify-center backdrop-blur-sm" aria-hidden>
                    <span className="text-xs font-display font-bold text-primary/50 tabular-nums">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-base font-display font-semibold text-primary group-hover:text-accent transition-colors duration-200 leading-snug">
                      {title}
                    </h3>
                    <ExternalLink
                      className="w-4 h-4 text-primary/20 group-hover:text-accent flex-shrink-0 mt-0.5 transition-colors duration-200"
                      aria-hidden
                    />
                  </div>
                  <p className="text-muted font-body text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="inline-block px-3 py-1 text-xs font-body font-semibold bg-white/5 border border-white/[0.07] rounded-full text-muted tracking-wide">
                    {tag}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-5">
            Ready to join our portfolio?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:brightness-110 text-bg font-body font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-[0_0_24px_var(--accent-glow)] transition-all duration-200 text-sm"
          >
            Start Your Project <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
