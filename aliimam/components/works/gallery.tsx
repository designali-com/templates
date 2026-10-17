
"use client";

import { useEffect, useRef, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { CldImage } from "next-cloudinary";

type ImageType = {
    secure_url: string;
    id?: string;
    width?: number;
    height?: number;
};

export { CldImage };

type GalleryProps = {
    images: ImageType[];
};

const INITIAL_IMAGES = 20;
const LOAD_MORE_COUNT = 20;

function MasonryGrid({ images }: GalleryProps) {
    const [visibleCount, setVisibleCount] = useState(INITIAL_IMAGES);
    const loaderRef = useRef<HTMLDivElement>(null);

    const visibleImages = images.slice(0, visibleCount);
    const hasMore = visibleCount < images.length;

    useEffect(() => {
        const loader = loaderRef.current;

        if (!loader || !hasMore) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    observer.unobserve(loader);

                    setVisibleCount((current) =>
                        Math.min(current + LOAD_MORE_COUNT, images.length)
                    );
                }
            },
            {
                rootMargin: "300px",
            }
        );

        observer.observe(loader);

        return () => observer.disconnect();
    }, [hasMore, images.length, visibleCount]);

    return (
        <PhotoProvider>
            <div className="columns-2 gap-2 space-y-2 md:columns-3 md:gap-2 md:space-y-2 lg:columns-4 xl:columns-5">
                {visibleImages.map((image) => (
                    <div
                        key={image.id ?? image.secure_url}
                        className="mb-2 break-inside-avoid md:mb-3"
                    >
                        <PhotoView src={image.secure_url}>
                            <CldImage
                                src={image.secure_url}
                                alt="Creative design"
                                width={image.width || 600}
                                height={image.height || 800}
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                loading="lazy"
                                className="block h-auto w-full border object-cover transition-all duration-300 hover:cursor-zoom-in hover:saturate-0"
                            />
                        </PhotoView>
                    </div>
                ))}
            </div>

            {hasMore && (
                <div
                    ref={loaderRef}
                    className="flex min-h-20 items-center justify-center py-6"
                    aria-label="Loading more images"
                >
                    <span className="text-sm text-muted-foreground">
                        Loading more creatives...
                    </span>
                </div>
            )}
        </PhotoProvider>
    );
}

export function GridsGallery({ images }: GalleryProps) {
    return <MasonryGrid images={images} />;
}
