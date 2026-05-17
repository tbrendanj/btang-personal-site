import type { NextConfig } from 'next';
const isDev = (process.env.STRAPI_URL || 'http://localhost:1337').startsWith(
  'http://localhost'
);

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    dangerouslyAllowLocalIP: isDev,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: isDev ? 'http' : 'https',
        hostname: isDev
          ? 'localhost'
          : 'efficient-triumph-10407e414d.media.strapiapp.com',
        port: '1337',
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
