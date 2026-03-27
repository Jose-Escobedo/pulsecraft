'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Portfolio() {
  const projects = [
    {
      href: 'https://sage-oak-therapy.vercel.app/',
      image:
        'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-07-03%20133048.png?alt=media&token=4e1f352c-78de-467c-a463-00400c8faead',
      title: 'Sage Oak Therapy',
      desc: 'A calm, brand-aligned website with earthy visuals and inviting typography.',
    },
      {
      href: 'https://mern-tortas-frontend.vercel.app/',
      image:
        'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202023-06-02%20160504.png?alt=media&token=5602e1d3-d938-461c-bada-20fda88d814f',
      title: 'Tortas Mexico Studio City Site',
      desc: 'Restaurant Website on a Modern layout with interactive flow and strong call-to-action placement.',
    },
    {
      href: 'https://tranquil-path-therapy.vercel.app/',
      image:
        'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-06-26%20205205.png?alt=media&token=712d8028-a969-4c86-bc76-b28c8ef16979',
      title: 'Tranquil Path Site',
      desc: 'Minimalistic design with smooth layout and professional feel.',
    },
  
  ];

  return (
    <section
      id="portfolio"
      className="relative font-oswald scroll-mt-[96px] md:scroll-mt-[100px] bg-[#0A2540] text-white py-16 px-6 md:px-12"
    >
      {/* Decorative blob layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/navyblob.svg?alt=media&token=cac5fe9e-11cb-44f5-af7b-3a24032f2cb6"
          alt="Decorative blob background"
          className="hidden md:block absolute top-0 right-1/2 translate-x-1/2 w-[160%] max-w-none opacity-20"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/navyvertblob.svg?alt=media&token=4d261c22-b257-4200-b580-70746954e4b8"
          alt="Decorative vertical mobile blob"
          className="block md:hidden absolute top-0 right-1/2 translate-x-1/2 w-full opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Recent Projects</h2>
        <p className="mb-12 max-w-3xl mx-auto text-lg text-white/90">
          A look at some of the custom websites we&apos;ve built for businesses and professionals across industries.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map(({ href, image, title, desc }, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="relative rounded-lg shadow-lg overflow-hidden bg-white text-[#0A2540] border-2 border-transparent cursor-pointer
                transition-shadow transform hover:scale-[1.03] hover:shadow-[0_0_15px_4px_rgba(16,185,129,0.75)] hover:border-cyan-400"
            >
              <Link href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-t-lg">
                  <span className="text-white font-semibold text-lg tracking-wide select-none">View Site</span>
                </div>

                <div className="flex flex-col flex-grow p-4">
                  <h3 className="font-semibold mb-2 relative inline-block cursor-pointer">
                    {title}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-cyan-400 scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100" />
                  </h3>
                  <p className="text-gray-700 text-sm flex-grow">{desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
