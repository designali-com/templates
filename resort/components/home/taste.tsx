"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"


const tasteItems = [
    {
        title: (
            <>
                A TASTE OF 
                SOMETHING SPECIAL
            </>
        ),
        image: "/images/cafe-1.jpg",
        description:
            "Discover a dining experience where good food, warm hospitality, and beautiful surroundings come together. From relaxed meals with family to leisurely evenings with friends, our restaurant offers a welcoming setting to savour every moment.",
    },
    {
        title: (
            <>
                YOUR SPACE
                TO SLOW DOWN
            </>
        ),
        image: "/images/bedroom-1.jpg",
        description:
            "Thoughtfully designed interiors create an atmosphere that feels calm and inviting, while the spacious setting gives you room to relax at your own pace. Whether you’re visiting for a weekend getaway, a family celebration, a wedding, or a longer stay, every room is designed with comfort and convenience in mind.",
    },
    {
        title: (
            <>
                BOUTIQUE CONCEPT
            </>
        ),
        image: "/images/pool-1.jpg",
        description:
            "A resort built for those who've stopped chasing the obvious — where the days are unhurried, the spaces are quiet, and nothing is designed to impress you at first glance.",
    },
]

export function TasteSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
    return (
        <section className="relative z-10 min-h-screen overflow-hidden bg-[#FEFBF6]">
            <div className="flex h-full flex-col items-center pt-[8%]">

                <div className="my-20 w-full px-6">
                    <Carousel  
                    className="w-full" 
      >
                        <CarouselContent>
                            {tasteItems.map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="flex relative w-full flex-col items-center">

                                        {/* Heading */}
                                        <h2 className="text-center font-dastin text-3xl md:text-7xl uppercase leading-none text-primary">
                                            {item.title}
                                        </h2>

                                        {/* Image */}
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="mx-auto my-20 block h-auto w-full max-w-xl object-contain"
                                        />

                                        {/* Description */}
                                        <div className="mx-auto max-w-3xl text-center text-primary/60">
                                            <p className="text-lg leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>

                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 gap-4">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </div>

            </div>
        </section>
    )
}