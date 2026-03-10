import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = formData.get("email")?.toString().trim();

    if (!email || !email.includes("@")) {
      return NextResponse.redirect(new URL("/bundle?error=invalid", req.url));
    }

    // Send notification to owner via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Workshift <helloworkshift@gmail.com>",
          to: ["helloworkshift@gmail.com"],
          subject: "New Bundle Waitlist Signup",
          html: `<p>New waitlist signup: <strong>${email}</strong></p><p>They're interested in the all-15-toolkits bundle.</p>`,
        }),
      });

      // Send confirmation to the user
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Workshift <helloworkshift@gmail.com>",
          to: [email],
          subject: "You're on the Workshift Bundle waitlist",
          html: `
            <p>Hi there,</p>
            <p>You're on the list. When the Workshift Complete Bundle launches, you'll be the first to know — and you'll get an early-bird discount as a thank you for waiting.</p>
            <p>The bundle includes all 15 AI prompt toolkits (850+ prompts) for a single one-time price.</p>
            <p>In the meantime, you can grab any individual toolkit at <a href="https://workshift.store/toolkits">workshift.store/toolkits</a>.</p>
            <p>— Workshift</p>
          `,
        }),
      });
    }

    return NextResponse.redirect(new URL("/bundle?success=1", req.url));
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.redirect(new URL("/bundle?error=1", req.url));
  }
}
