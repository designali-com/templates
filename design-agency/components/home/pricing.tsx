import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Pricing() {
    return (
        <section id="pricing" className="scroll-mt-40 flex h-screen md:h-[700px] relative w-full flex-col items-center px-3 justify-center md:pb-20">
            <div className="z-10 flex justify-center">
                <div className="grid max-w-5xl items-center gap-6 md:grid-cols-5 md:gap-0 md:px-12">
                    <div className="bg-background/50 flex h-min flex-col justify-between space-y-8 border-y p-6 backdrop-blur-lg md:col-span-2 md:my-2 md:rounded-l-md md:border md:border-r-0 lg:p-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-md font-thin">Free Forever</h2>
                                <span className="my-3 block text-3xl font-semibold md:text-7xl">
                                    $0
                                </span>
                                <p className="text-muted-foreground text-sm">
                                    Perfect for individual designers and engineers getting started
                                    with design.
                                </p>
                            </div>

                            <Button size={"xl"} variant={"outline"}>
                                <Link href="/blocks">Get Started</Link>
                            </Button>



                            <div>
                                <h3 className="text-muted-foreground mb-2 text-xs">Included</h3>
                                <ul className="list-outside space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <Check className="size-3 text-green-500" />
                                        Access to free all designs
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="size-3 text-green-500" />
                                        Community forum access
                                    </li>
                                </ul>

                                <p className="text-muted-foreground mt-3 text-xs">
                                    *Free plan features are limited but enough to get you started
                                    with your first designs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-background rounded-md border p-6 shadow-2xl/10 md:col-span-3 lg:p-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-xl font-thin">Business Plan</h2>
                                <div className="flex items-end gap-1">
                                    <span className="my-3 block text-7xl font-semibold tracking-tighter">
                                        $1995
                                    </span>
                                    <span className="mb-4 block text-xl font-thin">/ Month</span>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Designed for brands and teams managing multiple clients and
                                    high-volume projects.
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Button size={"xl"}>
                                    <Link href="https://cal.com/aliimam/30min" target="_blank">
                                        Join Today
                                    </Link>
                                </Button>
                                <Button variant={"outline"} size={"xl"}>
                                    <Link href="https://cal.com/aliimam/30min" target="_blank">
                                        Book a Call
                                    </Link>
                                </Button>
                            </div>



                            <div>
                                <h3 className="text-muted-foreground mb-2 text-xs font-light">
                                    What’s included:
                                </h3>
                                <ul className="list-outside space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <Check className="size-3 text-green-500" />I personally
                                        handle all design work
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="size-3 text-green-500" />
                                        Unlimited design revisions
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="size-3 text-green-500" />
                                        Daily updates on your requests
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="size-3 text-green-500" />
                                        One active request at a time for better quality
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="size-3 text-green-500" />
                                        Pause or cancel anytime
                                    </li>
                                </ul>

                                <p className="text-muted-foreground mt-3 text-xs">
                                    *Pro plan is ideal for professionals and brands who need full
                                    access to all design creatives of my work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'radial-gradient(ellipse at 50% 50%, var(--primary) 0%, var(--background) 70%)',
                    opacity: 0.7
                }}
            >
                <div
                    style={{
                        WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)',
                        backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        height: '100%',
                        left: '0',
                        maskImage: 'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 75%)',
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: '0',
                        width: '100%'
                    }}
                />
            </div>

        </section>
    )
}
