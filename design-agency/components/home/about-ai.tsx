"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"


export function AboutAI() {
  return (
    <div className="relative md:my-20 py-3 mx-auto max-w-xl w-full items-center flex flex-col">
          <div className="flex gap-3 border rounded-lg bg-background border-dashed p-10 md:shadow-2xl/10 text-muted-foreground flex-col w-full">
            <p>
              I’m a passionate in Design and Code based in
              Bokaro Steel City, India. I’m driven by a mission
              to transform ideas into captivating visual stories
              that inspire and connect. With over +1,000 projects
              and +10,000 design creatives completed.
            </p>
            <p>
              I am an Ambassador at <Link
                href={"https://21st.dev/community/aliimam"}
                target="_blank"
                className="hover:text-primary text-blue-500 underline"
              >
                21st.dev
              </Link>  and contribute to the Registry Directory in <Link
                href={"https://ui.shadcn.com/docs/directory"}
                target="_blank"
                className="hover:text-primary text-blue-500 underline"
              >
                shadcn/ui
              </Link>.
            </p>
          </div>

          <Button className="mt-10">
            <Link href="/works">
              See All My Works
            </Link>
          </Button>
        </div>
  )
}

