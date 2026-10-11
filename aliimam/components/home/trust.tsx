"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { CounterNumber } from "@/components/ui/counter-number"

export function TrustSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = sectionRef.current

        if (!element) return

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]

            if (!entry) return

            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.disconnect()
            }
        }, {
            threshold: 0.3,
        })

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative mx-auto w-full border-x-2 max-w-6xl border-t-0 border-dotted"
        >
            <h1 className="text-md text-primary border-b-2 border-dotted p-4">
                I'm a graphic designer, web developer, and founder of Designali.
            </h1>
            <div className="p-2">
                <div className="relative h-full w-full border-2 border-dotted">
                    <div className="grid w-full grid-cols-1 md:grid-cols-2">
                        <div className="border-b border-dotted py-10 md:border-r md:border-b-0 lg:border-r">
                            <div className="flex gap-2 items-center justify-center">
                                {isVisible && (
                                    <CounterNumber
                                        value={14.5}
                                        suffix="M+"
                                        decimalPlaces={1}
                                        className="text-primary text-5xl font-bold tracking-tight"
                                    />
                                )}
                                <div className="text-muted-foreground">
                                    <h1 className="text-sm font-medium">
                                        Components Views
                                    </h1>

                                    <Link
                                        target="_blank"
                                        href="https://21st.dev/@designali-in"
                                        className="underline text-sm hover:text-primary"
                                    >
                                        21st.dev
                                    </Link>
                                </div>
                            </div>
                        </div>



                        <div className="py-10">
                            <div className="flex gap-2 items-center justify-center">
                                {isVisible && (
                                    <CounterNumber
                                        value={1.3}
                                        decimalPlaces={1}
                                        suffix="M+"
                                        className="text-primary text-5xl font-bold tracking-tight"
                                    />
                                )}

                                <div className="text-muted-foreground">
                                    <h1 className="text-sm font-medium">
                                        Monthly Views
                                    </h1>

                                    <Link
                                        target="_blank"
                                        href="https://in.pinterest.com/designalicom/"
                                        className="underline text-sm hover:text-primary"
                                    >
                                        pinterest
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}