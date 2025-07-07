'use client';

export default function WhatWeDo() {
  return (
  <section
  id="process"
  className="relative font-oswald scroll-mt-24 py-20 px-6 md:px-12  text-[#0A2540] overflow-hidden"
>
  {/* Desktop Blob */}
  <img
    src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/blob-scene-haikeipulse.svg?alt=media&token=a8db799a-45dc-4cfa-a8f0-6f73008bf7df"
    alt="Decorative blob background"
    className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-none opacity-20 pointer-events-none"
    loading="lazy"
  />

  {/* Mobile Blob */}
  <img
    src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/processblobvertcyan.svg?alt=media&token=63fe364e-a54a-468a-b61f-caec15acef37"
    alt="Decorative vertical mobile blob"
    className="block md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-full opacity-20 pointer-events-none"
    loading="lazy"
  />

  <div className="max-w-5xl mx-auto text-center bg-opacity-90 p-6 rounded-md relative z-10">
  <h3 className="text-[#0A2540] text-2xl md:text-3xl font-bold mb-4">
    What We Do
  </h3>
  <h2 className="text-[#43BCCD] text-4xl md:text-6xl font-semibold mb-6">
    Never Worry About Your Website Ever Again
  </h2>
  <p className="text-[#0A2540] text-lg leading-relaxed">
    At Pulsecraft, we specialize in custom-coded websites built specifically for small businesses across the United States. Every project is crafted by hand for performance, SEO, and long-term growth — no page builders, no shortcuts.
  </p>
  <p className="text-[#0A2540] text-lg leading-relaxed mt-4">
    From design to development to ongoing support, we handle it all. Need updates? We take care of those too. Our mission is to be your long-term web partner — helping you attract more clients, build trust, and grow your business online with confidence.
  </p>
</div>

</section>

  );
}
