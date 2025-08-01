import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("home", "home");
}

export default function HomeLayout({ children }) {
  return children;
}