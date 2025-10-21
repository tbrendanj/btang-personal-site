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
};

export default nextConfig;
