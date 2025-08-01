import "./globals.css";

export const metadata = {
  title: "HumanMend | Eating Disorder & Anxiety Therapy in NYC",
  description: "Expert eating disorder and anxiety therapy in NYC. HAES-aligned, LGBTQIA+ affirming practice serving NY, NJ, CT, MA, CO. Free consultation available.",
  keywords: "eating disorder therapy NYC, anxiety therapy Manhattan, HAES therapist, LGBTQIA+ affirming therapy, DBT therapy New York, EMDR therapist NYC",
  authors: [{ name: "Lindsie Meek, LCSW" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "HumanMend | Eating Disorder & Anxiety Therapy in NYC",
    description: "Expert eating disorder and anxiety therapy in NYC. HAES-aligned, LGBTQIA+ affirming practice serving NY, NJ, CT, MA, CO. Free consultation available.",
    url: "https://humanmend.com",
    siteName: "HumanMend",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HumanMend | Eating Disorder & Anxiety Therapy in NYC",
    description: "Expert eating disorder and anxiety therapy in NYC. HAES-aligned, LGBTQIA+ affirming practice serving NY, NJ, CT, MA, CO.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://humanmend.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/background_texture_image.png" as="image" />
      </head>
      <body className="bg-[#EFE7DE] bg-[url(/background_texture_image.png)] bg-repeat bg-contain flex justify-center overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
