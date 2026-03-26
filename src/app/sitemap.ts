import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE = "https://workshift.store";

const toolkitSlugs = [
  "real-estate", "product-manager", "scrum-master", "marketing",
  "ux-research", "sales-rep", "hr-recruiter", "financial-advisor",
  "teacher", "customer-success", "business-owner", "mechanic",
  "contractor", "personal-trainer", "restaurant-owner",
];

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "src/content/blog");
  try {
    return fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""));
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getBlogSlugs();

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/toolkits`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/free`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/course`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/bundle`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/ai-prompts-for`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
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
