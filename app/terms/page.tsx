import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Pulsecraft Web',
  description: 'Terms & Conditions governing your use of Pulsecraft Web services and website.',
};

export default function TermsPage() {
  return (
    <main className="bg-bg min-h-screen pt-40 pb-24 px-6 lg:px-8">
      <article className="max-w-[760px] mx-auto">

        <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm font-body text-muted mb-12">Effective Date: June 3, 2025</p>

        <div className="space-y-8 font-body text-primary/80 leading-relaxed">

          <p className="text-lg text-primary/90">
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of Pulsecraft Web
            Designs&apos;s website and services. By using our website, you agree to be bound by
            these Terms.
          </p>

          {[
            {
              id: 'services',
              heading: '1. Services',
              body: (
                <p>
                  We offer custom website development and related services tailored to small
                  businesses, professionals, and organizations of all kinds across the United States.
                </p>
              ),
            },
            {
              id: 'user-responsibilities',
              heading: '2. User Responsibilities',
              body: (
                <p>
                  You agree not to use our services for any unlawful or unauthorized purpose.
                  You must provide accurate information and comply with all applicable laws and
                  regulations.
                </p>
              ),
            },
            {
              id: 'ip',
              heading: '3. Intellectual Property',
              body: (
                <p>
                  All content, branding, designs, and code developed by us remain our intellectual
                  property until paid in full. After full payment, rights are transferred to the
                  client as specified in the applicable contract.
                </p>
              ),
            },
            {
              id: 'payment',
              heading: '4. Payment Terms',
              body: (
                <p>
                  Project scopes, timelines, and payment terms are defined in individual service
                  agreements. Deposits are typically required before work begins. Monthly plan
                  subscribers are billed on a recurring basis as agreed.
                </p>
              ),
            },
            {
              id: 'liability',
              heading: '5. Limitation of Liability',
              body: (
                <p>
                  We are not liable for indirect, incidental, or consequential damages arising
                  from the use or inability to use our services. Our total liability shall not
                  exceed the amounts paid by you in the three months preceding the claim.
                </p>
              ),
            },
            {
              id: 'third-party',
              heading: '6. Third-Party Services',
              body: (
                <p>
                  We may integrate or link to third-party services (e.g., hosting providers,
                  payment processors, analytics tools). We are not responsible for the performance,
                  availability, or privacy practices of these third-party services.
                </p>
              ),
            },
            {
              id: 'termination',
              heading: '7. Termination',
              body: (
                <p>
                  Either party may terminate monthly services with notice before the next billing
                  date. We reserve the right to terminate access to our services if you breach
                  these Terms or engage in conduct that harms our business or other users.
                </p>
              ),
            },
            {
              id: 'governing-law',
              heading: '8. Governing Law',
              body: (
                <p>
                  These Terms are governed by the laws of the State of California. Any disputes
                  shall be resolved in the courts of Los Angeles County, California.
                </p>
              ),
            },
            {
              id: 'contact-terms',
              heading: '9. Contact',
              body: (
                <p>
                  Questions about these Terms? Email us at{' '}
                  <a
                    href="mailto:support@pulsecraftweb.com"
                    className="text-accent hover:brightness-110 transition-all duration-200"
                  >
                    support@pulsecraftweb.com
                  </a>
                </p>
              ),
            },
          ].map(({ id, heading, body }) => (
            <section key={id} aria-labelledby={id}>
              <h2 id={id} className="text-xl font-display font-semibold text-primary mb-3">
                {heading}
              </h2>
              {body}
            </section>
          ))}

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
