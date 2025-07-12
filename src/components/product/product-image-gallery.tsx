"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/data';

type ProductImageGalleryProps = {
  images: Product['images'];
};

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={cn(
              "relative aspect-square w-full overflow-hidden rounded-md transition-all duration-200 ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring",
              mainImage.src === image.src ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

    