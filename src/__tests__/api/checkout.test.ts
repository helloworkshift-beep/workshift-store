import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

// Mock Stripe before importing the route
const mockSessionCreate = vi.fn();
vi.mock("stripe", () => ({
  default: vi.fn(function () {
    return {
      checkout: { sessions: { create: mockSessionCreate } },
    };
  }),
}));

// Import after mocking
const { GET } = await import("@/app/api/checkout/route");

describe("GET /api/checkout", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSessionCreate.mockResolvedValue({ url: "https://checkout.stripe.com/pay/cs_test_123" });
  });

  it("returns 400 for missing product", async () => {
    const req = new NextRequest("https://workshift.store/api/checkout");
    const res = await GET(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBe("Invalid product");
  });

  it("returns 400 for unknown product", async () => {
    const req = new NextRequest("https://workshift.store/api/checkout?product=fake-product");
    const res = await GET(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBe("Invalid product");
  });

  it("redirects to Stripe checkout for a valid toolkit product", async () => {
    const req = new NextRequest("https://workshift.store/api/checkout?product=real-estate-toolkit");
    const res = await GET(req);
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe("https://checkout.stripe.com/pay/cs_test_123");
    expect(mockSessionCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: "payment",
        success_url: expect.stringContaining("/thank-you"),
        cancel_url: expect.stringContaining("/toolkits"),
      })
    );
  });

  it("redirects to /course on cancel for the course product", async () => {
    const req = new NextRequest("https://workshift.store/api/checkout?product=course");
    const res = await GET(req);
    expect(res.status).toBe(307);
    expect(mockSessionCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        cancel_url: expect.stringContaining("/course"),
      })
    );
  });

  it("passes the correct Stripe price ID for each product", async () => {
    const cases: [string, string][] = [
      ["pm-toolkit", "price_1T7MIBRJBoE9Jl8eYeNVqsuU"],
      ["marketing-toolkit", "price_1T7MIDRJBoE9Jl8eTDmoPReW"],
      ["course", "price_1T7NEjRJBoE9Jl8ehCYrKoRs"],
    ];
    for (const [product, expectedPrice] of cases) {
      const req = new NextRequest(`https://workshift.store/api/checkout?product=${product}`);
      await GET(req);
      expect(mockSessionCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          line_items: [{ price: expectedPrice, quantity: 1 }],
        })
      );
      vi.clearAllMocks();
      mockSessionCreate.mockResolvedValue({ url: "https://checkout.stripe.com/pay/cs_test_123" });
    }
  });
});
