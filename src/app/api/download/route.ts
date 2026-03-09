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

const productMap: Record<string, string> = {
  "default": "real-estate-ai-prompt-toolkit.zip",
  "real-estate": "real-estate-ai-prompt-toolkit.zip",
  "pm": "pm-toolkit.zip",
  "scrum": "scrum-master-toolkit.zip",
  "marketing": "marketing-toolkit.zip",
  "ux-research": "user-research-toolkit.zip",
  "sales-rep": "sales-rep-toolkit.zip",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const sessionId = searchParams.get("session");
  const product = searchParams.get("product") || "default";

  if (!token || !sessionId) {
    return NextResponse.json({ error: "Invalid link" }, { status: 400 });
  }

  if (!verifyToken(sessionId, token)) {
    return NextResponse.json({ error: "Invalid or expired link" }, { status: 403 });
  }

  const filename = productMap[product] || productMap["default"];

  try {
    const filePath = join(process.cwd(), "public", "downloads", filename);
    const fileBuffer = readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
