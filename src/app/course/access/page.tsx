"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

function AccessPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        router.push("/course/learn");
      } else {
        setChecking(false);
      }
    });
  }, [router]);

  const sendMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/course/auth/callback`,
      },
    });
    setLoading(false);
    if (!error) setSent(true);
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-[#1c3557] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1c3557] flex items-center justify-center px-4">
      <div className="text-white text-center max-w-md w-full">
        <Link href="/course" className="text-[#c9a84c] font-bold text-xl block mb-8">
          The Workshift Course
        </Link>

        {error === "not_enrolled" && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 mb-6 text-sm text-red-200">
            This account doesn't have course access yet.{" "}
            <Link href="/course" className="underline text-white">Purchase the course →</Link>
          </div>
        )}

        <h1 className="text-2xl font-bold mb-3">
          {sent ? "Check your inbox" : "Sign in to access your course"}
        </h1>

        {!sent ? (
          <>
            <p className="text-white/60 mb-6 text-sm">
              Enter the email you used to purchase. We'll send you a sign-in link — no password needed.
            </p>
            <form onSubmit={sendMagicLink} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#c9a84c] text-center"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#c9a84c] text-[#1c3557] rounded-xl font-bold hover:bg-[#c9a84c]/90 transition-colors disabled:opacity-50"
              >
                {loading ? "Sending…" : "Send sign-in link"}
              </button>
            </form>
          </>
        ) : (
          <div className="bg-white/10 rounded-xl p-6">
            <div className="text-4xl mb-4">📬</div>
            <p className="text-[#c9a84c] font-semibold mb-2">Link sent to {email}</p>
            <p className="text-white/60 text-sm">
              Click the link in your email to sign in. It expires in 1 hour.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-4 text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Use a different email
            </button>
          </div>
        )}

        <p className="text-white/40 text-sm mt-8">
          Haven't purchased yet?{" "}
          <Link href="/course" className="text-[#c9a84c] hover:underline">Get the course →</Link>
        </p>
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
