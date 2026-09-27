"use client"

import Image from "next/image"

export function PlaceSection() {
    return (
        <section className="relative z-10 min-h-screen md:h-screen overflow-hidden bg-[#FEFBF6] flex flex-col justify-between py-10 md:py-0">

            {/* TOP TEXT */}
            <div className="relative md:absolute md:inset-x-0 top-32 z-20 px-4 mt-6 md:mt-0">
                <h3 className="font-dastin text-center text-5xl md:text-6xl lg:text-7xl uppercase leading-tight md:leading-none text-primary">
                    A PLACE BUILT <br className="hidden md:block" />
                    FOR STILLNESS
                </h3>
            </div>

            {/* IMAGE */}
            <div className="relative md:absolute md:inset-0 flex items-center justify-center my-6 md:my-0 px-6">
                <Image
                    src="/images/farm-3.jpg"
                    alt="A place built for stillness"
                    width={3000}
                    height={2000}
                    priority
                    className="h-[200px] sm:h-[260px] md:h-[300px] w-full max-w-sm sm:max-w-md md:max-w-xl object-cover rounded-lg md:rounded-none"
                />
            </div>

            {/* BOTTOM TEXT */}
            

        </section>
    )
}