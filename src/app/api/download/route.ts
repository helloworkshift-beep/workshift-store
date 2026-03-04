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

const PRODUCT_FILES: Record<string, { filename: string; displayName: string }> = {
  "real-estate": {
    filename: "real-estate-ai-prompt-toolkit.zip",
    displayName: "Real Estate AI Prompt Toolkit",
  },
  "product-manager": {
    filename: "pm-ai-prompt-toolkit.zip",
    displayName: "Product Manager AI Prompt Toolkit",
  },
  "scrum-master": {
    filename: "scrum-master-ai-prompt-toolkit.zip",
    displayName: "Scrum Master AI Prompt Toolkit",
  },
  "marketing": {
    filename: "marketing-ai-prompt-toolkit.zip",
    displayName: "Marketing AI Prompt Toolkit",
  },
  "user-research": {
    filename: "user-research-ai-prompt-toolkit.zip",
    displayName: "User Research AI Prompt Toolkit",
  },
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const sessionId = searchParams.get("session");
  const product = searchParams.get("product") || "real-estate";

  if (!token || !sessionId) {
    return NextResponse.json({ error: "Invalid link" }, { status: 400 });
  }

  if (!verifyToken(sessionId, token)) {
    return NextResponse.json({ error: "Invalid or expired link" }, { status: 403 });
  }

  const productInfo = PRODUCT_FILES[product] || PRODUCT_FILES["real-estate"];

  try {
    const filePath = join(process.cwd(), "public", "downloads", productInfo.filename);
    const fileBuffer = readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${productInfo.filename}"`,
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
