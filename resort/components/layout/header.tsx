"use client"

import { RotateButton } from "./rotate-btn"
import { SparaLogo } from "../logo"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const DARK_COLOR = "#363C1F"
const LIGHT_COLOR = "#ffffff"

export function Header() {
    const { scrollY } = useScroll()

    const [headerColor, setHeaderColor] = useState(LIGHT_COLOR)
    const [isMobile, setIsMobile] = useState(false)

    // Check Mobile View on Mount & Resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // Dynamic Transformations for Desktop vs Mobile
    // Mobile par top position aur move animation chota / alag hoga
    const y = useTransform(
        scrollY,
        [0, 200],
        isMobile ? ["0vh", "-12vh"] : ["0vh", "-24vh"]
    )

    // Scale down for Mobile vs Desktop
    // Mobile pe target scale (0.45) thoda bada rahega taaki text visible rahe
    const scale = useTransform(
        scrollY,
        [0, 200],
        isMobile ? [1, 0.45] : [1, 0.25]
    )

    useEffect(() => {
        let ticking = false

        const detectBackground = () => {
            if (ticking) return

            ticking = true

            requestAnimationFrame(() => {
                const x = window.innerWidth / 2

                // Header ke just neeche ka point
                const y = 80

                const elements = document.elementsFromPoint(x, y)

                let backgroundColor = "rgb(255, 255, 255)"

                for (const element of elements) {
                    if (
                        element.closest("header") ||
                        element.closest("[data-header-ignore]")
                    ) {
                        continue
                    }

                    const style = window.getComputedStyle(element)
                    const bg = style.backgroundColor

                    if (
                        bg &&
                        bg !== "transparent" &&
                        bg !== "rgba(0, 0, 0, 0)"
                    ) {
                        backgroundColor = bg
                        break
                    }
                }

                const rgb = backgroundColor.match(/\d+/g)

                if (rgb && rgb.length >= 3) {
                    const r = Number(rgb[0])
                    const g = Number(rgb[1])
                    const b = Number(rgb[2])

                    const brightness =
                        (r * 299 + g * 587 + b * 114) / 1000

                    const newColor =
                        brightness < 150
                            ? LIGHT_COLOR
                            : DARK_COLOR

                    setHeaderColor((prev) =>
                        prev === newColor ? prev : newColor
                    )
                }

                ticking = false
            })
        }

        detectBackground()

        window.addEventListener("scroll", detectBackground, { passive: true })
        window.addEventListener("resize", detectBackground)

        return () => {
            window.removeEventListener("scroll", detectBackground)
            window.removeEventListener("resize", detectBackground)
        }
    }, [])

    const isWhite = headerColor === LIGHT_COLOR

    return (
        <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
            <nav className="relative mx-auto flex w-full items-start justify-between px-4 py-3 md:px-8 md:py-4">

                {/* LEFT */}
                <div className="pointer-events-auto scale-90 md:scale-100 origin-top-left">
                    <RotateButton isLight={isWhite} />
                </div>

                {/* LEFT SCROLL LINE (DESKTOP ONLY) */}
                <motion.div
                    animate={{ color: headerColor }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="
                        pointer-events-none hidden md:flex
                        fixed left-12 mt-80 mb-20 top-0 bottom-0 z-40
                        flex-col items-center
                    "
                >
                    <motion.div
                        animate={{
                            backgroundColor: isWhite
                                ? "rgba(255,255,255,0.3)"
                                : "rgba(54,60,31,0.3)",
                        }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="w-px flex-1"
                    />

                    <motion.p
                        animate={{ color: headerColor }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="
                            py-6 font-dastin text-xs tracking-[0.25em]
                            [writing-mode:vertical-rl] rotate-180
                        "
                    >
                        SCROLL
                    </motion.p>
                </motion.div>

                <Link href="/">
                    <motion.div
                        style={{ y, scale }}
                        className="
            absolute
            left-1/2
            top-[14vh]
            md:top-[20vh]
            z-20
            flex
            -translate-x-1/2
            flex-col
            items-center
            origin-center
            whitespace-nowrap
            cursor-pointer
        "
                    >
                        <motion.div
                            animate={{
                                filter: isWhite
                                    ? "brightness(0) invert(1)"
                                    : "brightness(0)",
                            }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                            <SparaLogo
                                fill="primary"
                                className="h-14 md:h-34 w-auto"
                            />
                        </motion.div>

                        <motion.h1
                            animate={{ color: headerColor }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="
                mt-2 md:mt-3
                font-dastin
                text-base sm:text-xl md:text-5xl
                uppercase
                tracking-wider
            "
                        >
                            Boutique Resort
                        </motion.h1>
                    </motion.div>
                </Link>

                {/* RIGHT (DESKTOP VIEW) */}
                <motion.div
                    animate={{ color: headerColor }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="
                        pointer-events-auto
                        pt-2 md:pt-4 
                        hidden md:grid
                        text-right
                        grid items-center gap-1
                    "
                >
                    <Link href="/#services" className="uppercase text-3xl font-dastin">
                        View <br /> Services
                    </Link>

                    <Link target="_blank" href="https://live.ipms247.com/booking/book-rooms-satvikbychhabrafarm">Book a call</Link>
                </motion.div>

                {/* RIGHT (MOBILE VIEW CALL BUTTON) */}
                <motion.div
                    animate={{ color: headerColor }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="pointer-events-auto md:hidden text-right text-xs font-dastin uppercase pt-2"
                >
                    <Link target="_blank" href="https://live.ipms247.com/booking/book-rooms-satvikbychhabrafarm">Book Call</Link>
                </motion.div>

            </nav>
        </header>
    )
}