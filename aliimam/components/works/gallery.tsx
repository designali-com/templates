
"use client";

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

function MasonryGrid({
    images,
    columns = 4,
}: GalleryProps & { columns?: number }) {
    return (
        <PhotoProvider>
            <div
                className="columns-2 gap-2 space-y-2 md:columns-3 lg:columns-4 xl:columns-5 md:gap-2 md:space-y-2"
                style={
                    {
                        "--gallery-columns": columns,
                    } as React.CSSProperties
                }
            >
                {images.map((image) => (
                    <div
                        key={image.id ?? image.secure_url}
                        className="mb-2 break-inside-avoid md:mb-3"
                    >
                        <PhotoView src={image.secure_url}>
                            <CldImage
                                src={image.secure_url}
                                alt={image.secure_url}
                                width={image.width || 600}
                                height={image.height || 800}
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                loading="lazy"
                                className="block border h-auto w-full object-cover transition-all duration-300 hover:cursor-zoom-in hover:saturate-0"
                            />
                        </PhotoView>
                    </div>
                ))}
            </div>
        </PhotoProvider>
    );
}
 
export function GridsGallery({ images }: GalleryProps) {
    return <MasonryGrid images={images} />;
}
