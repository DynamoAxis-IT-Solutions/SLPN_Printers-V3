
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const { data: res, error } = await resend.emails.send({
      from: 'SLPN Contact <onboarding@resend.dev>',
      to: ['slpn.pr@gmail.com'],
      subject: `New Inquiry: ${data.subject}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function sendQuoteEmail(data: {
  name: string;
  email: string;
  serviceId: string;
  phone: string;
  quantity: number;
  details: string;
}) {
  try {
    const { data: res, error } = await resend.emails.send({
      from: 'SLPN Quotes <onboarding@resend.dev>',
      to: ['slpn.pr@gmail.com'],
      subject: `New Quote Request for ${data.serviceId}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service Requested:</strong> ${data.serviceId}</p>
        <p><strong>Quantity:</strong> ${data.quantity}</p>
        <p><strong>Project Details:</strong></p>
        <p>${data.details}</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
