import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.experiments = {
      ...config.experiments,
      syncWebAssembly: true,
    };

    return config;
  },
};

export default nextConfig;
