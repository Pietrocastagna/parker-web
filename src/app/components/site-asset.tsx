'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SITE_BASE } from '../lib/urls';

/**
 * Carica `/assets/parkhub/{label}` se il WebP esiste;
 * altrimenti mostra uno slot gradient (fase A, finché non arrivano gli asset).
 */
export function AssetSlot({
  label,
  src,
  className = '',
  aspect = 'video',
  priority = false,
}: {
  /** Nome file o descrizione, es. hero-city-parkhub.webp */
  label: string;
  src?: string;
  className?: string;
  aspect?: 'video' | 'square' | 'wide';
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const ratio =
    aspect === 'square' ? 'aspect-square' : aspect === 'wide' ? 'aspect-[21/9]' : 'aspect-video';

  const file = label.endsWith('.webp') || label.endsWith('.jpg') || label.endsWith('.png')
    ? label
    : `${label}.webp`;
  const resolved = src || `${SITE_BASE}/assets/parkhub/${file}`;

  if (failed) {
    return (
      <div
        className={`relative overflow-hidden rounded-card bg-gradient-to-br from-ink via-ink-soft to-teal-dark ${ratio} ${className}`}
        role="img"
        aria-label={label}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,201,167,0.35),transparent_50%)]" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-medium text-white/50">{label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-card bg-ink/5 ${ratio} ${className}`}>
      <Image
        src={resolved}
        alt=""
        fill
        priority={priority}
        unoptimized
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
