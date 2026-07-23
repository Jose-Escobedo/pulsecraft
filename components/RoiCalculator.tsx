'use client';

import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { Lock, Loader2, CheckCircle2, TrendingDown } from 'lucide-react';

// Google's Core Web Vitals "good" LCP threshold — the load time we benchmark against.
const BENCHMARK_LOAD_TIME_SECONDS = 2.5;
// Widely cited (Portent/Akamai) conversion drop per additional second of load time.
const CONVERSION_DROP_PER_SECOND = 0.07;
const MAX_CONVERSION_DROP = 0.9;

interface Inputs {
  monthlyTraffic: number;
  avgOrderValue: number;
  conversionRate: number;
  currentLoadTime: number;
}

const DEFAULT_INPUTS: Inputs = {
  monthlyTraffic: 5000,
  avgOrderValue: 150,
  conversionRate: 2,
  currentLoadTime: 4.5,
};

function calculateLoss({ monthlyTraffic, avgOrderValue, conversionRate, currentLoadTime }: Inputs) {
  const extraSeconds = Math.max(0, currentLoadTime - BENCHMARK_LOAD_TIME_SECONDS);
  const lostConversionRate = Math.min(extraSeconds * CONVERSION_DROP_PER_SECOND, MAX_CONVERSION_DROP);
  const baselineConversions = monthlyTraffic * (conversionRate / 100);
  const lostConversions = baselineConversions * lostConversionRate;
  const monthlyRevenueLoss = lostConversions * avgOrderValue;
  const annualRevenueLoss = monthlyRevenueLoss * 12;
  return { lostConversionRate, monthlyRevenueLoss, annualRevenueLoss };
}

const currency = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

const inputBase =
  'w-full bg-elevated border border-white/[0.07] hover:border-white/[0.14] rounded-xl px-4 py-3 text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors duration-200';

interface FieldProps {
  id: keyof Inputs;
  label: string;
  prefix?: string;
  suffix?: string;
  value: number;
  step?: number;
  onChange: (id: keyof Inputs, value: number) => void;
}

function Field({ id, label, prefix, suffix, value, step = 1, onChange }: FieldProps) {
  const handle = (e: ChangeEvent<HTMLInputElement>) => onChange(id, Number(e.target.value));
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-body font-semibold tracking-wide uppercase text-muted mb-2">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-sm font-body">
            {prefix}
          </span>
        )}
        <input
          id={id}
          name={id}
          type="number"
          min={0}
          step={step}
          value={value}
          onChange={handle}
          className={`${inputBase} ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-10' : ''}`}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm font-body">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

export default function RoiCalculator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULT_INPUTS);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [unlocked, setUnlocked] = useState(false);

  const results = useMemo(() => calculateLoss(inputs), [inputs]);

  const handleInputChange = (id: keyof Inputs, value: number) => {
    setInputs((prev) => ({ ...prev, [id]: Number.isFinite(value) ? value : 0 }));
    setUnlocked(false);
    setStatus('idle');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Enter a valid email address');
      return;
    }
    setEmailError(null);
    setStatus('loading');

    try {
      const res = await fetch('/api/roi-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          ...inputs,
          monthlyRevenueLoss: results.monthlyRevenueLoss,
          annualRevenueLoss: results.annualRevenueLoss,
        }),
      });

      if (!res.ok) throw new Error('Send failed');

      setUnlocked(true);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-surface border border-white/[0.07] rounded-3xl p-8 lg:p-12">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

        {/* Inputs */}
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold tracking-widest uppercase mb-6">
            Speed vs. Revenue Calculator
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight mb-4">
            What is a slow site<br />actually costing you?
          </h2>
          <p className="text-muted font-body text-sm leading-relaxed mb-8">
            Enter your numbers below. We&apos;ll estimate the revenue you&apos;re losing to load
            time beyond Google&apos;s 2.5s &ldquo;good&rdquo; benchmark.
          </p>

          <div className="space-y-5">
            <Field
              id="monthlyTraffic"
              label="Monthly Website Traffic"
              value={inputs.monthlyTraffic}
              step={100}
              onChange={handleInputChange}
            />
            <Field
              id="avgOrderValue"
              label="Average Order / Lead Value"
              prefix="$"
              value={inputs.avgOrderValue}
              step={10}
              onChange={handleInputChange}
            />
            <Field
              id="conversionRate"
              label="Current Conversion Rate"
              suffix="%"
              value={inputs.conversionRate}
              step={0.1}
              onChange={handleInputChange}
            />
            <Field
              id="currentLoadTime"
              label="Current Mobile Load Time"
              suffix="sec"
              value={inputs.currentLoadTime}
              step={0.1}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Results */}
        <div className="relative flex flex-col justify-center">
          <div
            className={`rounded-2xl bg-elevated border border-white/[0.07] p-8 text-center transition-all duration-300 ${
              !unlocked ? 'blur-sm select-none pointer-events-none' : ''
            }`}
            aria-hidden={!unlocked}
          >
            <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">
              <TrendingDown size={24} className="text-red-400" aria-hidden />
            </div>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-3">
              Estimated Revenue Lost to Load Time
            </p>
            <p className="text-5xl font-display font-bold text-primary mb-1">
              {currency(results.monthlyRevenueLoss)}
              <span className="text-lg text-muted font-body font-normal">/mo</span>
            </p>
            <p className="text-muted font-body text-sm">
              {currency(results.annualRevenueLoss)} per year
            </p>
          </div>

          {!unlocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="w-11 h-11 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                <Lock size={18} className="text-accent" aria-hidden />
              </div>
              <p className="text-primary font-body font-semibold text-sm mb-1">
                Enter your email to unlock your number
              </p>
              <p className="text-muted font-body text-xs mb-5 max-w-[280px]">
                We&apos;ll also send the full audit to your inbox.
              </p>

              <form onSubmit={handleSubmit} noValidate className="w-full max-w-[320px]">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <label htmlFor="roi-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="roi-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    aria-invalid={!!emailError}
                    aria-describedby={emailError ? 'roi-email-error' : undefined}
                    className="flex-1 bg-bg border border-white/[0.14] rounded-xl px-4 py-3 text-primary font-body text-sm placeholder:text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 bg-accent text-bg font-body font-semibold text-sm px-5 py-3 rounded-xl hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {status === 'loading' ? (
                      <Loader2 size={16} className="animate-spin" aria-hidden />
                    ) : (
                      'Unlock'
                    )}
                  </button>
                </div>
                {emailError && (
                  <p id="roi-email-error" role="alert" className="mt-2 text-xs font-body text-red-400">
                    {emailError}
                  </p>
                )}
                {status === 'error' && (
                  <p role="alert" className="mt-2 text-xs font-body text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          )}

          {unlocked && status === 'success' && (
            <p className="flex items-center justify-center gap-2 text-accent font-body text-sm mt-5">
              <CheckCircle2 size={16} aria-hidden />
              Full audit sent to {email}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
