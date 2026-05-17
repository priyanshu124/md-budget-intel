import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/deep-dive/:path*",
        destination: "https://md-budget-intel-deep-dive.netlify.app/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
