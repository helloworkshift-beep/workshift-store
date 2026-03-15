import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import { createHmac } from "crypto";

// Mock fs so we don't need real zip files on disk
vi.mock("fs", () => ({
  readFileSync: vi.fn(),
}));

import { readFileSync } from "fs";
const { GET } = await import("@/app/api/download/route");

function validToken(sessionId: string) {
  return createHmac("sha256", process.env.DOWNLOAD_SECRET!)
    .update(sessionId)
    .digest("hex");
}

describe("GET /api/download", () => {
  const SESSION_ID = "cs_test_abc123";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 400 when token is missing", async () => {
    const req = new NextRequest(`https://workshift.store/api/download?session=${SESSION_ID}`);
    const res = await GET(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBe("Invalid link");
  });

  it("returns 400 when session is missing", async () => {
    const token = validToken(SESSION_ID);
    const req = new NextRequest(`https://workshift.store/api/download?token=${token}`);
    const res = await GET(req);
    expect(res.status).toBe(400);
  });

  it("returns 403 for a tampered token", async () => {
    const req = new NextRequest(
      `https://workshift.store/api/download?token=badtoken&session=${SESSION_ID}`
    );
    const res = await GET(req);
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toMatch(/invalid/i);
  });

  it("returns the zip file for a valid token and known product", async () => {
    const fakeZip = Buffer.from("PK\x03\x04fake-zip-content");
    vi.mocked(readFileSync).mockReturnValue(fakeZip);

    const token = validToken(SESSION_ID);
    const req = new NextRequest(
      `https://workshift.store/api/download?token=${token}&session=${SESSION_ID}&product=real-estate`
    );
    const res = await GET(req);
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("application/zip");
    expect(res.headers.get("content-disposition")).toContain("real-estate-ai-prompt-toolkit.zip");
  });

  it("returns 404 when the file doesn't exist on disk", async () => {
    vi.mocked(readFileSync).mockImplementation(() => {
      throw new Error("ENOENT");
    });

    const token = validToken(SESSION_ID);
    const req = new NextRequest(
      `https://workshift.store/api/download?token=${token}&session=${SESSION_ID}&product=real-estate`
    );
    const res = await GET(req);
    expect(res.status).toBe(404);
  });

  it("falls back to default product for unknown product slug", async () => {
    const fakeZip = Buffer.from("PK\x03\x04fake-zip-content");
    vi.mocked(readFileSync).mockReturnValue(fakeZip);

    const token = validToken(SESSION_ID);
    const req = new NextRequest(
      `https://workshift.store/api/download?token=${token}&session=${SESSION_ID}&product=unknown-slug`
    );
    const res = await GET(req);
    expect(res.status).toBe(200);
    expect(res.headers.get("content-disposition")).toContain("real-estate-ai-prompt-toolkit.zip");
  });
});
