import type { ProductFrontmatter, GuideFrontmatter, BlogFrontmatter, HowToStep, FAQItem } from "./types";

const SITE_URL = "https://squishtoyguide.com";
const SITE_NAME = "Squish Toy Guide";

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Your ultimate guide to squish toys: reviews, sensory scorecards, and buying guides for Needoh and more.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateProductSchema(product: ProductFrontmatter) {
  const scores = product.sensoryScores;
  const avgScore =
    (scores.squishiness + scores.noise + scores.durability + scores.stainRisk + scores.size) / 5;
  // Map 1-5 sensory scale to 1-5 rating
  const rating = Math.round(avgScore * 10) / 10;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title.replace(" Review", ""),
    description:
      product.description ??
      `${product.title}: expert review with sensory scorecard.`,
    brand: { "@type": "Brand", name: product.brand },
    image: `${SITE_URL}${product.image}`,
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: SITE_NAME },
      datePublished: product.lastUpdated,
      reviewRating: {
        "@type": "Rating",
        ratingValue: rating,
        bestRating: 5,
        worstRating: 1,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 1,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateArticleSchema(
  guide: GuideFrontmatter | BlogFrontmatter,
  type: "Article" | "BlogPosting" = "Article"
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: guide.title,
    image: `${SITE_URL}${guide.image}`,
    dateModified: guide.lastUpdated,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };
}

export function generateHowToSchema(
  title: string,
  description: string,
  steps: HowToStep[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
