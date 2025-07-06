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
      href: "https://sage-oak-therapy.vercel.app/",
      image: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-07-03%20133048.png?alt=media&token=2eed2095-644f-43e4-9e9d-8a15b2940604",
      title: "Sage Oak Therapy",
      desc: "A calming, earthy website designed with elegant typography, and soft tones that create a warm, welcoming experience for visitors."
    },
    {
      href: "https://tranquil-path-therapy.vercel.app/",
      image: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-06-26%20205205.png?alt=media&token=712d8028-a969-4c86-bc76-b28c8ef16979",
      title: "Tranquil Path Therapy",
      desc: "A professional site with clean features and easy navigation."
    },
    {
      href: "https://family-counseling-center.vercel.app/",
      image: "https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-06-11%20214339.png?alt=media&token=88e6c085-f0e5-4661-a629-ed313eee0b0c",
      title: "Golden Scales Family Therapy",
      desc: "A modern design focused on client engagement and easy appointment booking."
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-[96px] md:scroll-mt-[100px] bg-[#0A2540] text-white py-16 px-6 md:px-12"
    >
      {/* Blobs get overflow-hidden only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {/* Desktop blob */}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/navyblob.svg?alt=media&token=cac5fe9e-11cb-44f5-af7b-3a24032f2cb6"
          alt="Decorative blob background"
          className="hidden md:block absolute top-0 right-1/2 translate-x-1/2 w-[160%] max-w-none opacity-20"
        />

        {/* Mobile blob */}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/navyvertblob.svg?alt=media&token=4d261c22-b257-4200-b580-70746954e4b8"
          alt="Decorative vertical mobile blob"
          className="block md:hidden absolute top-0 right-1/2 translate-x-1/2 w-full opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Work</h2>
        <p className="mb-12 max-w-3xl mx-auto text-lg">
          Here are some examples of websites we&apos;ve designed and built for mental health professionals.
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
                    priority={false}
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
