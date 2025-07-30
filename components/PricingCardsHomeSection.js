'use client';

import { Globe, Search, Rocket, Star } from 'lucide-react';

export default function PricingCardsHomeSection() {
  return (
    <section
      id="pricing"
      className="font-oswald bg-[#F8F9FA] text-[#0A2540] pt-20 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Flexible Plans for Growing Brands & Businesses
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Whether you&apos;re launching something new or refreshing an outdated site — our plans are built to make it easy and stress-free.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* One-Time Website + Branding Plan */}
          <div className="relative border-1 hover:scale-[1.02] transition-transform duration-200 rounded-2xl p-6 shadow-lg bg-[#f8fefc] flex flex-col items-start">
            <span className="absolute top-4 right-4 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full uppercase font-semibold tracking-wide shadow-sm">
              One-Time
            </span>
            <Rocket className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#0A2540]">Lump Sum</h3>
            <p className="text-3xl font-extrabold text-green-700 mb-1">
              $2,400
              <span className="text-base font-medium text-[#0A2540] ml-1">One-Time</span>
            </p>
            <p className="text-sm text-[#0A2540]/70 mb-4 italic">+$25/mo hosting</p>
            <p className="text-sm text-[#0A2540]/70 mb-4 italic">
              Includes full build & launch
            </p>
            <ul className="text-sm space-y-2 mb-6 text-[#0A2540]">
              {[
                'Design And Development',
                '$25/mo Hosting',
                'Includes up to 5 pages. Need more? Add pages as you grow: $100/page.',
                '+$50/mo Ongoing Maintenance & Updates Add-on',
                '+$250 To Add A Blog',
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="mt-auto inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
            >
              Request Project Start
            </a>
          </div>

          {/* Website + Hosting Plan */}
          <div className="relative border-2 border-blue-300 hover:scale-[1.03] transition-transform duration-300 rounded-2xl p-6 shadow-2xl ring-4 ring-blue-300 flex flex-col items-start">
            <span className="absolute top-4 right-4 flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full uppercase font-semibold tracking-wide shadow-sm animate-pulse">
              <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              Most Popular
            </span>
            <Globe className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#0A2540]">Website + Hosting</h3>
            <p className="text-3xl font-extrabold text-blue-700 mb-4 border-b-4 border-blue-400 pb-2">
              $99
              <span className="text-base font-medium text-[#0A2540] ml-1">/mo</span>
            </p>
            <ul className="text-sm space-y-2 mb-6 text-[#0A2540]">
              {[
                'Design And Development',
                'Includes Hosting',
                'Includes up to 5 pages. Need more? Add pages as you grow: $100/page.',
                '+$250 To Add A Blog',
                'Ongoing Maintenance & Updates',
                '24/7 Support',
                'Lifetime Updates',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 text-lg leading-none">✓</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="mt-auto inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:shadow-lg hover:ring-2 hover:ring-blue-500 transition"
            >
              Get Started
            </a>
          </div>

          {/* SEO Growth Plan */}
          <div className="relative hover:scale-[1.01] transition-transform duration-200 border rounded-2xl p-6 shadow-md bg-white flex flex-col items-start">
            <span className="absolute top-4 right-4 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full uppercase font-semibold">
              Add-On
            </span>
            <Search className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">SEO Growth Plan</h3>
            <p className="text-3xl font-bold mb-1">
              +$99
              <span className="text-base font-medium">/mo</span>
            </p>
            <ul className="text-sm space-y-2 mb-6">
              <li>✓ In-depth keyword targeting</li>
              <li>✓ Meta tags & SEO copy improvements</li>
              <li>✓ Google Search Console setup</li>
              <li>✓ Blog strategy & monthly articles</li>
              <li>✓ Monthly performance reporting</li>
            </ul>
            <a
              href="/contact"
              className="mt-auto inline-block bg-[#0A2540] text-white px-5 py-2 rounded-md hover:bg-[#071d33] transition"
            >
              Boost My Visibility
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
