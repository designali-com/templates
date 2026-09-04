'use client'

import Link from "next/link"
import { CounterNumber } from "../ui/counter-number"

export function NumbersSection() {
    return (

        <div className="relative w-full max-w-xl mx-auto">
            <div className="relative w-full border border-dashed h-full rounded-md md:rounded-full">
                <div className="grid w-full grid-cols-1 md:grid-cols-2">
                    <div className="border-b border-dashed py-10 md:border-r lg:border-b-0 lg:border-r">
                        <div className="text-center flex flex-col text-md">
                            <CounterNumber
                                value={11}
                                suffix="M+"
                                size="xl"
                                className="text-primary tracking-tight font-bold"
                            />
                            <div>views in {" "} 
                                <Link target="_blank" href={"https://21st.dev/studio/designali-in"} 
                                className="underline hover:text-primary">21st.dev  
                                </Link> 
                            </div>

                        </div>
                    </div>
                    <div className="border-b py-10 border-dashed lg:border-b-0">
                    <div className="text-center flex flex-col text-md">
                            <CounterNumber
                                value={11}
                                suffix="M+"
                                size="xl"
                                className="text-primary tracking-tight font-bold"
                            />
                            <div>views in {" "} 
                                <Link target="_blank" href={"https://21st.dev/studio/designali-in"} 
                                className="underline hover:text-primary">21st.dev  
                                </Link> 
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
