import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // example of external host:
      // {
      //   protocol: 'https',
      //   hostname: 'images.google.com',
      // }
    ],
  },
  env: {
    siteName: "B. Tang's Internet Corner",
    siteDescription: 'The personal website of B. Tang.',
  },
};

export default nextConfig;
