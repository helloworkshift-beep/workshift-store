import { MetadataRoute } from "next";

const BASE = "https://workshift.store";

const toolkitSlugs = [
  "real-estate", "product-manager", "scrum-master", "marketing",
  "ux-research", "sales-rep", "hr-recruiter", "financial-advisor",
  "teacher", "customer-success", "business-owner", "mechanic",
  "contractor", "personal-trainer", "restaurant-owner",
];

const blogSlugs = [
  "ai-replacing-knowledge-workers", "how-to-use-claude-for-work",
  "context-engineering-guide", "claude-prompting-guide-professionals",
  "workshift-ai-skills-knowledge-workers", "agentic-thinking-guide",
  "claude-vs-chatgpt-for-work", "ai-skills-for-lawyers",
  "how-to-train-team-on-ai", "90-day-ai-transformation",
  "ai-prompts-real-estate-agents", "chatgpt-prompts-product-managers",
  "ai-prompts-marketers", "ai-prompts-sales-reps", "chatgpt-prompts-hr-recruiters",
  "ai-prompts-financial-advisors", "ai-prompts-teachers", "ai-prompts-customer-success",
  "ai-prompts-contractors", "ai-prompts-mechanics", "ai-prompts-personal-trainers",
  "ai-prompts-restaurant-owners", "best-ai-tools-small-business",
  "how-to-write-better-ai-prompts", "ai-vs-copywriter",
  "ai-prompts-electricians", "ai-prompts-nurses", "ai-prompts-accountants",
  "ai-prompts-lawyers", "ai-prompts-consultants", "ai-prompts-architects",
  "ai-prompts-freelancers", "ai-prompts-project-managers",
  "ai-prompts-social-media-managers", "ai-prompts-coaches",
  "ai-prompts-writers", "chatgpt-prompts-ux-designers",
  "ai-prompts-operations-managers",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/toolkits`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/course`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...toolkitSlugs.map((slug) => ({
      url: `${BASE}/toolkits/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
