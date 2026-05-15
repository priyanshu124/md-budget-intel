import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/deep-dive",
        destination: "/deep-dive/budget-office/index.html",
      },
      {
        source: "/deep-dive/:path*",
        destination: "/deep-dive/:path*/index.html",
      },
    ];
  },
};

export default nextConfig;
