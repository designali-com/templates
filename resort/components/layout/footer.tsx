"use client"

import Link from "next/link"
import Image from "next/image"
import { SparaLogo } from "../logo"

const links = [
    {
        title: "Features",
        href: "#",
    },
    {
        title: "Solution",
        href: "#",
    },
    {
        title: "Brands",
        href: "#",
    },
    {
        title: "Pricing",
        href: "#",
    },
    {
        title: "Design",
        href: "#",
    },
    {
        title: "AI",
        href: "#",
    },
]

export function Footer() {
    return (
        <div className="flex z-20 relative bg-[#FEFBF6] w-full items-center justify-center">
            <footer className="w-full border-y py-12">
               
                <div className="mx-auto flex justify-center flex-col max-w-5xl px-6">

                    <SparaLogo
                        fill="primary"
                        className="h-14 my-10 md:h-34 w-auto"
                    />

                    <div className="relative px-4 pt-28">

                        {/* Flower Icon */}
                        <div className="relative flex justify-center">
                            <Image
                                src="/flower.png"
                                alt=""
                                width={120}
                                height={120}
                                className="w-16 sm:w-20 md:w-28 object-contain md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-26"
                            />
                        </div>

                        {/* Phone & Email */}
                        <p className="text-center text-xs sm:text-sm md:text-base pt-4 md:pt-8 text-primary/80 max-w-sm md:max-w-none mx-auto">
                            Call:{" "}
                            <a
                                href="tel:01141012893"
                                className="hover:underline transition-opacity hover:opacity-70"
                            >
                                011-41012893
                            </a>
                            {" | "}
                            <a
                                href="tel:+919711861565"
                                className="hover:underline transition-opacity hover:opacity-70"
                            >
                                +91 97118 61565
                            </a>
                            {" | "}
                            Mail:{" "}
                            <a
                                href="mailto:mail@spara.in"
                                className="hover:underline transition-opacity hover:opacity-70"
                            >
                                mail@spara.in
                            </a>
                        </p>

                        {/* Address */}
                        <p className="text-center text-xs sm:text-sm md:text-base pt-4 text-primary/80 max-w-sm md:max-w-none mx-auto">
                            <a
                                href="https://maps.app.goo.gl/fTP7h78ocygfj3P69"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline transition-opacity hover:opacity-70"
                            >
                                G1, Pushpanjali Farms, Dwarka Expressway,
                                
                                Bijwasan, New Delhi, Delhi 110037
                            </a>
                        </p>

                        {/* Copyright */}
                        <p className="text-center text-[10px] sm:text-xs pt-4 md:pt-8 text-primary/60">
                            Spara Boutique Resort. ©2026 All rights reserved
                        </p>

                    </div>
                </div>
                
            </footer>
        </div>
    )
}
