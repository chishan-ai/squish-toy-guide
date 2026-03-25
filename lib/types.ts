export type ContentType = "product" | "guide" | "blog";
export type Feel = "super-soft" | "firm" | "squishy" | "stretchy";
export type UseCase = "desk-fidget" | "stress-relief" | "sensory-play" | "gift";
export type AgeRange = "3+" | "6+" | "8+" | "all-ages";

export interface SensoryScores {
  squishiness: number;
  noise: number;
  durability: number;
  stainRisk: number;
  size: number;
}

export interface ProductFrontmatter {
  title: string;
  slug: string;
  type: "product";
  brand: string;
  priceRange: string;
  searchVolume: number;
  targetKeywords: string[];
  relatedProducts: string[];
  relatedGuides: string[];
  pillarPage: string;
  image: string;
  lastUpdated: string;
  feel: Feel;
  useCase: UseCase;
  ageRange: AgeRange;
  sensoryScores: SensoryScores;
  description?: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GuideFrontmatter {
  title: string;
  slug: string;
  type: "guide";
  searchVolume: number;
  targetKeywords: string[];
  relatedProducts: string[];
  relatedGuides: string[];
  pillarPage: string;
  image: string;
  lastUpdated: string;
  description?: string;
  howToSteps?: HowToStep[];
}

export interface BlogFrontmatter {
  title: string;
  slug: string;
  type: "blog";
  searchVolume: number;
  targetKeywords: string[];
  relatedProducts: string[];
  relatedGuides: string[];
  image: string;
  lastUpdated: string;
  description?: string;
  faqItems?: FAQItem[];
}

export type ContentFrontmatter =
  | ProductFrontmatter
  | GuideFrontmatter
  | BlogFrontmatter;

export interface ContentItem<T extends ContentFrontmatter = ContentFrontmatter> {
  frontmatter: T;
  content: string;
}
