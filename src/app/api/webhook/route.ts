import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

// Stripe initialized per-request to avoid build-time env issues

// Map Stripe product IDs to our internal slugs
const STRIPE_PRODUCT_MAP: Record<string, { slug: string; name: string; emoji: string; startStep: string; type?: string }> = {
  "prod_U5YLVl9soeeAOI": {
    slug: "workshift-course",
    name: "The Workshift Course",
    emoji: "🎓",
    startStep: "Check your email for your course access link",
    type: "course",
  },
  "prod_U5Wcm7P9Zns2Xg": {
    slug: "real-estate",
    name: "Real Estate Agent's AI Prompt Toolkit",
    emoji: "🏡",
    startStep: "Open 02-listing-prompts.md and write your first MLS description",
  },
  "prod_U5XMAI8W0qHO7c": {
    slug: "product-manager",
    name: "Product Manager's AI Prompt Toolkit",
    emoji: "🗺️",
    startStep: "Open 02-strategy-roadmap-prompts.md and draft your first roadmap prompt",
  },
  "prod_U5XM9zBTJRgVwI": {
    slug: "scrum-master",
    name: "Scrum Master's AI Prompt Toolkit",
    emoji: "🔄",
    startStep: "Open 02-ceremonies-prompts.md and run your first sprint planning prompt",
  },
  "prod_U5XMxnYgGNhFKY": {
    slug: "marketing",
    name: "Marketer's AI Prompt Toolkit",
    emoji: "📣",
    startStep: "Open 02-content-social-prompts.md and batch your first week of content",
  },
  "prod_U5XMGCvqTWtGky": {
    slug: "user-research",
    name: "UX Researcher's AI Prompt Toolkit",
    emoji: "🔍",
    startStep: "Open 02-interview-research-prompts.md and build your first interview guide",
  },
};

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

async function createEnrollment(email: string, productSlug: string, sessionId: string, amountCents: number) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return;
  const { createServiceClient } = await import("@/lib/supabase/server");
  const supabase = createServiceClient();
  await supabase.from("enrollments").upsert({
    email,
    product_slug: productSlug,
    stripe_session_id: sessionId,
    amount_cents: amountCents,
  }, { onConflict: "stripe_session_id" });
}

async function sendCourseAccessEmail(email: string, name: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://workshift.store";
  const accessUrl = `${baseUrl}/course/access`;

  const html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
    <div style="background:#1c3557;border-radius:16px 16px 0 0;padding:32px;text-align:center;">
      <div style="color:#c9a84c;font-size:13px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;">Workshift</div>
      <h1 style="color:white;font-size:24px;font-weight:700;margin:0;">Your course is ready. 🎓</h1>
    </div>
    <div style="background:white;padding:32px;border:1px solid #ede8df;border-top:none;">
      <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 20px;">Hey ${name || "there"},</p>
      <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 24px;">
        Welcome to <strong style="color:#1c3557;">The Workshift Course</strong>. Your access is ready — click below to start your first lesson.
      </p>
      <div style="text-align:center;margin:32px 0;">
        <a href="${accessUrl}" style="display:inline-block;background:#1c3557;color:white;font-size:16px;font-weight:600;padding:16px 36px;border-radius:12px;text-decoration:none;">
          Start the course →
        </a>
      </div>
      <p style="color:#a0aec0;font-size:12px;text-align:center;margin:0 0 24px;">This link logs you in automatically. Bookmark your dashboard once inside.</p>
      <div style="background:#faf9f6;border-radius:12px;padding:20px;border:1px solid #ede8df;">
        <p style="color:#1c3557;font-weight:600;font-size:14px;margin:0 0 8px;">What's waiting for you:</p>
        <p style="color:#4a5568;font-size:14px;margin:0 0 6px;">🎓 10 modules, 60+ lessons — beginner to advanced</p>
        <p style="color:#4a5568;font-size:14px;margin:0 0 6px;">✏️ Interactive exercises saved to your browser</p>
        <p style="color:#4a5568;font-size:14px;margin:0 0 6px;">📋 Progress tracking across all lessons</p>
        <p style="color:#4a5568;font-size:14px;margin:0;">🗓️ 90-day adoption plan template included</p>
      </div>
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
      subject: "Your Workshift Course is ready 🎓",
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend error: ${await res.text()}`);
}

async function sendDownloadEmail(
  email: string,
  sessionId: string,
  customerName: string,
  productSlug: string,
  productName: string,
  productEmoji: string,
  startStep: string
) {
  const token = generateDownloadToken(sessionId);
  const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download?token=${token}&session=${sessionId}&product=${productSlug}`;

  const html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
    <div style="background:#1c3557;border-radius:16px 16px 0 0;padding:32px;text-align:center;">
      <div style="color:#c9a84c;font-size:13px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;">Workshift</div>
      <h1 style="color:white;font-size:24px;font-weight:700;margin:0;">Your toolkit is ready. ${productEmoji}</h1>
    </div>
    <div style="background:white;padding:32px;border:1px solid #ede8df;border-top:none;">
      <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 20px;">Hey ${customerName || "there"},</p>
      <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 24px;">
        Thanks for your purchase — your <strong style="color:#1c3557;">${productName}</strong> is ready to download.
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
        <p style="color:#4a5568;font-size:14px;margin:0;">3. ${startStep}</p>
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
      subject: `Your ${productName} is ready ${productEmoji}`,
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

    // Detect product from line items
    let productInfo = STRIPE_PRODUCT_MAP["prod_U5Wcm7P9Zns2Xg"]; // fallback: real estate
    try {
      const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, { expand: ["data.price.product"] });
      const firstItem = lineItems.data[0];
      if (firstItem?.price?.product) {
        const prodId = typeof firstItem.price.product === "string"
          ? firstItem.price.product
          : (firstItem.price.product as import("stripe").Stripe.Product).id;
        if (STRIPE_PRODUCT_MAP[prodId]) {
          productInfo = STRIPE_PRODUCT_MAP[prodId];
        }
      }
    } catch (err) {
      console.error("Failed to fetch line items:", err);
    }

    if (email) {
      try {
        if (productInfo.type === "course") {
          await createEnrollment(email, productInfo.slug, sessionId, amount);
          await sendCourseAccessEmail(email, name);
          console.log(`Course enrollment created + access email sent to ${email}`);
        } else {
          await sendDownloadEmail(
            email,
            sessionId,
            name,
            productInfo.slug,
            productInfo.name,
            productInfo.emoji,
            productInfo.startStep
          );
          console.log(`Download email sent to ${email} for ${productInfo.name}`);
        }
      } catch (err) {
        console.error("Failed to send email:", err);
      }

      try {
        await sendTelegramNotification(amount, currency, email, productInfo.name);
      } catch (err) {
        console.error("Failed to send Telegram notification:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
