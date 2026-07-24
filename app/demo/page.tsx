import type { Metadata } from "next";
import FoundationDemoClient from "./FoundationDemoClient";

export const metadata: Metadata = {
  title: "Interactive Demo | Foundation Automation",
  description:
    "See how Foundation Automation helps businesses streamline workflows, connect systems, modernize operations, and scale without unnecessary overhead.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function DemoPage() {
  return <FoundationDemoClient />;
}
