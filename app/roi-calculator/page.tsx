import type { Metadata } from 'next';
import FAQSection, { type FAQItem } from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import RoiCalculator from '@/components/RoiCalculator';
import SEOSchema from '@/components/SEOSchema';

export const metadata: Metadata = {
  title: 'Website Speed vs. Revenue Calculator | Pulsecraft',
  description:
    "Find out how much revenue your slow website is costing you every month. Enter your traffic and average order value to get a free, instant estimate.",
  alternates: { canonical: 'https://www.pulsecraftweb.com/roi-calculator' },
};

const faqs: FAQItem[] = [
  {
    question: 'How is the revenue loss calculated?',
    answer:
      "We benchmark your current load time against Google's 2.5-second \"good\" Largest Contentful Paint threshold, then apply a widely cited 7% conversion drop for every additional second beyond it, based on your traffic, conversion rate, and average order value.",
  },
  {
    question: 'Is this an exact number?',
    answer:
      "It's a directional estimate based on industry-standard conversion benchmarks, not a guarantee. The full audit we send after unlocking your results includes page-specific recommendations for a more precise picture.",
  },
  {
    question: "What's included in the free audit you email me?",
    answer:
      'Your calculated revenue loss estimate plus a breakdown of the assumptions used, so you can see exactly where the number comes from and what to fix first.',
  },
];

export default function RoiCalculatorPage() {
  return (
    <main className="bg-bg pt-40 pb-28 px-6 lg:px-8">
      <SEOSchema faqs={faqs} />
      <div className="max-w-[1100px] mx-auto mb-20">
        <RoiCalculator />
      </div>
      <FAQSection faqs={faqs} heading="Calculator FAQs" />
      <FinalCTA />
    </main>
  );
}
