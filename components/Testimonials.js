'use client';

import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F8F9FA] py-24 px-6 md:px-12 font-oswald text-[#0A2540]">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-2xl tracking-widest uppercase text-[#0A2540]/80 mb-3">Testimonials</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Trusted Web Designer Across The Country
        </h3>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-[#0A2540]/90">
          We have helped small business owners all over the US get the website they have been wanting for years. We are invested in our clients just as much as they are in our work. When you work with <span className="text-[#43BCCD] font-semibold">Pulsecraft</span>, you aren’t just working with an agency — you’re working with a dedicated partner.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start">
          <Quote className="text-[#43BCCD] w-6 h-6 mb-4" />
          <p className="text-base mb-4 leading-relaxed">
        We needed a restaurant website built that showcased our menu and allowed customers to order online.  Jose has been awesome to work with. I highly recommend him for your website needs!
          </p>
          <div className="mt-auto text-sm text-[#0A2540]/80 font-semibold">
            Maria C.<br />
            <span className="text-xs font-normal text-[#0A2540]/60">Studio City, CA</span>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start">
          <Quote className="text-[#43BCCD] w-6 h-6 mb-4" />
          <p className="text-base mb-4 leading-relaxed">
            Pulsecraft and Jose have made the process of building a website a fun, exciting experience. He is very helpful and answers your questions within a quick manner. I’ll be using him in the future.
          </p>
          <div className="mt-auto text-sm text-[#0A2540]/80 font-semibold">
            Diego T.<br />
            <span className="text-xs font-normal text-[#0A2540]/60">Los Angeles, CA</span>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start">
          <Quote className="text-[#43BCCD] w-6 h-6 mb-4" />
          <p className="text-base mb-4 leading-relaxed">
            I approached Jose with a very specific vision for our new website, and he knocked it out of the park. I was looking for a clean, original design and a faster site. He absolutely delivered.
          </p>
          <div className="mt-auto text-sm text-[#0A2540]/80 font-semibold">
            Roberto E.<br />
            <span className="text-xs font-normal text-[#0A2540]/60">Los Angeles, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
