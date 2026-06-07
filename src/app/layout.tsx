import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sports Direct EU SEO Strategy | Organic Growth Roadmap",
  description: "Strategic SEO roadmap for Sports Direct EU. Discover actionable insights on technical SEO, category expansion, and localized demand capture across Europe.",
  openGraph: {
    title: "Sports Direct EU SEO Strategy | Organic Growth Roadmap",
    description: "Strategic SEO roadmap for Sports Direct EU. Discover actionable insights on technical SEO, category expansion, and localized demand capture across Europe.",
    type: "website",
    locale: "en_GB",
    siteName: "Sports Direct EU SEO Strategy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports Direct EU SEO Strategy | Organic Growth Roadmap",
    description: "Strategic SEO roadmap for Sports Direct EU. Discover actionable insights on technical SEO, category expansion, and localized demand capture across Europe.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#fafafa] text-zinc-950" suppressHydrationWarning>
        <div suppressHydrationWarning>
          {children}
        </div>
      </body>
    </html>
  );
}
