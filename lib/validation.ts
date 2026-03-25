import { z } from "zod";

const sensoryScoresSchema = z.object({
  squishiness: z.number().min(1).max(5),
  noise: z.number().min(1).max(5),
  durability: z.number().min(1).max(5),
  stainRisk: z.number().min(1).max(5),
  size: z.number().min(1).max(5),
});

export const productSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  type: z.literal("product"),
  brand: z.string().min(1),
  priceRange: z.string().min(1),
  searchVolume: z.number().nonnegative(),
  targetKeywords: z.array(z.string()).min(1),
  relatedProducts: z.array(z.string()).min(1),
  relatedGuides: z.array(z.string()).min(1),
  pillarPage: z.string().min(1),
  image: z.string().min(1),
  lastUpdated: z.string(),
  feel: z.enum(["super-soft", "firm", "squishy", "stretchy"]),
  useCase: z.enum(["desk-fidget", "stress-relief", "sensory-play", "gift"]),
  ageRange: z.enum(["3+", "6+", "8+", "all-ages"]),
  sensoryScores: sensoryScoresSchema,
  description: z.string().optional(),
});

export const guideSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  type: z.literal("guide"),
  searchVolume: z.number().nonnegative(),
  targetKeywords: z.array(z.string()).min(1),
  relatedProducts: z.array(z.string()).min(1),
  relatedGuides: z.array(z.string()).min(1),
  pillarPage: z.string().min(1),
  image: z.string().min(1),
  lastUpdated: z.string(),
  description: z.string().optional(),
});

export const blogSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  type: z.literal("blog"),
  searchVolume: z.number().nonnegative(),
  targetKeywords: z.array(z.string()).min(1),
  relatedProducts: z.array(z.string()).min(1),
  relatedGuides: z.array(z.string()).min(1),
  image: z.string().min(1),
  lastUpdated: z.string(),
  description: z.string().optional(),
});

export function validateFrontmatter(data: Record<string, unknown>) {
  const type = data.type;
  switch (type) {
    case "product":
      return productSchema.parse(data);
    case "guide":
      return guideSchema.parse(data);
    case "blog":
      return blogSchema.parse(data);
    default:
      throw new Error(`Unknown content type: ${type}`);
  }
}
