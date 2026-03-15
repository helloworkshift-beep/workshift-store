import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

const { POST } = await import("@/app/api/waitlist/route");

describe("POST /api/waitlist", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  function makeRequest(email: string) {
    const form = new FormData();
    form.append("email", email);
    return new NextRequest("https://workshift.store/api/waitlist", {
      method: "POST",
      body: form,
    });
  }

  it("redirects to /bundle?success=1 for a valid email", async () => {
    const req = makeRequest("jan@example.com");
    const res = await POST(req);
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toContain("/bundle?success=1");
  });

  it("redirects to /bundle?error=invalid for a missing @ in email", async () => {
    const req = makeRequest("notanemail");
    const res = await POST(req);
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toContain("error=invalid");
  });

  it("sends two Resend emails on valid signup (owner notification + user confirmation)", async () => {
    const req = makeRequest("jan@example.com");
    await POST(req);
    expect(vi.mocked(fetch)).toHaveBeenCalledTimes(2);
    // First call: owner notification
    const firstCall = vi.mocked(fetch).mock.calls[0];
    expect(firstCall[0]).toBe("https://api.resend.com/emails");
    // Second call: user confirmation
    const secondCall = vi.mocked(fetch).mock.calls[1];
    expect(secondCall[0]).toBe("https://api.resend.com/emails");
  });

  it("redirects to /bundle?error=1 if Resend throws", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network error")));
    const req = makeRequest("jan@example.com");
    const res = await POST(req);
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toContain("error=1");
  });
});
