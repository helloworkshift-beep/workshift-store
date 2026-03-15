import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

// ── Stripe mock ────────────────────────────────────────────────────────────────
const mockConstructEvent = vi.fn();
const mockListLineItems = vi.fn();

vi.mock("stripe", () => ({
  default: vi.fn(function () {
    return {
      webhooks: { constructEvent: mockConstructEvent },
      checkout: { sessions: { listLineItems: mockListLineItems } },
    };
  }),
}));

// ── Supabase mock ──────────────────────────────────────────────────────────────
const mockUpsert = vi.fn().mockResolvedValue({ data: null, error: null });
vi.mock("@/lib/supabase/server", () => ({
  createServiceClient: vi.fn().mockReturnValue({
    from: vi.fn().mockReturnValue({ upsert: mockUpsert }),
  }),
}));

const { POST } = await import("@/app/api/webhook/route");

// ── Helpers ────────────────────────────────────────────────────────────────────
function makeRequest(body = "{}") {
  return new NextRequest("https://workshift.store/api/webhook", {
    method: "POST",
    body,
    headers: { "stripe-signature": "t=1,v1=test" },
  });
}

function makeCompletedSession(overrides: Record<string, unknown> = {}) {
  return {
    type: "checkout.session.completed",
    data: {
      object: {
        id: "cs_test_session_001",
        amount_total: 1900,
        currency: "usd",
        customer_details: { email: "buyer@example.com", name: "Jan S" },
        ...overrides,
      },
    },
  };
}

// ── Tests ──────────────────────────────────────────────────────────────────────
describe("POST /api/webhook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, text: async () => "ok" }));

    // Default: return a toolkit product
    mockListLineItems.mockResolvedValue({
      data: [{ price: { product: { id: "prod_U5Wcm7P9Zns2Xg" } } }],
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns 400 for an invalid Stripe signature", async () => {
    mockConstructEvent.mockImplementation(() => {
      throw new Error("Webhook signature verification failed");
    });
    const req = makeRequest();
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBe("Invalid signature");
  });

  it("returns 200 and acknowledges non-checkout events", async () => {
    mockConstructEvent.mockReturnValue({ type: "payment_intent.created", data: {} });
    const res = await POST(makeRequest());
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.received).toBe(true);
  });

  it("sends a download email for a toolkit purchase", async () => {
    mockConstructEvent.mockReturnValue(makeCompletedSession());
    mockListLineItems.mockResolvedValue({
      data: [{ price: { product: { id: "prod_U5Wcm7P9Zns2Xg" } } }], // real-estate toolkit
    });

    const res = await POST(makeRequest());
    expect(res.status).toBe(200);

    // Should call Resend for download email
    const fetchCalls = vi.mocked(fetch).mock.calls;
    const resendCall = fetchCalls.find(([url]) => url === "https://api.resend.com/emails");
    expect(resendCall).toBeDefined();
    const body = JSON.parse(resendCall![1]!.body as string);
    expect(body.to).toContain("buyer@example.com");
    expect(body.subject).toContain("Real Estate");
  });

  it("creates an enrollment and sends a course access email for a course purchase", async () => {
    mockConstructEvent.mockReturnValue(makeCompletedSession());
    mockListLineItems.mockResolvedValue({
      data: [{ price: { product: { id: "prod_U5YLVl9soeeAOI" } } }], // course product ID
    });

    const res = await POST(makeRequest());
    expect(res.status).toBe(200);

    // Supabase enrollment should be created
    expect(mockUpsert).toHaveBeenCalledWith(
      expect.objectContaining({
        email: "buyer@example.com",
        product_slug: "workshift-course",
        stripe_session_id: "cs_test_session_001",
      }),
      expect.anything()
    );

    // Course access email sent via Resend
    const fetchCalls = vi.mocked(fetch).mock.calls;
    const resendCall = fetchCalls.find(([url]) => url === "https://api.resend.com/emails");
    expect(resendCall).toBeDefined();
    const body = JSON.parse(resendCall![1]!.body as string);
    expect(body.subject).toMatch(/workshift course/i);
  });

  it("sends a Telegram notification after a successful purchase", async () => {
    mockConstructEvent.mockReturnValue(makeCompletedSession());

    await POST(makeRequest());

    const fetchCalls = vi.mocked(fetch).mock.calls;
    const telegramCall = fetchCalls.find(([url]) =>
      String(url).includes("api.telegram.org")
    );
    expect(telegramCall).toBeDefined();
    const body = JSON.parse(telegramCall![1]!.body as string);
    expect(body.text).toContain("New Sale");
    expect(body.text).toContain("buyer@example.com");
  });

  it("still returns 200 even if the email send fails (non-fatal)", async () => {
    mockConstructEvent.mockReturnValue(makeCompletedSession());
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, text: async () => "Resend error" })
    );

    const res = await POST(makeRequest());
    // Should not throw — errors are caught internally
    expect(res.status).toBe(200);
  });

  it("falls back to real-estate toolkit for an unrecognised product ID", async () => {
    mockConstructEvent.mockReturnValue(makeCompletedSession());
    mockListLineItems.mockResolvedValue({
      data: [{ price: { product: { id: "prod_UNKNOWN" } } }],
    });

    const res = await POST(makeRequest());
    expect(res.status).toBe(200);

    // Should still attempt to send a download email (fallback product)
    const fetchCalls = vi.mocked(fetch).mock.calls;
    const resendCall = fetchCalls.find(([url]) => url === "https://api.resend.com/emails");
    expect(resendCall).toBeDefined();
  });

  it("skips email if no customer email is present", async () => {
    mockConstructEvent.mockReturnValue(
      makeCompletedSession({ customer_details: { email: null, name: null } })
    );

    await POST(makeRequest());

    const fetchCalls = vi.mocked(fetch).mock.calls;
    const resendCall = fetchCalls.find(([url]) => url === "https://api.resend.com/emails");
    expect(resendCall).toBeUndefined();
  });
});
