'use client';

export default function BillboardCTA() {
  return (
    <section className="relative z-10 pt-32">
      <div className="mx-4 md:mx-0"> {/* Mobile margin wrapper */}
    <div className="max-w-6xl mx-auto px-4 md:px-6 pt-20 pb-24 flex flex-col md:flex-row items-center justify-between bg-[#0c0f25] rounded-xl text-white text-center md:text-left">
      <h2 className="font-oswald text-2xl md:text-4xl font-bold mb-6 md:mb-0 leading-snug">
        Ready to get the site you always wanted?
      </h2>
      <a
        href="/contact"
        className="bg-[#3BB0FF] font-oswald text-[#0c0f25] font-bold px-8 py-4 rounded-full shadow hover:bg-[#2da5f0] transition-colors"
      >
        Get Started Today
      </a>
    </div>
  </div>

      {/* Billboard Poles */}
      <div className="max-w-6xl mx-auto flex justify-around items-start mt-[-1rem] z-0 relative">
        <div className="w-4 h-28 bg-[#0c0f25] rounded-b-md"></div>
        <div className="w-4 h-28 bg-[#0c0f25] rounded-b-md"></div>
        <div className="w-4 h-28 bg-[#0c0f25] rounded-b-md"></div>
      </div>

      {/* Hill Curve */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden z-0">
        <svg
          viewBox="0 0 1440 220"
          className="w-full h-[140px] md:h-[200px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#0c0f25"
            d="M0,160 C300,100 600,220 900,160 C1200,100 1440,180 1440,180 L1440,220 L0,220 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
