'use server';

import { Resend } from 'resend';

// Using the provided API key directly as requested
const resend = new Resend('re_S7caVbhA_rCNAPmyai5Q71wJUsCKGnscP');
const TARGET_EMAIL = 'slpn.pr@gmail.com';

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const { error } = await resend.emails.send({
      from: 'SLPN Contact <onboarding@resend.dev>',
      to: [TARGET_EMAIL],
      subject: `New Inquiry: ${data.subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2962FF;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
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
    const { error } = await resend.emails.send({
      from: 'SLPN Quotes <onboarding@resend.dev>',
      to: [TARGET_EMAIL],
      subject: `New Quote Request for ${data.serviceId}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2962FF;">New Quote Request</h2>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Service Requested:</strong> <span style="color: #2962FF; font-weight: bold;">${data.serviceId}</span></p>
            <p><strong>Quantity:</strong> ${data.quantity}</p>
          </div>
          <p><strong>Customer Name:</strong> ${data.name}</p>
          <p><strong>Email Address:</strong> ${data.email}</p>
          <p><strong>Phone Number:</strong> ${data.phone}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Project Details:</strong></p>
          <p style="white-space: pre-wrap; background: #fff; padding: 10px; border: 1px solid #eee;">${data.details || 'No additional details provided.'}</p>
        </div>
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
