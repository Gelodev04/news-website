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
      {
        protocol: "https",
        hostname: "*.gov", 
      },
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk"
      },
    ],
  },
};


export default nextConfig;
