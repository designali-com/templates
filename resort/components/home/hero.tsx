"use client"

import Image from "next/image"
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Button } from "../ui/button"
import Link from "next/link"

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

    const [imageHeight, setImageHeight] = useState(0)
    const [viewportHeight, setViewportHeight] = useState(0)
    const [textHidden, setTextHidden] = useState(false)
 
    const ZOOM_EXTRA_SCROLL = 100

    useEffect(() => {
        const updateSize = () => {
            setViewportHeight(window.innerHeight)

            if (imageRef.current) {
                setImageHeight(imageRef.current.offsetHeight)
            }
        }

        updateSize()

        window.addEventListener("resize", updateSize)

        return () => {
            window.removeEventListener("resize", updateSize)
        }
    }, [])

    const scrollDistance = Math.max(
        imageHeight - viewportHeight,
        0
    )

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    })

    const scrollSplit = scrollDistance > 0
        ? scrollDistance / (scrollDistance + ZOOM_EXTRA_SCROLL)
        : 0.3

    // Image Movement
    const y = useTransform(
        scrollYProgress,
        [0, scrollSplit],
        [0, -scrollDistance]
    )

    // Raw Scale Value (Scroll complete hone ke baad zoom)
    const rawScale = useTransform(
        scrollYProgress,
        [scrollSplit, 1],
        [1, 1.25] // Adjust zoom size here (1.25 = 25% zoom)
    )

    // Smooth Spring Transition for Slow Effect
    const scale = useSpring(rawScale, {
        stiffness: 40,
        damping: 20,
        restDelta: 0.001
    })

    // Text opacity
    const textOpacity = useTransform(
        scrollYProgress,
        [0, 0.25],
        [1, 0]
    )

    useMotionValueEvent(
        scrollYProgress,
        "change",
        (progress) => {
            if (progress >= 0.25) {
                setTextHidden(true)
            } else {
                setTextHidden(false)
            }
        }
    )

    const textDisplay = useTransform(
        scrollYProgress,
        (value) => (value >= 0.15 ? "none" : "flex")
    )

    return (
        <section
            ref={sectionRef}
            style={{
                height: `calc(100vh + ${scrollDistance + ZOOM_EXTRA_SCROLL}px)`,
            }}
            className="w-full"
        >
            <div className="fixed top-0 h-full w-full overflow-hidden">

                {/* Hero Text */}
                <motion.div
                    style={{
                        opacity: textOpacity,
                        display: textDisplay
                    }}
                    className="absolute inset-x-0 top-[35%] md:top-[45%] z-20 mx-auto max-w-5xl items-center justify-between gap-6 px-6 text-sm uppercase tracking-[0.5em] text-white md:text-xl pointer-events-none"
                >
                    <p className="whitespace-nowrap">
                        A place
                    </p>

                    <p className="whitespace-nowrap">
                        to return to
                    </p>
                </motion.div>

                {/* Moving & Slow Zooming Image */}
                <motion.div
                    ref={imageRef}
                    style={{ y, scale }}
                    className="absolute left-0 top-0 w-full origin-center"
                >
                    
                    <Image
                        src="/images/hero1.jpg"
                        alt="hero background"
                        width={3000}
                        height={2000}
                        priority
                        className="block md:h-auto h-screen object-cover w-full md:object-contain"
                    />
                    <div className="p-2 border-white/40 text-center absolute border inset-x-0 bottom-[12%] flex justify-center w-fit rounded-full border-dashed mx-auto mx-auto z-20 items-center ">
                        <Button render={<Link target="_blank" href={"https://live.ipms247.com/booking/book-rooms-satvikbychhabrafarm"} />} className=" hover:bg-primary/20 bg-primary/10 text-3xl font-dastin backdrop-blur-md shadow-sm h-40 rounded-full  items-center w-40">
                            View Our <br /> Gallery
                        </Button>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}