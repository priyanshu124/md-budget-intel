"use client";
/**
 * Citations footer — clickable per-source links for the map bundle.
 * Pulls from /data/county_bundle.json's _meta.sources.
 */
import { useEffect, useState } from "react";

type Source = {
  component: string;
  publisher?: string;
  citation?: string;
  endpoint?: string;
  vintage?: string;
  publication?: string;
  publication_url?: string;
  landing_page?: string;
  data_dictionary?: string;
  dataset?: string;
  datasets?: Array<{ id: string; name: string; url: string }>;
};

type Meta = {
  built_at: string;
  counties: number;
  sources: Source[];
  fields_with_no_live_source: Array<{ field: string; reason: string }>;
};

export default function CitationsFooter() {
  const [meta, setMeta] = useState<Meta | null>(null);

  useEffect(() => {
    fetch("/data/county_bundle.json")
      .then((r) => r.json())
      .then((j) => setMeta(j._meta))
      .catch(console.error);
  }, []);

  if (!meta) return null;

  return (
    <div
      style={{
        marginTop: 16,
        background: "#fff",
        border: "1px solid #e4d9e2",
        borderRadius: 10,
        padding: "18px 20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
        <h4 style={{ fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 800, color: "#4e134b", margin: 0 }}>
          Data Sources
        </h4>
        <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#9a8a9a" }}>
          Bundle built {new Date(meta.built_at).toLocaleString()} · {meta.counties} counties
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
        {meta.sources.map((s, i) => (
          <div key={i} style={{ padding: "10px 12px", background: "#fbf8fb", border: "1px solid #efe6ee", borderRadius: 6 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--nxt-purple)", letterSpacing: "0.1em", fontWeight: 700 }}>
              {s.component.toUpperCase()}
            </div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 13, fontWeight: 700, color: "#2a1028", marginTop: 3 }}>
              {s.publisher ?? s.dataset ?? "—"}
            </div>
            {s.vintage && (
              <div style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 11, color: "#666", marginTop: 2 }}>
                Vintage: {s.vintage}
              </div>
            )}
            {s.citation && (
              <div style={{ fontFamily: "Georgia, serif", fontSize: 11, color: "#4a4a4a", marginTop: 4, lineHeight: 1.45 }}>
                {s.citation}
              </div>
            )}
            {s.datasets && (
              <ul style={{ margin: "6px 0 0", paddingLeft: 16, fontFamily: "Georgia, serif", fontSize: 11, lineHeight: 1.55 }}>
                {s.datasets.map((d) => (
                  <li key={d.id}>
                    <a href={d.url} target="_blank" rel="noreferrer" style={{ color: "#4e134b", textDecoration: "underline" }}>
                      {d.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <div style={{ marginTop: 6, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {s.endpoint && (
                <a href={s.endpoint} target="_blank" rel="noreferrer" style={linkChip}>API endpoint</a>
              )}
              {s.publication_url && (
                <a href={s.publication_url} target="_blank" rel="noreferrer" style={linkChip}>Publication PDF</a>
              )}
              {s.landing_page && (
                <a href={s.landing_page} target="_blank" rel="noreferrer" style={linkChip}>Landing page</a>
              )}
              {s.data_dictionary && (
                <a href={s.data_dictionary} target="_blank" rel="noreferrer" style={linkChip}>Data dictionary</a>
              )}
            </div>
          </div>
        ))}
      </div>

      {meta.fields_with_no_live_source?.length > 0 && (
        <div style={{ marginTop: 12, padding: "10px 12px", background: "#fff8ed", border: "1px solid #f1d9a8", borderRadius: 6 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "#B45309", letterSpacing: "0.1em", fontWeight: 700 }}>
            FIELDS WITH NO MACHINE-READABLE SOURCE
          </div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 11, color: "#4a4a4a", marginTop: 4, lineHeight: 1.5 }}>
            We do not fabricate data. These metrics are published only as PDFs or JS-rendered dashboards, so they appear in
            the county info panel as a gap note rather than a value:
            <ul style={{ margin: "4px 0 0", paddingLeft: 18 }}>
              {meta.fields_with_no_live_source.map((g) => (
                <li key={g.field}>
                  <strong>{g.field}</strong> — {g.reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

const linkChip: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: 9,
  letterSpacing: "0.05em",
  color: "#4e134b",
  textDecoration: "none",
  padding: "3px 8px",
  background: "#fff",
  border: "1px solid #d9ceda",
  borderRadius: 999,
};
