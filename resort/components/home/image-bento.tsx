"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function ArchitectureHero() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    // Width Control: 40% se start hoke 100% ho jayegi
    const width = useTransform(
        scrollYProgress,
        [0, 0.6],
        ["40%", "100%"]
    )

    // Height Control: 65% se start hoke 100% (full viewport height) ho jayegi
    const height = useTransform(
        scrollYProgress,
        [0, 0.6],
        ["35vh", "100vh"]
    )

    // Gap Control: 2rem se 0rem ho jayega
    const gap = useTransform(
        scrollYProgress,
        [0, 0.6],
        ["2rem", "0rem"]
    )

    // Border Radius Control (Optional): Choti image par rounded corners acche lagte hain
    const borderRadius = useTransform(
        scrollYProgress,
        [0, 0.6],
        ["16px", "0px"]
    )

    return (
        <section
            ref={containerRef}
            className="relative h-[250vh] bg-[#FEFBF6]"
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* ARCHITECTURE TEXT */}
                <div className="pointer-events-none absolute inset-x-0 top-40 md:top-20 z-30 text-center">
                    <h1 className="text-[20vw] font-dastin uppercase leading-none text-[#FEFBF6]">
                        UNWIND
                    </h1>
                </div>

                {/* TWO HALVES CONTAINER (Width & Height Controlled) */}
                <motion.div
                    style={{
                        width,
                        height,
                        gap,
                        borderRadius,
                    }}
                    className="relative flex items-stretch justify-center overflow-hidden transition-all duration-75"
                >
                    {/* LEFT HALF */}
                    <div className="relative h-full w-1/2 overflow-hidden">
                        <div className="absolute inset-y-0 left-0 w-[200%]">
                            <Image
                                src="/images/cafe-3.jpg"
                                alt="Architecture"
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT HALF */}
                    <div className="relative h-full w-1/2 overflow-hidden">
                        <div className="absolute inset-y-0 right-0 w-[200%]">
                            <Image
                                src="/images/cafe-3.jpg"
                                alt="Architecture"
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                 
            </div>
        </section>
    )
}