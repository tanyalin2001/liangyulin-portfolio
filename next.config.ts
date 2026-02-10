/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/liangyulin-portfolio',
  assetPrefix: '/liangyulin-portfolio/',
};

module.exports = nextConfig;
