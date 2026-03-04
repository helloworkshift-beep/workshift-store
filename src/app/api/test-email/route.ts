import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import nodemailer from "nodemailer";

// TEMP: Remove this file after confirming email delivery works
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const secret = searchParams.get("secret");

  // Simple guard so random people can't trigger test emails
  if (secret !== process.env.DOWNLOAD_SECRET?.slice(0, 8)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!email) {
    return NextResponse.json({ error: "Missing email param" }, { status: 400 });
  }

  const fakeSessionId = "test_session_" + Date.now();
  const token = createHmac("sha256", process.env.DOWNLOAD_SECRET!)
    .update(fakeSessionId)
    .digest("hex");

  const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download?token=${token}&session=${fakeSessionId}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Workshift" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "[TEST] Your Real Estate AI Prompt Toolkit is ready 🏡",
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
          <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
            <div style="background:#1c3557;border-radius:16px 16px 0 0;padding:32px;text-align:center;">
              <div style="color:#c9a84c;font-size:13px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;">Workshift</div>
              <h1 style="color:white;font-size:24px;font-weight:700;margin:0;">Your toolkit is ready.</h1>
            </div>
            <div style="background:white;padding:32px;border:1px solid #ede8df;border-top:none;">
              <p style="color:#e53e3e;font-size:12px;background:#fff5f5;border:1px solid #fed7d7;border-radius:8px;padding:8px 12px;margin:0 0 20px;">⚠️ TEST EMAIL — not a real purchase</p>
              <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 20px;">Hey there,</p>
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
              <div style="background:#faf9f6;border-radius:12px;padding:20px;border:1px solid #ede8df;">
                <p style="color:#1c3557;font-weight:600;font-size:14px;margin:0 0 12px;">Quick Start:</p>
                <p style="color:#4a5568;font-size:14px;margin:0 0 8px;">1. Unzip and open <strong>README.md</strong> first</p>
                <p style="color:#4a5568;font-size:14px;margin:0 0 8px;">2. Read <strong>01-quick-start-guide.md</strong></p>
                <p style="color:#4a5568;font-size:14px;margin:0;">3. Open <strong>02-listing-prompts.md</strong> and go</p>
              </div>
            </div>
            <div style="padding:20px;text-align:center;">
              <p style="color:#a0aec0;font-size:12px;margin:0;">© 2025 Workshift · helloworkshift@gmail.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      email,
      downloadUrl,
      message: "Test email sent — check your inbox",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
