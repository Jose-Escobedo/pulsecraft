'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function Portfolio() {
  const projects = [
    {
      href: 'https://redaxetreeservices.com/',
      image:
        'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202026-04-05%20202924.png?alt=media&token=533dd2dd-5643-4914-962b-5cd0305bcf43',
      title: 'Red Axe Tree Services',
      desc: 'Professional tree service website with bold branding, clear service sections, and strong local call-to-action focus.',
      tag: 'Tree Services',
    },
    {
      href: 'https://sage-oak-therapy.vercel.app/',
      image:
        'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-07-03%20133048.png?alt=media&token=4e1f352c-78de-467c-a463-00400c8faead',
      title: 'Sage Oak Therapy',
      desc: 'A calm, brand-aligned website with earthy visuals and inviting typography.',
      tag: 'Therapy & Wellness',
    },
    {
      href: 'https://mern-tortas-frontend.vercel.app/',
      image:
        'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202023-06-02%20160504.png?alt=media&token=5602e1d3-d938-461c-bada-20fda88d814f',
      title: 'Tortas Mexico Studio City',
      desc: 'Restaurant website on a modern layout with interactive flow and strong call-to-action placement.',
      tag: 'Restaurant',
    },
    {
      href: 'https://championandchamp.com',
      image:
        'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202026-04-19%20235038.png?alt=media&token=49bb6461-0525-45c8-a221-47f682249617',
      title: 'Champion & Champ',
      desc: 'Minimalistic design with smooth layout and professional feel built for a local LA contractor.',
      tag: 'Contractor',
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative font-oswald scroll-mt-[96px] md:scroll-mt-[100px] bg-[#0A2540] text-white py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/navyblob.svg?alt=media&token=cac5fe9e-11cb-44f5-af7b-3a24032f2cb6"
          alt=""
          className="hidden md:block absolute top-0 right-1/2 translate-x-1/2 w-[160%] max-w-none opacity-20"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/navyvertblob.svg?alt=media&token=4d261c22-b257-4200-b580-70746954e4b8"
          alt=""
          className="block md:hidden absolute top-0 right-1/2 translate-x-1/2 w-full opacity-20"
        />
        {/* Extra ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-teal-400 opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-300 text-xs font-semibold tracking-widest uppercase mb-5">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Recent Projects
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            A look at some of the custom websites we&apos;ve built for businesses and professionals across industries.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map(({ href, image, title, desc, tag }, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group"
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]
                  hover:border-teal-400/40 hover:shadow-[0_0_40px_rgba(45,212,191,0.12)]
                  transition-all duration-300"
              >
                {/* Image block */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0A2540]/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 bg-teal-400 text-[#0A2540] font-bold text-sm px-6 py-3 rounded-full shadow-lg
                      translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      Visit Live Site <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Project number badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#0A2540]/70 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xs font-bold text-white/50 tabular-nums">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors duration-200 leading-snug">
                      {title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-teal-400 flex-shrink-0 mt-0.5 transition-colors duration-200" />
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-white/40 tracking-wide">
                    {tag}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <p className="text-white/35 text-xs tracking-widest uppercase mb-5 font-semibold">
            Ready to join our portfolio?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-300 text-[#0A2540] font-bold px-8 py-3.5 rounded-full
              shadow-lg hover:shadow-[0_0_24px_rgba(45,212,191,0.4)] transition-all duration-200 text-sm"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
