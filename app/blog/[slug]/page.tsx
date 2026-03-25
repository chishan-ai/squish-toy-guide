import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllBlogs, getBlogBySlug, getAllProducts, getAllGuides } from "@/lib/content";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { renderMdx } from "@/lib/mdx";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import AdSlot from "@/components/AdSlot";
import RelatedContent from "@/components/RelatedContent";
import type { ProductFrontmatter, GuideFrontmatter } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((b) => ({ slug: b.frontmatter.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getBlogBySlug(slug);
  if (!item) return {};

  const { frontmatter } = item;
  return {
    title: frontmatter.title,
    description:
      frontmatter.description ??
      `${frontmatter.title} — on Squish Toy Guide.`,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      images: [
        {
          url: frontmatter.image,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getBlogBySlug(slug);
  if (!item) notFound();

  const { frontmatter, content } = item;
  const mdxContent = await renderMdx(content);

  const allProducts = getAllProducts();
  const allGuides = getAllGuides();

  const relatedProducts = frontmatter.relatedProducts
    .map((s) => allProducts.find((p) => p.frontmatter.slug === s)?.frontmatter)
    .filter((p): p is ProductFrontmatter => p !== undefined);

  const relatedGuides = frontmatter.relatedGuides
    .map((s) => allGuides.find((g) => g.frontmatter.slug === s)?.frontmatter)
    .filter((g): g is GuideFrontmatter => g !== undefined);

  const articleSchema = generateArticleSchema(frontmatter, "BlogPosting");
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: frontmatter.title, url: `/blog/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema]),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-6">
        <BreadcrumbNav
          items={[
            { label: "Blog", href: "/blog" },
            { label: frontmatter.title },
          ]}
        />

        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p className="mt-3 text-lg text-gray-600">
              {frontmatter.description}
            </p>
          )}
          <p className="mt-2 text-xs text-gray-400">
            Last updated: {frontmatter.lastUpdated}
          </p>
        </div>

        <div className="my-8">
          <AdSlot format="leaderboard" className="hidden md:flex" />
          <AdSlot format="rectangle" className="flex md:hidden" />
        </div>

        <div className="prose prose-gray mt-8 max-w-none prose-headings:text-gray-900 prose-a:text-purple-600">
          {mdxContent}
        </div>

        <div className="my-8">
          <AdSlot format="rectangle" />
        </div>

        <RelatedContent products={relatedProducts} guides={relatedGuides} />
      </article>
    </>
  );
}
