import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false, // Keep optimization enabled
    formats: ['image/webp', 'image/avif'],
  },
  // Ensure static files are properly served
  trailingSlash: false,
};

export default nextConfig;
