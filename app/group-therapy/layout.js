import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("group", "group-therapy");
}

export default function GroupTherapyLayout({ children }) {
  return children;
}