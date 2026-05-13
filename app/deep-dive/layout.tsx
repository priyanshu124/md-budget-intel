import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deep-Dive Dashboard | Maryland Budget Intel Tool",
  description:
    "Interactive deep-dive analytics: agency budgets, IT spend, variance analysis, and anomaly detection across Maryland's fiscal data.",
};

export default function DeepDiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
