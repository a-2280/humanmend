import { createClient } from "next-sanity";

export const apiVersion = "2025-06-18";
export const dataset = "production";
export const projectId = "syhv6kt4";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true, // Use CDN for production
  perspective: "published",
});
