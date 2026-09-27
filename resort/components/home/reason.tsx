"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Separator } from "../ui/separator"

export function ReasonsSection() {
    const sectionRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["100%", "0%"]
    )

    const scale = useTransform(
        scrollYProgress,
        [0, 0.5],
        [0.75, 1]
    )

    return (
        <section
            ref={sectionRef}
            className="relative z-10 min-h-screen overflow-hidden bg-transparent"
        >
            <motion.div
                style={{ y, scale }}
                className="
                    absolute
                    left-1/2
                    top-0
                    z-10
                    h-full
                    w-full
                    -translate-x-1/2
                    rounded-t-full
                    bg-[#FEFBF6]
                "
            >
                <div className="flex h-full flex-col items-center pt-[2%]">

                    <div className="flex w-full justify-center">
                        <svg
                            viewBox="0 0 1200 500"
                            className="h-auto w-[75%]"
                        >
                            <defs>
                                <path
                                    id="reasonsArc"
                                    d="M 120 330 Q 600 -80 1080 330"
                                    fill="none"
                                />
                            </defs>

                            <text
                                fill="#363C1F"
                                fontSize="72"
                                fontFamily="Dastin, sans-serif"
                                textAnchor="middle"
                            >
                                <textPath
                                    href="#reasonsArc"
                                    startOffset="50%"
                                >
                                    THREE REASONS TO CHOOSE US
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8 md:gap-16">
                        {/* Left Text */}
                        <p className="w-80 text-right text-xl font-dastin text-sm uppercase tracking-[0.4em] text-primary">
                            Pushpanjali Farms
                        </p>

                        {/* Center Flower Image */}
                        <div className="flex shrink-0 items-center justify-center rounded-full border border-dashed border-primary/30 p-2">
                            <img
                                src="/flower.png"
                                alt="Flower"
                                className="h-16 w-16 object-contain"
                            />
                        </div>

                        {/* Right Text */}
                        <p className="w-80 text-center md:text-left text-xl font-dastin text-sm uppercase tracking-[0.4em] text-primary">
                            New Delhi
                        </p>
                    </div>
                    <Separator orientation="vertical" className={"h-40 bg-primary/30 my-4 mx-auto"}/>

                    <div className="text-center text-primary">
                        <p className="text-lg">
                            A place to live
                        </p>

                        <p className="text-lg">
                            — to return year after year
                        </p>
                    </div>
 

                </div>
            </motion.div>
        </section>
    )
}