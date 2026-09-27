"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type RotateButtonProps = {
    isLight?: boolean
}

export const RotateButton = ({
    isLight = false,
}: RotateButtonProps) => {
    const text = "SPARA BOUTIQUE RESORT"

    const color = isLight ? "#ffffff" : "#363C1F"

    return (
        <motion.div
            animate={{
                borderColor: isLight
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(0,0,0,0.3)",
            }}
            transition={{ duration: 0.35 }}
            className="border border-dotted p-1 rounded-full"
        >
            <Button
                className="
                    relative
                    w-[100px]
                    h-[100px]
                    rounded-full
                    overflow-hidden
                    p-0
                    grid
                    place-content-center
                    bg-transparent
                    hover:bg-transparent
                "
            >
                <motion.p
                    animate={{
                        color,
                    }}
                    transition={{ duration: 0.35 }}
                    className="
                        absolute
                        inset-0
                        font-spara
                    "
                    style={{
                        animation:
                            "text-rotation 8s linear infinite",
                    }}
                >
                    {Array.from(text).map((char, i) => (
                        <span
                            key={i}
                            style={{
                                position: "absolute",
                                inset: "6px",
                                transform: `rotate(${16 * i}deg)`,
                                transformOrigin:
                                    "50% 50%",
                                userSelect: "none",
                                display: "inline-block",
                            }}
                        >
                            {char === " "
                                ? "\u00A0"
                                : char}
                        </span>
                    ))}
                </motion.p>

                <div
                    className="
                        relative
                        w-[40px]
                        h-[40px]
                        rounded-full
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                    "
                >
                    <Image
                        src="/flower.png"
                        alt="Flower"
                        width={80}
                        height={80}
                        priority
                        className="h-20 w-20 object-contain"
                    />
                </div>
            </Button>

            <style>{`
                @keyframes text-rotation {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </motion.div>
    )
}