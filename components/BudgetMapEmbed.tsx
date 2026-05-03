"use client";
import { useRef, useState } from "react";

export default function BudgetMapEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const el = iframeRef.current?.parentElement;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid var(--line)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        background: "#f4f6f9",
      }}
    >
      {/* Fullscreen toggle */}
      <button
        onClick={toggleFullscreen}
        title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 10,
          width: 34,
          height: 34,
          background: "rgba(255,255,255,0.95)",
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 8,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--nxt-pink)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.95)")}
      >
        {isFullscreen ? "⤡" : "⛶"}
      </button>

      <iframe
        ref={iframeRef}
        src="/budget-map.html"
        width="100%"
        height="680"
        frameBorder="0"
        style={{ display: "block", border: "none" }}
        title="Maryland State Budget Map"
        allow="fullscreen"
      />
    </div>
  );
}
