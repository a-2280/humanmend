import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("eating-disorder", "eating-disorder-therapy");
}

export default function EatingDisorderTherapyLayout({ children }) {
  return children;
}