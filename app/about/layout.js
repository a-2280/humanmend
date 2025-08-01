import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("about", "about");
}

export default function AboutLayout({ children }) {
  return children;
}