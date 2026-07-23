import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Industries We Serve | Pulsecraft Web Development',
  description:
    'Custom, hand-coded websites built for the way your industry actually converts — real estate, healthcare, legal, home services, and more.',
  alternates: { canonical: 'https://www.pulsecraftweb.com/solutions' },
};

export default function SolutionsHubPage() {
  return (
    <main className="bg-bg pt-40 pb-28 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6">
            Industries We Serve
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Built for your industry,<br />not a template
          </h1>
          <p className="text-muted font-body text-lg leading-relaxed">
            Every business converts differently. Pick your industry to see how we build for it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/solutions/${industry.slug}`}
              className="group bg-surface border border-white/[0.07] rounded-2xl p-8 hover:border-accent/30 transition-all duration-200"
            >
              <h2 className="font-display font-bold text-primary text-2xl mb-3">
                {industry.name}
              </h2>
              <p className="text-muted font-body text-sm leading-relaxed mb-5">
                {industry.metaHook}
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm">
                See what&apos;s included
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
