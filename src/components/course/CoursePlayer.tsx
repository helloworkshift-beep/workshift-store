"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  slug: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface CoursePlayerProps {
  modules: Module[];
  currentModule: string;
  currentLesson: string;
  children: React.ReactNode;
  lessonTitle: string;
  exercise?: string;
}

const COURSE_MODULES: Module[] = [
  {
    id: "foundations",
    title: "Track 1 — Foundations",
    lessons: [
      { id: "1-1", title: "What is a language model?", duration: "12 min", slug: "foundations/how-ai-works/what-is-a-language-model" },
      { id: "1-2", title: "Tokens & context windows", duration: "10 min", slug: "foundations/how-ai-works/tokens-and-context" },
      { id: "1-3", title: "How Claude thinks", duration: "11 min", slug: "foundations/how-ai-works/how-claude-thinks" },
      { id: "1-4", title: "What Claude is great at (and not)", duration: "9 min", slug: "foundations/how-ai-works/strengths-and-limits" },
      { id: "1-5", title: "Claude vs. other AI tools", duration: "8 min", slug: "foundations/how-ai-works/claude-vs-others" },
      { id: "1-6", title: "Reading Claude's responses", duration: "7 min", slug: "foundations/how-ai-works/reading-responses" },
      { id: "2-1", title: "Why most prompts fail", duration: "10 min", slug: "foundations/first-prompts/why-prompts-fail" },
      { id: "2-2", title: "The anatomy of a great prompt", duration: "13 min", slug: "foundations/first-prompts/prompt-anatomy" },
      { id: "2-3", title: "Being clear and direct", duration: "11 min", slug: "foundations/first-prompts/clear-and-direct" },
      { id: "2-4", title: "Giving Claude a role", duration: "9 min", slug: "foundations/first-prompts/giving-a-role" },
      { id: "2-5", title: "Separating instructions from data", duration: "10 min", slug: "foundations/first-prompts/separating-data" },
      { id: "2-6", title: "Formatting your output", duration: "9 min", slug: "foundations/first-prompts/formatting-output" },
      { id: "2-7", title: "Iterative prompting", duration: "12 min", slug: "foundations/first-prompts/iterative-prompting" },
      { id: "3-1", title: "Claude for document work", duration: "14 min", slug: "foundations/daily-work/document-work" },
      { id: "3-2", title: "Claude for writing", duration: "13 min", slug: "foundations/daily-work/writing" },
      { id: "3-3", title: "Claude for analysis", duration: "11 min", slug: "foundations/daily-work/analysis" },
      { id: "3-4", title: "Claude for problem-solving", duration: "12 min", slug: "foundations/daily-work/problem-solving" },
      { id: "3-5", title: "Building your prompt library", duration: "10 min", slug: "foundations/daily-work/prompt-library" },
      { id: "3-6", title: "When NOT to use Claude", duration: "8 min", slug: "foundations/daily-work/when-not-to-use" },
    ],
  },
  {
    id: "mastery",
    title: "Track 2 — Professional Mastery",
    lessons: [
      { id: "4-1", title: "Few-shot prompting", duration: "13 min", slug: "mastery/prompt-engineering/few-shot" },
      { id: "4-2", title: "Chain-of-thought prompting", duration: "11 min", slug: "mastery/prompt-engineering/chain-of-thought" },
      { id: "4-3", title: "XML structuring", duration: "12 min", slug: "mastery/prompt-engineering/xml-structure" },
      { id: "4-4", title: "Extended thinking", duration: "10 min", slug: "mastery/prompt-engineering/extended-thinking" },
      { id: "4-5", title: "Prefilling responses", duration: "9 min", slug: "mastery/prompt-engineering/prefilling" },
      { id: "4-6", title: "Prompt chaining", duration: "14 min", slug: "mastery/prompt-engineering/prompt-chaining" },
      { id: "4-7", title: "Avoiding hallucinations", duration: "13 min", slug: "mastery/prompt-engineering/avoiding-hallucinations" },
      { id: "4-8", title: "Evaluating your prompts", duration: "10 min", slug: "mastery/prompt-engineering/evaluation" },
      { id: "5-1", title: "What is context engineering?", duration: "11 min", slug: "mastery/context-engineering/intro" },
      { id: "5-2", title: "Managing the context window", duration: "12 min", slug: "mastery/context-engineering/context-window" },
      { id: "5-3", title: "System prompts", duration: "14 min", slug: "mastery/context-engineering/system-prompts" },
      { id: "5-4", title: "Structuring information for AI", duration: "11 min", slug: "mastery/context-engineering/structuring-info" },
      { id: "5-5", title: "Memory patterns", duration: "13 min", slug: "mastery/context-engineering/memory-patterns" },
      { id: "5-6", title: "RAG for professionals", duration: "12 min", slug: "mastery/context-engineering/rag-basics" },
      { id: "5-7", title: "Dynamic context", duration: "10 min", slug: "mastery/context-engineering/dynamic-context" },
      { id: "5-8", title: "Context compression", duration: "9 min", slug: "mastery/context-engineering/compression" },
      { id: "6-1", title: "Claude Projects", duration: "15 min", slug: "mastery/advanced-capabilities/projects" },
      { id: "6-2", title: "Long document analysis", duration: "13 min", slug: "mastery/advanced-capabilities/long-documents" },
      { id: "6-3", title: "Vision capabilities", duration: "11 min", slug: "mastery/advanced-capabilities/vision" },
      { id: "6-4", title: "Artifacts & deliverables", duration: "10 min", slug: "mastery/advanced-capabilities/artifacts" },
      { id: "6-5", title: "Working with Claude's values", duration: "9 min", slug: "mastery/advanced-capabilities/values" },
      { id: "6-6", title: "Choosing the right model", duration: "8 min", slug: "mastery/advanced-capabilities/model-selection" },
    ],
  },
  {
    id: "agentic",
    title: "Track 3 — Agentic Mastery",
    lessons: [
      { id: "7-1", title: "What is agentic thinking?", duration: "13 min", slug: "agentic/agentic-thinking/intro" },
      { id: "7-2", title: "The agent loop", duration: "14 min", slug: "agentic/agentic-thinking/agent-loop" },
      { id: "7-3", title: "Agentic thinking as a skill", duration: "12 min", slug: "agentic/agentic-thinking/as-a-skill" },
      { id: "7-4", title: "When to automate vs. stay hands-on", duration: "11 min", slug: "agentic/agentic-thinking/automate-vs-handson" },
      { id: "7-5", title: "The autonomy spectrum", duration: "10 min", slug: "agentic/agentic-thinking/autonomy-spectrum" },
      { id: "7-6", title: "Quality gates & human judgment", duration: "12 min", slug: "agentic/agentic-thinking/quality-gates" },
      { id: "7-7", title: "How agentic workflows fail", duration: "11 min", slug: "agentic/agentic-thinking/failure-modes" },
      { id: "8-1", title: "Workflow decomposition", duration: "14 min", slug: "agentic/workflow-design/decomposition" },
      { id: "8-2", title: "The professional prompt pipeline", duration: "13 min", slug: "agentic/workflow-design/prompt-pipeline" },
      { id: "8-3", title: "No-code agentic tools", duration: "12 min", slug: "agentic/workflow-design/no-code-tools" },
      { id: "8-4", title: "Your personal AI operating system", duration: "14 min", slug: "agentic/workflow-design/ai-os" },
      { id: "8-5", title: "Client & stakeholder communication", duration: "11 min", slug: "agentic/workflow-design/communication" },
      { id: "8-6", title: "Knowledge management with AI", duration: "12 min", slug: "agentic/workflow-design/knowledge-management" },
      { id: "8-7", title: "Measuring your gains", duration: "10 min", slug: "agentic/workflow-design/measuring-gains" },
      { id: "9-1", title: "What an AI-native professional looks like", duration: "13 min", slug: "agentic/ai-native/what-it-looks-like" },
      { id: "9-2", title: "Your professional AI toolkit", duration: "12 min", slug: "agentic/ai-native/your-toolkit" },
      { id: "9-3", title: "Staying ahead of the curve", duration: "10 min", slug: "agentic/ai-native/staying-ahead" },
      { id: "9-4", title: "Your AI reputation", duration: "9 min", slug: "agentic/ai-native/ai-reputation" },
      { id: "9-5", title: "Ethics & professional responsibility", duration: "11 min", slug: "agentic/ai-native/ethics" },
      { id: "9-6", title: "The future of your profession", duration: "12 min", slug: "agentic/ai-native/future" },
      { id: "10-1", title: "From AI user to AI leader", duration: "12 min", slug: "agentic/leading-the-shift/user-to-leader" },
      { id: "10-2", title: "Finding high-leverage opportunities", duration: "11 min", slug: "agentic/leading-the-shift/high-leverage" },
      { id: "10-3", title: "Getting colleagues on board", duration: "13 min", slug: "agentic/leading-the-shift/colleagues" },
      { id: "10-4", title: "Building shared AI practices", duration: "11 min", slug: "agentic/leading-the-shift/shared-practices" },
      { id: "10-5", title: "Talking to leadership about AI", duration: "12 min", slug: "agentic/leading-the-shift/leadership" },
      { id: "10-6", title: "Protecting yourself & your team", duration: "10 min", slug: "agentic/leading-the-shift/protection" },
      { id: "10-7", title: "Your next chapter", duration: "14 min", slug: "agentic/leading-the-shift/next-chapter" },
    ],
  },
];

export { COURSE_MODULES };

export default function CoursePlayer({ modules, currentModule, currentLesson, children, lessonTitle, exercise }: CoursePlayerProps) {
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [exerciseText, setExerciseText] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Load progress from localStorage (synced to Supabase when available)
    const saved = localStorage.getItem("workshift-progress");
    if (saved) setProgress(JSON.parse(saved));
    const savedExercise = localStorage.getItem(`exercise-${currentLesson}`);
    if (savedExercise) setExerciseText(savedExercise);

    // Sync from Supabase if available
    async function syncProgress() {
      try {
        const { createClient } = await import("@/lib/supabase/client");
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const { data } = await supabase.from("progress").select("lesson_id").eq("user_id", user.id);
        if (data && data.length > 0) {
          const remote: Record<string, boolean> = {};
          data.forEach((r: { lesson_id: string }) => { remote[r.lesson_id] = true; });
          setProgress(remote);
          localStorage.setItem("workshift-progress", JSON.stringify(remote));
        }
      } catch {}
    }
    syncProgress();
  }, [currentLesson]);

  const markComplete = useCallback(async (lessonId: string) => {
    const updated = { ...progress, [lessonId]: true };
    setProgress(updated);
    localStorage.setItem("workshift-progress", JSON.stringify(updated));

    // Sync to Supabase
    try {
      const { createClient } = await import("@/lib/supabase/client");
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from("progress").upsert({ user_id: user.id, lesson_id: lessonId }, { onConflict: "user_id,lesson_id" });
      }
    } catch {}
  }, [progress]);

  const saveExercise = useCallback(() => {
    localStorage.setItem(`exercise-${currentLesson}`, exerciseText);
  }, [currentLesson, exerciseText]);

  const totalLessons = COURSE_MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = Object.values(progress).filter(Boolean).length;
  const progressPct = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-[#faf9f6] flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-80" : "w-0 overflow-hidden"} transition-all duration-300 bg-[#1c3557] text-white flex-shrink-0 flex flex-col`}>
        <div className="p-5 border-b border-white/10">
          <Link href="/course" className="text-[#c9a84c] font-bold text-lg tracking-tight">The Workshift Course</Link>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-white/60 mb-1">
              <span>{completedCount} of {totalLessons} lessons</span>
              <span>{progressPct}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full">
              <div className="h-1.5 bg-[#c9a84c] rounded-full transition-all" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {COURSE_MODULES.map((mod) => (
            <div key={mod.id} className="mb-2">
              <div className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#c9a84c]/80">{mod.title}</div>
              {mod.lessons.map((lesson) => {
                const isActive = lesson.slug.includes(currentLesson);
                const isDone = progress[lesson.id];
                return (
                  <Link
                    key={lesson.id}
                    href={`/course/learn/${lesson.slug}`}
                    className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"}`}
                  >
                    <span className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center text-xs ${isDone ? "bg-[#c9a84c] border-[#c9a84c]" : "border-white/30"}`}>
                      {isDone && "✓"}
                    </span>
                    <span className="flex-1 leading-snug">{lesson.title}</span>
                    <span className="text-xs text-white/40">{lesson.duration}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 border-b border-gray-200 bg-white flex items-center px-6 gap-4 flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-gray-800 font-medium text-sm flex-1 truncate">{lessonTitle}</h1>
          <button
            onClick={() => markComplete(currentLesson)}
            className={`text-xs px-4 py-1.5 rounded-full font-medium transition-colors ${progress[currentLesson] ? "bg-green-100 text-green-700" : "bg-[#1c3557] text-white hover:bg-[#1c3557]/80"}`}
          >
            {progress[currentLesson] ? "✓ Completed" : "Mark complete"}
          </button>
        </header>

        {/* Lesson content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-8 py-12">
            <article className="prose prose-lg prose-headings:text-[#1c3557] prose-a:text-[#c9a84c] max-w-none">
              {children}
            </article>

            {exercise && (
              <div className="mt-12 border-t border-gray-200 pt-10">
                <h3 className="text-xl font-bold text-[#1c3557] mb-2">✏️ Exercise</h3>
                <p className="text-gray-600 mb-4 text-sm">{exercise}</p>
                <textarea
                  value={exerciseText}
                  onChange={(e) => setExerciseText(e.target.value)}
                  onBlur={saveExercise}
                  placeholder="Write your answer here — it's saved automatically to your browser..."
                  rows={8}
                  className="w-full border border-gray-300 rounded-lg p-4 text-sm text-gray-700 resize-y focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
                />
                <p className="text-xs text-gray-400 mt-2">Your answers are saved locally in your browser.</p>
              </div>
            )}

            <div className="mt-10 pt-8 border-t border-gray-200 flex justify-between">
              <button
                onClick={() => markComplete(currentLesson)}
                className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-colors ${progress[currentLesson] ? "bg-green-100 text-green-700" : "bg-[#1c3557] text-white hover:bg-[#1c3557]/80"}`}
              >
                {progress[currentLesson] ? "✓ Completed" : "Mark this lesson complete →"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
