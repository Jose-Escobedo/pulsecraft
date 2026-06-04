import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Pulsecraft Web',
  description:
    'Read about the steps Pulsecraft Web takes to make its website accessible for all individuals, including people with disabilities.',
};

export default function AccessibilityPage() {
  return (
    <main className="bg-bg min-h-screen pt-40 pb-24 px-6 lg:px-8">
      <article className="max-w-[760px] mx-auto">

        <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
          Accessibility Statement
        </h1>
        <p className="text-sm font-body text-muted mb-12">Last updated: June 4, 2025</p>

        <div className="prose prose-sm max-w-none space-y-8 font-body text-primary/80 leading-relaxed">

          <p className="text-lg text-primary/90">
            At Pulsecraft Web, we are committed to ensuring digital accessibility for all individuals,
            including people with disabilities. We are continually working to improve the user
            experience for everyone and applying the relevant accessibility standards.
          </p>

          <section aria-labelledby="standards-heading">
            <h2 id="standards-heading" className="text-2xl font-display font-semibold text-primary mb-3">
              Standards &amp; Practices
            </h2>
            <p className="mb-4">
              Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1,
              Level AA. These guidelines outline how to make web content more accessible for people
              with a wide range of disabilities, including visual, auditory, cognitive, and motor.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Keyboard-friendly navigation throughout all pages</li>
              <li>Sufficient color contrast ratios and readable font sizes</li>
              <li>Text alternatives for all meaningful images</li>
              <li>Semantic HTML for assistive technologies</li>
              <li>Descriptive link text and ARIA labels on interactive elements</li>
            </ul>
          </section>

          <section aria-labelledby="feedback-heading">
            <h2 id="feedback-heading" className="text-2xl font-display font-semibold text-primary mb-3">
              Feedback &amp; Support
            </h2>
            <p className="mb-4">
              If you encounter any accessibility barriers while using our site or need assistance
              accessing any content, please let us know. We&apos;re committed to addressing your
              concerns promptly.
            </p>
            <ul className="space-y-2 text-muted">
              <li>
                <strong className="text-primary font-semibold">Email: </strong>
                <a
                  href="mailto:support@pulsecraftweb.com"
                  className="text-accent hover:brightness-110 transition-all duration-200"
                >
                  support@pulsecraftweb.com
                </a>
              </li>
              <li>
                <strong className="text-primary font-semibold">Location: </strong>
                Los Angeles, CA
              </li>
            </ul>
          </section>

          <div className="pt-4 border-t border-white/[0.07]">
            <Link
              href="/"
              className="text-accent font-body font-medium text-sm hover:brightness-110 transition-all duration-200"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </article>
    </main>
  );
}
