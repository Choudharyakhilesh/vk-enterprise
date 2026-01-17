import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  reactStrictMode: false,
  images: {
    domains: [
      'backend.vastraexports.com',
    ],
  },
};

export default nextConfig;