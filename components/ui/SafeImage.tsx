"use client";

import { useState, ImgHTMLAttributes } from "react";

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackText?: string;
}

/**
 * SafeImage — shows a warm placeholder if the image hasn't been added yet.
 * Replace images in /public/images/ to see the real photo.
 */
export default function SafeImage({
  src,
  alt,
  fallbackText,
  className,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    const filename = src.split("/").pop() || src;
    return (
      <div
        className="img-placeholder w-full h-full absolute inset-0"
        style={{ borderRadius: "inherit" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span>{fallbackText || `Upload: ${filename}`}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
