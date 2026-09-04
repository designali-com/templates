
import Image from "next/image"

import { Dithering, DotOrbit, Spiral } from "@paper-design/shaders-react"

export function DesignSection() {
    return (
        <div className="mt-40">
            <div className="flex flex-col items-center justify-center pt-10 pb-3">
                {/* Heading */}
                <div>
                    <h1 className="mx-auto mb-10 max-w-xs px-6 text-center text-xl md:max-w-full md:text-3xl">
                        Design, built to make your brand stand out.
                    </h1>
                </div>

                {/* Cards */}
                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
                    {/* Card 1 — Strategy */}
                    <div className="h-[430px] md:h-[460px] overflow-hidden rounded-lg border border-dashed">
                        <div className="relative h-full shadow-[inset_0_6px_6px_rgba(255,255,255,0.4),inset_0_-3px_6px_rgba(0,0,0,0.1),inset_0_-4px_8px_rgba(0,0,0,0.2)] rounded-md">
                            <Image
                                src="/stock/strategy.jpg"
                                alt="DesignAli Strategy"
                                width={300}
                                height={300}
                                className="absolute border left-1/2 top-39 z-10 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-background object-cover shadow-xl transition-all duration-500 hover:scale-105"
                            />

                            <DotOrbit
                                className="absolute bottom-0 h-full w-full rounded-md"
                                colors={["#00aaff"]}
                                colorBack="#00000000"
                                stepsPerColor={1}
                                size={1}
                                scale={1.5}
                                sizeRange={1}
                                spreading={1}
                                speed={0.5}
                            />

                            <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-b-sm bg-gradient-to-t from-white to-transparent p-8 pt-60 dark:from-black dark:to-transparent">
                                <div>
                                    <h2 className="text-2xl">Strategy</h2>

                                    <p className="text-sm pt-2 text-muted-foreground">
                                        We shape your brand strategy, positioning, and creative direction to give your business a clear and confident identity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 — Design */}
                    <div className="h-[430px] md:h-[460px] overflow-hidden rounded-lg border border-dashed">
                        <div className="relative h-full shadow-[inset_0_6px_6px_rgba(255,255,255,0.4),inset_0_-3px_6px_rgba(0,0,0,0.1),inset_0_-4px_8px_rgba(0,0,0,0.2)] rounded-md">
                            <Image
                                src="/stock/design.jpg"
                                alt="DesignAli Creative Design"
                                width={300}
                                height={300}
                                className="absolute border left-1/2 top-39 z-10 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-background object-cover shadow-xl transition-all duration-500 hover:scale-105"
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

                            <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-b-sm bg-gradient-to-t from-white to-transparent p-8 pt-60 dark:from-black dark:to-transparent">
                                <div>
                                    <h2 className="text-2xl">Design</h2>

                                    <p className="text-sm pt-2 text-muted-foreground">
                                        We create memorable brands, websites, and digital experiences that look distinctive, feel intuitive, and connect with your audience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 — Development */}
                    <div className="h-[430px] md:h-[460px] overflow-hidden rounded-lg border border-dashed">
                        <div className="relative h-full shadow-[inset_0_6px_6px_rgba(255,255,255,0.4),inset_0_-3px_6px_rgba(0,0,0,0.1),inset_0_-4px_8px_rgba(0,0,0,0.2)] rounded-md">
                            <Image
                                src="/stock/development.jpg"
                                alt="DesignAli Development"
                                width={300}
                                height={300}
                                className="absolute border left-1/2 top-39 z-10 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-background object-cover shadow-xl transition-all duration-500 hover:scale-105"
                            />

                            <Spiral
                                className="absolute bottom-0 h-full w-full rounded-md"
                                colorBack="#a0f02800"
                                colorFront="#00aaff"
                                density={0.5}
                                distortion={0}
                                strokeWidth={0.1}
                                strokeTaper={0}
                                strokeCap={0}
                                noise={1}
                                noiseFrequency={0.25}
                                softness={0}
                                speed={0.75}
                                scale={1.3}
                            />

                            <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-b-sm bg-gradient-to-t from-white to-transparent p-8 pt-60 dark:from-black dark:to-transparent">
                                <div>
                                    <h2 className="text-2xl">Development</h2>

                                    <p className="text-sm pt-2 text-muted-foreground">
                                        We turn designs into fast, responsive, and scalable digital experiences built to perform across every modern device.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full border mt-3 border-dashed h-full rounded-md lg:rounded-full">
                    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div className="border-b border-dashed py-10 md:border-r lg:border-b-0 lg:border-r">
                            <p className="text-center text-md">48 Hours Delivery</p>
                        </div>
                        <div className="border-b py-10 border-dashed lg:border-b-0 lg:border-r">
                            <p className="text-center text-md">Access to Design Portal</p>
                        </div>
                        <div className="border-b py-10 border-dashed md:border-r md:border-b-0 lg:border-r">
                            <p className="text-center text-md">Top-notch quality</p>
                        </div>
                        <div className="py-10">
                            <p className="text-center text-md">Unlimited Design Requests</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
