/** @format */

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cv-website', // TÊN REPO github
  assetPrefix: '/cv-website/',
};

export default nextConfig;
