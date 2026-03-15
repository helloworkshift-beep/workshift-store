import { describe, it, expect } from "vitest";
import { NextRequest } from "next/server";
import {
  generateCourseToken,
  verifyCourseToken,
  POST,
} from "@/app/api/course-access/route";

describe("generateCourseToken / verifyCourseToken", () => {
  it("round-trips correctly", () => {
    const token = generateCourseToken("user@example.com");
    const result = verifyCourseToken(token);
    expect(result.valid).toBe(true);
    expect(result.email).toBe("user@example.com");
  });

  it("rejects a tampered token", () => {
    const token = generateCourseToken("user@example.com");
    const tampered = token.slice(0, -4) + "xxxx";
    expect(verifyCourseToken(tampered).valid).toBe(false);
  });

  it("rejects an empty string", () => {
    expect(verifyCourseToken("").valid).toBe(false);
  });

  it("rejects a token with wrong prefix", () => {
    // Build a token with a wrong prefix manually
    const payload = `wrong:user@example.com:${Date.now()}`;
    const fakeToken = Buffer.from(`${payload}:fakesig`).toString("base64url");
    expect(verifyCourseToken(fakeToken).valid).toBe(false);
  });
});

describe("POST /api/course-access", () => {
  it("returns 400 when no token is provided", async () => {
    const req = new NextRequest("https://workshift.store/api/course-access", {
      method: "POST",
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/no token/i);
  });

  it("returns 403 for an invalid token", async () => {
    const req = new NextRequest(
      "https://workshift.store/api/course-access?token=not-a-real-token",
      { method: "POST" }
    );
    const res = await POST(req);
    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toMatch(/invalid/i);
  });

  it("returns 200 with email for a valid token", async () => {
    const token = generateCourseToken("student@example.com");
    const req = new NextRequest(
      `https://workshift.store/api/course-access?token=${token}`,
      { method: "POST" }
    );
    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.valid).toBe(true);
    expect(body.email).toBe("student@example.com");
  });
});
