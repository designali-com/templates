"use client";

import Image from "next/image";
import { DragElements } from "@/components/ui/image-drag";

const thingsILove = [
    { text: "designing interfaces ✳", x: "10%", y: "15%", rotate: -6 },
    { text: "turning ideas into code ✦", x: "65%", y: "10%", rotate: 4 },
    { text: "building cool stuff ✳", x: "35%", y: "45%", rotate: -2 },
    { text: "creative experiments ✴", x: "75%", y: "60%", rotate: 5 },
    { text: "pixel-perfect details ✿", x: "15%", y: "75%", rotate: -4 },
    { text: "motion & interactions ✦", x: "50%", y: "80%", rotate: 3 },
    { text: "exploring new tech ✳", x: "80%", y: "30%", rotate: -5 },
    { text: "coffee & creativity ☕", x: "5%", y: "45%", rotate: 2 },
    { text: "making the web better ✴", x: "45%", y: "25%", rotate: -3 },
];

const images = [
    {
        // Top-Left
        src: "/img/me/img1.jpg",
        alt: "Creative workspace",
        width: 220,
        x: "10%",
        y: "12%",
        rotate: -6,
    },
    {
        // Top-Center
        src: "/img/me/img9.jpg",
        alt: "Graphic Designer",
        width: 190,
        x: "42%",
        y: "8%",
        rotate: 3,
    },
    {
        // Top-Right
        src: "/img/me/img6.jpg",
        alt: "Design experiments",
        width: 190,
        x: "78%",
        y: "12%",
        rotate: -4,
    },
    {
        // Middle-Left
        src: "/img/me/img5.jpg",
        alt: "Design experiments",
        width: 190,
        x: "5%",
        y: "42%",
        rotate: 2,
    },
    {
        // Middle-Right
        src: "/img/me/img2.jpg",
        alt: "Interface design",
        width: 180,
        x: "80%",
        y: "45%",
        rotate: 5,
    },
    {
        // Bottom-Left
        src: "/img/me/img8.jpg",
        alt: "Founder of designali",
        width: 190,
        x: "8%",
        y: "75%",
        rotate: 4,
    },
    {
        // Bottom-Center Left
        src: "/img/me/img3.jpg",
        alt: "Creative inspiration",
        width: 240,
        x: "32%",
        y: "78%",
        rotate: -3,
    },
    {
        // Bottom-Center Right
        src: "/img/me/img4.jpg",
        alt: "Design experiments",
        width: 190,
        x: "62%",
        y: "75%",
        rotate: 7,
    },
    {
        // Bottom-Right Corner
        src: "/img/me/img7.jpg",
        alt: "Design Engineer",
        width: 190,
        x: "82%",
        y: "78%",
        rotate: -2,
    },
];

export const AboutMe = () => {
    return (
        <section className="relative overflow-hidden border-b-2 border-dotted">
            <div className="px-6 text-center pt-12 md:px-12">
                <p className="text-sm pb-2 text-muted-foreground">
                    A little bit about me.
                </p>
                <h2 className="mt-2 text-3xl font-serif md:text-5xl">
                    Things I have done.
                </h2>
                <p className="text-muted-foreground max-w-3xl py-8 mx-auto">
                    Design Engineer & Visual Designer with 7+ years of experience crafting end-to-end digital experiences across

                    product design, branding, and frontend development and founder of designali. Proven track record of building

                    design systems from the ground up, translating brand vision into cohesive digital products, and bridging the

                    gap between design and code. Experienced in creating scalable UI components, interactive web experiences, and

                    modern design solutions for SaaS, fintech, and creative technology products.
                </p>
            </div>

            <DragElements dragMomentum={true} className="relative min-h-[700px] w-full p-8">
                {thingsILove.map((item) => (
                    <div
                        key={item.text}
                        style={{
                            left: item.x,
                            top: item.y,
                            transform: `rotate(${item.rotate}deg)`,
                        }}
                        className="absolute flex cursor-grab items-center justify-center
                            whitespace-nowrap border-2 border-dotted
                            bg-muted px-5 py-3 text-xl active:cursor-grabbing
                            md:px-6 md:py-4 md:text-3xl"
                    >
                        {item.text}
                    </div>
                ))}

                {images.map((image) => (
                    <div
                        key={image.src}
                        style={{
                            width: image.width,
                            left: image.x,
                            top: image.y,
                            transform: `rotate(${image.rotate}deg)`,
                        }}
                        className="absolute shrink-0 cursor-grab overflow-hidden
                            rounded-sm border bg-background p-2 shadow-2xl
                            active:cursor-grabbing"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={750}
                            draggable={false}
                            className="pointer-events-none h-auto w-full object-cover"
                            sizes="(max-width: 768px) 45vw, 240px"
                        />
                    </div>
                ))}
            </DragElements>
        </section>
    );
};