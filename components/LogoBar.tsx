const niches = [
  'Tree Services',
  'Restaurants',
  'Contractors',
  'Therapy & Wellness',
  'Law Firms',
  'Real Estate',
  'Fitness & Health',
  'Retail',
  'Auto Services',
  'Medical Practices',
  'Non-Profits',
  'Photography',
];

const doubled = [...niches, ...niches];

export default function LogoBar() {
  return (
    <section
      className="bg-surface border-y border-white/[0.07] py-10 overflow-hidden"
      aria-label="Industries we serve"
    >
      <p className="text-center text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted mb-7">
        Trusted by businesses across the US
      </p>

      <div className="relative flex" aria-hidden="true">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {doubled.map((niche, i) => (
            <span
              key={i}
              className="text-sm font-body font-medium text-muted flex items-center gap-3 flex-shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
              {niche}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
