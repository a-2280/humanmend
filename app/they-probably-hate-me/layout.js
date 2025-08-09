import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("blog5", "blog-post-5");
}

export default function BlogPost5Layout({ children }) {
  return children;
}