import type { MetadataRoute } from 'next';

const SITE_URL = (
  process.env.NEXT_PUBLIC_CANONICAL_URL || 'https://pietrocastagna.github.io/parker-web'
).replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    '',
    '/come-funziona',
    '/prezzi',
    '/app',
    '/ranking',
    '/missioni',
    '/invita',
    '/about',
    '/faq',
    '/referral',
  ];
  return paths.map((p, i) => ({
    url: `${SITE_URL}${p || '/'}`,
    lastModified: now,
    changeFrequency: i === 0 ? 'weekly' : 'monthly',
    priority: i === 0 ? 1 : 0.7,
  }));
}
