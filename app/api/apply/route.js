import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'lucky7840079250@gmail.com';

/**
 * POST /api/apply
 * Expected body: { name, email, role, message }
 */
export async function POST(request) {
  try {
    const { name, email, role, message } = await request.json();
    if (!name || !email || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    // Simple email validation
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }
    // Admin email HTML
    const adminEmailHtml = `
      <div style="font-family: Inter,Arial,sans-serif; padding:20px; color:#333;">
        <h2 style="color:#0a1f44;">New Application for ${role}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
        <hr style="margin:20px 0; border:none; border-top:1px solid #e2e8f0;"/>
        <p style="font-size:12px; color:#666;">InternAdda – Global Internship Platform</p>
      </div>`;
    // User confirmation email HTML
    const userEmailHtml = `
      <div style="font-family: Inter,Arial,sans-serif; padding:20px; color:#333;">
        <h2 style="color:#0a1f44;">Application Received</h2>
        <p>Hi ${name},</p>
        <p>Thank you for applying for the <strong>${role}</strong> internship at InternAdda. We have received your application and will review it shortly.</p>
        <p>Our global network, powered by UpForge, connects you with trusted startups worldwide.</p>
        <p>Best regards,<br/>The InternAdda Team</p>
        <hr style="margin:20px 0; border:none; border-top:1px solid #e2e8f0;"/>
        <p style="font-size:12px; color:#666;">InternAdda – Empowering Global Internships</p>
      </div>`;
    // Send admin email
    await resend.emails.send({
      from: 'InternAdda <no-reply@internadda.com>',
      to: ADMIN_EMAIL,
      subject: `New Application for ${role}`,
      html: adminEmailHtml,
    });
    // Send user confirmation email
    await resend.emails.send({
      from: 'InternAdda <no-reply@internadda.com>',
      to: email,
      subject: 'Application Received - InternAdda',
      html: userEmailHtml,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Application error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
