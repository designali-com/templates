'use client'

import Link from "next/link"
import { CounterNumber } from "../ui/counter-number"

export function NumbersSection() {
    return (

        <div className="relative w-full max-w-3xl py-10 md:py-40 mx-auto">
            <div className="relative w-full border border-dashed h-full rounded-md md:rounded-full">
                <div className="grid w-full grid-cols-1 md:grid-cols-2">
                    <div className="border-b border-dashed py-10 md:border-r md:border-b-0 lg:border-r">
                        <div className="text-center flex flex-col text-md">
                            <CounterNumber
                                value={11}
                                suffix="M+"
                                size="2xl"
                                className="text-primary tracking-tight font-bold"
                            />
                            <div className="pt-2 text-muted-foreground">views in {" "} 
                                <Link target="_blank" href={"https://21st.dev/studio/designali-in"} 
                                className="underline hover:text-primary">21st.dev  
                                </Link> 
                            </div>

                        </div>
                    </div>
                    <div className="py-10">
                    <div className="text-center flex flex-col text-md">
                            <CounterNumber
                                value={2000}
                                suffix="+"
                                size="2xl"
                                className="text-primary tracking-tight font-bold"
                            />
                            <div className="pt-2 text-muted-foreground">weekly downloads in {" "} 
                                <Link target="_blank" href={"hhttps://www.npmjs.com/package/@aliimam/logos"} 
                                className="underline hover:text-primary">npmjs 
                                </Link> 
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
