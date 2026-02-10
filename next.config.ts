import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/liangyulin-portfolio",
  assetPrefix: "/liangyulin-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
