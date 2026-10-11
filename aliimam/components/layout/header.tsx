"use client";

import Link from "next/link";

import { cn } from "@/lib/utils"; 

import { Button } from "@/components/ui/button";
 
export function Header() {
    

    return (
        <header className={"z-50 mx-auto w-full max-w-6xl border-dotted border-x-2 md:transition-all md:ease-out"} >
            <nav
                className={cn(
                    "flex h-14 w-full items-center justify-between px-2 md:h-12 md:transition-all md:ease-out",
                    
                )}

            >
                <div className="flex items-center gap-1">
                    <Button
                        size="sm"
                        render={<Link href={""} />}
                        nativeButton={false}
                    >
                        Works
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        render={<Link href={""} />}
                        nativeButton={false}
                    >
                        About
                    </Button>

                </div>
                <Link
                    href="/"
                    className="ml-2 font-medium flex items-center gap-2"
                    aria-label="Designali"
                >
                    Ali Imam
                </Link>

                <div className="hidden items-center gap-2 md:flex">
                    <Button size="sm" 
                    render={<Link target="_blank" href="https://cal.com/aliimam/30min" />}>
                        Let's Talk 
                    </Button>
                </div>

            </nav>
        </header>
    );
}