export const metadata = {
  title: "Therapy Practice NYC | HumanMend - Eating Disorder & Anxiety Specialists",
  description: "Compassionate therapy for eating disorders, anxiety, and personal growth in NYC. HAES-aligned, LGBTQIA+ affirming practice. Free 15-min consultation available.",
  openGraph: {
    title: "Therapy Practice NYC | HumanMend - Eating Disorder & Anxiety Specialists", 
    description: "Compassionate therapy for eating disorders, anxiety, and personal growth in NYC. HAES-aligned, LGBTQIA+ affirming practice.",
    url: "https://humanmend.com/home",
    siteName: "HumanMend",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapy Practice NYC | HumanMend - Eating Disorder & Anxiety Specialists",
    description: "Compassionate therapy for eating disorders, anxiety, and personal growth in NYC. HAES-aligned, LGBTQIA+ affirming practice.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://humanmend.com/home",
  },
};

export default function HomeLayout({ children }) {
  return children;
}