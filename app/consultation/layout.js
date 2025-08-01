import { generateSEOMetadata } from "../../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("consultation", "consultation");
}

export default function ConsultationLayout({ children }) {
  return children;
}