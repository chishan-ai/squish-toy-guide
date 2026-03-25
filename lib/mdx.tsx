import { compileMDX } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";

const mdxComponents: MDXComponents = {
  // Demote all headings by one level to avoid duplicate H1
  h1: (props) => <h2 {...props} />,
  h2: (props) => <h3 {...props} />,
  h3: (props) => <h4 {...props} />,
};

export async function renderMdx(source: string) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });
  return content;
}
