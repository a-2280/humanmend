import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("anxiety", "anxiety-therapy");
}

export default function AnxietyTherapyLayout({ children }) {
  return children;
}