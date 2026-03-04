import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createHmac } from "crypto";
import nodemailer from "nodemailer";

// Stripe initialized per-request to avoid build-time env issues

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function generateDownloadToken(sessionId: string): string {
  return createHmac("sha256", process.env.DOWNLOAD_SECRET!)
    .update(sessionId)
    .digest("hex");
}

async function sendDownloadEmail(email: string, sessionId: string, customerName: string) {
  const token = generateDownloadToken(sessionId);
  const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download?token=${token}&session=${sessionId}`;

  await transporter.sendMail({
    from: `"Workshift" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Your Real Estate AI Prompt Toolkit is ready 🏡",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin:0;padding:0;background:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
          
          <!-- Header -->
          <div style="background:#1c3557;border-radius:16px 16px 0 0;padding:32px;text-align:center;">
            <div style="color:#c9a84c;font-size:13px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;">Workshift</div>
            <h1 style="color:white;font-size:24px;font-weight:700;margin:0;">Your toolkit is ready.</h1>
          </div>

          <!-- Body -->
          <div style="background:white;padding:32px;border:1px solid #ede8df;border-top:none;">
            <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 20px;">
              Hey ${customerName || "there"},
            </p>
            <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 24px;">
              Thanks for your purchase — your <strong style="color:#1c3557;">Real Estate Agent's AI Prompt Toolkit</strong> is ready to download.
            </p>

            <!-- CTA -->
            <div style="text-align:center;margin:32px 0;">
              <a href="${downloadUrl}" style="display:inline-block;background:#1c3557;color:white;font-size:16px;font-weight:600;padding:16px 36px;border-radius:12px;text-decoration:none;">
                Download Your Toolkit →
              </a>
            </div>

            <p style="color:#a0aec0;font-size:12px;text-align:center;margin:0 0 24px;">
              This link is personal to your purchase. Save the ZIP file to your computer.
            </p>

            <!-- Quick start -->
            <div style="background:#faf9f6;border-radius:12px;padding:20px;border:1px solid #ede8df;margin-bottom:24px;">
              <p style="color:#1c3557;font-weight:600;font-size:14px;margin:0 0 12px;">Quick Start (3 steps):</p>
              <p style="color:#4a5568;font-size:14px;margin:0 0 8px;">1. Unzip the file and open <strong>README.md</strong> first</p>
              <p style="color:#4a5568;font-size:14px;margin:0 0 8px;">2. Read <strong>01-quick-start-guide.md</strong> — takes 5 minutes</p>
              <p style="color:#4a5568;font-size:14px;margin:0;">3. Open <strong>02-listing-prompts.md</strong> and write your first MLS description</p>
            </div>

            <p style="color:#718096;font-size:14px;line-height:1.6;margin:0;">
              Questions? Reply to this email anytime.
            </p>
          </div>

          <!-- Footer -->
          <div style="padding:20px;text-align:center;">
            <p style="color:#a0aec0;font-size:12px;margin:0;">
              © 2025 Workshift · <a href="mailto:helloworkshift@gmail.com" style="color:#a0aec0;">helloworkshift@gmail.com</a>
            </p>
          </div>

        </div>
      </body>
      </html>
    `,
  });
}

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-02-25.clover" });
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;
    const name = session.customer_details?.name || "";
    const sessionId = session.id;

    if (email) {
      try {
        await sendDownloadEmail(email, sessionId, name);
        console.log(`Download email sent to ${email}`);
      } catch (err) {
        console.error("Failed to send email:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
