import type { FAQItem } from '@/components/FAQSection';

// ── Fill in with your real, Google Business Profile-matching NAP data ──────
// Consistency between this schema, your GBP listing, and your footer/contact
// page is what makes LocalBusiness schema help E-E-A-T instead of getting
// ignored (or flagged) by Google. Do not ship placeholder values.
const ORG_NAME = 'Pulsecraft';
const ORG_URL = 'https://www.pulsecraftweb.com';
const ORG_LOGO = 'https://www.pulsecraftweb.com/android-chrome-512x512.png';
const ORG_PHONE = '+1-000-000-0000'; // TODO: real support line
const ORG_EMAIL = 'support@pulsecraftweb.com';
const ORG_ADDRESS = {
  addressLocality: 'Los Angeles',
  addressRegion: 'CA',
  addressCountry: 'US',
  // TODO: add streetAddress + postalCode once you have a public business address
};
const ORG_SAME_AS: string[] = [
  // TODO: add real profile URLs, e.g. 'https://www.linkedin.com/company/pulsecraft'
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
