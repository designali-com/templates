"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function HorizontalScrollSection() {


    const targetRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState(0)

    // Window resize par actual scroll length calculate karne ke liye
    useEffect(() => {
        const updateWidth = () => {
            // 3 slides = 3 * 100vw - 100vw (extra) = -200vw or pixels
            setContainerWidth(window.innerWidth * 2)
        }
        updateWidth()
        window.addEventListener("resize", updateWidth)
        return () => window.removeEventListener("resize", updateWidth)
    }, [])

    // Scroll Progress
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    })

    // Percentage ki jagah exact pixel transform use karna ziada reliable hota hai
    const x = useTransform(scrollYProgress, [0, 1], [0, -containerWidth])

    return (
        // Wrapper container length 300vh
        <section ref={targetRef} className="relative h-[300vh] bg-[#FFFCF9]">

            {/* Sticky screen container */}
            <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">

                {/* Horizontal Moving Content Wrapper */}
                <motion.div style={{ x }} className="flex h-full w-fit">

                    {/* Slide 1: Main Quote */}
                    <div className="relative flex h-screen w-screen shrink-0 flex-col space-y-12 md:space-y-20 items-center justify-center px-6">

                        <video
                            src="/videos/flower-1.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="
    absolute top-0 left-0 z-20 w-[80%] md:w-[40%] h-auto
    object-contain object-left-top scale-x-[-1] mix-blend-darken pointer-events-none
  "
                        />
                        <h2 className="max-w-2xl text-center text-primary font-dastin text-3xl md:text-5xl uppercase leading-tight md:leading-none">
                            SPARA RESORT IS A RETREAT BUILT FOR
                            THE FEW WHO VALUE PRIVACY,
                            STILLNESS AND SPACE THAT ASKS
                            NOTHING OF THEM
                        </h2>
                        <p className="text-black/60 text-center max-w-md text-sm md:text-base">
                            Come for the destination. Stay for the experience. Leave with memories worth returning for.
                        </p>
                    </div>

                    {/* Slide 2: Image 1 & Text */}
                    <div className="relative flex h-screen w-screen shrink-0 flex-col items-center justify-center  p-4 md:flex-row md:p-12">

                        {/* INDIA */}
                        <p className="absolute left-5 top-24 uppercase tracking-[0.5em] text-[10px] md:left-10 md:top-10 md:text-xs">
                            India
                        </p>

                        {/* HEADING */}
                        <div className="z-20 flex md:flex-col gap-3 pt-20 text-4xl font-dastin text-primary md:gap-3 md:pt-40 md:text-7xl">
                            <h1>QUIET</h1>
                            <h1 className="md:pl-20">CLOSE</h1>
                            <h1>RARE</h1>

                        </div>


                        {/* IMAGE */}
                        <div className="relative  mt-3 flex h-[38vh] w-full items-center justify-center md:-ml-14 md:mt-0 md:h-full md:w-auto">
                            <Image
                                src="/images/hall-1.jpg"
                                alt="hero background"
                                width={600}
                                height={1000}
                                className="
                h-full w-[58vw] max-w-[280px]
                rounded-2xl border p-1.5
                object-cover
                md:h-full md:w-auto md:max-w-xl md:p-2
            "
                            />
                        </div>




                        {/* DESCRIPTION */}
                        <div className=" max-w-md pb-40 items-end p-10 flex md:h-full">
                            <div className="flex flex-col gap-6">
                                <h1 className="font-dastin text-4xl text-primary">
                                    SPARA RESORT IS A RETREAT BUILT
                                </h1>

                                <p className="text-sm text-black/60">
                                    Set apart from the pace of the city, the resort brings together
                                    quiet architecture, natural materials and curated spaces
                                    — designed less to impress at first sight, and more to be lived
                                    in, slowly, over time.
                                </p>

                            </div>

                        </div>

                        <video
                        src="/videos/flower-3.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className=" absolute bottom-[-2%] -right-1/5 
            pointer-events-none  
            z-[-1]
            object-cover
            h-80 
        
            "
                    />
                    <video
                        src="/videos/flower-3.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className=" absolute bottom-[-2%] -left-1/3 
            pointer-events-none  
            z-[-1]
            object-cover
            h-80 
        
            "
                    />
                    </div>

                    


                    {/* Slide 3: Route Map */}
                    <div className="relative flex h-screen w-screen shrink-0 items-center justify-center p-6 md:p-12 overflow-hidden">
                        <video
                            src="/videos/flower-2.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute top-0 right-0 z-20 w-[50%] md:w-[40%] h-auto object-contain pointer-events-none"

                        />
                        <div className="relative flex flex-col h-full w-full items-center justify-center">
                            <h3 className="font-dastin text-center text-4xl md:text-7xl uppercase text-primary">
                                WHERE THE FEW <br /> COME TO
                            </h3>
                            <h1 className="font-slight text-4xl md:text-7xl -mt-2 md:-mt-6 -rotate-6 text-primary">
                                disappear
                            </h1>

                            <section className="relative w-full mt-40  text-primary">
                                {/* Center Logo */}
                                <div className="absolute left-1/2 -top-12 md:-top-20 z-20 -translate-x-1/2 text-center">
                                    <h1 className="font-spara text-3xl md:text-4xl leading-none tracking-[-0.06em] text-primary">
                                        SPARA
                                    </h1>
                                </div>

                                {/* Route Container */}
                                <div className="relative mx-auto h-32 w-full max-w-5xl">

                                    {/* Route SVG */}
                                    <svg
                                        viewBox="0 0 1900 280"
                                        className="absolute inset-0 h-full w-full"
                                        fill="none"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="
                                                M 30 80
                                                C 80 135, 170 125, 250 120
                                                C 360 110, 440 85, 525 90
                                                C 555 92, 560 95, 562 120
                                                C 565 155, 590 165, 650 160
                                                C 750 150, 800 100, 900 80
                                                C 1010 55, 1130 35, 1270 38
                                                C 1320 39, 1330 45, 1332 75
                                                C 1335 105, 1370 105, 1430 102
                                                C 1530 98, 1590 75, 1680 65
                                                C 1770 55, 1840 58, 1865 65
                                                C 1880 70, 1885 85, 1890 95
                                            "
                                            stroke="#363A20"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    {/* India Gate */}
                                    <div className="absolute left-[2%] top-0 text-center">
                                        <p className="text-xs md:text-sm uppercase tracking-[0.25em]">India Gate</p>
                                        <p className="mt-1 text-[10px] md:text-xs tracking-[0.2em]">(40 MIN)</p>
                                    </div>

                                    {/* Ambience Mall */}
                                    <div className="absolute left-[24%] top-20 md:top-[80px] text-center">
                                        <p className="text-xs md:text-sm uppercase tracking-[0.25em]">
                                            Ambience Mall, <br /> Gurugram
                                        </p>
                                        <p className="mt-1 text-[10px] md:text-xs tracking-[0.2em]">(10 MIN)</p>
                                    </div>

                                    {/* Yashobhoomi */}
                                    <div className="absolute left-[67%] -top-4 md:-top-[30px] text-center">
                                        <p className="text-xs md:text-sm uppercase tracking-[0.25em]">Yashobhoomi</p>
                                        <p className="mt-1 text-[10px] md:text-xs tracking-[0.2em]">(5 MIN)</p>
                                    </div>

                                    {/* IGI Airport */}
                                    <div className="absolute right-[2%] top-20 md:top-[40px] text-center">
                                        <p className="text-xs md:text-sm uppercase tracking-[0.25em]">IGI Airport</p>
                                        <p className="mt-1 text-[10px] md:text-xs tracking-[0.2em]">(15 MIN)</p>
                                    </div>

                                    {/* Flower on Route */}
                                    <Image
                                        src="/flower.png"
                                        alt=""
                                        width={120}
                                        height={120}
                                        className="
                                            pointer-events-none absolute left-[46%] top-0 md:-top-8 z-10
                                            w-16 md:w-24 object-contain
                                        "
                                    />

                                </div>
                            </section>
                        </div>
                    </div>
 
                </motion.div>

            </div>
        </section>
    )
}