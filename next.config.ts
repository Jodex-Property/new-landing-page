import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos/seed/*',
      },
      {
        protocol: 'https',
        hostname: 'assets.codepen.io'
      }
    ]
  }
};

export default nextConfig;
