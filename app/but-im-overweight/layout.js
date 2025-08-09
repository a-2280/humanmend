import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("blog2", "blog-post-2");
}

export default function BlogPost2Layout({ children }) {
  return children;
}