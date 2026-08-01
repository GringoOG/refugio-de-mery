import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75, 82, 85, 90, 100],
  },
  async redirects() {
    return [
      { source: "/restaurant", destination: "/food", permanent: true },
      { source: "/amenities", destination: "/tours", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
