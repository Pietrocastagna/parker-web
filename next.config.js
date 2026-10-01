/** @type {import('next').NextConfig} */
const repo = 'parker-web';
const isGhPages = process.env.GITHUB_PAGES === '1';
const basePath = isGhPages ? `/${repo}` : '';

const nextConfig = {
  reactStrictMode: true,
  // NB: niente distDir custom — con output:'export' sposterebbe l'export fuori da `out/`,
  // che è la cartella pubblicata dal workflow GitHub Pages.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || basePath,
  },
  ...(isGhPages
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

module.exports = nextConfig;
