import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Web Design Company Serving Los Angeles & Beyond | Pulsecraft',
  description:
    'Hand-coded, high-performance websites for small businesses across the Los Angeles metro — Santa Monica, Beverly Hills, Pasadena, Downtown LA, and Long Beach.',
  alternates: { canonical: 'https://www.pulsecraftweb.com/web-design' },
};

export default function WebDesignHubPage() {
  return (
    <main className="bg-bg pt-40 pb-28 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6">
            Areas We Serve
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Web design across<br />the LA metro
          </h1>
          <p className="text-muted font-body text-lg leading-relaxed">
            Based in Los Angeles, working with businesses across the metro. Pick your city.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/web-design/${location.slug}`}
              className="group bg-surface border border-white/[0.07] rounded-2xl p-8 hover:border-accent/30 transition-all duration-200"
            >
              <div className="flex items-center gap-2 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-4">
                <MapPin size={13} aria-hidden />
                {location.city}, {location.region}
              </div>
              <p className="text-muted font-body text-sm leading-relaxed mb-5">
                {location.metaHook}
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm">
                See how we help
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
