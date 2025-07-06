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
      className="text-white relative overflow-hidden"
      role="main"
      aria-label="Therapist and Psychologist website landing page"
    >


<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeIn' }}
  className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-24 md:pb-40 text-center z-10 overflow-hidden"
>
  
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


  {/* Constrained content */}
  <div className="max-w-3xl mx-auto z-10">
    <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
      Beautiful, Stress-Free{' '}
      <span className="text-[#2664bf]">Websites for Therapists</span>
    </h1>
    <p className="text-lg md:text-xl mb-8 text-[#0A2540]">
      Whether you&apos;re starting your private practice or revamping an outdated
      site, we help therapists, psychologists, and other mental health professionals attract more clients with modern, professional design.
    </p>
    <ul className="text-sm md:text-base mb-8 space-y-2 text-[#0A2540]">
      <li>✅ <strong>HIPAA-aware design</strong></li>
      <li>✅ <strong>Fast, mobile-friendly</strong></li>
      <li>✅ <strong>Ready to grow with you</strong></li>
    </ul>
    <a
      href="/contact"
      className="bg-teal-400 text-[#0A2540] px-6 py-3 rounded-xl font-semibold hover:bg-teal-300 transition transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      aria-label="Book a free consultation"
    >
      Book a Free Consultation
    </a>
  </div>
</motion.section>


      {/* Remaining Sections */}
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
