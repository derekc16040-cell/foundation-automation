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
    default: "Foundation Automation | Print Workflow Automation & Integration",
    template: "%s | Foundation Automation",
  },
  description:
    "Foundation Automation helps print businesses streamline web-to-print, storefront, order intake, file management, and production workflows through automation, integrations, AI, and ongoing technical support.",
  keywords: [
    "print automation",
    "print workflow automation",
    "web to print support",
    "OnPrintShop support",
    "storefront integration",
    "systems integration",
    "AI implementation",
  ],
  openGraph: {
    title: "Foundation Automation",
    description:
      "Web-to-print support, print workflow automation, storefront integrations, applied AI, and scalable digital operations for print businesses.",
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
