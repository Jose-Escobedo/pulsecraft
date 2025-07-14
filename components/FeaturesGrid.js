'use client';

import Link from 'next/link';
import {
  Smartphone,
  MonitorSmartphone,
  Timer,
  BarChart2,
  BadgeDollarSign,
  Globe,
} from 'lucide-react';

const features = [
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile First Design',
    text: 'We start building your site for mobile devices first, keeping code lean and optimized for better responsiveness.',
    linkText: 'Get Started',
    href: '/contact',
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: 'Fully Responsive',
    text: 'Your site will look great on any screen size — from phones to desktops — giving all visitors a seamless experience.',
    linkText: 'Get Started',
    href: '/contact',
  },
  {
    icon: <Timer size={28} />,
    title: 'Optimized Page Speed',
    text: 'Our custom code loads fast — under 1 second — so you keep traffic and convert more leads.',
    linkText: 'More About Speed',
    href: '/contact',
  },
  {
    icon: <BarChart2 size={28} />,
    title: 'SEO Services',
    text: 'We handle technical and local SEO so your business ranks and attracts more customers organically.',
    linkText: 'Learn More',
    href: '/contact',
  },
 {
  icon: <BadgeDollarSign size={28} />,
  title: 'Conversion Optimization',
  text: 'We optimize layouts, copy, and user journeys to turn more visitors into paying customers.',
  linkText: 'See How We Convert',
  href: '/contact',
},
  {
    icon: <Globe size={28} />,
    title: '100% US-Based',
    text: `We don't outsource. Our team is fully remote and based in the US — delivering quality and accountability.`,
    linkText: 'Meet the Team',
    href: '/contact',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-[#F8F9FA] font-oswald py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={i}
            className="relative cursor-pointer rounded-2xl p-8 pt-16 min-h-[300px] shadow-md bg-[#F1F2F4] overflow-hidden group transition-all duration-300"
          >
            {/* Navy hover overlay */}
            <div className="absolute inset-0 bg-[#0A2540] opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-0" />

            {/* Decorative SVG Pulse overlay */}
            <div className="absolute inset-0 pt-30 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none z-0">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pulsesv.svg?alt=media&token=2e5fb401-9b78-4f30-8c5a-f71da594eb02"
                alt="Decorative pulse background"
                className="w-full h-full object-cover filter invert brightness-150"
              />
            </div>

            {/* Icon */}
            <div className="absolute top-4 left-6 z-10 bg-[#0A2540] text-white rounded-xl p-3">
              {feature.icon}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3 mt-3 text-[#0A2540] group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#0A2540] group-hover:text-gray-200 mb-4 text-sm leading-relaxed transition-colors duration-300">
                {feature.text}
              </p>
              <a
                href={feature.href}
                className="text-sm font-semibold underline text-[#0A2540] group-hover:text-[#43BCCD] transition-colors duration-300"
              >
                {feature.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <Link
          href="/contact"
          passHref
          className="inline-block bg-[#43BCCD] hover:bg-[#36a1b4] text-white font-semibold py-4 px-12 rounded-lg transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
