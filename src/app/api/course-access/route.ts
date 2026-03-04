import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

const COURSE_SECRET = process.env.DOWNLOAD_SECRET || "fallback-secret";

export function generateCourseToken(email: string): string {
  const payload = `course:${email}:${Date.now()}`;
  const sig = createHmac("sha256", COURSE_SECRET).update(payload).digest("hex");
  return Buffer.from(`${payload}:${sig}`).toString("base64url");
}

export function verifyCourseToken(token: string): { valid: boolean; email?: string } {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const parts = decoded.split(":");
    if (parts.length < 4) return { valid: false };
    const [prefix, email, ts, sig] = parts;
    if (prefix !== "course") return { valid: false };
    const payload = `${prefix}:${email}:${ts}`;
    const expected = createHmac("sha256", COURSE_SECRET).update(payload).digest("hex");
    if (expected !== sig) return { valid: false };
    return { valid: true, email };
  } catch {
    return { valid: false };
  }
}

// POST /api/course-access?token=xxx — verify token and return session
export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 400 });
  }

  const result = verifyCourseToken(token);
  if (!result.valid) {
    return NextResponse.json({ error: "Invalid or expired access link" }, { status: 403 });
  }

  return NextResponse.json({ valid: true, email: result.email });
}
