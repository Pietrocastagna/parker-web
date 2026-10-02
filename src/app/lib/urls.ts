export const PORTAL_URL = (
  process.env.NEXT_PUBLIC_PORTAL_URL || 'https://parker-portal.vercel.app'
).replace(/\/$/, '');

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://parker-api-jhmz.onrender.com/api'
).replace(/\/$/, '');

/** Prefisso sito (es. /parker-web su GitHub Pages). */
export const SITE_BASE = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

export function portalPath(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${PORTAL_URL}${p}`;
}

export function siteHref(path: string): string {
  // Per <Link> / Smart CTA usa path relativi (`/come-funziona`): Next aggiunge basePath.
  // siteHref resta per <a> nativi / asset fuori dal router.
  if (!path || path === '/') return `${SITE_BASE}/` || '/';
  const p = path.startsWith('/') ? path : `/${path}`;
  // Evita /parker-web/parker-web/... se già include il base
  if (SITE_BASE && (p === SITE_BASE || p.startsWith(`${SITE_BASE}/`))) {
    return p;
  }
  return `${SITE_BASE}${p}`;
}

/** Path interno per Next <Link> (senza basePath). */
export function appPath(path: string): string {
  if (!path || path === '/') return '/';
  const p = path.startsWith('/') ? path : `/${path}`;
  if (SITE_BASE && (p === SITE_BASE || p.startsWith(`${SITE_BASE}/`))) {
    return p === SITE_BASE ? '/' : p.slice(SITE_BASE.length) || '/';
  }
  return p;
}
