'use client';

import { ShieldCheck, Smile, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyPulsecraft() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 12 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section
      id="why-us"
      className="relative font-oswald scroll-mt-[96px] md:scroll-mt-[100px] py-20 px-6 md:px-12 bg-[#f3f3f3fa] text-[#0A2540]"
    >
      {/* Decorative glow blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 -left-32 w-[500px] h-[500px] bg-teal-300 opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Why Businesses Choose Pulsecraft</h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: 'Built with Security in Mind',
              text: 'We prioritize performance and protection — from fast hosting to clean, secure code built for modern needs.',
              iconBg: 'bg-teal-300 text-white',
              border: 'border-teal-100',
            },
            {
              icon: <Smile className="w-6 h-6" />,
              title: 'Tailored to Your Brand',
              text: 'Every site we create is custom-designed to reflect your business, voice, and audience — no page builders here.',
              iconBg: 'bg-[#FFEFE8] text-[#0A2540]',
              border: 'border-[#FFEFE8]',
            },
            {
              icon: <Sparkles className="w-6 h-6" />,
              title: 'Zero-Stress Launch',
              text: 'We handle everything from domain setup to deployment — so you can stay focused while we bring your vision to life.',
              iconBg: 'bg-teal-300 text-white',
              border: 'border-teal-100',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all ${item.border} text-center`}
              variants={fadeInUp}
              whileInView="visible"
              viewport={{ once: true }}
              initial="hidden"
              custom={i}
            >
              <div className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full ${item.iconBg}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-[#0A2540]/80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
