import type { FAQItem } from '@/components/FAQSection';

// ── Fill in with your real, Google Business Profile-matching NAP data ──────
// Consistency between this schema, your GBP listing, and your footer/contact
// page is what makes LocalBusiness schema help E-E-A-T instead of getting
// ignored (or flagged) by Google. Do not ship placeholder values.
const ORG_NAME = 'Pulsecraft';
const ORG_URL = 'https://www.pulsecraftweb.com';
const ORG_LOGO = 'https://www.pulsecraftweb.com/android-chrome-512x512.png';
const ORG_PHONE = '+1-213-915-6556';
const ORG_EMAIL = 'support@pulsecraftweb.com';

// Service-area business: no public street address, per Google's guidance for
// SABs (hide the exact address in GBP too, and rely on areaServed instead).
// If Pulsecraft ever opens a public office, add streetAddress + postalCode
// here and un-hide the address in GBP to match.
const ORG_ADDRESS = {
  addressLocality: 'Los Angeles',
  addressRegion: 'CA',
  addressCountry: 'US',
};

// Cities actively targeted by /web-design/[city] landing pages — keep this
// list in sync with data/locations.ts.
const ORG_AREA_SERVED = [
  'Los Angeles',
  'Santa Monica',
  'Beverly Hills',
  'Pasadena',
  'Downtown Los Angeles',
  'Long Beach',
].map((city) => ({ '@type': 'City', name: city }));

const ORG_SAME_AS: string[] = [
  'https://instagram.com/pulsecraftweb',
  'https://linkedin.com/company/pulsecraft',
  'https://share.google/Vbgxce1Vwo7gvVHti', // Google Business Profile
];

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}

interface SEOSchemaProps {
  /** Site-wide Organization graph. Set once, in the root layout. */
  organization?: boolean;
  /** LocalBusiness graph. Set once, in the root layout (or on /contact). */
  localBusiness?: boolean;
  /** Pass a page's FAQ list to emit FAQPage schema for rich-result eligibility. */
  faqs?: FAQItem[];
  /** Pass on blog post pages to emit Article schema. */
  article?: ArticleSchemaProps;
}

/**
 * Central JSON-LD injector. Renders one <script type="application/ld+json">
 * per schema type requested via props — call it once per page with whichever
 * combination applies (e.g. `faqs` on a service page, `article` on a blog post).
 */
export default function SEOSchema({
  organization = false,
  localBusiness = false,
  faqs,
  article,
}: SEOSchemaProps) {
  const schemas: Record<string, unknown>[] = [];

  if (organization) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: ORG_NAME,
      url: ORG_URL,
      logo: ORG_LOGO,
      email: ORG_EMAIL,
      sameAs: ORG_SAME_AS,
    });
  }

  if (localBusiness) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: ORG_NAME,
      url: ORG_URL,
      image: ORG_LOGO,
      telephone: ORG_PHONE,
      email: ORG_EMAIL,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        ...ORG_ADDRESS,
      },
      areaServed: ORG_AREA_SERVED,
    });
  }

  if (faqs && faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  if (article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline,
      description: article.description,
      image: [article.imageUrl],
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      author: {
        '@type': 'Person',
        name: article.authorName,
      },
      publisher: {
        '@type': 'Organization',
        name: ORG_NAME,
        logo: {
          '@type': 'ImageObject',
          url: ORG_LOGO,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': article.url,
      },
    });
  }

  if (schemas.length === 0) return null;

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
