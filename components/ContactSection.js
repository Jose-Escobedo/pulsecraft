'use client';

import { useState } from 'react';
import Footer from "@/components/Footer";
import emailjs from '@emailjs/browser';


export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="font-oswald bg-[#F8F9FA] text-[#0A2540] px-6 py-40 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Let&apos;s Get in Touch</h2>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            Whether you&apos;re ready to book a consultation or just want to send us a message, we&apos;re here to help.
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Calendly Embed */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Book a Free Consultation</h3>
              <p className="mb-4 text-sm text-gray-700">Choose a time that works for you:</p>
              <div className="w-full h-[600px]">
                <iframe
                  src="https://calendly.com/therapysitestudio-support/30min"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-lg border"
                  title="Schedule Consultation"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Not Ready Yet? Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#0A2540] cursor-pointer text-white px-6 py-2 rounded-md hover:bg-[#071d33] transition"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {success && (
                  <p className="text-green-600 mt-2 font-medium" aria-live="polite">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}
