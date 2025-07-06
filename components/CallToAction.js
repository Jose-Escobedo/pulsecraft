'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <div className="font-oswald scroll-mt-24 bg-[#f3f3f3fa] text-[#0A2540] pt-20 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#B3E5FC] rounded-full blur-3xl opacity-30 z-0"></div>

      <motion.section
        id="consultation"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 bg-[#B3E5FC] text-[#0A2540] py-16 px-6 md:px-12 text-center rounded-2xl shadow-xl max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold mb-6 leading-tight">
          Ready to Grow Your Practice?
        </h2>

        <p className="mb-10 text-lg md:text-xl text-[#0A2540]/90 max-w-2xl mx-auto">
          Book your free consultation today and let&apos;s create a beautiful, effective website tailored to your practice.
        </p>

        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white text-lg px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          Book a Free Consultation
        </a>
      </motion.section>
    </div>
  );
}
