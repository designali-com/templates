"use client"
import Image from "next/image"

export function RoomsSection() {
    return (
        <section className="relative bg-[#FEFBF6] w-full z-10 min-h-screen md:h-screen py-12 md:py-0 overflow-hidden">
            
            {/* MOBILE LAYOUT: Normal Flex-col | DESKTOP LAYOUT: Absolute Right Container */}
            <div className="flex flex-col-reverse md:absolute md:right-8 md:top-0 z-10 h-full w-full items-center md:items-end justify-center px-6 md:px-0">
                
                {/* Text Content */}
                <div className="w-full max-w-4xl md:pr-60 md:px-10 text-left mt-8 md:mt-20">
                    <h2 className="font-dastin text-2xl sm:text-3xl uppercase text-primary leading-tight">
                        WE DIDN'T BUILD SPARA TO IMPRESS YOU ON ARRIVAL.
                        WE BUILT IT FOR THE MORNINGS AFTER - THE ONES
                        SPENT DOING NOTHING IN PARTICULAR, IN A PLACE THAT
                        ASKS NOTHING OF YOU EITHER.
                    </h2>
                    
                    <p className="mt-6 md:mt-10 font-sans text-xs sm:text-sm uppercase text-primary/80 leading-relaxed">
                        Step into a space designed for slow mornings, sun-drenched afternoons, and
                        unforgettable evenings. The poolside at Spara Resort brings together the
                        beauty of open skies, refreshing waters, and a relaxed resort atmosphere,
                        creating the perfect setting to unwind and reconnect.
                    </p>
                </div>

                {/* Right/Top Image (room-2.jpg) */}
                <Image
                    src="/images/room-2.jpg"
                    alt="room image"
                    width={3000}
                    height={2000}
                    priority
                    className="h-48 sm:h-64 md:h-[400px] w-full md:w-auto object-cover md:object-contain rounded-xl md:rounded-none"
                />
            </div>

            {/* MOBILE LAYOUT: Inline/Flex | DESKTOP LAYOUT: Absolute Left Container */}
            <div className="relative md:absolute left-0 md:left-8 bottom-0 z-10 flex h-auto md:h-full w-full flex-col items-center md:items-start justify-center p-6 md:p-0">
                <Image
                    src="/images/cafe-2.png"
                    alt="cafe background"
                    width={3000}
                    height={2000}
                    priority
                    className="h-52 sm:h-72 md:h-[700px] w-auto p-4 md:p-6 bg-primary object-contain rounded-xl md:rounded-none"
                />
            </div>

            <div className="hidden md:flex absolute top-0 w-full h-full items-center gap-20 pointer-events-none">
                {/* Empty Center Container for spacing */}
            </div>

        </section>
    )
}