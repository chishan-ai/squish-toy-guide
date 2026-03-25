import type { ProductFrontmatter, GuideFrontmatter, BlogFrontmatter } from "./types";

const SITE_URL = "https://squishtoyguide.com";
const SITE_NAME = "Squish Toy Guide";

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Your ultimate guide to squish toys — reviews, sensory scorecards, and buying guides for Needoh and more.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateProductSchema(product: ProductFrontmatter) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title.replace(" Review", ""),
    description:
      product.description ??
      `${product.title} — expert review with sensory scorecard.`,
    brand: { "@type": "Brand", name: product.brand },
    image: `${SITE_URL}${product.image}`,
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: SITE_NAME },
      datePublished: product.lastUpdated,
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
