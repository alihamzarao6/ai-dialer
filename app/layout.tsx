import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Dialer - Intelligent Lead Qualification System",
  description:
    "AI-powered dialer that automatically calls, qualifies, and transfers leads with local presence. Pay only for successful transfers.",
  keywords: [
    "AI dialer",
    "lead qualification",
    "local presence",
    "CallTools",
    "LeadProsper",
    "AI voice agent",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
