export const PORTAL_URL = (
  process.env.NEXT_PUBLIC_PORTAL_URL || 'https://parker-portal.vercel.app'
).replace(/\/$/, '');

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://parker-api-jhmz.onrender.com/api'
).replace(/\/$/, '');

export function portalPath(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${PORTAL_URL}${p}`;
}
