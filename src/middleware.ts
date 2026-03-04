import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  // Only run Supabase middleware if env vars are set
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return supabaseResponse;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Protect /course/learn/* routes — redirect to access page if not logged in
  if (request.nextUrl.pathname.startsWith("/course/learn")) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/course/access";
      return NextResponse.redirect(url);
    }

    // Check enrollment
    const { data: enrollment } = await supabase
      .from("enrollments")
      .select("id")
      .eq("user_id", user.id)
      .eq("product_slug", "workshift-course")
      .maybeSingle();

    if (!enrollment) {
      const url = request.nextUrl.clone();
      url.pathname = "/course/access";
      url.searchParams.set("error", "not_enrolled");
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/course/learn/:path*"],
};
