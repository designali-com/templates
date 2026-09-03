import Image from "next/image"

import { AboutMe } from "./about-me"

import {
    Dithering,
    DotOrbit,
    GrainGradient,
    Spiral,
} from "@paper-design/shaders-react"

export function DesignSection() {
    return (
        <div className="mt-40">
            <div className="flex flex-col items-center justify-center pt-10 pb-3">
                {/* Heading */}
                <div>
                    <h1 className="mx-auto mb-10 max-w-xs px-6 text-center text-xl md:max-w-full md:text-3xl">
                        Design, the way it was always meant to be.
                    </h1>
                </div>

                {/* Cards */}
                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
                    {/* Card 1 — Subscribe */}
                    <div className="h-[410px] overflow-hidden rounded-lg border-dashed border">
                        <div className="relative h-full rounded-md">
                            <Image
                                src="/og.jpg"
                                alt="Your Image"
                                width={300}
                                height={300}
                                className="absolute left-1/2 top-36 z-10 h-[200px] w-[200px]
                -translate-x-1/2 -translate-y-1/2 rounded-md border-4
                bg-background object-cover shadow-xl transition-all
                duration-500 hover:scale-105"
                            />

                            <DotOrbit
                                className="absolute bottom-0 h-full w-full rounded-md"
                                colors={["#00aaff"]}
                                colorBack="#00000000"
                                stepsPerColor={1}
                                size={1}
                                scale={2}
                                sizeRange={1}
                                spreading={1}
                                speed={0.5}
                            />

                            <div
                                className="absolute bottom-0 left-1/2 w-full
                -translate-x-1/2 rounded-b-sm
                bg-gradient-to-t from-white to-transparent
                p-8 pt-32 dark:from-black dark:to-transparent"
                            >
                                <div>
                                    <h1 className="text-2xl">Subscribe</h1>

                                    <p className="text-sm text-muted-foreground">
                                        Subscribe to a plan, get access to Dashboard, and start
                                        listing your requests.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 — Request */}
                    <div className="h-[410px] overflow-hidden rounded-lg border-dashed border">
                        <div className="relative h-full rounded-md">
                            <Image
                                src="/og.jpg"
                                alt="Your Image"
                                width={300}
                                height={300}
                                className="absolute left-1/2 top-36 z-10 h-[200px] w-[200px]
                -translate-x-1/2 -translate-y-1/2 rounded-md border-4
                bg-background object-cover shadow-xl transition-all
                duration-500 hover:scale-105"
                            />
                            <Dithering
                                className="absolute bottom-0 h-full w-full rounded-md"
                                colorBack="#00000000"
                                colorFront="#00aaff"
                                shape="ripple"
                                type="8x8"
                                size={2}
                                speed={1}
                                offsetY={-0.15}
                            />

                            <div
                                className="absolute bottom-0 left-1/2 w-full
                -translate-x-1/2 rounded-b-sm
                bg-gradient-to-t from-white to-transparent
                p-8 pt-32 dark:from-black dark:to-transparent"
                            >
                                <div>
                                    <h1 className="text-2xl">Request</h1>

                                    <p className="text-sm text-muted-foreground">
                                        Request whatever you'd like, from branding, website,
                                        social media to any design.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 — Receive */}
                    <div className="h-[410px] overflow-hidden rounded-lg border-dashed border">
                        <div className="relative h-full rounded-md">
                            <Image
                                src="/og.jpg"
                                alt="Your Image"
                                width={300}
                                height={300}
                                className="absolute left-1/2 top-36 z-10 h-[200px] w-[200px]
                -translate-x-1/2 -translate-y-1/2 rounded-md border-4
                bg-background object-cover shadow-xl transition-all
                duration-500 hover:scale-105"
                            />

                            <Spiral
                                className="absolute bottom-0 h-full w-full rounded-md"
                                colorBack="#a0f02800"
                                colorFront="#00aaff"
                                density={0.5}
                                distortion={0}
                                strokeWidth={0.5}
                                strokeTaper={0}
                                strokeCap={0}
                                noise={1}
                                noiseFrequency={0.25}
                                softness={0}
                                speed={0.75}
                                scale={1.3}
                            />

                            <div
                                className="absolute bottom-0 left-1/2 w-full
                -translate-x-1/2 rounded-b-sm
                bg-gradient-to-t from-white to-transparent
                p-8 pt-32 dark:from-black dark:to-transparent"
                            >
                                <div>
                                    <h1 className="text-2xl">Receive</h1>

                                    <p className="text-sm text-muted-foreground">
                                        Receive your design within two business days on average.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}