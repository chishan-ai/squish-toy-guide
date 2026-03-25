import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { validateFrontmatter } from "./validation";
import type {
  ContentFrontmatter,
  ProductFrontmatter,
  GuideFrontmatter,
  BlogFrontmatter,
  ContentItem,
} from "./types";

const contentDir = path.join(process.cwd(), "content");

function readMdxFiles<T extends ContentFrontmatter>(dir: string): ContentItem<T>[] {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];

  return fs
    .readdirSync(fullPath)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(fullPath, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const frontmatter = validateFrontmatter(data) as T;
      return { frontmatter, content };
    });
}

export function getAllProducts(): ContentItem<ProductFrontmatter>[] {
  return readMdxFiles<ProductFrontmatter>("products");
}

export function getAllGuides(): ContentItem<GuideFrontmatter>[] {
  return readMdxFiles<GuideFrontmatter>("guides");
}

export function getAllBlogs(): ContentItem<BlogFrontmatter>[] {
  return readMdxFiles<BlogFrontmatter>("blog");
}

export function getProductBySlug(
  slug: string
): ContentItem<ProductFrontmatter> | undefined {
  return getAllProducts().find((p) => p.frontmatter.slug === slug);
}

export function getGuideBySlug(
  slug: string
): ContentItem<GuideFrontmatter> | undefined {
  return getAllGuides().find((g) => g.frontmatter.slug === slug);
}

export function getBlogBySlug(
  slug: string
): ContentItem<BlogFrontmatter> | undefined {
  return getAllBlogs().find((b) => b.frontmatter.slug === slug);
}

export function getProductsByFeel(feel: string): ContentItem<ProductFrontmatter>[] {
  return getAllProducts().filter((p) => p.frontmatter.feel === feel);
}

export function getProductsByUseCase(
  useCase: string
): ContentItem<ProductFrontmatter>[] {
  return getAllProducts().filter((p) => p.frontmatter.useCase === useCase);
}

export function getProductsUnderPrice(
  maxPrice: number
): ContentItem<ProductFrontmatter>[] {
  return getAllProducts().filter((p) => {
    const match = p.frontmatter.priceRange.match(/\$(\d+)/);
    return match ? parseInt(match[1], 10) <= maxPrice : false;
  });
}
