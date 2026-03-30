import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    });

    await transporter.sendMail({
  from: `"InvaluaBless Media" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "We received your message 🚀",
  html: `
    <div style="font-family: Arial; padding: 20px;">
      <h2>Thank you for reaching out!</h2>
      <p>Hi ${name},</p>
      <p>We received your message and will get back to you within 24 hours.</p>
      <br/>
      <p>– InvaluaBless Media Group</p>
    </div>
  `,
});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}