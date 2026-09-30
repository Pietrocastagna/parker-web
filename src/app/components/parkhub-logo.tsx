'use client';

import Image from 'next/image';
import { SITE_BASE } from '../lib/urls';

type ParkHubLogoProps = {
  variant?: 'dark' | 'light';
  height?: number;
  className?: string;
  priority?: boolean;
};

export function ParkHubLogo({
  variant = 'dark',
  height = 28,
  className,
  priority = false,
}: ParkHubLogoProps) {
  const src =
    variant === 'light'
      ? `${SITE_BASE}/brand/parkhub_wordmark_on_dark.png`
      : `${SITE_BASE}/brand/parkhub_wordmark_on_light.png`;
  const width = Math.round(height * 3.4);
  return (
    <Image
      src={src}
      alt="ParkHub"
      height={height}
      width={width}
      className={className}
      priority={priority}
      unoptimized
      style={{ height, width: 'auto' }}
    />
  );
}

export function ParkHubMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <Image
      src={`${SITE_BASE}/brand/parkhub_mark.png`}
      alt=""
      width={size}
      height={size}
      className={className}
      unoptimized
      style={{ width: size, height: size, borderRadius: size * 0.22 }}
    />
  );
}
