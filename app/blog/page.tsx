import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getAllPosts, readingTimeMinutes } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Pulsecraft Web Development',
  description:
    'Practical guidance on web performance, conversion, and SEO for small business owners choosing between agencies, page builders, and hand-coded sites.',
  alternates: { canonical: 'https://www.pulsecraftweb.com/blog' },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-bg pt-40 pb-28 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6">
            Blog
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Insights on speed,<br />SEO, and conversion
          </h1>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-muted font-body">No articles published yet — check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-surface border border-white/[0.07] rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-200"
              >
                <div className="relative w-full aspect-video bg-elevated">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-accent text-xs font-body font-semibold tracking-widest uppercase">
                    {post.category}
                  </span>
                  <h2 className="font-display font-bold text-primary text-lg mt-3 mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-muted font-body text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted font-body">
                    <span className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} aria-hidden />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} aria-hidden />
                        {readingTimeMinutes(post.content)} min
                      </span>
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-accent group-hover:translate-x-0.5 transition-transform duration-200"
                      aria-hidden
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
