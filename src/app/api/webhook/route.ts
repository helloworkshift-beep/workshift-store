import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

// Stripe initialized per-request to avoid build-time env issues

function generateDownloadToken(sessionId: string): string {
  return createHmac("sha256", process.env.DOWNLOAD_SECRET!)
    .update(sessionId)
    .digest("hex");
}

async function sendTelegramNotification(amount: number, currency: string, email: string, productName: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const amountFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);

  const message = `💰 *New Sale!*\n\n` +
    `*Product:* ${productName}\n` +
    `*Amount:* ${amountFormatted}\n` +
    `*Customer:* ${email}\n` +
    `*Time:* ${new Date().toUTCString()}\n\n` +
    `🎉 Download email sent automatically.`;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "Markdown" }),
  });
}

async function sendDownloadEmail(email: string, sessionId: string, customerName: string) {
  const token = generateDownloadToken(sessionId);
  const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download?token=${token}&session=${sessionId}`;

  const html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
    <div style="background:#1c3557;border-radius:16px 16px 0 0;padding:32px;text-align:center;">
      <div style="color:#c9a84c;font-size:13px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;">Workshift</div>
      <h1 style="color:white;font-size:24px;font-weight:700;margin:0;">Your toolkit is ready.</h1>
    </div>
    <div style="background:white;padding:32px;border:1px solid #ede8df;border-top:none;">
      <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 20px;">Hey ${customerName || "there"},</p>
      <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 24px;">
        Thanks for your purchase — your <strong style="color:#1c3557;">Real Estate Agent's AI Prompt Toolkit</strong> is ready to download.
      </p>
      <div style="text-align:center;margin:32px 0;">
        <a href="${downloadUrl}" style="display:inline-block;background:#1c3557;color:white;font-size:16px;font-weight:600;padding:16px 36px;border-radius:12px;text-decoration:none;">
          Download Your Toolkit →
        </a>
      </div>
      <p style="color:#a0aec0;font-size:12px;text-align:center;margin:0 0 24px;">
        This link is personal to your purchase. Save the ZIP file to your computer.
      </p>
      <div style="background:#faf9f6;border-radius:12px;padding:20px;border:1px solid #ede8df;margin-bottom:24px;">
        <p style="color:#1c3557;font-weight:600;font-size:14px;margin:0 0 12px;">Quick Start (3 steps):</p>
        <p style="color:#4a5568;font-size:14px;margin:0 0 8px;">1. Unzip and open <strong>README.md</strong> first</p>
        <p style="color:#4a5568;font-size:14px;margin:0 0 8px;">2. Read <strong>01-quick-start-guide.md</strong> — takes 5 minutes</p>
        <p style="color:#4a5568;font-size:14px;margin:0;">3. Open <strong>02-listing-prompts.md</strong> and write your first MLS description</p>
      </div>
      <p style="color:#718096;font-size:14px;line-height:1.6;margin:0;">Questions? Reply to this email anytime.</p>
    </div>
    <div style="padding:20px;text-align:center;">
      <p style="color:#a0aec0;font-size:12px;margin:0;">© 2025 Workshift · <a href="mailto:helloworkshift@gmail.com" style="color:#a0aec0;">helloworkshift@gmail.com</a></p>
    </div>
  </div>
</body>
</html>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Workshift <onboarding@resend.dev>",
      to: [email],
      subject: "Your Real Estate AI Prompt Toolkit is ready 🏡",
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error: ${err}`);
  }
}

export async function POST(req: NextRequest) {
  const { default: Stripe } = await import("stripe");
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-02-25.clover" });

  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as import("stripe").Stripe.Checkout.Session;
    const email = session.customer_details?.email;
    const name = session.customer_details?.name || "";
    const sessionId = session.id;
    const amount = session.amount_total || 0;
    const currency = session.currency || "usd";

    if (email) {
      try {
        await sendDownloadEmail(email, sessionId, name);
        console.log(`Download email sent to ${email}`);
      } catch (err) {
        console.error("Failed to send email:", err);
      }

      try {
        await sendTelegramNotification(amount, currency, email, "Real Estate AI Prompt Toolkit");
      } catch (err) {
        console.error("Failed to send Telegram notification:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
