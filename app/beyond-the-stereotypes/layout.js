import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("blog4", "blog-post-4");
}

export default function BlogPost4Layout({ children }) {
  return children;
}