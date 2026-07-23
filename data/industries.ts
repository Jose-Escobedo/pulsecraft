import type { FAQItem } from '@/components/FAQSection';

export interface Industry {
  /** URL segment: /solutions/[slug] */
  slug: string;
  /** Display name, e.g. "Real Estate" */
  name: string;
  /** One-line hook used in <meta description> and hero subhead */
  metaHook: string;
  /** Hero headline second line, e.g. "for Real Estate Teams" */
  headline: string;
  painPoints: { title: string; description: string }[];
  deliverables: string[];
  faqs: FAQItem[];
}

// Add a new object here to auto-generate a new /solutions/[industry] page —
// generateStaticParams() in app/solutions/[industry]/page.tsx picks it up
// automatically at build time. Keep painPoints/faqs unique per industry;
// near-duplicate copy across pages hurts programmatic SEO more than it helps.
export const industries: Industry[] = [
  {
    slug: 'real-estate',
    name: 'Real Estate',
    metaHook:
      'IDX-ready, lead-generating websites for agents, teams, and brokerages that convert visitors into showings.',
    headline: 'for Real Estate Agents & Teams',
    painPoints: [
      {
        title: 'Template sites all look the same',
        description:
          "MLS-plugin themes make you indistinguishable from every other agent in your market. We build a site around your personal brand, not a page builder's defaults.",
      },
      {
        title: 'Slow listing pages lose buyers',
        description:
          'Bloated IDX widgets tank mobile page speed. We hand-code listing pages that load fast and keep buyers scrolling instead of bouncing to Zillow.',
      },
      {
        title: 'No clear path to a lead',
        description:
          'Every page is built around a single job: get a visitor to book a showing, request a valuation, or call you directly.',
      },
    ],
    deliverables: [
      'IDX / MLS integration',
      'Neighborhood & listing landing pages',
      'Home valuation lead capture',
      'Agent/team bio pages built for trust',
      'Mobile-first, sub-2s load times',
    ],
    faqs: [
      {
        question: 'Can you integrate our MLS/IDX feed?',
        answer:
          "Yes — we integrate with IDX Broker, Realtyna, and most major MLS feed providers, and hand-code the listing templates around it so they stay fast instead of relying on a stock plugin.",
      },
      {
        question: 'Do you build individual pages for each listing or neighborhood?',
        answer:
          'We can generate dedicated, SEO-optimized pages per listing or neighborhood so you rank for hyper-local searches like "homes for sale in [neighborhood]" instead of competing only on your homepage.',
      },
      {
        question: 'How fast can a real estate site be ready before a listing launch?',
        answer:
          'Most agent and small-team sites launch in 2–4 weeks. If you have a listing deadline, tell us up front and we\'ll scope the timeline around it.',
      },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    metaHook:
      'HIPAA-conscious, accessible websites for clinics and private practices that turn searches into booked appointments.',
    headline: 'for Clinics & Private Practices',
    painPoints: [
      {
        title: 'Patients can\'t find you on mobile',
        description:
          "Most patient searches happen on a phone, often urgently. If your site isn't fast and mobile-first, they call the next result instead.",
      },
      {
        title: 'Booking friction costs appointments',
        description:
          "We integrate directly with your scheduling tool (Calendly, Zocdoc, or your EHR's booking widget) so patients can book in two taps, not five.",
      },
      {
        title: 'Accessibility and compliance concerns',
        description:
          'We build to WCAG standards from the start and keep patient forms off-site or properly secured — no plugin soup, no guesswork.',
      },
    ],
    deliverables: [
      'Online appointment booking integration',
      'Service & condition-specific landing pages',
      'WCAG-conscious accessible design',
      'Google Business Profile & local SEO alignment',
      'Insurance / new-patient FAQ pages',
    ],
    faqs: [
      {
        question: 'Can you connect our site to our scheduling software?',
        answer:
          'Yes — we integrate with Calendly, Zocdoc, and most EHR-provided booking widgets, or build a custom request-an-appointment form that routes to your front desk.',
      },
      {
        question: 'Is the website itself HIPAA compliant?',
        answer:
          "The marketing site itself typically doesn't handle PHI, but we design forms and integrations to avoid collecting sensitive health data outside your compliant systems, and can advise on secure patient-intake handoffs.",
      },
      {
        question: 'Do you build pages for each service or condition we treat?',
        answer:
          'Yes — dedicated pages per service line (e.g. "Pediatric Dentistry", "Sports Physical Therapy") consistently outperform a single all-in-one services page for both SEO and conversion.',
      },
    ],
  },
  {
    slug: 'legal',
    name: 'Law Firms',
    metaHook:
      'Authoritative, fast-loading websites for attorneys and law firms built to win high-value client inquiries.',
    headline: 'for Attorneys & Law Firms',
    painPoints: [
      {
        title: 'Generic templates undercut credibility',
        description:
          'High-ticket clients judge you before they call. A hand-coded site signals the same rigor you bring to their case.',
      },
      {
        title: 'Practice areas buried in one page',
        description:
          'We build a dedicated, SEO-targeted page per practice area so you rank for "[practice area] attorney [city]" instead of just your firm name.',
      },
      {
        title: 'Consultation requests fall through the cracks',
        description:
          'Every page routes to a single, low-friction consultation request flow with clear next steps — not a buried contact page.',
      },
    ],
    deliverables: [
      'Dedicated practice-area landing pages',
      'Attorney bio pages built for E-E-A-T',
      'Consultation request funnel',
      'Case results / testimonials sections',
      'Local SEO for city + practice-area searches',
    ],
    faqs: [
      {
        question: 'Can you build a page for each practice area we handle?',
        answer:
          'Yes — this is one of the highest-leverage moves for a firm site. Each practice area gets its own page targeting "[practice area] + [city]" search intent instead of competing against itself on one page.',
      },
      {
        question: 'Do you follow legal advertising / bar association rules?',
        answer:
          "We build to your specifications and required disclaimers — send us your state bar's advertising rules and any mandated language, and we'll incorporate it into the design.",
      },
      {
        question: 'Can you showcase case results and testimonials?',
        answer:
          "Yes, with appropriate disclaimers (e.g. \"results do not guarantee a similar outcome\") styled to match your site rather than looking like a bolted-on widget.",
      },
    ],
  },
  {
    slug: 'home-services',
    name: 'Home Services',
    metaHook:
      'Lead-generating websites for contractors, HVAC, plumbing, and home service businesses that rank locally and convert calls.',
    headline: 'for Contractors & Home Service Pros',
    painPoints: [
      {
        title: 'Losing local search to directory sites',
        description:
          "Thumbtack and Yelp profiles outrank a slow, generic website. We build a fast, locally-optimized site that competes for — and wins — local map pack and organic rankings.",
      },
      {
        title: 'No easy way to request a quote',
        description:
          'A prominent "Request a Free Quote" flow on every page, plus click-to-call on mobile, turns more visits into booked jobs.',
      },
      {
        title: 'One page trying to rank for everything',
        description:
          'We build a page per service (e.g. "Water Heater Repair", "AC Installation") so each targets its own high-intent search instead of diluting one homepage.',
      },
    ],
    deliverables: [
      'Service-specific landing pages',
      'Click-to-call & quote-request flows',
      'Before/after project galleries',
      'Local SEO & Google Business Profile alignment',
      'Review/testimonial integration',
    ],
    faqs: [
      {
        question: 'Can you help us rank in the Google local map pack?',
        answer:
          "A fast, well-structured site is one input to local ranking alongside your Google Business Profile and reviews. We align on-page SEO (service pages, schema, NAP consistency) to support that, and offer ongoing local SEO as an add-on.",
      },
      {
        question: 'Do you build a page for every service we offer?',
        answer:
          'Yes — dedicated pages per service consistently outrank a single "Services" page because each one can target its own specific search intent.',
      },
      {
        question: 'Can leads request a quote without calling?',
        answer:
          "Yes — every service page includes a quick quote-request form in addition to click-to-call, so you capture leads who'd rather not pick up the phone first.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
