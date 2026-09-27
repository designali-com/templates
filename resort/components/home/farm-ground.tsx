"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const tabs = [
    {
        id: 0,
        label: "CAFE",
        image: "/images/cafe-5.png",
        text: (
            <>
                AWAY FROM THE NOISE OF THE CITY, EVERY PATH HERE
                LEADS TO STILLNESS - MAKING SPARA RESORT FEEL LESS
                LIKE A GETAWAY AND MORE LIKE A SECOND HOME.
            </>
        ),
    },
    {
        id: 1,
        label: "POOL",
        image: "/images/pool-2.png",
        text: (
            <>
                A PLACE DESIGNED TO SLOW YOU DOWN.
                TO LET THE LIGHT IN, THE NOISE OUT,
                AND GIVE YOU SPACE TO SIMPLY BE.
            </>
        ),
    },
    {
        id: 2,
        label: "Weddings, Social & Corp",
        image: "/images/wedding-1.png",
        text: (
            <>
                FROM INTIMATE CELEBRATIONS TO SEAMLESS CORPORATE RETREATS, 
                EVERY GATHERING IS CRAFTED WITH CARE, SURROUNDED BY NATURE 
                AND UNMATCHED HOSPITALITY.
            </>
        ),
    },
    {
        id: 3,
        label: "24X7 Concierge",
        image: "/images/farm-4.jpg",
        text: (
            <>
                AT YOUR SERVICE AROUND THE CLOCK. WHATEVER YOU NEED, 
                WHENEVER YOU NEED IT—TAILORED TO MAKE YOUR STAY 
                EFFORTLESS AND WORRY-FREE.
            </>
        ),
    },
    {
        id: 4,
        label: "Longevity Protocols (Launching Soon)",
        image: "/images/spa-1.jpg",
        text: (
            <>
                A HOLISTIC APPROACH TO WELLNESS. DISCOVER SCIENCE-BACKED 
                REJUVENATION AND HEALTH PROTOCOLS DESIGNED TO RENEW 
                YOUR MIND, BODY, AND VITALITY.
            </>
        ),
    },
];

export function FarmSection() {
    const [activeTab, setActiveTab] = useState(0)

    const active = tabs[activeTab]

    return (
        <section id="services" className="relative z-10 h-[200vh] w-full">

            {/* Fixed / Sticky Farm Scene */}
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#FEFBF6]">

                {/* Background Image */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={active.image}
                            alt={active.label}
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-t from-transparent to-[#FEFBF6]" />


                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Text */}
                <div className="absolute left-0 top-40 z-20 flex w-full px-6">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={activeTab}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -20,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            className="mx-auto max-w-3xl text-center font-dastin text-3xl md:text-4xl uppercase leading-none text-primary"
                        >
                            {active.text}
                        </motion.h2>
                        

                    </AnimatePresence>
                </div>

                {/* Vertical Tabs */}
                <div className="absolute bottom-[12.5%] right-[12.5%] z-30 flex flex-col items-end gap-2">
                    {tabs.map((tab, index) => {
                        const isActive = activeTab === index

                        return (
                            <button
                                key={tab.id} 
                                onClick={() => setActiveTab(index)}
                                className="group relative flex h-12 items-center"
                            >
                                {/* Label */}
                                <span
                                    className={`
                                        mr-4 text-sm md:text-xl uppercase
                                        tracking-[0.3em]
                                        transition-all duration-300
                                        ${isActive
                                            ? "translate-x-0 opacity-100 text-white"
                                            : "translate-x-2 opacity-80 text-white"
                                        }
                                    `}
                                >
                                    {tab.label}
                                </span>

                                {/* Vertical Line */}
                                <span
                                    className={`
                                        relative block h-10 w-[2px]
                                        transition-all duration-300
                                        ${isActive
                                            ? "bg-white"
                                            : "bg-white/40 group-hover:bg-white/70"
                                        }
                                    `}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="farmActiveTab"
                                            className="absolute inset-0 bg-white"
                                        />
                                    )}
                                </span>
                            </button>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}