import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";
import { readFileSync } from "fs";
import { join } from "path";

function verifyToken(sessionId: string, token: string): boolean {
  const expected = createHmac("sha256", process.env.DOWNLOAD_SECRET!)
    .update(sessionId)
    .digest("hex");
  return expected === token;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const sessionId = searchParams.get("session");

  if (!token || !sessionId) {
    return NextResponse.json({ error: "Invalid link" }, { status: 400 });
  }

  if (!verifyToken(sessionId, token)) {
    return NextResponse.json({ error: "Invalid or expired link" }, { status: 403 });
  }

  try {
    const filePath = join(process.cwd(), "public", "downloads", "real-estate-ai-prompt-toolkit.zip");
    const fileBuffer = readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="real-estate-ai-prompt-toolkit.zip"',
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
