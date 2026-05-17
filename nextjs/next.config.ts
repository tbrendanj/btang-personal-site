import type { NextConfig } from 'next';
const isDev = (process.env.STRAPI_URL || 'http://localhost:1337').startsWith(
  'http://localhost'
);

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    dangerouslyAllowLocalIP: isDev,
    remotePatterns: [
      {
        protocol: isDev ? 'http' : 'https',
        hostname: isDev
          ? 'localhost'
          : 'efficient-triumph-10407e414d.strapiapp.com',
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
