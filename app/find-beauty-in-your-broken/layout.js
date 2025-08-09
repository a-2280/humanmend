import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("blog1", "blog-post-1");
}

export default function BlogPost1Layout({ children }) {
  return children;
}