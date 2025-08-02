import "./globals.css";
import { generateSEOMetadata } from "../lib/seo";

export async function generateMetadata() {
  return await generateSEOMetadata("home");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/background_texture_image.png" as="image" />
        <link rel="preload" href="/fonts/Outfit-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Outfit-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Pitch-Regular.otf" as="font" type="font/opentype" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#EFE7DE] bg-[url(/background_texture_image.png)] bg-repeat bg-contain flex justify-center overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
