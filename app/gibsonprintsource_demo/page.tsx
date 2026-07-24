import type { Metadata } from "next";
import GibsonDemoClient from "./GibsonDemoClient";

export const metadata: Metadata = {
  title: "Gibson Print Source | Website Concept",
  description:
    "A private website concept prepared for Gibson Print Source by Foundation Automation.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function GibsonPrintSourceDemoPage() {
  return <GibsonDemoClient />;
}
