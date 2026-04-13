import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { seoDefaults } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f9fb",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CIRCUITA | Electrical Engineering Consulting & Plan Review",
    template: "%s | CIRCUITA",
  },
  description: seoDefaults.defaultDescription,
  keywords: [...seoDefaults.primaryKeywords, ...seoDefaults.secondaryKeywords],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "CIRCUITA",
    title: "CIRCUITA | Electrical Engineering Consulting & Plan Review",
    description:
      "Florida and Southeast electrical engineering consulting: plan review, lighting design, EV charging, marina, and clear written guidance for design and construction clients.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CIRCUITA | Electrical Engineering Consulting",
    description: seoDefaults.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col font-body text-on-surface antialiased">
        <SiteJsonLd />
        <Header />
        <div className="flex flex-1 flex-col pt-[4.5rem]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
