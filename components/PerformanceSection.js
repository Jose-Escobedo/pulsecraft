'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function PerformanceSection() {
  return (
    <section className="bg-[#F8F9FA] font-oswald py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT SIDE */}
        <div>
        <h2 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-2 tracking-widest uppercase">
  Performance
</h2>

<h3 className="text-4xl md:text-5xl font-semibold mb-6 text-[#0A2540]">
  We Build <span className="text-[#43BCCD]">Better</span> Websites That Perform
</h3>

          <p className="text-[#0A2540] text-lg leading-relaxed mb-6">
            When it comes to website load times, not very many can get the Google PageSpeed scores that we get with each and every site. Test your website load times with Google PageSpeed Insights and see what your current site is scoring right now.
          </p>

          {/* List of benefits */}
         <ul className="space-y-4">
  {[
    "Better load times mean more traffic and more site conversions over time.",
    "Faster websites can help improve SEO and your Google Ads performance.",
    "Our sites load instantly in under 1 second or less, which leads to a better user experience and conversions.",
  ].map((text, i) => (
    <li key={i} className="flex items-center gap-3">
      <CheckCircle className="text-[#43BCCD] min-w-[24px]" size={24} />
      <span className="text-[#0A2540] text-base leading-relaxed">{text}</span>
    </li>
  ))}
</ul>

        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="relative bg-[#F8FAFC] rounded-2xl p-6 shadow-md text-center">
          <div className="mb-4">
            <h4 className="text-[#0A2540] text-xl font-bold">100% Satisfaction Guaranteed</h4>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg mb-6">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-07-07%20154305.png?alt=media&token=b7185722-5990-49dc-864c-00ffd39930e2" // replace with your actual image
              alt="Google PageSpeed Screenshot"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex justify-around text-[#0A2540] text-sm md:text-base font-semibold">
            <div>
              <div className="text-3xl text-[#43BCCD] font-bold">100</div>
              <div>Page Speed Scores</div>
            </div>
            <div>
              <div className="text-3xl text-[#43BCCD] font-bold">5/5</div>
              <div>Google Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
