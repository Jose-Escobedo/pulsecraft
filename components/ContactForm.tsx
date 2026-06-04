'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Custom Website (Monthly Plan — $99/mo)',
  'Custom Website (Lump Sum — $2,400)',
  'SEO Growth Add-On',
  'Website Redesign',
  'Other / Not Sure Yet',
] as const;

interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Your name is required';
  if (!data.business.trim()) errors.business = 'Business name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!data.service) errors.service = 'Please select a service';
  if (!data.message.trim()) errors.message = 'Tell us a bit about your project';
  return errors;
}

const inputBase =
  'w-full bg-elevated border rounded-xl px-4 py-3 text-primary font-body text-sm placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors duration-200';

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Send failed');

      setStatus('success');
      setForm({ name: '', business: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-accent" aria-hidden />
        </div>
        <h3 className="text-2xl font-display font-bold text-primary mb-3">Message sent!</h3>
        <p className="text-muted font-body text-base leading-relaxed max-w-sm">
          We&apos;ll be in touch within 24 hours to talk about your project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-5">

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-body font-semibold tracking-wide uppercase text-muted mb-2">
            Your Name <span className="text-accent" aria-hidden>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${inputBase} ${errors.name ? 'border-red-500/60' : 'border-white/[0.07] hover:border-white/[0.14]'}`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs font-body text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        {/* Business */}
        <div>
          <label htmlFor="business" className="block text-xs font-body font-semibold tracking-wide uppercase text-muted mb-2">
            Business Name <span className="text-accent" aria-hidden>*</span>
          </label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            value={form.business}
            onChange={handleChange}
            placeholder="My Company LLC"
            aria-required="true"
            aria-invalid={!!errors.business}
            aria-describedby={errors.business ? 'business-error' : undefined}
            className={`${inputBase} ${errors.business ? 'border-red-500/60' : 'border-white/[0.07] hover:border-white/[0.14]'}`}
          />
          {errors.business && (
            <p id="business-error" role="alert" className="mt-1.5 text-xs font-body text-red-400">
              {errors.business}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-body font-semibold tracking-wide uppercase text-muted mb-2">
          Email Address <span className="text-accent" aria-hidden>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@mycompany.com"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`${inputBase} ${errors.email ? 'border-red-500/60' : 'border-white/[0.07] hover:border-white/[0.14]'}`}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-xs font-body text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-xs font-body font-semibold tracking-wide uppercase text-muted mb-2">
          Phone{' '}
          <span className="text-muted/50 font-normal normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(213) 555-0100"
          className={`${inputBase} border-white/[0.07] hover:border-white/[0.14]`}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-xs font-body font-semibold tracking-wide uppercase text-muted mb-2">
          I&apos;m interested in <span className="text-accent" aria-hidden>*</span>
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'service-error' : undefined}
          className={`${inputBase} ${errors.service ? 'border-red-500/60' : 'border-white/[0.07] hover:border-white/[0.14]'} ${!form.service ? 'text-muted/40' : ''}`}
        >
          <option value="" disabled className="text-muted bg-elevated">
            Select a service...
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-elevated text-primary">
              {opt}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className="mt-1.5 text-xs font-body text-red-400">
            {errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-body font-semibold tracking-wide uppercase text-muted mb-2">
          About Your Project <span className="text-accent" aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Brief description of your business, what kind of site you need, and any specific goals..."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${inputBase} resize-none ${errors.message ? 'border-red-500/60' : 'border-white/[0.07] hover:border-white/[0.14]'}`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs font-body text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" className="text-red-400 font-body text-sm text-center py-2">
          Something went wrong. Please try again or email us at{' '}
          <a href="mailto:support@pulsecraftweb.com" className="text-accent underline">
            support@pulsecraftweb.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2.5 bg-accent text-bg font-body font-semibold text-base py-4 rounded-xl hover:brightness-110 hover:shadow-[0_0_28px_var(--accent-glow)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>

    </form>
  );
}
