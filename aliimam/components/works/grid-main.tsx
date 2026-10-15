
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Designs } from "./designs"
import { getAllWorkImages } from "@/lib/cloudinary"

export async function GridMain() {
    const images = await getAllWorkImages();
    return (
        <section
            className={cn(
                "mx-auto flex h-full w-full max-w-6xl flex-col justify-center"
            )}
        >
            <div className="grid gap-2 border-x-2 border-dotted p-2 md:grid-cols-2">
                <div className=" border border-dotted">
                    <Link href="/story/aliimam">
                        <img src="/img/hero-2.jpg"
                            alt="Ali Imam"
                            className="w-full hover:grayscale h-full object-contain"
                        />
                    </Link>
                </div>
                <div className=" border border-dotted">
                    <Link href="/story/designali">
                        <img src="/img/hero-1.jpg"
                            alt="Ali Imam"
                            className="w-full hover:grayscale h-full object-contain"
                        />
                    </Link>
                </div>
            </div>
            <div className="grid gap-2 border-x-2 border-dotted px-2">
                <Designs images={images} />
            </div> 
            <div className="grid gap-2 border-x-2 border-dotted p-2 md:grid-cols-2">

                <div className="h-80 flex items-center justify-center border border-dotted">Figma</div>
                <div className="h-80 flex items-center justify-center border border-dotted">Branding</div>
                <div className="h-80 flex items-center justify-center border border-dotted">Graphic Design</div>
                <div className="h-80 flex items-center justify-center border border-dotted">Videos</div>
            </div>
         
        </section >
    )
}