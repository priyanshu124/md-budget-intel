import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/deep-dive",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src https://deep-dive-stage-budget.netlify.app https://*.netlify.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
