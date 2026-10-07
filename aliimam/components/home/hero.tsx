"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <div className="relative w-full flex h-[600px] flex-col items-center justify-center overflow-hidden border-b-2 border-dotted">
            <div className="relative border-x-2 border-dotted text-center flex flex-col items-center justify-center max-w-6xl h-full w-full mx-auto z-10 text-white">
                <h1 className="max-w-100 md:max-w-full">Design without limits</h1>
                <p className="max-w-80 md:max-w-3xl">
                    I create digital experiences that connect and inspire. I build apps,
                    websites, brands, and products end-to-end.
                </p>
                <div className="flex gap-1 items-center">
                    <Button>
                        <Link href="https://aliimam.vercel.app/works">Check Old Site</Link>
                    </Button>
                    <Button>
                        <Link target="_blank" href="https://cal.com/aliimam/30min">
                            Book a Call
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
