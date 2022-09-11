const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV !== 'test',
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  env: {
    NEXT_PUBLIC_NOTION_API_TOKEN: process.env.NOTION_API_TOKEN,
    NEXT_PUBLIC_NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  },
  eslint: { dirs: ['src'], ignoreDuringBuilds: true },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withBundleAnalyzer(nextConfig);
