'use client';

import { CalendarHeart, Brush, Rocket } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative font-oswald scroll-mt-24 py-20 px-6 md:px-12 bg-[#f3f3f3fa] text-[#0A2540] overflow-hidden"
    >
      {/* Desktop Blob */}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/processblobcyan.svg?alt=media&token=908cfa60-1648-45a7-aac9-30a441070470"
        alt="Decorative blob background"
        className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[100%] max-w-none opacity-50 pointer-events-none"
      />

      {/* Mobile Blob */}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/processblobvertcyan.svg?alt=media&token=63fe364e-a54a-468a-b61f-caec15acef37"
        alt="Decorative vertical mobile blob"
        className="block md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-full opacity-50 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Process, Built for Simplicity</h2>
        <p className="text-lg mb-16 text-[#0A2540]/80">
          From discovery to launch, we make building your new website simple, fast, and impactful.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-teal-200 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-teal-300 text-white rounded-full mb-4">
              <CalendarHeart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Discovery Call</h3>
            <p className="text-[#0A2540]/80">
              We learn about your business, goals, and what success looks like for your site.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-[#FFEFE8] text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#FFEFE8] text-[#0A2540] rounded-full mb-4">
              <Brush className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Design & Development</h3>
            <p className="text-[#0A2540]/80">
              We create a custom design and build your site with precision, performance, and style.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-teal-200 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-teal-300 text-white rounded-full mb-4">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Launch & Support</h3>
            <p className="text-[#0A2540]/80">
              We launch your site fast — with hosting, optimization, and ongoing support as needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
