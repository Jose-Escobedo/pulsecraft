import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { getAllPosts, getPostBySlug, readingTimeMinutes } from '@/lib/blog';
import { mdxComponents } from '@/components/mdx-components';
import SEOSchema from '@/components/SEOSchema';
import FinalCTA from '@/components/FinalCTA';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render every post found in content/blog/*.mdx at build time.
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// Any slug not returned above 404s instead of triggering an on-demand render.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://www.pulsecraftweb.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Pulsecraft Blog`,
    description: post.description,
    alternates: { canonical: url },
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: 'Pulsecraft',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `https://www.pulsecraftweb.com/blog/${post.slug}`;

  return (
    <main className="bg-bg pt-40 pb-28 px-6 lg:px-8">
      <SEOSchema
        article={{
          headline: post.title,
          description: post.description,
          url,
          imageUrl: post.image,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          authorName: post.author,
        }}
      />

      <article className="max-w-[720px] mx-auto">
        <header className="mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6">
            {post.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 text-muted font-body text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} aria-hidden />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} aria-hidden />
              {readingTimeMinutes(post.content)} min read
            </span>
          </div>
        </header>

        <div>
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <div className="mt-16 pt-10 border-t border-white/[0.07]">
          <Link
            href="/blog"
            className="text-accent font-body font-semibold text-sm hover:brightness-110 transition-all duration-200"
          >
            ← Back to all articles
          </Link>
        </div>
      </article>

      <div className="mt-8">
        <FinalCTA />
      </div>
    </main>
  );
}
