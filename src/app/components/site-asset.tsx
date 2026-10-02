'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SITE_BASE } from '../lib/urls';
import { MapCanvas } from './map-canvas';
import manifest from '../lib/asset-manifest.json';

type Tone = 'dark' | 'light' | 'mint' | 'warm';

const AVAILABLE = new Set<string>(manifest as string[]);

/**
 * Carica WebP da /assets/parkhub/ (naming V2).
 * Finché il file manca, mostra una scena "mappa" coerente col brand invece di un vuoto.
 */
export function AssetSlot({
  label,
  src,
  className = '',
  aspect = 'video',
  priority = false,
  tone = 'dark',
  fill = false,
}: {
  label: string;
  src?: string;
  className?: string;
  aspect?: 'video' | 'square' | 'wide' | 'portrait' | 'auto';
  priority?: boolean;
  tone?: Tone;
  /** riempie il parent (absolute inset-0) */
  fill?: boolean;
}) {
  const file =
    label.endsWith('.webp') || label.endsWith('.jpg') || label.endsWith('.png') ? label : `${label}.webp`;
  const known = Boolean(src) || AVAILABLE.has(file);
  const [failed, setFailed] = useState(!known);
  const ratio =
    aspect === 'square'
      ? 'aspect-square'
      : aspect === 'wide'
        ? 'aspect-[21/9]'
        : aspect === 'portrait'
          ? 'aspect-[4/5]'
          : aspect === 'auto'
            ? ''
            : 'aspect-video';

  const resolved = src || `${SITE_BASE}/assets/parkhub/${file}`;
  const base = fill ? 'absolute inset-0' : `relative ${ratio}`;

  if (failed) {
    const dark = tone === 'dark';
    const overlay =
      tone === 'dark'
        ? 'from-ink/70 via-ink/30 to-brand/20'
        : tone === 'mint'
          ? 'from-brand-mist/80 via-white/20 to-brand/20'
          : tone === 'warm'
            ? 'from-warm-paper/85 via-white/20 to-brand/15'
            : 'from-white/80 via-white/20 to-brand/15';
    return (
      <div
        className={`${base} overflow-hidden ${fill ? '' : 'rounded-card'} ${className}`}
        role="img"
        aria-label={label}
        data-asset={file}
      >
        <MapCanvas
          theme={dark ? 'dark' : 'light'}
          dense
          className="absolute inset-0 h-full w-full"
          pins={fill ? [] : [{ x: 150, y: 120, hot: true }, { x: 274, y: 92 }]}
          route={fill ? undefined : 'M64 236 L148 236 L148 128'}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${overlay}`} />
        <div className={`absolute inset-0 ${dark ? 'bg-[radial-gradient(circle_at_70%_30%,rgba(0,201,167,0.28),transparent_55%)]' : 'bg-[radial-gradient(circle_at_70%_30%,rgba(0,201,167,0.18),transparent_55%)]'}`} />
      </div>
    );
  }

  return (
    <div className={`${base} overflow-hidden ${fill ? '' : 'rounded-card'} bg-ink/5 ${className}`}>
      <Image
        src={resolved}
        alt=""
        fill
        priority={priority}
        unoptimized
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 60vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
