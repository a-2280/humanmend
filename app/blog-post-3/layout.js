import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("blog3", "blog-post-3");
}

export default function BlogPost3Layout({ children }) {
  return children;
}