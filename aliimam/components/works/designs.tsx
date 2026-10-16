"use client";

import { useEffect, useState } from "react";
import { DragElements } from "@/components/ui/image-drag";
import { CldImage } from "next-cloudinary";
import { Button } from "../ui/button";
import Link from "next/link";

type ImageType = {
    secure_url: string;
    id?: string;
    width?: number;
    height?: number;
};

type PositionedImage = ImageType & {
    x: number;
    y: number;
    rotate: number;
    size: number;
};

type DesignsProps = {
    images: ImageType[];
};

const positions = [
    { x: 5, y: 12 },
    { x: 20, y: 30 },
    { x: 78, y: 12 },
    { x: 86, y: 36 },
    { x: 7, y: 62 },
    { x: 23, y: 76 },
    { x: 72, y: 72 },
    { x: 88, y: 61 },
    { x: 42, y: 5 },
    { x: 56, y: 82 },
    { x: 2, y: 38 },
    { x: 91, y: 20 },
    { x: 32, y: 10 },
    { x: 65, y: 22 },
    { x: 38, y: 80 },
    { x: 61, y: 60 },
    { x: 14, y: 44 },
    { x: 81, y: 45 },
    { x: 30, y: 60 },
    { x: 68, y: 42 },
];

export function Designs({ images }: DesignsProps) {
    const [shuffledImages, setShuffledImages] = useState<
        PositionedImage[]
    >([]);

    useEffect(() => {
        const shuffled = [...images]
            .sort(() => Math.random() - 0.5)
            .slice(0, 20);

        const positioned = shuffled.map((image, index) => {
            const position = positions[index % positions.length];

            return {
                ...image,
                x: position.x + (Math.random() * 4 - 2),
                y: position.y + (Math.random() * 4 - 2),
                rotate: Math.random() * 24 - 12,
                size: Math.floor(Math.random() * 140) + 70,
            };
        });

        setShuffledImages(positioned);
    }, [images]);

    return (
        <section className="relative h-[650px] overflow-hidden border border-dotted md:h-[750px]">
            {/* Center Content */}
            <div className="pointer-events-none absolute space-y-6 inset-0 z-30 flex flex-col items-center justify-center px-6 text-center">
                <p className=" text-sm text-muted-foreground md:text-base">
                A glimpse into my creative world.
                </p>

                <h2 className="max-w-2xl text-4xl font-serif md:text-6xl lg:text-7xl">
                Selected Works.
                </h2> 
            </div>

            {/* Scattered Draggable Images */}
            <DragElements
                dragMomentum={true}
                className="absolute inset-0 z-10 h-full w-full overflow-hidden"
            >
                {shuffledImages.map((image, index) => (
                    <div
                        key={image.id ?? image.secure_url}
                        style={{
                            width: `clamp(70px, ${image.size}px, 210px)`,
                            left: `${image.x}%`,
                            top: `${image.y}%`,
                            transform: `rotate(${image.rotate}deg)`,
                            zIndex: index + 1,
                        }}
                        className="absolute cursor-grab overflow-hidden border bg-background/80 p-1 shadow-xl transition-shadow duration-300 hover:z-50 hover:shadow-2xl active:cursor-grabbing"
                    >
                        <CldImage
                            src={image.secure_url}
                            alt={`Design work ${index + 1}`}
                            width={image.width || 400}
                            height={image.height || 400}
                            draggable={false}
                            className="pointer-events-none block h-auto w-full object-contain"
                        />
                    </div>
                ))}
            </DragElements>
        </section>
    );
}