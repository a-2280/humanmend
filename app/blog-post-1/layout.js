export const metadata = {
  title: "Blog Post 1 | Mental Health Insights | HumanMend",
  description: "Expert mental health insights and therapy guidance from licensed therapists specializing in eating disorders and anxiety in NYC.",
  openGraph: {
    title: "Blog Post 1 | Mental Health Insights | HumanMend",
    description: "Expert mental health insights and therapy guidance from licensed therapists specializing in eating disorders and anxiety in NYC.",
    url: "https://humanmend.com/blog-post-1",
    siteName: "HumanMend",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Post 1 | Mental Health Insights | HumanMend",
    description: "Expert mental health insights and therapy guidance from licensed therapists specializing in eating disorders and anxiety in NYC.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://humanmend.com/blog-post-1",
  },
};

export default function BlogPost1Layout({ children }) {
  return children;
}