import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pulsecraft Web',
  description: 'Learn how Pulsecraft Web collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-bg min-h-screen pt-40 pb-24 px-6 lg:px-8">
      <article className="max-w-[760px] mx-auto">

        <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm font-body text-muted mb-12">Effective Date: June 2, 2025</p>

        <div className="space-y-8 font-body text-primary/80 leading-relaxed">

          <p className="text-lg text-primary/90">
            Pulsecraft Web Designs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
            committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            and safeguard your information when you visit{' '}
            <a
              href="https://www.pulsecraftweb.com"
              className="text-accent hover:brightness-110 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              pulsecraftweb.com
            </a>{' '}
            or use our services.
          </p>

          {[
            {
              id: 'info-collect',
              heading: '1. Information We Collect',
              body: (
                <>
                  <h3 className="font-semibold text-primary mt-4 mb-1">Personal Information</h3>
                  <p>
                    If you contact us or fill out a form, we may collect your name, email address,
                    phone number, business name, and any message content you provide.
                  </p>
                  <h3 className="font-semibold text-primary mt-4 mb-1">Usage Data</h3>
                  <p>
                    We collect anonymized data on how visitors interact with our site using tools
                    like Google Analytics. This data does not personally identify you.
                  </p>
                </>
              ),
            },
            {
              id: 'how-use',
              heading: '2. How We Use Your Information',
              body: (
                <ul className="list-disc list-inside space-y-1.5 text-muted mt-2">
                  <li>To respond to inquiries and provide requested services</li>
                  <li>To improve our website and service offerings</li>
                  <li>To send relevant updates or communications with your consent</li>
                </ul>
              ),
            },
            {
              id: 'data-sharing',
              heading: '3. Data Sharing',
              body: (
                <p>
                  We do not sell, rent, or trade your personal information. We may share data with
                  trusted third-party vendors for services such as hosting, analytics, and contact
                  forms — all of whom are required to uphold data protection standards.
                </p>
              ),
            },
            {
              id: 'security',
              heading: '4. Security',
              body: (
                <p>
                  We use industry-standard security measures to protect your data. However, no
                  method of transmission over the Internet is 100% secure.
                </p>
              ),
            },
            {
              id: 'your-rights',
              heading: '5. Your Rights',
              body: (
                <p>
                  You may request access to, correction of, or deletion of your personal information
                  at any time by contacting us at the address below.
                </p>
              ),
            },
            {
              id: 'policy-changes',
              heading: '6. Changes to This Policy',
              body: (
                <p>
                  We may update this policy periodically. Updates will be posted on this page with
                  a revised effective date.
                </p>
              ),
            },
            {
              id: 'contact-us',
              heading: '7. Contact',
              body: (
                <p>
                  Questions about this policy? Email us at{' '}
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
