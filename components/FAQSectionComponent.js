'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';

const pricingFaqs = [
  {
    question: 'Is there a setup fee?',
    answer:
      'Nope! Setup is fully included in your $99/month plan. We handle the design, build, and launch — no hidden costs.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, our plans are month-to-month. If you decide to pause or cancel, just let us know before your next billing date.',
  },
  {
    question: 'Is hosting included in the $99/month?',
    answer:
      'Absolutely — fast, secure hosting with daily backups, SSL certificates, and performance monitoring is all included.',
  },
  {
    question: 'Can I combine plans?',
    answer:
      'Yes! Many clients pair Website + Hosting with our SEO Growth Plan or Brand Identity package. We can tailor a bundle for you.',
  },
  {
    question: 'How many content updates are included per month?',
    answer:
      'We include up to 4 content updates per month. This covers text/image swaps, blog posts, and minor layout tweaks.',
  },
];

export default function FAQSectionComponent() {
  return (
    <section
      id="faqsection"
      className="font-oswald bg-[#0A2540] py-20 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          Frequently Asked{' '}
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        <div className="space-y-4">
          {pricingFaqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div
                  className={`transition duration-300 ease-in-out rounded-2xl shadow-md overflow-hidden border ${
                    open
                      ? 'border-teal-300 bg-white/90'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <Disclosure.Button className="cursor-pointer flex justify-between items-center w-full px-5 py-4 text-left text-base md:text-lg font-semibold">
                    <span className="flex items-center space-x-2">
                      <span className="text-teal-300 font-bold text-base bg-white/10 px-3 py-1 rounded-full">
                        {index + 1}
                      </span>
                      <span
                        className={`transition-colors duration-300 ${
                          open ? 'text-[#0A2540]' : 'text-white'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </span>
                    <ChevronUp
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } w-5 h-5 text-teal-300 transition-transform duration-300`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-5 pb-5 pt-2 text-sm text-[#0A2540] bg-white">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
