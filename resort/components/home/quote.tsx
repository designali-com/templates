"use client"
import Image from "next/image"

export function QuoteSection() {


    return (
        <section

            className="relative bg-[#FEFBF6] z-10 h-screen overflow-hidden"
        >

            <div className="flex absolute z-10 top-20 h-full w-full flex-col">

                <h2 className="text-left px-10 md:pt-0 pt-20 max-w-5xl md:pr-80 mx-auto font-dastin text-4xl uppercase leading-none text-primary">
                    WE DIDN'T BUILD SPARA TO IMPRESS YOU ON ARRIVAL.
                    WE BUILT IT FOR THE MORNINGS AFTER - THE ONES
                    SPENT DOING NOTHING IN PARTICULAR, IN A PLACE THAT
                    ASKS NOTHING OF YOU EITHER.
                </h2>
            </div>
            <div className="absolute w-full h-full flex items-center gap-20">

                <Image
                    src="/images/img-3.png"
                    alt="hero background"
                    width={3000}
                    height={2000}
                    priority
                    sizes="100vw"
                    className="block object-end h-screen w-full object-bottom object-contain md:object-cover"
                />

            </div>

        </section>
    )
}