import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import JsonLd from "@/components/seo/JsonLd";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.personal.siteUrl),
  title: {
    default: `${portfolio.personal.name} — ${portfolio.personal.title}`,
    template: `%s | ${portfolio.personal.name}`
  },
  description: portfolio.personal.bio,
  keywords: [
    "Md Abu Sayeam Mondol Shejan",
    "Shejan",
    "AI Engineer",
    "Omicon Group",
    "Omicon",
    "Machine Learning Engineer",
    "Artificial Intelligence Engineer",
    "LangGraph",
    "RAG Systems",
    "LLM Fine-Tuning",
    "Local LLM",
    "Computer Vision",
    "Softvence",
    "Softvence Agency",
    "Betopia Group",
    "Dhaka Bangladesh AI Engineer"
  ],
  authors: [{ name: portfolio.personal.name, url: portfolio.personal.siteUrl }],
  creator: portfolio.personal.name,
  publisher: portfolio.personal.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolio.personal.siteUrl,
    title: `${portfolio.personal.name} — ${portfolio.personal.title}`,
    description: portfolio.personal.bio,
    siteName: `${portfolio.personal.name} Portfolio`,
    images: [
      {
        url: `${portfolio.personal.siteUrl}/images/profile.jpg`,
        width: 800,
        height: 800,
        alt: `${portfolio.personal.name} - AI Engineer Profile Image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.personal.name} — ${portfolio.personal.title}`,
    description: portfolio.personal.bio,
    images: [`${portfolio.personal.siteUrl}/images/profile.jpg`],
  },
  alternates: {
    canonical: portfolio.personal.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased selection:bg-sky-500 selection:text-black">
        <ThemeProvider>
          <JsonLd />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
