import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("contact", "contact");
}

export default function ContactLayout({ children }) {
  return children;
}