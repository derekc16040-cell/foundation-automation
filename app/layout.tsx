import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Foundation Automation | Automation and Integration Consulting",
    template: "%s | Foundation Automation",
  },
  description:
    "Foundation Automation helps growing businesses connect systems, automate workflows, implement practical AI, and build scalable digital operations.",
  keywords: [
    "automation consulting",
    "systems integration",
    "workflow automation",
    "AI implementation",
    "digital transformation",
    "print automation",
    "manufacturing automation",
  ],
  openGraph: {
    title: "Foundation Automation",
    description:
      "Automation strategy, systems integration, applied AI, and scalable digital operations for growing businesses.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
