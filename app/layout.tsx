import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Maryland Budget Intelligence System | MBIS",
  description:
    "Interactive fiscal analysis of Maryland's FY2027 proposed budget — revenues, expenditures, federal exposure, structural trends, and legislative impacts.",
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
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: 5,
                background: "linear-gradient(135deg, var(--nxt-deep), var(--nxt-purple))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              🏛
            </div>
            <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--text-mute)", letterSpacing: "0.06em" }}>
              MARYLAND BUDGET INTELLIGENCE SYSTEM · MBIS
            </span>
          </div>
          <p className="source-cite">
            Maryland Budget Intelligence System · FY2027 fiscal analysis
          </p>
        </footer>
      </body>
    </html>
  );
}
