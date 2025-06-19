import "./globals.css";

export const metadata = {
  title: "Humanmend",
  description: "",
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
