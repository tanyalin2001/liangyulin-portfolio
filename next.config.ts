import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/liangyulin-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
