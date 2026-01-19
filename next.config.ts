import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.vastraexports.com",
      },
    ],
  },
};

export default nextConfig;