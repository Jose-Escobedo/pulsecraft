'use client';

import { MonitorSmartphone, SearchCheck, ShieldCheck } from 'lucide-react';

export default function ServicesOverview() {
  return (
    <section
      id="services"
      className="relative scroll-mt-[96px] md:scroll-mt-[100px] py-20 px-6 md:px-12 bg-[#0A2540] text-white"
    >
      {/* Decorative Blob Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Desktop blob */}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/navyblob.svg?alt=media&token=cac5fe9e-11cb-44f5-af7b-3a24032f2cb6"
          alt="Decorative background blob"
          className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[110%] max-w-none opacity-20"
        />

        {/* Mobile vertical blob */}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/navyvertblob.svg?alt=media&token=4d261c22-b257-4200-b580-70746954e4b8"
          alt="Decorative mobile blob"
          className="block md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-full opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Services Designed for Therapists and Mental Health Professionals
        </h2>
        <p className="text-lg mb-16 max-w-3xl mx-auto text-white/90">
          We combine modern design, HIPAA-aware best practices, and ongoing support to build websites that not only look great but also help you attract and retain clients.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-2xl p-6 text-[#0A2540] shadow-md hover:shadow-lg transition-all border border-teal-200 text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-teal-300 text-white rounded-full">
              <MonitorSmartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Website Design</h3>
            <p className="text-[#0A2540]/80">
              Tailored, clean, and professional websites built specifically for mental health professionals.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-2xl p-6 text-[#0A2540] shadow-md hover:shadow-lg transition-all border border-[#FFEFE8] text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[#FFEFE8] text-[#0A2540] rounded-full">
              <SearchCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">SEO & Online Visibility</h3>
            <p className="text-[#0A2540]/80">
              Optimized content and structure to help your practice show up when potential clients search online.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-2xl p-6 text-[#0A2540] shadow-md hover:shadow-lg transition-all border border-teal-200 text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-teal-300 text-white rounded-full">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Hosting & Maintenance</h3>
            <p className="text-[#0A2540]/80">
              Reliable, fast hosting with regular updates to keep your site secure and running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
