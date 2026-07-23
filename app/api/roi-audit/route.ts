import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

interface RoiAuditPayload {
  email: string;
  monthlyTraffic: number;
  avgOrderValue: number;
  conversionRate: number;
  currentLoadTime: number;
  monthlyRevenueLoss: number;
  annualRevenueLoss: number;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const currency = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body: RoiAuditPayload = await req.json();
    const {
      email,
      monthlyTraffic,
      avgOrderValue,
      conversionRate,
      currentLoadTime,
      monthlyRevenueLoss,
      annualRevenueLoss,
    } = body;

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
    }
    if (
      !Number.isFinite(monthlyTraffic) ||
      !Number.isFinite(avgOrderValue) ||
      !Number.isFinite(conversionRate) ||
      !Number.isFinite(currentLoadTime)
    ) {
      return NextResponse.json({ error: 'Missing calculator inputs' }, { status: 400 });
    }

    // Audit results, sent to the lead who requested them.
    const { error: leadError } = await resend.emails.send({
      from: 'Pulsecraft Speed Audit <noreply@pulsecraftweb.com>',
      to: email,
      replyTo: 'support@pulsecraftweb.com',
      subject: 'Your Website Speed vs. Revenue Audit',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="font-size: 20px; margin-bottom: 4px;">Your Speed Audit Results</h2>
          <p style="color: #555; font-size: 14px; margin-top: 0;">Based on the numbers you entered</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #555; width: 200px;">Monthly Traffic</td>
              <td style="padding: 8px 0; font-weight: 600;">${monthlyTraffic.toLocaleString('en-US')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555;">Average Order Value</td>
              <td style="padding: 8px 0; font-weight: 600;">${currency(avgOrderValue)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555;">Current Load Time</td>
              <td style="padding: 8px 0; font-weight: 600;">${currentLoadTime}s</td>
            </tr>
          </table>

          <div style="background: #f8f8f8; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <p style="font-size: 13px; color: #555; margin: 0 0 6px;">Estimated revenue lost to slow load time</p>
            <p style="font-size: 28px; font-weight: 700; margin: 0; color: #00b3d6;">
              ${currency(monthlyRevenueLoss)}<span style="font-size: 14px; color: #555; font-weight: 400;">/mo</span>
            </p>
            <p style="font-size: 13px; color: #555; margin: 6px 0 0;">
              (${currency(annualRevenueLoss)}/year)
            </p>
          </div>

          <p style="font-size: 14px; line-height: 1.6;">
            This is based on the widely cited benchmark that each additional second of load
            time beyond Google's 2.5s "good" threshold can cost roughly 7% of conversions.
            Want a page-by-page breakdown of what's actually slowing your site down?
          </p>

          <a href="https://www.pulsecraftweb.com/contact" style="display: inline-block; margin-top: 12px; background: #00D8FF; color: #080E1C; font-weight: 600; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px;">
            Book a Free Consultation
          </a>

          <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
            You received this because you requested a Speed Audit at pulsecraftweb.com.
          </p>
        </div>
      `,
    });

    if (leadError) {
      console.error('[Resend] Lead email error:', leadError);
      return NextResponse.json({ error: 'Failed to send audit email' }, { status: 500 });
    }

    // Internal notification so the team can follow up on the lead.
    await resend.emails.send({
      from: 'Pulsecraft Leads <noreply@pulsecraftweb.com>',
      to: 'support@pulsecraftweb.com',
      replyTo: email,
      subject: `New ROI Calculator lead — ${currency(monthlyRevenueLoss)}/mo potential loss`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="font-size: 18px; margin-bottom: 4px;">New Speed Audit Lead</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 12px;">
            <tr><td style="padding: 6px 0; color: #555; width: 180px;">Email</td><td style="padding: 6px 0; font-weight: 600;">${email}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Monthly Traffic</td><td style="padding: 6px 0;">${monthlyTraffic.toLocaleString('en-US')}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Avg Order Value</td><td style="padding: 6px 0;">${currency(avgOrderValue)}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Conversion Rate</td><td style="padding: 6px 0;">${conversionRate}%</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Load Time</td><td style="padding: 6px 0;">${currentLoadTime}s</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Est. Monthly Loss</td><td style="padding: 6px 0; font-weight: 600;">${currency(monthlyRevenueLoss)}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[ROI Audit API] Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
