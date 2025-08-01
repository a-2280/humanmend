import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("blog", "blog");
}

export default function BlogLayout({ children }) {
  return children;
}