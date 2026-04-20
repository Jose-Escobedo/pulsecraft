'use client';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#F8F9FA] font-oswald max-w-4xl mx-auto px-6 py-20 pt-56 -mt-24 text-[#0A2540]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a Free Consultation</h2>
        <p className="text-lg text-[#0A2540]/65 mb-10 max-w-xl mx-auto">
          Choose a time that works for you and let&apos;s talk about bringing your vision to life.
        </p>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          <iframe
            src="https://calendly.com/therapysitestudio-support/30min"
            width="100%"
            height="660"
            frameBorder="0"
            title="Schedule a Consultation"
          />
        </div>
      </div>
    </section>
  );
}
