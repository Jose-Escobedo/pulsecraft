import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import SEOSchema from '@/components/SEOSchema';
import { industries, getIndustryBySlug } from '@/data/industries';

interface PageProps {
  params: Promise<{ industry: string }>;
}

// Pre-render every industry in `data/industries.ts` at build time.
export function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }));
}

// Any slug not returned above 404s instead of triggering an on-demand render.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  const title = `${industry.name} Web Development Agency | Pulsecraft`;
  const description = `${industry.metaHook} Hand-coded, no page builders.`;
  const url = `https://www.pulsecraftweb.com/solutions/${industry.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Pulsecraft',
      type: 'website',
      images: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pulsecraft.png?alt=media&token=3185b202-42f0-4258-b13b-6dc3744ba5e8',
          width: 1080,
          height: 1080,
          alt: title,
        },
      ],
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <main>
      <SEOSchema faqs={industry.faqs} />

      {/* Hero */}
      <section className="bg-bg pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6">
            {industry.name} Web Development
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Websites Built<br />
            <span className="text-accent drop-shadow-[0_0_20px_rgba(0,216,255,0.3)]">
              {industry.headline}
            </span>
          </h1>
          <p className="text-muted font-body text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {industry.metaHook}
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-accent text-bg font-body font-semibold text-base px-8 py-4 rounded-xl hover:brightness-110 hover:shadow-[0_0_28px_var(--accent-glow)] transition-all duration-200"
          >
            Book a Free Consultation
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
              aria-hidden
            />
          </Link>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-surface border-y border-white/[0.07] py-28 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Why most {industry.name.toLowerCase()} websites underperform
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {industry.painPoints.map((point) => (
              <div
                key={point.title}
                className="bg-elevated rounded-2xl border border-white/[0.07] p-8"
              >
                <h3 className="font-display font-semibold text-primary text-lg mb-3">
                  {point.title}
                </h3>
                <p className="text-muted font-body text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-bg py-28 px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              What&apos;s included
            </h2>
            <p className="text-muted font-body text-lg">
              Everything a {industry.name.toLowerCase()} site needs to rank and convert.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4" aria-label={`${industry.name} deliverables`}>
            {industry.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-surface border border-white/[0.07] rounded-xl p-4 text-sm font-body"
              >
                <Check size={16} className="text-accent flex-shrink-0 mt-0.5" aria-hidden />
                <span className="text-primary/80 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection
        faqs={industry.faqs}
        heading={`${industry.name} Website FAQs`}
      />

      <FinalCTA />
    </main>
  );
}
