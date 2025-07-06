'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do we get started with your web design services?',
    answer:
      "We'll begin with a discovery call to understand your goals and vision. Once aligned, we'll provide a tailored proposal and timeline to bring your website to life.",
  },
  {
    question: 'How long will the web design process take?',
    answer:
      "The timeline depends on the project's complexity. However, we'll work closely with you to ensure a smooth and timely launch.",
  },
  {
    question: "What's included in your custom web design package?",
    answer:
      "Our package covers everything from initial design concepts and mobile optimization to ADA compliance and ongoing support. We tailor each aspect to fit your practice's needs.",
  },
  {
    question: 'Can you connect my website to my scheduling or practice management tools?',
    answer:
      'We can integrate tools like Calendly, SimplePractice, or your preferred scheduling platform — whether it’s for discovery calls or ongoing client sessions.',
  },
  {
    question: 'Can you add HIPAA-compliant forms to my website?',
    answer:
      'Yes. We can embed or link to your preferred HIPAA-compliant form service — whether it’s Jotform, SimplePractice, Hushmail, or another provider. This ensures your client data stays secure while still offering a seamless experience on your site.',
  },
  {
    question: 'What kind of support will I receive after my website goes live?',
    answer:
      'We offer ongoing maintenance and support, ensuring your website remains up-to-date, secure, and fully functional.',
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-[#0A2540] py-20 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
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
