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
      </head>
      <body className="bg-[#EFE7DE] bg-[url(/background_texture_image.png)] bg-repeat bg-contain flex justify-center overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
