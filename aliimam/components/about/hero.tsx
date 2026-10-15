"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroAbout() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden border-b-2 border-dotted">
            <div className="relative w-full gap-6 p-6 max-w-6xl h-full border-x-2 border-dotted flex flex-col items-center justify-center">
                <img
                    src="/ai.jpg"
                    alt="Ali Imam"
                    className="w-60 h-60 object-cover p-1 mx-auto ring-1 ring-primary/40 z-10"
                />
                <h1 className="max-w-90 text-5xl md:text-7xl mx-auto pb-2 md:max-w-3xl font-serif">
                    Hey! I'm Ali.
                </h1>

                <div className="">
                    <Button nativeButton={false} render={<Link target="_blank" href="https://cal.com/aliimam/30min" />}>
                        Start Project with Me
                    </Button>
                </div>
            </div>

        </div>
    )
}
