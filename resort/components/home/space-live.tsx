"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function SpaceLiveSection() {
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
            className="relative z-10 h-screen w-full overflow-hidden bg-[#FEFBF6]"
        >
            <video
                src="/videos/flower-1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="
        absolute
        top-0
        left-0
        z-20
        w-[40%]
        mix-blend-darken
        h-auto
        object-contain
        object-left-top
        scale-x-[-1]
    "
            />

            <video
                src="/videos/flower-2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className=" absolute mix-blend-darken top-0 right-0 z-20 w-[40%] h-auto object-contain  "
            />

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
                    border
                    bg-[#FEFBF6] 
                "
            >
                <div className="flex h-full flex-col mt-80 items-center">
                    <div className="flex w-full relative justify-center">
                        <h3 className="font-spara text-5xl md:text-8xl text-center text-primary">
                            THE <br />
                            SPACE <br />
                            TO
                        </h3>

                        <h1 className="font-slight absolute -bottom-20 md:-bottom-30 text-5xl md:text-7xl -mt-6 -rotate-10 text-primary">
                            Experience
                        </h1>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}