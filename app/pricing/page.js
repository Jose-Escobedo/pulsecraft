import { Globe, Search, Palette, Star, Rocket } from 'lucide-react';
import Footer from "@/components/Footer";
import FAQSectionComponent from '@/components/FAQSectionComponent';

export const metadata = {
  title: "Pricing Plans | PulseCraft Studio",
  description:
    "Explore our straightforward web design pricing plans. Custom websites, branding, hosting, and SEO solutions built for modern businesses.",
};

const features = [
  ["Tailored to Your Business", "❌ Generic templates", "✅ Built around your brand goals"],
  ["Setup & Edits Included", "❌ DIY setup & limited edits", "✅ Fully managed, no technical headaches"],
  ["Security-Minded Approach", "❌ Often neglected", "✅ Built with performance & privacy in mind"],
  ["SEO Optimization", "⚠️ Basic or skipped", "✅ SEO best practices baked in"],
  ["Speed & Performance", "❌ Slower due to plugins", "✅ Next.js-powered, blazing fast"],
  ["Mobile Optimization", "⚠️ Often buggy", "✅ Designed mobile-first from the start"],
  ["Real Support", "❌ Call centers or chatbots", "✅ Direct support from our core team"],
];


export default function PricingSection() {
  return (
    <>
      <section
        id="pricing"
        className="font-oswald pt-56 -mt-24 bg-[#f3f3f3fa] text-[#0A2540] py-20 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
  Flexible Plans for Growing Brands & Businesses
</h2>
<p className="text-lg mb-12 max-w-2xl mx-auto">
  Whether you&apos;re launching something new or refreshing an outdated site — our plans are built to make it easy and stress-free.
</p>


          {/* Grid for first 3 cards */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
        
            {/* One-Time Website + Branding Plan */}
            <div className="relative border-1 hover:scale-[1.02] transition-transform duration-200 rounded-2xl p-6 shadow-lg bg-[#f8fefc] flex flex-col items-start">
    <span className="absolute top-4 right-4 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full uppercase font-semibold tracking-wide shadow-sm">
      One-Time
    </span>
    <Rocket className="w-8 h-8 text-green-600 mb-4" />

    <h3 className="text-xl font-semibold mb-2 text-[#0A2540]">
  Lump Sum 
</h3>
 

    <p className="text-3xl font-extrabold text-green-700 mb-1">
      $2,400
      <span className="text-base font-medium text-[#0A2540] ml-1">One-Time</span>  
    </p>
    <p className="text-sm text-[#0A2540]/70 mb-4 italic">
     +$25/mo hosting
      </p>

    <p className="text-sm text-[#0A2540]/70 mb-4 italic">
      Includes full build & launch
    </p>

   <ul className="text-sm space-y-2 mb-6 text-[#0A2540]">
  {[
    "Design And Development",
    "$25/mo Hosting",
    "$100 fee Per Page after 5",
    "+$50/mo Unlimited Edits Add-on",
    "+$250 To Add A Blog",
  ].map((item, i) => (
    <li key={i} className="flex items-start space-x-2">
      <span className="flex-shrink-0 mt-[0.2em] leading-none text-green-600">✓</span>
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
  <span
    className="absolute top-4 right-4 flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full uppercase font-semibold tracking-wide shadow-sm animate-pulse"
    style={{ lineHeight: 1 }}
  >
    <Star
      className="w-3.5 h-3.5 fill-blue-600 text-blue-600"
      style={{ verticalAlign: "middle" }}
    />
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
    "Design And Development",
    "Includes Hosting",
    "$100 fee Per Page After 5",
    "+$250 To Add A Blog",
    "Unlimited Edits",
    "24/7 Support",
    "Lifetime Updates",
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

          <p className="mt-10 text-sm text-gray-500">
            Need help deciding or want to bundle services?{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact us
            </a>{" "}
            and we’ll guide you.
          </p>

          <div className="mt-20 max-w-5xl mx-auto px-4 text-[#0A2540]">
         <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
  Why Businesses Choose Us Over Wix & Squarespace
</h3>


            {/* Desktop/Table View */}
            <div className="hidden sm:block overflow-auto rounded-xl border border-gray-200 shadow-lg">
              <table className="w-full text-sm md:text-base text-left table-auto">
                <thead className="bg-gray-100 text-[#0A2540]">
                  <tr>
                    <th className="py-4 px-6 font-semibold">Feature</th>
                    <th className="py-4 px-6 font-semibold">Wix / Squarespace</th>
                    <th className="py-4 px-6 font-semibold bg-[#0A2540] text-white rounded-tr-xl">
                      Pulsecraft
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map(([feature, wix, studio], i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-50 transition-all duration-200"
                    >
                      <td className="py-4 px-6">{feature}</td>
                      <td className="py-4 px-6">{wix}</td>
                      <td className="py-4 px-6 font-medium">{studio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View - Card Style */}
{/* Mobile View - Card Style */}
<div className="sm:hidden flex flex-col gap-6">
  {features.map(([feature, wix, studio], i) => (
    <div
      key={i}
      className="bg-white rounded-xl border border-gray-200 shadow-md p-5 transition-all hover:shadow-lg"
    >
      <h4 className="text-base font-semibold mb-3">{feature}</h4>
      <div className="text-sm space-y-2">
        <div>
          <p className="text-gray-500 text-xs">Wix / Squarespace</p>
          <p>{wix}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Therapy Site Studio</p>
          <p className="font-medium">{studio}</p>
        </div>
      </div>
    </div>
  ))}
</div>

{/* Help me decide prompt */}
<p className="mt-6 mb-8 text-center text-gray-700 max-w-xl mx-auto">
  Not sure which plan fits your business best?{' '}
  <a href="/contact" className="text-blue-600 hover:underline font-semibold">
    Contact us
  </a>{' '}
  and we’ll walk you through it.
</p>


{/* CTA Button */}
<div className="mt-12 text-center">
  <a
    href="/contact"
    className="inline-block bg-[#0A2540] text-white text-base md:text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-[#071d33] hover:scale-105 transition-transform duration-200"
  >
    I’m Ready to Launch My New Website
  </a>
</div>

          </div>
        </div>
      </section>
      <FAQSectionComponent />
      <Footer />
    </>
  );
}
