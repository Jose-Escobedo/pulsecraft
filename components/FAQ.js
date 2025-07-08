'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do we get started with your web design services?',
    answer:
      "We start with a free discovery call to understand your goals, audience, and vision. Then we send over a custom proposal with deliverables, pricing, and timeline.",
  },
  {
    question: 'How long does the website build take?',
    answer:
      "Typical turnaround is 2–4 weeks depending on complexity and responsiveness during feedback cycles. We'll keep things clear and timely every step of the way.",
  },
  {
    question: `What's included in a custom website package?`,
    answer:
      "Each site includes custom design, responsive layout, performance optimization, SEO fundamentals, and support after launch. No templates. No fluff.",
  },
  {
    question: 'Can you integrate booking, forms, or third-party tools?',
    answer:
      'Yes — we can connect scheduling platforms like Calendly, forms, payment tools, and more. Just tell us what you need.',
  },
  {
    question: 'Will I be able to make updates to my site later?',
    answer:
      'Absolutely. We build most sites with maintainability in mind, and we can include tutorials or ongoing support depending on your preference.',
  },
  {
    question: 'Do you offer support after the site goes live?',
    answer:
      'Yes. We offer optional maintenance and support plans — covering updates, security, and small edits so you stay focused on your business.',
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="font-oswald scroll-mt-24 bg-[#F8F9FA] py-20 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#0c0f25] mb-12">
          Frequently Asked{' '}
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
                          open ? 'text-[#0A2540]' : 'text-[#0c0f25]'
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
