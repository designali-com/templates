
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Designs } from "./designs"
import { getAllWorkImages } from "@/lib/cloudinary"
import { Button } from "../ui/button";

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
                    <Link href="/story/designali">
                        <img src="/designs/designali.jpg"
                            alt="Ali Imam"
                            className="w-full hover:grayscale h-full object-contain"
                        />
                    </Link>
                </div>
                <div className=" border border-dotted">
                    <Link href="/story/aliimam">
                        <img src="/designs/aliimam.jpg"
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
                <div className="h-full flex flex-col items-center justify-center border border-dotted">
                    <div className="grid grid-cols-3 w-full p-2 gap-2">
                        <Button nativeButton={false} render={<Link target="_blank" href="https://designali.com/tools/gradient" />}
                            variant="outline" className="text-xl border h-30 flex items-center justify-center">
                            <h1 className="text-xl hover:text-primary h-30 flex items-center justify-center">
                                Gradient
                            </h1>
                        </Button>
                        <Button
                        nativeButton={false}
                            render={<Link target="_blank" href="https://designali.com/icons" />}
                            variant="outline" className="text-xl border h-30 flex items-center justify-center">
                            <h1 className="text-xl hover:text-primary h-30 flex items-center justify-center">
                                Icons
                            </h1> </Button>
                        <Button nativeButton={false} render={<Link target="_blank" href="https://designali.com/logos" />}
                            variant="outline" className="text-xl border h-30 flex items-center justify-center">
                            <h1 className="text-xl hover:text-primary h-30 flex items-center justify-center">
                                Logos
                            </h1> </Button>
                        <Button nativeButton={false} render={<Link target="_blank" href="https://designali.com/vectors" />}
                            variant="outline" className="text-xl border h-30 flex items-center justify-center">
                            <h1 className="text-xl hover:text-primary h-30 flex items-center justify-center">
                                Vectors
                            </h1> </Button>
                        <h1 className="text-xl bg-foreground text-background h-30 flex items-center justify-center">
                            Tools
                        </h1>
                        <Button nativeButton={false} render={<Link target="_blank" href="https://designali.com/patterns" />}
                            variant="outline" className="text-xl border h-30 flex items-center justify-center">
                            <h1 className="text-xl hover:text-primary h-30 flex items-center justify-center">
                                Patterns
                            </h1>
                        </Button>
                        <Button nativeButton={false} render={<Link target="_blank" href="https://dalim-fonts.vercel.app/" />}
                            variant="outline" className="text-xl border h-30 flex items-center justify-center">
                            <h1 className="text-xl hover:text-primary h-30 flex items-center justify-center">
                                Fonts
                            </h1>
                        </Button>
                        <Button nativeButton={false} render={<Link target="_blank" href="https://dalim-graphic.vercel.app/" />}
                            variant="outline" className="text-xl border h-30 flex items-center justify-center">
                            <h1 className="text-xl hover:text-primary h-30 flex items-center justify-center">
                                Graphics
                            </h1>
                        </Button>
                        <Button nativeButton={false} render={<Link target="_blank" href="https://dalim-visuals.vercel.app/" />}
                            variant="outline" className="text-xl border h-30 flex items-center justify-center">
                            <h1 className="text-xl hover:text-primary h-30 flex items-center justify-center">
                                Visuals
                            </h1>
                        </Button>
                    </div> 
                </div>
                <div className="h-full flex items-center bg-black justify-center border border-dotted">
                    <video autoPlay loop muted src="/videos/event.mp4" className="w-fit h-full object-contain" />
                </div> 
            </div> 
        </section >
    )
}