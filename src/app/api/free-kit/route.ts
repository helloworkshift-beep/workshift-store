import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Store in Supabase
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    await supabase.from("free_kit_signups").insert({ email, created_at: new Date().toISOString() });
  } catch {
    // Non-fatal — still send the email
  }

  // Send free kit via Resend
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://workshift.store";
  const downloadUrl = `${baseUrl}/downloads/workshift-free-starter-kit.zip`;

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #faf9f6; margin: 0; padding: 40px 20px;">
  <div style="max-width: 560px; margin: 0 auto; background: white; border-radius: 12px; padding: 40px; border: 1px solid #ede8df;">
    <h1 style="color: #1c3557; font-size: 24px; margin: 0 0 8px;">Your Free Starter Kit is ready ✅</h1>
    <p style="color: #555; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
      Here are your 20 essential AI prompts for professionals. Open the file, pick a prompt, fill in the brackets, and you're off.
    </p>

    <a href="${downloadUrl}" style="display: inline-block; background: #1c3557; color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 16px; margin-bottom: 32px;">
      Download Your Starter Kit →
    </a>

    <hr style="border: none; border-top: 1px solid #ede8df; margin: 32px 0;">

    <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
      <strong style="color: #1c3557;">Want the full toolkit for your profession?</strong>
    </p>
    <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0 0 24px;">
      The free kit covers the basics. The full toolkits go deep — 100+ prompts built specifically for how you work, complete workflow SOPs, and templates for every situation in your role.
    </p>

    <a href="${baseUrl}/toolkits" style="display: inline-block; background: #c9a84c; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 15px;">
      Browse Toolkits →
    </a>

    <p style="color: #aaa; font-size: 13px; margin: 32px 0 0;">
      Workshift — workshift.store
    </p>
  </div>
</body>
</html>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Workshift <onboarding@resend.dev>",
      to: [email],
      subject: "Your free AI prompt starter kit 🎁",
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", await res.text());
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
