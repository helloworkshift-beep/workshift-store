import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const PRICE_MAP: Record<string, string> = {
  // Original toolkits
  "real-estate-toolkit":        "price_1T7LYtRJBoE9Jl8efsUCG6nu",
  "pm-toolkit":                 "price_1T7MIBRJBoE9Jl8eYeNVqsuU",
  "scrum-master-toolkit":       "price_1T7MICRJBoE9Jl8eP2WOp8FN",
  "marketing-toolkit":          "price_1T7MIDRJBoE9Jl8eTDmoPReW",
  "user-research-toolkit":      "price_1T7MIERJBoE9Jl8e2x12Ubqg",
  "sales-rep-toolkit":          "price_1T8zFvRJBoE9Jl8eRNSEVWz3",
  "hr-recruiter-toolkit":       "price_1T9AZARJBoE9Jl8eD3dTlIvu",
  // New knowledge worker toolkits
  "financial-advisor-toolkit":  "price_1T9X8IRJBoE9Jl8eWycbmJiQ",
  "teacher-toolkit":            "price_1T9X8JRJBoE9Jl8eDFKFVXSX",
  "customer-success-toolkit":   "price_1T9X8KRJBoE9Jl8ePnhaJGao",
  "business-owner-toolkit":     "price_1T9X8LRJBoE9Jl8eKuYB9q7K",
  // Trade & service toolkits
  "mechanic-toolkit":           "price_1T9X8LRJBoE9Jl8egNoRYTYh",
  "contractor-toolkit":         "price_1T9X8MRJBoE9Jl8eOHH03PVM",
  "personal-trainer-toolkit":   "price_1T9X8NRJBoE9Jl8euxERt0DD",
  "restaurant-owner-toolkit":   "price_1T9X8ORJBoE9Jl8etVlvLtZ9",
  // Bundle
  "bundle":                     "price_1TGxEgRJBoE9Jl8es13jPyT8",
  // Course
  "course":                     "price_1T7NEjRJBoE9Jl8ehCYrKoRs",
};

export async function GET(request: NextRequest) {
  const product = request.nextUrl.searchParams.get("product");

  if (!product || !PRICE_MAP[product]) {
    return NextResponse.json({ error: "Invalid product" }, { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-02-25.clover" as never,
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://workshift.store";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: PRICE_MAP[product], quantity: 1 }],
    allow_promotion_codes: true,
    success_url: `${baseUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/${product === "course" ? "course" : product === "bundle" ? "bundle" : "toolkits"}`,
  });

  return NextResponse.redirect(session.url!);
}
