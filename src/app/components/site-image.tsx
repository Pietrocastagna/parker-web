import type { ImgHTMLAttributes } from 'react';

/** img nativo: su GitHub Pages next/image non gestisce bene basePath + export. */
export function SiteImage({
  src,
  alt,
  className,
  priority,
  fill,
  sizes: _sizes,
  width,
  height,
  unoptimized: _u,
  ...rest
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height' | 'className'>) {
  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={['absolute inset-0 h-full w-full', className].filter(Boolean).join(' ')}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...rest}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...rest}
    />
  );
}
