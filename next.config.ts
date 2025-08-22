import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
   typescript: {
    ignoreBuildErrors: true, // agora funciona sem Turbopack
  },
};

export default nextConfig;
