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
  className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 pt-[8.3rem] md:pt-20 pb-24 md:pb-40 z-10 overflow-hidden"
>
{/* Decorative wave - desktop */}
<div className="hidden md:block absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0">
  <div className="w-[110%] animate-wave" style={{ willChange: 'transform' }}>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/layered-waves.svg?alt=media&token=30b42a0c-f3c9-407c-b03b-2576fadd3676"
      alt="Decorative wave background (desktop)"
      className="w-full h-auto object-cover"
      loading="lazy"
    />
  </div>
</div>

{/* Decorative wave - mobile */}
<div className="block md:hidden absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0">
  <img
    src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/blob-landscape.svg?alt=media&token=e39c2352-16b4-4e6d-8585-84ef3c5caa4c"
    alt="Decorative wave background (mobile)"
    className="w-full h-auto object-cover"
    loading="lazy"
  />
</div>


  {/* Hero Text Content */}
  <div className="w-full md:w-1/2 z-10 text-left">
    <h1 id="hero-leading-text" className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
      Crafting <span className="text-[#43BCCD]">Stunning Websites</span><br />
      That Grow Your Business
    </h1>

    <p className="font-oswald-light text-lg md:text-2xl mb-8 text-[#0A2540]">
      Whether you&apos;re launching a startup, revamping your online presence, or expanding your digital reach, Pulsecraft builds modern, professional websites tailored to your unique needs.
    </p>

    <motion.ul
      className="text-sm font-oswald md:text-base mb-8 space-y-2 text-[#0A2540]"
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

    <a
      href="/contact"
      className="bg-[#43BCCD] font-oswald text-[#0A2540] px-6 py-3 rounded-xl font-semibold shadow-sm 
        hover:bg-[#2FB2C0] hover:text-white 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#43BCCD] 
        transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      aria-label="Book a free consultation with PulseCraft"
    >
      Book a Free Consultation
    </a>
  </div>

  {/* Hero Image */}
  <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10 flex justify-center">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/mockupdevicesbgremove.png?alt=media&token=6ed3fc01-a2f6-4251-ac7d-617c669653ed"
      alt="Device mockups of sample websites"
      className="max-w-full h-auto object-contain"
      loading="lazy"
    />
  </div>
</motion.section>


      {/* Sections */}
      <ProcessSection />
      <ServicesOverview />
      <WhyPulsecraft />
      <Portfolio />
      <About />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}
