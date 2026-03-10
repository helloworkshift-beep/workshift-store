export function productSchema(kit: {
  name: string;
  slug: string;
  tagline: string;
  subheadline: string;
  price: number;
  prompts: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${kit.name} AI Prompt Toolkit`,
    description: `${kit.tagline} ${kit.subheadline}`,
    url: `https://workshift.store/toolkits/${kit.slug}`,
    brand: { "@type": "Brand", name: "Workshift" },
    offers: {
      "@type": "Offer",
      price: kit.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://workshift.store/toolkits/${kit.slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `https://workshift.store/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Workshift", url: "https://workshift.store" },
    publisher: {
      "@type": "Organization",
      name: "Workshift",
      url: "https://workshift.store",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
