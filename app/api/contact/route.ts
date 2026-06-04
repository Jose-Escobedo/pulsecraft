import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  business: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body: ContactPayload = await req.json();
    const { name, business, email, phone, service, message } = body;

    if (!name || !business || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Pulsecraft Contact <noreply@pulsecraftweb.com>',
      to: 'support@pulsecraftweb.com',
      replyTo: email,
      subject: `New inquiry from ${name} — ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="font-size: 20px; margin-bottom: 4px;">New Contact Form Submission</h2>
          <p style="color: #555; font-size: 14px; margin-top: 0;">Pulsecraft Website Inquiry</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #555; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; vertical-align: top;">Business</td>
              <td style="padding: 8px 0; font-weight: 600;">${business}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #00D8FF;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; vertical-align: top;">Phone</td>
              <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; vertical-align: top;">Service Interest</td>
              <td style="padding: 8px 0; font-weight: 600;">${service}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />

          <p style="font-size: 13px; color: #555; margin-bottom: 6px;">Message</p>
          <p style="font-size: 14px; white-space: pre-wrap; background: #f8f8f8; padding: 16px; border-radius: 8px; border: 1px solid #eee; margin: 0;">${message}</p>

          <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('[Resend] Error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API] Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
