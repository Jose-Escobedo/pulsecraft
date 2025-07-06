'use client';

import { motion } from 'framer-motion';
import ServicesOverview from '@/components/ServicesOverview';
import ProcessSection from '@/components/ProcessSection';
import WhyTherapistsChooseUs from '@/components/WhyTherapistsChooseUs';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main
      className="relative overflow-hidden"
      role="main"
      aria-label="Pulsecraft web agency landing page"
    >
     
    

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-24 md:pb-40 text-center z-10 overflow-hidden"
      >
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0">
          <div className="w-[110%] animate-wave" style={{ willChange: 'transform' }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/layered-waves.svg?alt=media&token=30b42a0c-f3c9-407c-b03b-2576fadd3676"
              alt="Decorative wave background"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-3xl mx-auto z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
            Crafting <span className="text-[#43BCCD]">Stunning Websites</span><br />
            That Grow Your Business
          </h1>

          <p className="text-lg md:text-xl mb-8 text-[#0A2540]">
            Whether you&apos;re launching a startup, revamping your online presence, or expanding your digital reach, Pulsecraft builds modern, professional websites tailored to your unique needs.
          </p>

          {/* Staggered Motion List */}
          <motion.ul
            className="text-sm md:text-base mb-8 space-y-2 text-[#0A2540]"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              'Custom web development',
              'Responsive and mobile-friendly',
              'Scalable solutions for growth',
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                ✅ <strong>{item}</strong>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <a
            href="/contact"
            className="bg-[#43BCCD] text-[#0A2540] px-6 py-3 rounded-xl font-semibold shadow-sm 
              hover:bg-[#2FB2C0] hover:text-white 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#43BCCD] 
              transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            aria-label="Book a free consultation with PulseCraft"
          >
            Book a Free Consultation
          </a>
        </div>
      </motion.section>

      {/* Sections */}
      <ProcessSection />
      <ServicesOverview />
      <WhyTherapistsChooseUs />
      <Portfolio />
      <About />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}
