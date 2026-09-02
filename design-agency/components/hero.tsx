import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GemSmoke } from "@paper-design/shaders-react";

export function HeroSection() {
    return (
        <section className="flex flex-col h-screen w-full items-center justify-center">
            <GemSmoke
                className="absolute -z-10 h-full w-full"
                image="/logo-black.svg"
                colors={["#00aaff", "#00aaff", "#ffffff"]}
                colorBack="#00000000"
                colorInner="#ff000000"
                innerDistortion={0.5}
                outerDistortion={1}
                outerGlow={0}
                innerGlow={1}
                offset={1}
                size={0.3}
                speed={0.4}
                scale={1.5}
            />

            <div className="flex h-full w-full items-center justify-center">
                <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-3 px-4 text-center">

                     
                        <h1 className="relative mx-auto left-1/2 z-0 w-full mt-20 -translate-x-1/2 py-6 mix-blend-multiply text-center text-[8vw] leading-[0.8em] font-black tracking-tighter uppercase">
                            design se <br /> code tak
                        </h1>
                     

                    <p className="text-sm max-w-xl">
                        Where thoughtful design meets production-ready code. I design and build digital experiences that look great, feel intuitive, and work beautifully.


                    </p>

                    <div className="pt-6 flex flex-row flex-wrap items-center justify-center gap-3">
                        <Button className="rounded-full" size="xl" variant="secondary">
                            Book a Call
                        </Button>

                        <Button className="rounded-full" size="xl">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}