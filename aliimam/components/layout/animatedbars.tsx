"use client"

import { motion } from "motion/react"

const bars = [
    { height: 8, scale: [1, 1.5, 1], y: [0, -1, 0] },
    { height: 12, scale: [1, 0.7, 1], y: [0, 2, 0] },
    { height: 12, scale: [1, 0.5, 1], y: [0, 4, 0] },
]

export default function AnimatedBars() {
    return (
        <div className="flex w-auto items-center justify-center gap-[3px] py-3">
            {bars.map((bar, index) => (
                <motion.span
                    key={index}
                    className="bg-ali w-1 rounded-full"
                    style={{
                        height: bar.height,
                        opacity: 0.75 + index * 0.05,
                        transformOrigin: "center",
                    }}
                    animate={{
                        scaleY: bar.scale,
                        y: bar.y,
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                    }}
                />
            ))}
        </div>
    )
}