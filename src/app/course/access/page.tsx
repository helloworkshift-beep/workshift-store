"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function AccessPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"checking" | "valid" | "invalid" | "request">("checking");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (token) {
      // Verify token with API
      fetch(`/api/course-access?token=${token}`, { method: "POST" })
        .then((r) => r.json())
        .then((data) => {
          if (data.valid) {
            localStorage.setItem("workshift-access-token", token);
            localStorage.setItem("workshift-email", data.email || "");
            setStatus("valid");
            setTimeout(() => router.push("/course/learn"), 1500);
          } else {
            setStatus("invalid");
          }
        })
        .catch(() => setStatus("invalid"));
    } else {
      // Check existing token
      const existing = localStorage.getItem("workshift-access-token");
      if (existing) {
        router.push("/course/learn");
      } else {
        setStatus("request");
      }
    }
  }, [token, router]);

  const requestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/course-resend-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setSent(true);
  };

  if (status === "checking") {
    return (
      <div className="min-h-screen bg-[#1c3557] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-8 h-8 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60">Verifying your access…</p>
        </div>
      </div>
    );
  }

  if (status === "valid") {
    return (
      <div className="min-h-screen bg-[#1c3557] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-5xl mb-4">✓</div>
          <h1 className="text-2xl font-bold text-[#c9a84c] mb-2">Access granted</h1>
          <p className="text-white/60">Taking you to your course…</p>
        </div>
      </div>
    );
  }

  if (status === "invalid") {
    return (
      <div className="min-h-screen bg-[#1c3557] flex items-center justify-center px-4">
        <div className="text-white text-center max-w-md">
          <div className="text-5xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold mb-2">Link expired or invalid</h1>
          <p className="text-white/60 mb-6">Access links expire after 24 hours. Enter your email to get a new one.</p>
          {!sent ? (
            <form onSubmit={requestAccess} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c9a84c]"
              />
              <button type="submit" className="px-5 py-2.5 bg-[#c9a84c] text-[#1c3557] rounded-lg font-semibold hover:bg-[#c9a84c]/90">Send</button>
            </form>
          ) : (
            <p className="text-[#c9a84c]">Check your email for a new access link.</p>
          )}
        </div>
      </div>
    );
  }

  // status === "request"
  return (
    <div className="min-h-screen bg-[#1c3557] flex items-center justify-center px-4">
      <div className="text-white text-center max-w-md">
        <a href="/course" className="text-[#c9a84c] font-bold text-xl block mb-8">The Workshift Course</a>
        <h1 className="text-2xl font-bold mb-3">Enter your email to access the course</h1>
        <p className="text-white/60 mb-6">Use the same email you used to purchase. We'll send you an instant access link.</p>
        {!sent ? (
          <form onSubmit={requestAccess} className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c9a84c]"
            />
            <button type="submit" className="w-full py-3 bg-[#c9a84c] text-[#1c3557] rounded-lg font-bold hover:bg-[#c9a84c]/90 transition-colors">
              Send access link
            </button>
          </form>
        ) : (
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl mb-3">📬</div>
            <p className="text-[#c9a84c] font-semibold mb-1">Check your inbox</p>
            <p className="text-white/60 text-sm">We sent an access link to {email}. Click it to enter the course.</p>
          </div>
        )}
        <p className="text-white/40 text-sm mt-6">Haven't purchased yet? <a href="/course" className="text-[#c9a84c] hover:underline">Get the course →</a></p>
      </div>
    </div>
  );
}

export default function AccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#1c3557] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <AccessPageContent />
    </Suspense>
  );
}
