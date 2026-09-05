"use client";

import { cn } from "@/lib/utils";
import { GoogleMeet, Logo } from "@/components/logo";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const navLinks = [ 
    {
        label: "Showcase",
        href: "/showcase",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Pricing",
        href: "/#pricing",
    },
    {
        label: "Blogs",
        href: "/blogs",
    },
];

export function Header() {
    const scrolled = useScroll(10);

    return (
        <div className="fixed z-50 w-full px-3 top-3">
            <header
                className={cn("rounded-full bg-background/60 border-dashed drop-shadow-2xl backdrop-blur-md max-w-4xl mx-auto z-50 w-full border", {
                    " ":
                        scrolled,
                })}
            >
                <nav className="relative mx-auto flex h-14 w-full max-w-7xl items-center justify-between pr-1 pl-4">

                    {/* Logo */}
                    <a
                        className="rounded-md p-2"
                        href="/"
                    >
                        <Logo className="w-10 h-fit" />
                        
                    </a>

                    {/* Center Navigation */}
                    <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
                        {navLinks.map((link) => (
                            <Button key={link.label} size="sm" variant="ghost">
                                <a href={link.href}>{link.label}</a>
                            </Button>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="ml-auto flex items-center gap-2">
                        <Button render={<Link target="_blank" href={"https://cal.com/designali-com/designali"} />} size={"xl"} variant={"revert"}>
                            <GoogleMeet />
                            Book a call
                        </Button>
                    </div>

                </nav>
            </header>
        </div>
    );
}