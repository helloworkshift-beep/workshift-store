import { NextRequest, NextResponse } from "next/server";
import { generateCourseToken } from "../course-access/route";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

  const token = generateCourseToken(email);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://workshift.store";
  const accessUrl = `${baseUrl}/course/access?token=${token}`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Workshift <hello@workshift.store>",
      to: email,
      subject: "Your Workshift Course access link",
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="color: #1c3557; font-size: 24px; font-weight: bold; margin-bottom: 8px;">The Workshift Course</div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #374151; font-size: 16px;">Here's your access link:</p>
          <a href="${accessUrl}" style="display: inline-block; background: #c9a84c; color: #1c3557; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold; font-size: 16px; margin: 16px 0;">
            Enter the course →
          </a>
          <p style="color: #9ca3af; font-size: 13px; margin-top: 24px;">This link expires in 24 hours. If you need a new one, visit <a href="${baseUrl}/course/access" style="color: #c9a84c;">${baseUrl}/course/access</a>.</p>
        </div>
      `,
    }),
  });

  return NextResponse.json({ ok: true });
}
