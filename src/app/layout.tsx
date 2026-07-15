import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinclair Design Atelier — The Art of Digital Craft",
  description:
    "Sinclair Design Atelier builds cinematic, high-performance websites for brands that demand excellence. Strategy, design, and engineering — refined.",
  keywords: [
    "web design agency",
    "custom websites",
    "Sinclair Design Atelier",
    "premium web development",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.png" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Sinclair Design Atelier — The Art of Digital Craft",
    description:
      "Bespoke digital experiences with motion, precision, and purpose.",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="flex min-h-full w-full flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
