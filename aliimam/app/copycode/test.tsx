// Fonts: Inter, Instrument Serif — load them in your app (e.g. next/font/google) so they render the same.
// Images load from aliimam.designali.com. To optimize them, add the host(s) to images.remotePatterns in next.config and remove `unoptimized` — or copy the files into /public.
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CopiedBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex relative flex-col items-center justify-end w-full h-149.5 max-w-6xl p-2 font-[family-name:Inter,'Inter_Fallback'] text-foreground border-x-2 [border-right-style:dotted] [border-left-style:dotted] border-r-border border-l-border", className)}
    >
      <div
        className="flex relative inset-0 flex-col w-full h-145.5 p-2 border-2 border-dotted border-border"
      >
        <Image
          className="absolute top-2 right-2 size-40 p-1 ring ring-primary/40 object-cover hover:cursor-progress"
          width={160}
          height={160}
          unoptimized
          alt="Ali Imam"
          src="https://aliimam.designali.com/ai.jpg"
        />
        <h1
          className="max-w-3xl mt-76.5 mr-86 pb-2 font-[family-name:'Instrument_Serif','Instrument_Serif_Fallback'] text-7xl md:text-7xl md:max-w-3xl"
        >Hey! I'm Ali, a designer who brings trusted clarity into your web and brand experiences.</h1>
        <div className="flex items-start gap-1 w-full">
          <Button
            render={<Link href="https://cal.com/aliimam/30min" />}
            nativeButton={false}
            target="_blank"
          >Start Project with Me</Button>
        </div>
      </div>
    </div>
  )
}
