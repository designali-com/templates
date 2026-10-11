"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <div className="relative w-full flex h-[600px] flex-col items-center justify-center overflow-hidden border-b-2 border-dotted">

            <div className="relative p-2 border-x-2 border-dotted flex flex-col items-center justify-end max-w-6xl h-full w-full mx-auto z-10">
                <div className="p-2 relative border-2 h-full border-dotted flex flex-col w-full">
                    <img
                        src="/ai.jpg"
                        alt="Ali Imam"
                        className="w-40 ring ring-primary/40 hover:cursor-progress p-1 absolute top-2 right-2 h-40 object-cover "
                    />

                    <h1 className="max-w-90 text-5xl mt-auto md:text-7xl mr-auto pb-2 md:max-w-3xl font-serif">
                        Hey! I'm Ali, a designer who brings trusted clarity into your web and brand experiences.
                    </h1>

                    <div className="flex items-start w-full gap-1">
                        <Button render={<Link target="_blank" href="https://cal.com/aliimam/30min" />}>
                            Start Project with Me
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
