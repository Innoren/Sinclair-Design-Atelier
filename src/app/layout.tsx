import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinclair Design Atelier — Software & Digital Craft",
  description:
    "Sinclair Design Atelier designs and builds websites, custom software, and workflow systems that help companies operate with clarity and speed.",
  keywords: [
    "custom software",
    "workflow systems",
    "business software",
    "web design agency",
    "internal tools",
    "Sinclair Design Atelier",
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
    title: "Sinclair Design Atelier — Software & Digital Craft",
    description:
      "Websites, internal tools, and workflow software — crafted with precision.",
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
