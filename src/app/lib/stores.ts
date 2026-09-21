import { SITE_BASE } from './urls';

/**
 * Link store pubblici.
 * Imposta in CI quando le schede sono live:
 *   NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/...
 *   NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=com.swappark.parker
 */
export const APP_STORE_URL = (process.env.NEXT_PUBLIC_APP_STORE_URL || '').trim();
export const PLAY_STORE_URL = (process.env.NEXT_PUBLIC_PLAY_STORE_URL || '').trim();
export const ANDROID_PACKAGE = 'com.swappark.parker';

export function storeHref(kind: 'ios' | 'android'): string {
  if (kind === 'ios') return APP_STORE_URL || `${SITE_BASE}/app/#scarica`;
  return PLAY_STORE_URL || `${SITE_BASE}/app/#scarica`;
}

export function storeIsLive(kind: 'ios' | 'android'): boolean {
  if (kind === 'ios') return Boolean(APP_STORE_URL);
  return Boolean(PLAY_STORE_URL);
}
