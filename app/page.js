'use client';

import { motion } from 'framer-motion';
import ServicesOverview from '@/components/ServicesOverview';
import ProcessSection from '@/components/ProcessSection';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import WhyPulsecraft from '@/components/WhyPulsecraft';
import WhatWeDo from '@/components/WhatWeDo';
import FeaturesGrid from '@/components/FeaturesGrid';
import PerformanceSection from '@/components/PerformanceSection';
import PricingCardsHomeSection from '@/components/PricingCardsHomeSection';
import TestimonialsSection from '@/components/Testimonials';
import BillboardCTA from '@/components/Billboard';

export default function Home() {
  return (
    <main
      className="relative overflow-hidden"
      role="main"
      aria-label="Pulsecraft web agency landing page"
    >
     
    

<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeIn' }}
  className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 pt-28 lg:pt-20 pb-24 lg:pb-40 z-10 overflow-hidden"
>
  {/* Desktop Wave */}
  <div className="hidden lg:block absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0">
    <div className="w-[110%] animate-wave">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/layered-waves.svg?alt=media&token=30b42a0c-f3c9-407c-b03b-2576fadd3676"
        alt="Decorative wave background (desktop)"
        className="w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
  </div>

  {/* Mobile Wave */}
  <div className="block lg:hidden absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/blob-landscape.svg?alt=media&token=e39c2352-16b4-4e6d-8585-84ef3c5caa4c"
      alt="Decorative wave background (mobile)"
      className="w-full h-auto object-cover"
      loading="lazy"
    />
  </div>

  {/* Text Content */}
  <div className="w-full pt-10 lg:pl-24 lg:w-3/5 lg:text-left z-10 text-center">
    <h1 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
      Crafting <span className="text-[#43BCCD]">Stunning Websites</span><br />
      That Grow Your Business
    </h1>

    <p className="font-oswald-light lg:w-4/5 text-lg lg:text-2xl mb-8 text-[#0A2540]">
     No page builders. No shortcuts. Just high-performing, hand-coded websites built to grow your business. Starting at $129/mo.
    </p>
<motion.ul
  className="text-sm font-oswald lg:text-base mb-8 space-y-2 text-[#0A2540] flex flex-col items-center lg:items-start justify-center text-center lg:text-left"
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
          className="flex items-start gap-2"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="text-[#43BCCD] mt-[0.1em] text-lg leading-none">✓</span>
          <span className="leading-snug font-semibold">{item}</span>
        </motion.li>
      ))}
    </motion.ul>

    <a
      href="/contact"
      className="bg-[#43BCCD] font-oswald text-[#0A2540] px-6 py-3 rounded-xl font-semibold shadow-sm 
      hover:bg-[#2FB2C0] hover:text-white 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#43BCCD] 
      transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
    >
      Book a Free Consultation
    </a>
  </div>

  {/* Hero Image */}
  <div className="w-full lg:w-2/5 mt-10 lg:mt-0 z-10 flex justify-center">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/devicebgremove.png?alt=media&token=e5e5f73a-bed3-463a-9d7c-313a3f5590be"
      alt="Device mockups of sample websites"
      className="max-w-full h-auto object-contain"
      loading="lazy"
    />
  </div>
</motion.section>



      {/* Sections */}
      <WhatWeDo/>
   
      <FeaturesGrid/>
      <About />
      <Portfolio />
         
      <PerformanceSection/>
      <ServicesOverview/>
      <WhyPulsecraft />
      <PricingCardsHomeSection/>
      <TestimonialsSection/>
     
    </main>
  );
}
