import nodemailer from "nodemailer";

export interface SendMailParams {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export async function sendContactEmail({ name, email, reason, message }: SendMailParams) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const recipient = process.env.CONTACT_EMAIL || "as.shejan@gmail.com";

  // Fallback logging if SMTP credentials are not configured yet
  if (!host || !user || !pass) {
    console.log("[SMTP Notice] Environment variables not fully configured. Logging email instead:");
    console.log({ name, email, reason, message, recipient });
    return { success: true, simulated: true };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: `"${name}" <${user}>`,
    replyTo: email,
    to: recipient,
    subject: `[Portfolio Inquiry] ${reason} - from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Reason: ${reason}

Message:
${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; padding: 24px; border-radius: 8px; border: 1px solid #334155;">
        <h2 style="color: #38bdf8; margin-top: 0;">New Inquiry from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
        <p><strong>Reason:</strong> ${reason}</p>
        <hr style="border: 0; border-top: 1px solid #334155; margin: 20px 0;" />
        <h3 style="color: #94a3b8;">Message:</h3>
        <p style="white-space: pre-wrap; background: #1e293b; padding: 16px; border-radius: 6px; color: #e2e8f0;">${message}</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  return { success: true, simulated: false };
}
