export const metadata = {
  title: "Mental Health Blog | Eating Disorder & Anxiety Resources | HumanMend",
  description: "Expert insights on eating disorder recovery, anxiety management, and mental health. Evidence-based articles from licensed therapists in NYC.",
  openGraph: {
    title: "Mental Health Blog | Eating Disorder & Anxiety Resources | HumanMend",
    description: "Expert insights on eating disorder recovery, anxiety management, and mental health. Evidence-based articles from licensed therapists in NYC.",
    url: "https://humanmend.com/blog",
    siteName: "HumanMend",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Health Blog | Eating Disorder & Anxiety Resources | HumanMend",
    description: "Expert insights on eating disorder recovery, anxiety management, and mental health. Evidence-based articles from licensed therapists in NYC.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://humanmend.com/blog",
  },
};

export default function BlogLayout({ children }) {
  return children;
}