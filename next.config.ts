import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.com", 
      },
      {
        protocol: "https",
        hostname: "*.gov", 
      },
    ],
  },
};


export default nextConfig;
