import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oladiti Adewale John | Technology & Business Systems Builder",
  description: "I build technology, understand businesses, and design systems that make organizations work better. Software engineer, MBA candidate, product builder, systems thinker, and entrepreneur.",
  keywords: ["Software Engineer", "Product Builder", "Business Systems", "Technology Entrepreneur", "MBA", "Nigeria", "Full-Stack Developer"],
  authors: [{ name: "Oladiti Adewale John" }],
  openGraph: {
    title: "Oladiti Adewale John | Technology & Business Systems Builder",
    description: "I build technology, understand businesses, and design systems that make organizations work better.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oladiti Adewale John | Technology & Business Systems Builder",
    description: "I build technology, understand businesses, and design systems that make organizations work better.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased overflow-x-hidden`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
