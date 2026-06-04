import HeroSection from '@/components/HeroSection';
import LogoBar from '@/components/LogoBar';
import Services from '@/components/Services';
import ProcessSection from '@/components/ProcessSection';
import WhyPulsecraft from '@/components/WhyPulsecraft';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import PricingPreview from '@/components/PricingPreview';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoBar />
      <Services />
      <ProcessSection />
      <WhyPulsecraft />
      <Portfolio />
      <Testimonials />
      <PricingPreview />
      <FinalCTA />
    </main>
  );
}
