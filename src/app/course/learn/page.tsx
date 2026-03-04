"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { COURSE_MODULES } from "@/components/course/CoursePlayer";

export default function CourseLearnIndex() {
  const router = useRouter();

  useEffect(() => {
    // Check access
    const token = localStorage.getItem("workshift-access-token");
    if (!token) {
      router.push("/course/access");
      return;
    }
    // Redirect to first lesson
    const first = COURSE_MODULES[0]?.lessons[0];
    if (first) router.push(`/course/learn/${first.slug}`);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#1c3557] flex items-center justify-center">
      <div className="text-white text-center">
        <div className="w-8 h-8 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/60">Loading your course…</p>
      </div>
    </div>
  );
}
