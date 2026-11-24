"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { CldImage } from "next-cloudinary";

import { cn } from "@/lib/utils";

type BrandingGalleryProps = {
    items: { src: string; caption?: string }[];
    fallbackAlt: string;
    fit: "contain" | "cover";
};

/** Originals go up to 8000px, so the lightbox gets a resized copy. */
function lightboxUrl(src: string) {
    return src.replace("/upload/", "/upload/c_limit,w_2000,f_auto,q_auto/");
}

export function BrandingGallery({ items, fallbackAlt, fit }: BrandingGalleryProps) {
    return (
        <PhotoProvider>
            <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map(({ src, caption }) => (
                    <figure key={src} className="min-w-0 border border-dotted">
                        <PhotoView src={lightboxUrl(src)}>
                            <button
                                type="button"
                                aria-label={`View ${caption ?? fallbackAlt}`}
                                className={cn(
                                    "block aspect-square w-full cursor-zoom-in overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                    fit === "contain" && "bg-white"
                                )}
                            >
                                <CldImage
                                    src={src}
                                    alt={caption ?? fallbackAlt}
                                    width={600}
                                    height={600}
                                    crop="limit"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 280px"
                                    loading="lazy"
                                    className={cn(
                                        "h-full w-full transition-[filter] duration-300 hover:saturate-0",
                                        fit === "contain" ? "object-contain" : "object-cover"
                                    )}
                                />
                            </button>
                        </PhotoView>
                        {caption && (
                            <figcaption className="truncate border-t border-dotted px-3 py-2 text-xs text-muted-foreground">
                                {caption}
                            </figcaption>
                        )}
                    </figure>
                ))}
            </div>
        </PhotoProvider>
    );
}
