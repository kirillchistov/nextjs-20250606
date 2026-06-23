import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? '/nextjs-20250606' : '';

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: 'export',
        trailingSlash: true,
      }
    : {}),
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_DEMO_MODE: isGithubPages ? 'true' : 'false',
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
