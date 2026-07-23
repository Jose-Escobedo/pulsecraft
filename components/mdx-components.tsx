import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="text-3xl font-display font-bold text-primary mt-14 mb-5 scroll-mt-28" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-2xl font-display font-semibold text-primary mt-10 mb-4 scroll-mt-28" {...props} />
  ),
  p: (props) => <p className="text-muted font-body text-lg leading-relaxed mb-6" {...props} />,
  a: ({ href = '', children, ...props }) => (
    <Link
      href={href}
      className="text-accent underline underline-offset-2 hover:brightness-110 transition-all duration-200"
      {...props}
    >
      {children}
    </Link>
  ),
  ul: (props) => (
    <ul className="list-disc list-outside pl-6 text-muted font-body text-lg space-y-2 mb-6" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-outside pl-6 text-muted font-body text-lg space-y-2 mb-6" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-accent/40 pl-6 italic text-primary/80 my-8"
      {...props}
    />
  ),
  strong: (props) => <strong className="text-primary font-semibold" {...props} />,
  code: (props) => (
    <code className="bg-elevated text-accent px-1.5 py-0.5 rounded text-[0.9em]" {...props} />
  ),
  pre: (props) => (
    <pre
      className="bg-elevated border border-white/[0.07] rounded-xl p-5 overflow-x-auto mb-6 text-sm"
      {...props}
    />
  ),
  hr: () => <hr className="border-white/[0.07] my-12" />,
  img: ({ src, alt }) => (
    <span className="block relative w-full aspect-video my-8 rounded-xl overflow-hidden border border-white/[0.07]">
      {typeof src === 'string' && (
        <Image src={src} alt={alt ?? ''} fill className="object-cover" />
      )}
    </span>
  ),
};
