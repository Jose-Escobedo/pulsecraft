'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
}

export default function FAQSection({
  faqs,
  heading = 'Frequently Asked Questions',
}: FAQSectionProps) {
  return (
    <section className="bg-bg py-28 lg:py-40 px-6 lg:px-8" aria-label="FAQ">
      <div className="max-w-[760px] mx-auto">

        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-5">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold">{heading}</h2>
        </div>

        <div className="space-y-3" role="list">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
              role="listitem"
            >
              <Disclosure>
                {({ open }: { open: boolean }) => (
                  <div
                    className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                      open
                        ? 'border-accent/30 bg-surface'
                        : 'border-white/[0.07] bg-surface hover:border-white/[0.14]'
                    }`}
                  >
                    <DisclosureButton className="flex justify-between items-center w-full px-6 py-5 text-left cursor-pointer group">
                      <span className="font-body font-medium text-primary text-sm lg:text-base pr-4 leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-muted flex-shrink-0 transition-transform duration-300 group-hover:text-primary ${
                          open ? '-rotate-180 text-accent' : ''
                        }`}
                        aria-hidden
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-6 pb-5 pt-1 text-sm font-body text-muted leading-relaxed">
                      {faq.answer}
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
