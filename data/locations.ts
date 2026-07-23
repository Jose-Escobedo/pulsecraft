import type { FAQItem } from '@/components/FAQSection';

export interface Location {
  /** URL segment: /web-design/[slug] */
  slug: string;
  city: string;
  region: string;
  /** One-line hook used in <meta description> and hero subhead */
  metaHook: string;
  /** Short paragraph establishing local relevance — keep this genuinely distinct per city. */
  localContext: string;
  painPoints: { title: string; description: string }[];
  faqs: FAQItem[];
}

// Each city needs a genuinely distinct angle, not a name-swapped template —
// Google's spam policies treat near-duplicate location pages as doorway pages.
// Add new cities by pushing an object; write real local context each time.
export const locations: Location[] = [
  {
    slug: 'los-angeles',
    city: 'Los Angeles',
    region: 'CA',
    metaHook:
      'Custom, hand-coded websites for LA small businesses competing in one of the most crowded local search markets in the country.',
    localContext:
      "Los Angeles has more agencies, freelancers, and page-builder templates competing for local search than almost any other city — which means a slow, generic site doesn't just underperform, it disappears entirely on page two.",
    painPoints: [
      {
        title: 'Drowned out in a saturated market',
        description:
          'With thousands of businesses competing for the same LA keywords, a templated site has no shot. We build around what actually differentiates you.',
      },
      {
        title: 'Mobile speed matters more here',
        description:
          "LA traffic means LA searches happen on the go. A site that's slow on mobile loses the exact customer who's ready to call right now.",
      },
      {
        title: 'Local trust signals get overlooked',
        description:
          "Reviews, service-area clarity, and fast load times all feed into local ranking. We build these in from day one instead of bolting them on later.",
      },
    ],
    faqs: [
      {
        question: 'Do you work with businesses across all of Los Angeles?',
        answer:
          'Yes — we work with LA-based businesses citywide, from Downtown to the Westside, entirely remotely with calls and screen-shares in place of in-person meetings.',
      },
      {
        question: 'Can you help us rank locally in LA, not just build the site?',
        answer:
          'A fast, well-structured site is the foundation. We also offer an ongoing SEO add-on for keyword targeting, Google Business Profile alignment, and local content strategy on top of the build.',
      },
    ],
  },
  {
    slug: 'santa-monica',
    city: 'Santa Monica',
    region: 'CA',
    metaHook:
      'Fast, conversion-focused websites for Santa Monica startups, studios, and DTC brands that need a site as sharp as their product.',
    localContext:
      "Santa Monica's business mix skews toward startups, wellness studios, and direct-to-consumer brands — audiences that expect a site to look and perform like a modern product, not a brochure from 2015.",
    painPoints: [
      {
        title: 'Brand-first businesses need brand-first sites',
        description:
          "Page builders flatten every brand into the same three layouts. We build around your actual visual identity, not a theme's constraints.",
      },
      {
        title: 'DTC and studio audiences expect speed',
        description:
          "Santa Monica's customer base is used to fast, polished digital products elsewhere — a slow site reads as a red flag before they even see your offer.",
      },
      {
        title: 'Booking and checkout friction kills conversions',
        description:
          'Whether it\'s class bookings or product checkout, we integrate the tools you already use (Mindbody, Shopify, Calendly) without slowing the site down.',
      },
    ],
    faqs: [
      {
        question: 'Do you build sites for wellness studios and fitness brands?',
        answer:
          'Yes — we regularly integrate booking platforms like Mindbody and Calendly directly into hand-coded sites, so the booking flow feels native instead of like an embedded widget.',
      },
      {
        question: 'Can you build an e-commerce site for a DTC brand?',
        answer:
          'Yes, typically via a headless Shopify integration on the Next.js frontend, which keeps checkout fast without sacrificing custom design.',
      },
    ],
  },
  {
    slug: 'beverly-hills',
    city: 'Beverly Hills',
    region: 'CA',
    metaHook:
      'High-end, hand-coded websites for Beverly Hills professionals and boutique firms where the site has to match the price point.',
    localContext:
      "Beverly Hills clients are used to a certain standard before they ever pick up the phone. A templated site undermines credibility with exactly the high-ticket clientele the business is trying to reach.",
    painPoints: [
      {
        title: 'Perceived value starts on the homepage',
        description:
          "For high-ticket services — legal, medical, real estate, finance — a generic-looking site quietly caps what clients expect to pay before you ever speak to them.",
      },
      {
        title: 'Discretion and polish over flashy templates',
        description:
          "We build restrained, premium sites that signal expertise, not stock-photo hero sections and animated page-builder effects.",
      },
      {
        title: 'Referral clients still check the site first',
        description:
          'Even warm referrals Google you before calling. The site needs to confirm the reputation they already heard about.',
      },
    ],
    faqs: [
      {
        question: 'Do you build sites for high-end professional services?',
        answer:
          'Yes — attorneys, medical and aesthetic practices, financial advisors, and boutique real estate teams are a core part of what we build, with design calibrated to that clientele.',
      },
      {
        question: 'Can the site stay private or invite-only for select content?',
        answer:
          'Yes, we can gate specific pages or resources behind a simple access flow if part of your site is meant for existing clients only.',
      },
    ],
  },
  {
    slug: 'pasadena',
    city: 'Pasadena',
    region: 'CA',
    metaHook:
      'Reliable, fast-loading websites for established Pasadena businesses that want a modern site without losing their local identity.',
    localContext:
      "Pasadena's business community leans toward long-established, often family-run businesses with deep local reputations — the goal is usually a site that finally matches decades of trust, not a reinvention.",
    painPoints: [
      {
        title: 'Reputation built over years, undercut by an old site',
        description:
          "A dated or slow website undersells a business that's been trusted locally for years. We modernize the site without changing what made it trustworthy.",
      },
      {
        title: 'Local competition is increasingly digital-first',
        description:
          'Newer, digitally-savvy competitors are entering Pasadena\'s market. A fast, well-optimized site keeps established businesses from losing local search share.',
      },
      {
        title: 'Non-technical teams need a site they can actually maintain',
        description:
          "We handle ongoing updates directly, so there's no CMS to learn and no plugin maintenance to keep up with.",
      },
    ],
    faqs: [
      {
        question: 'We\'ve had the same website for years — can you redesign it without losing our identity?',
        answer:
          'Yes — a redesign engagement starts with what\'s already working (your branding, reputation, existing content) and rebuilds the technical foundation around it, rather than starting from a blank template.',
      },
      {
        question: 'Do we need to manage the website ourselves after launch?',
        answer:
          "No — our Monthly Plan includes hosting and ongoing updates, so you can call or email us with changes instead of learning a CMS.",
      },
    ],
  },
  {
    slug: 'downtown-los-angeles',
    city: 'Downtown Los Angeles',
    region: 'CA',
    metaHook:
      "Professional, fast-loading websites for Downtown LA law firms, financial services, and corporate offices that need to convert high-intent visitors.",
    localContext:
      'Downtown LA\'s business density skews toward law firms, financial and corporate services, and professional offices — visitors arriving with specific intent who need a fast, credible path to a consultation, not a scroll-heavy brand site.',
    painPoints: [
      {
        title: 'High-intent visitors need a fast, direct path',
        description:
          "Someone searching for a DTLA attorney or advisor already has a need. A slow or cluttered site adds friction exactly when it should be removing it.",
      },
      {
        title: 'Practice-area or service clarity gets lost',
        description:
          "One page trying to represent every service area or department underperforms. We build dedicated pages so each service targets its own search intent.",
      },
      {
        title: 'Professional credibility has to load in under 3 seconds',
        description:
          'Corporate and legal visitors bounce fast if a site feels slow or dated — it reads as a signal about how the business itself operates.',
      },
    ],
    faqs: [
      {
        question: 'Do you build sites with multiple practice areas or departments?',
        answer:
          "Yes — we build a dedicated landing page per practice area or department so each ranks and converts independently instead of competing against a single generic services page.",
      },
      {
        question: 'Can you match our firm\'s existing brand guidelines?',
        answer:
          'Yes — send us your brand guide (colors, type, logo usage) and we\'ll build the site around it rather than introducing a new visual identity.',
      },
    ],
  },
  {
    slug: 'long-beach',
    city: 'Long Beach',
    region: 'CA',
    metaHook:
      'Lead-generating websites for Long Beach contractors, logistics, and home service businesses built to win local search.',
    localContext:
      "Long Beach's economy leans heavily on logistics, trades, and home services businesses that live or die on local search visibility and click-to-call — exactly where a fast, locally-optimized site earns its cost back fastest.",
    painPoints: [
      {
        title: 'Local map pack visibility is everything',
        description:
          'For trades and home service businesses, most calls come from Google Maps and local pack results — a slow site works against the ranking signals that drive that visibility.',
      },
      {
        title: 'Directory sites outrank a slow homepage',
        description:
          "Thumbtack and Yelp profiles beat a generic website for the same searches. A fast, well-structured site is what lets you compete for — and win — those spots directly.",
      },
      {
        title: 'Quote requests need to be frictionless',
        description:
          "Click-to-call and a fast quote-request form on every page turn more visits into booked jobs, especially from mobile searches made on-site by a customer.",
      },
    ],
    faqs: [
      {
        question: 'Can you help us show up in the Google Maps local pack?',
        answer:
          "A fast, properly structured site supports local ranking alongside your Google Business Profile and reviews. We align on-page SEO and schema to support that, and offer local SEO as an ongoing add-on.",
      },
      {
        question: 'Do you build sites for contractors and trades businesses?',
        answer:
          'Yes — service-specific landing pages, click-to-call, and quote-request flows are core to how we build for contractors, HVAC, plumbing, and similar home service businesses.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}
