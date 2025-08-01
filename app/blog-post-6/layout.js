import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("blog6", "blog-post-6");
}

export default function BlogPost6Layout({ children }) {
  return children;
}