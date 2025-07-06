'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserCircle2, Code, ShieldCheck, TrendingUp } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
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

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[96px] md:scroll-mt-[100px] relative bg-gradient-to-b from-[#e0f7f7] via-[#f3f3f3fa] to-[#f3f3f3fa] text-[#0A2540] py-20 px-6 md:px-12"
    >
      {/* Blobs container with isolated overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-teal-300 opacity-20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#0A2540] opacity-10 blur-2xl" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-14 text-center md:text-left relative z-10">
        {/* Profile Photo */}
        <div className="flex-shrink-0 relative w-44 h-44 rounded-full border-8 border-teal-400 shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300 ease-in-out">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/image0.jpeg?alt=media&token=b040758b-942b-4ede-a4b4-e06fc558815e"
            alt="Developer"
            fill
            sizes="176px"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 rounded-full ring-4 ring-teal-300 opacity-60 animate-pulse" />
        </div>

        {/* Text + Features */}
        <div className="max-w-3xl space-y-6">
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">
            About TherapySiteStudio
          </h2>

          <p className="text-lg leading-relaxed">
            Based in <strong>Los Angeles</strong>, Therapy Site Studio is dedicated to helping mental health professionals establish modern, secure, and impactful online presences.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#0A2540]/90">
            {features.map(({ icon, title, text }, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Feature icon={icon} title={title}>
                  {text}
                </Feature>
              </motion.div>
            ))}
          </div>

          <p className="text-lg leading-relaxed mt-4">
            Our mission is to make your website as trustworthy, compassionate, and effective as the services you provide.
          </p>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, children }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:space-x-3 text-center md:text-left items-center">
      <div className="mb-2 md:mb-0 flex justify-center md:justify-start w-full md:w-auto">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-1 text-base leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

const features = [
  {
    icon: <UserCircle2 className="w-6 h-6 text-teal-500" />,
    title: 'Experienced Founder',
    text: (
      <>
        Our founder & lead developer brings <strong>hands-on experience</strong> managing <strong>business-critical systems</strong> at a multi-million dollar company.
      </>
    ),
  },
  {
    icon: <Code className="w-6 h-6 text-teal-500" />,
    title: 'Custom Development',
    text: (
      <>
        Every site is <strong>hand-coded</strong> with <strong>Next.js</strong>, <strong>NodeJS</strong>, and <strong>JavaScript</strong> — no page builders, for maximum speed, security, and flexibility.
      </>
    ),
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-teal-500" />,
    title: 'Security First',
    text: (
      <>
        We build with privacy and HIPAA-aware best practices, ensuring your site is safe and trustworthy.
      </>
    ),
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-teal-500" />,
    title: 'Growth Focused',
    text: (
      <>
        Your website is designed to help attract and retain clients by reflecting your compassionate and professional brand.
      </>
    ),
  },
];
