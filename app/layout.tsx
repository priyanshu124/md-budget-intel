import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Maryland Budget Intel Tool | MBIT",
  description:
    "Interactive fiscal analysis of Maryland's FY2027 proposed budget: revenues, expenditures, federal exposure, structural trends, and legislative impacts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer
          style={{
            background: "#fff",
            borderTop: "1px solid var(--line)",
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p className="source-cite">
            Maryland Budget Intel Tool · FY2027 fiscal analysis
          </p>
          <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--text-mute)", letterSpacing: "0.05em", textAlign: "right" }}>
            Created by Aarushi Singh, Nadvi Haque, Priyanshu Gupta, and James Van Doorn
          </div>
        </footer>
      </body>
    </html>
  );
}
