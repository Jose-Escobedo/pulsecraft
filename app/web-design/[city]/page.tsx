import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import SEOSchema from '@/components/SEOSchema';
import { locations, getLocationBySlug } from '@/data/locations';

interface PageProps {
  params: Promise<{ city: string }>;
}

// Pre-render every city in `data/locations.ts` at build time.
export function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }));
}

// Any slug not returned above 404s instead of triggering an on-demand render.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  const title = `Web Design Company in ${location.city}, ${location.region} | Pulsecraft`;
  const description = location.metaHook;
  const url = `https://www.pulsecraftweb.com/web-design/${location.slug}`;

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

export default async function LocationPage({ params }: PageProps) {
  const { city: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  return (
    <main>
      <SEOSchema faqs={location.faqs} />

      {/* Hero */}
      <section className="bg-bg pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6">
            <MapPin size={12} aria-hidden />
            {location.city}, {location.region}
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Web Design in<br />
            <span className="text-accent drop-shadow-[0_0_20px_rgba(0,216,255,0.3)]">
              {location.city}
            </span>
          </h1>
          <p className="text-muted font-body text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {location.metaHook}
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

      {/* Local context */}
      <section className="bg-surface border-y border-white/[0.07] py-20 px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-primary/80 font-body text-lg leading-relaxed">
            {location.localContext}
          </p>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-bg py-28 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              What {location.city} businesses run into
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {location.painPoints.map((point) => (
              <div
                key={point.title}
                className="bg-surface rounded-2xl border border-white/[0.07] p-8"
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

      <FAQSection faqs={location.faqs} heading={`${location.city} Website FAQs`} />

      <FinalCTA />
    </main>
  );
}
