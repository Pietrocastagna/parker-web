/** @type {import('next').NextConfig} */
const repo = 'parker-web';
const isGhPages = process.env.GITHUB_PAGES === '1';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGhPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};

module.exports = nextConfig;
